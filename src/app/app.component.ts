import { Component, OnInit } from '@angular/core';
import { AbiService } from './services/abi.service';
import { ContractService } from './services/contract.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mind';

  constructor(
    public abiService: AbiService,
    public contractService: ContractService
  ) {
  }

  ngOnInit() {
    this.contractService.connectAccount();
    // this.parseAbi();
  }

  async parseAbi(){
    const abi = await this.abiService.parseABI(this.contractService.VIIANSCollectionABI);
    console.log('abi', abi);
  }

}
