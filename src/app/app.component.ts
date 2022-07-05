import { Component, OnInit } from '@angular/core';
import { ContractService } from './services/contract.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mind';

  constructor(public contractService: ContractService) {
  }

  ngOnInit() {
    this.contractService.connectAccount();
  }
}
