import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractService } from 'src/app/services/contract.service';
import { MetadataNftService } from 'src/app/services/metadata-nft.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.css']
})
export class NftComponent implements OnInit {
  smartContract: any;
  baseTokenURi: any;
  nameContract: any;
  dataNft: any;
  index: any;
  tokenData: any;
  account: any;

  constructor(
    public metadataNft: MetadataNftService,
    public route: ActivatedRoute,
    private _location: Location,
    public contractService: ContractService) { }

  async ngOnInit(): Promise<void> {

    /// @dev connect to contract
    await this.contractService.reInitializating()

    this.route.params.subscribe(async params => {
      this.account = this.contractService.accounts[0];
      this.smartContract = params.smartContract;
      this.tokenData = JSON.parse(params.tokenData);

      this.tokenData.isOwner = this.account == this.tokenData.owner ? true : false;

    })
  }


  async buyNow() {
    console.log("buy now")
    console.log(this.tokenData)
    console.log(this.tokenData.collectionID, this.tokenData.listing_id, this.tokenData.price)
    try {
      await this.contractService
        .buyNow(this.tokenData.collectionID, this.tokenData.listing_id, this.tokenData.price)

      alert("success")


      this.backClicked()
    } catch (error) {
      alert("error")
    }
  }


  backClicked() {
    this._location.back();
  }



  /// @dev sell token
  Sell() { }


  /// @dev remove token
  Remove() { }


}
