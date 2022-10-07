import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MediaFileService } from 'src/app/services/media-file.service';
import { PoolService } from 'src/app/services/pool.service';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';

@Component({
  selector: 'app-factory-pool-update',
  templateUrl: './factory-pool-update.component.html',
  styleUrls: ['./factory-pool-update.component.scss']
})
export class FactoryPoolUpdateComponent implements OnInit, OnChanges {

  @ViewChild('closeModalBtn', {read: ElementRef}) closeModalBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('fileUploadInputImage') fileUploadInputImage!: ElementRef<HTMLInputElement>;

  @Input() pool: any;

  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public poolSrv: PoolService,
    public sweetAlertSrv: Sweetalert2Service,
    public mediaFileSrv: MediaFileService,
  ) { }

  ngOnInit(): void {
    this.buildForm()
  }

  get f(){ return this.form.controls; }

  buildForm(){
    this.form = this.fb.group({
      name: [this.pool?.name || '', [ Validators.required ]],
      image: this.pool?.image,
      description: [this.pool?.description || '', [ Validators.required ]],
      totalSupply: [this.pool?.totalSupply || 1000, [ Validators.required, Validators.min(1) ]],
      status: [this.pool?.status|| true, [ Validators.required ]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
      const { pool } = changes;

      if(pool.currentValue){
        console.log('pool', pool.currentValue);
        this.buildForm();
      }
  }

  async selectImageFromBrowser(e: Event){
    const ask = await this.sweetAlertSrv.askConfirm('Update Pool Image');

    if(!ask){
      this.fileUploadInputImage.nativeElement.value = '';
      return;
    }

    const files: any = this.fileUploadInputImage.nativeElement.files;
    const file = files[0];

    const toBase64 = await this.mediaFileSrv.getBase64(file);
    return await this.updateImg(toBase64);
    // this.form.patchValue({ image: toBase64 });
  }
  
  async uploadImg(file){
    return await this.mediaFileSrv.uploadFile(file);
  }

  async updateImg(newImg){
    try {

      // Eliminar imagen anterior
      await this.mediaFileSrv.removeFirebaseFileByUrl(this.f.image.value);

      // cargar nueva imagen al servidor y retornar URL
      const imgUrl = await this.uploadImg(newImg);

      // actualizar documento en la DB
      await this.poolSrv.update(this.pool._id, { image: imgUrl});

      // Actualizar valor en el formulario
      this.form.patchValue({ image: imgUrl });

      this.fileUploadInputImage.nativeElement.value = '';

      return this.sweetAlertSrv.showSuccess('Transacción exitosa', 0);

      return;
    } catch (err) {
      console.log('Error on FactoryPoolUpdateComponent@updateImage', err);
    }
  }

  async onSubmit(formData: any){

    if(this.form.invalid){ return; }
    try {
      delete formData.image;
      await this.poolSrv.update(this.pool._id, formData);
      return this.sweetAlertSrv.showSuccess('Transacción exitosa', 0);

    } catch (err) {
      console.log('Error on FactoryPoolUpdateComponent@onSubmit', err); 
    }
    
  }

}
