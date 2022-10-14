import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-mint2',
  templateUrl: './mint2.component.html',
  styleUrls: ['./mint2.component.scss']
})
export class Mint2Component implements OnInit {

  public valor = 0;
  public dataStatus$!: Observable<any>;

  constructor(
    private contractSrv: ContractService,
  ) { }

  ngOnInit(): void {
    this.dataStatus$ = this.contractSrv.dataStatus$;
  }

  connect(){ return this.contractSrv.connectAccount(); }

  sumar(){
    this.valor++;
    if(this.valor < 0){
      this.valor = 0;
    }
  }
  restar(){
    this.valor--;
    if(this.valor < 0){
      this.valor = 0;
    }
  }

  async mint(){
    console.log('mint');
  }
}
