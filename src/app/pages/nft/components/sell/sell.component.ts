import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  constructor(public contractService: ContractService) { }

  ngOnInit(): void {
  }


  /// @dev addListing -> agrega el token al marketplace
  sell() {

    //  this.contractService.addListing()
  }


}
