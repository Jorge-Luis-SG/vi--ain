import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { ContractService } from 'src/app/services/contract.service';
import { Sweetalert2stepsService } from 'src/app/services/sweetalert2steps.service';
import { environment } from 'src/environments/environment';
import momentTimezone from 'moment-timezone';

momentTimezone().tz("America/Bogota");

@Component({
  selector: 'app-mint2',
  templateUrl: './mint2.component.html',
  styleUrls: ['./mint2.component.scss']
})
export class Mint2Component implements OnInit {

  public maxPerWallet = 2;
  public maxValue = 2;
  public valor = 0;
  public dataStatus$!: Observable<any>;

  constructor(
    private contractSrv: ContractService,
    private alertStepSrv: Sweetalert2stepsService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.dataStatus$ = this.contractSrv.dataStatus$;
  }

  connect(){ return this.contractSrv.connectAccount(); }

  sumar(){
    if(this.valor >= this.maxValue){ return; }

    this.valor++;
    if(this.valor < 0){ this.valor = 0; }
  }
  restar(){
    this.valor--;
    if(this.valor < 0){
      this.valor = 0;
    }
  }

  /**
   * Mintear
   * http://localhost:4200/mint-nft
   * @returns 
   */
  async mint(){
    try {

      const [ account ] = this.contractSrv.accounts;

      /** Validar si el valor es 0 */
      if(this.valor == 0){
        this.alertStepSrv.showBasicAlert('Please enter a value greater than 0', 'info');
        return;
      }

      await this.spinner.show();

      /** Validar WhiteList si lo amerita */
      const currentTime = momentTimezone();
      const start = momentTimezone.tz({ 
        year : 2022, month : 9, day : 14, hour : 0, minute : 0, second : 0, millisecond : 0
      }, "America/Bogota");
      const end = momentTimezone.tz({ 
        year : 2022, month : 9, day : 14, hour : 9, minute : 0, second : 0, millisecond : 0
      }, "America/Bogota");
      const isWhitelistTime = currentTime.isBetween(start, end);
      const isBeforeWhiteListTime = currentTime.isAfter(end);
      // console.log('isWhitelistTime', isWhitelistTime);

      /** Es tiempo de whiteList */
      if(isWhitelistTime){

        /** Validar si se encuentra dentro de la whitelist */
        const whiteList = await this.contractSrv.checkWalletIntoWhiteList(account);
        // console.log('whiteList', whiteList);
        if(!whiteList){
          this.alertStepSrv.showBasicAlert('You are not in the whitelist', 'info');
          return;
        }

      }
      
      /** Es tiempo despues de whiteList */
      if(!isBeforeWhiteListTime){
        this.alertStepSrv.showBasicAlert('collection not yet available', 'info');
        return;
      }

      /** Validar Balance de usuario */
      const balance = await this.contractSrv.calculateAndCallCustomABI({
        contractAddress: environment.nftCollectionContract,
        method: 'balanceOf',
        params: [account],
        callType: 'call',
        optionals: null,
        urlABI: this.contractSrv.VIIANSCollectionABI
      });

      /** Validar maximo de minteos permitidos */
      if(Number(balance) + this.valor > this.maxPerWallet){
        this.alertStepSrv.showBasicAlert('You have reached the maximum mint allowed', 'info');
        return;
      }

      const result: any = await this.alertStepSrv.showStepsGeneral({
        askMessage: 'Are you sure you want to mint ' + this.valor + ' NFTs?',
        contractParams: {method: 'mintVIIANNFT', params: [this.valor]}
      });

      // console.log('result', result);

      if(!result.status){
        this.alertStepSrv.showBasicAlert(result.data.message, 'error');
        return;

      }else{
        this.alertStepSrv.showAlertWithTxHash({transactionHash: result.data.transactionHash})
        .then(() => {
          this.valor = 0;
          window.location.reload();
        });
        return;
      }

    } catch (err) {
      console.log('Error on Mint2Component.mint(): ', err);
      return;
    }finally{
      this.spinner.hide();
    }
  }
}
