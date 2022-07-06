import { Component, OnInit } from '@angular/core';
import { AbiService } from './services/abi.service';
import { ContractService } from './services/contract.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mind';

  constructor(
    public abiService: AbiService,
    public contractService: ContractService) {
  }

  async ngOnInit() {
    this.contractService.connectAccount();
  }
}
