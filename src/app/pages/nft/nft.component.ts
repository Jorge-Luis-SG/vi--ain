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
      // // // console.warn("params", params.index)
      // // // console.warn("params", params.smartContract)

      // // @dev connect to contract
      // await this.contractService.reInitializating();

      // this.baseTokenURi = await this.contractService
      //   .baseTokenURI(params.smartContract);


      // this.nameContract = await this.contractService
      //   .name(params.smartContract);

      // // // console.log(this.baseTokenURi)
      // // // // @dev get list nft

      // this.dataNft = await this.metadataNft.getMetadata(this.baseTokenURi, this.token_id)
      // console.log(this.dataNft)
    })
  }




}
