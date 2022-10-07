import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContractService } from 'src/app/services/contract.service';
import { MediaFileService } from 'src/app/services/media-file.service';
import { PoolService } from 'src/app/services/pool.service';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';

@Component({
  selector: 'app-factory-pool-store',
  templateUrl: './factory-pool-store.component.html',
  styleUrls: ['./factory-pool-store.component.scss']
})
export class FactoryPoolStoreComponent implements OnInit {

  @ViewChild('closeModalBtn', {read: ElementRef}) closeModalBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('fileUploadInputImage') fileUploadInputImage!: ElementRef<HTMLInputElement>;

  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    // public contractSrv: ContractService,
    public poolSrv: PoolService,
    public sweetAlertSrv: Sweetalert2Service,
    public mediaFileSrv: MediaFileService,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm(){
    this.form = this.fb.group({
      name: ['', [ Validators.required ]],
      image: ['', [ Validators.required ]],
      description: ['', [ Validators.required ]],
      totalSupply: [1000, [ Validators.required, Validators.min(1) ]],
      status: [true, [ Validators.required ]],
    });
  }

  async selectImageFromBrowser(e: Event){
    // const files: FileList = this.fileUploadInputImage.nativeElement?.files;
    const files: any = this.fileUploadInputImage.nativeElement.files;
    const file = files[0];
    const toBase64 = await this.mediaFileSrv.getBase64(file);
    this.form.patchValue({ image: toBase64 });
    // console.log({ toBase64 });
  }

  async uploadImg(file){
    return await this.mediaFileSrv.uploadFile(file);
  }

  async onSubmit(formData: any){

    if(this.form.invalid){ return; }

    try {

      /** Cargar imagen al servidor */
      const image = await this.uploadImg(formData.image);
      // console.log({image});
      formData.image = image;

      const docId = await this.poolSrv.store(formData);

      this.form.reset();
      this.closeModalBtn.nativeElement.click();

      return this.sweetAlertSrv.showSuccess('Transacción exitosa', 0);

    } catch (err) {
      console.log('Error on FactoryPoolStoreComponent@onSubmit', err);
    }
  }

}
