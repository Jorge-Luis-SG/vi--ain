import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractService } from 'src/app/services/contract.service';
import { MetadataNftService } from 'src/app/services/metadata-nft.service';

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

  constructor(
    public metadataNft: MetadataNftService,
    public route: ActivatedRoute,
    public contractService: ContractService) { }

  async ngOnInit(): Promise<void> {

    this.route.params.subscribe(async params => {
      console.warn("params", params)


      this.smartContract = params.smartContract;
      this.tokenData = JSON.parse(params.tokenData);

      console.warn("params", this.tokenData)
    })
  }


  buyNow() {
    console.log("buy now")
    console.log(this.tokenData)
    console.log(this.smartContract)
    console.log(this.tokenData.collectionID, this.tokenData.listing_id, this.tokenData.price)
    this.contractService
      .buyNow(this.tokenData.collectionID, this.tokenData.listing_id, this.tokenData.price)
  }

}
