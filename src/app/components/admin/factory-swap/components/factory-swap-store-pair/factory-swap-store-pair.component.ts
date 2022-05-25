import { Component, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ContractService } from 'src/app/services/contract.service';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';

@Component({
  selector: 'app-factory-swap-store-pair',
  templateUrl: './factory-swap-store-pair.component.html',
  styleUrls: ['./factory-swap-store-pair.component.css']
})
export class FactorySwapStorePairComponent implements OnInit {

  @ViewChild('closeModalBtn', {read: ElementRef}) closeModalBtn!: ElementRef<HTMLButtonElement>;

  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contractSrv: ContractService,
    private spinner: NgxSpinnerService,
    private sweetAlertSrv: Sweetalert2Service,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.form = this.fb.group({
      price: [ '', [Validators.required, Validators.min(1)]],
      tokenA: [ '', [Validators.required]],
      decimalTokenA: [ 18, [Validators.required, Validators.min(1)]],
      tokenB: [ '', [Validators.required]],
      decimalTokenB: [ 18, [Validators.required, Validators.min(1)]],
      amountForTokens: [ '', [Validators.required]],
      fee: [ 0, [Validators.required]],
      activeOracle: [ false, [Validators.required]],
      addressOracle: [ '', [Validators.required]],
      addressDecimalOracle: [ 18, [Validators.required, Validators.min(1)]],
      isNative: [ false, [Validators.required]],
    });
  }

  get f(){ return this.form.controls; }

  async storePair(formData: any){

    if(this.form.invalid){ return; }

    try {
      const data = {
        isNative: formData.isNative,
        price: formData.price,
        tokenA: formData.tokenA,
        decimalTokenA: formData.decimalTokenA,
        tokenB: formData.tokenB,
        decimalTokenB: formData.decimalTokenB,
        amountForTokens: formData.amountForTokens,
        fee: formData.fee,
        activeOracle: formData.activeOracle,
        addressOracle: formData.addressOracle,
        addressDecimalOracle: formData.addressDecimalOracle,
        active: formData.active
      }

      await this.spinner.show();

      await this.contractSrv.registerPair( Object.values(data) );

      this.reloadForm();
      this.closeModalBtn.nativeElement.click();

      return this.sweetAlertSrv.showSuccess('Transacción exitosa', 0);
    } catch (err) {
      console.log('Error on FactorySwapUpdatePairComponent@updatePair', err);
    }finally{
      this.spinner.hide();
    }
  }


  reloadForm(){
    this.form.reset();
    this.buildForm();
  }
}
