import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {

  constructor(
    private contractSrv: ContractService
  ) {
    this.contractSrv.reInitializating();
  }

  ngOnInit(): void {
  }

}
