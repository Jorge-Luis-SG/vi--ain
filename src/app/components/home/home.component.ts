// https://medium.com/upstate-interactive/how-to-connect-an-angular-application-to-a-smart-contract-using-web3js-f83689fb6909

import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  accountStatus: any;

  constructor(public contractService: ContractService) { }

  ngOnInit(): void {
    this.contractService.accountStatus$.subscribe(res => {
      console.log("accountStatus$", res)
      this.accountStatus = res;
    })
  }

  connectAccount() {
    console.log("connectAccount")
    this.contractService.connectAccount();
  }

  logout() {
    console.log("logout")
    this.contractService.logout();
  }


}
