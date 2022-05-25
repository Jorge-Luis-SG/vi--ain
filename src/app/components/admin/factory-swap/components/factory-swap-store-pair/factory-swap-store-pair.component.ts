import { Component, ElementRef, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { toBasicPoint, toWei } from 'src/app/helpers/utils';
import { ContractService } from 'src/app/services/contract.service';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';

@Component({
  selector: 'app-factory-swap-store-pair',
  templateUrl: './factory-swap-store-pair.component.html',
  styleUrls: ['./factory-swap-store-pair.component.css']
})
export class FactorySwapStorePairComponent implements OnInit {

  @ViewChild('closeModalBtn', {read: ElementRef}) closeModalBtn!: ElementRef<HTMLButtonElement>;
  @Output() onStoreEvent = new Subject();

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
      decimalTokenA: 18,
      tokenB: [ '', [Validators.required]],
      decimalTokenB: 18,
      amountForTokens: [ '', [Validators.required]],
      fee: [ 0, [Validators.required, Validators.min(0)]],
      activeOracle: [ false, [Validators.required]],
      addressOracle: [ '0x000000000000000000000000000000000000dead', [Validators.required]],
      addressDecimalOracle: 18,
      isNative: [ false, [Validators.required]],
      active: true,
    });
  }

  get f(){ return this.form.controls; }

  async storePair(formData: any){

    if(this.form.invalid){ return; }

    try {

      /** Pedir confirmación */
      const ask = await this.sweetAlertSrv.askConfirm('Store pair?');
      if(!ask){ return; }

      await this.spinner.show();


      /**
       * Obtener información de los decimales de los tokens A y B
       */
      const [
        tokenADecimal,
        tokenBDecimal
      ] = await Promise.all([
        this.contractSrv.calculateAndCallCustomABI({
          contractAddress: formData.tokenA,
          method: 'decimals',
          params: null,
          callType: 'call',
          urlABI: this.contractSrv.erc20ABI
        }),
        this.contractSrv.calculateAndCallCustomABI({
          contractAddress: formData.tokenB,
          method: 'decimals',
          params: null,
          callType: 'call',
          urlABI: this.contractSrv.erc20ABI
        }),
      ])
      formData.decimalTokenA = Number(tokenADecimal);
      formData.decimalTokenB = Number(tokenBDecimal);


      /**
       * Si se ingresa y activa un oraculo
       * - Buscar cantidad de decimales del token del oraculo
       */
      if(formData.activeOracle){
        const oracleDecimals = await this.contractSrv.calculateAndCallCustomABI({
          contractAddress: formData.addressOracle,
          method: 'decimals',
          params: null,
          callType: 'call',
          urlABI: this.contractSrv.erc20ABI
        });
        formData.addressDecimalOracle = oracleDecimals;
      }

      const data = {
        isNative: formData.isNative,
        price: toWei(formData.price, 18),
        tokenA: formData.tokenA,
        decimalTokenA: formData.decimalTokenA,
        tokenB: formData.tokenB,
        decimalTokenB: formData.decimalTokenB,
        amountForTokens: formData.amountForTokens,
        fee: toBasicPoint(formData.fee),
        activeOracle: formData.activeOracle,
        addressOracle: formData.addressOracle,
        addressDecimalOracle: formData.addressDecimalOracle,
        active: formData.active
      }

      await this.contractSrv.registerPair( Object.values(data) );

      this.closeModalBtn.nativeElement.click();
      this.reloadForm();
      this.onStoreEvent.next();

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
