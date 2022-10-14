import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { ContractService } from 'src/app/services/contract.service';
import { Sweetalert2stepsService } from 'src/app/services/sweetalert2steps.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mint2',
  templateUrl: './mint2.component.html',
  styleUrls: ['./mint2.component.scss']
})
export class Mint2Component implements OnInit {

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

      /** Validar si el valor es 0 */
      if(this.valor == 0){
        this.alertStepSrv.showBasicAlert('Please enter a value greater than 0', 'info');
        return;
      }

      await this.spinner.show();

      /** Validar Balance de usuario */
      const [ account ] = this.contractSrv.accounts;
      const balance = await this.contractSrv.calculateAndCallCustomABI({
        contractAddress: environment.nftCollectionContract,
        method: 'balanceOf',
        params: [account],
        callType: 'call',
        optionals: null,
        urlABI: this.contractSrv.VIIANSCollectionABI
      });

      /** Validar maximo de minteos permitidos */
      if(balance + this.valor > this.maxValue){
        this.alertStepSrv.showBasicAlert('You have reached the maximum mint allowed', 'info');
        return;
      }
      console.log('balance', balance);



      console.log('mint');
      return;

    } catch (err) {
      console.log('Error on Mint2Component.mint(): ', err);
      return;
    }finally{
      this.spinner.hide();
    }
  }
}
