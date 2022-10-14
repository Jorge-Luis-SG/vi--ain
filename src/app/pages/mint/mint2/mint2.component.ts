import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContractService } from 'src/app/services/contract.service';
import { Sweetalert2stepsService } from 'src/app/services/sweetalert2steps.service';

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

  async mint(){
    try {

      /** Validar si el valor es 0 */
      if(this.valor == 0){
        this.alertStepSrv.showBasicAlert('Please enter a value greater than 0', 'info');
        return;
      }
      
      console.log('mint');

    } catch (err) {
      console.log('Error on Mint2Component.mint(): ', err);
      return;
    }
  }
}
