import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractService } from 'src/app/services/contract.service';
import { MetadataNftService } from 'src/app/services/metadata-nft.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  listNft: any
  baseTokenURi: any;
  collectionIndex: any;

  date = new Date();
  smartContract: any
  nameContract: any;
  constructor(
    public metadataNft: MetadataNftService,
    public route: ActivatedRoute,
    public contractService: ContractService) { }

  async ngOnInit(): Promise<void> {

    this.route.params.subscribe(async params => {
      console.warn("params", params)


      this.smartContract = params.smartContract;
      // console.warn("params", params.index)
      // console.warn("params", params.smartContract)

      // @dev connect to contract
      await this.contractService.reInitializating();

      this.baseTokenURi = await this.contractService
        .baseTokenURI(params.smartContract);


      this.nameContract = await this.contractService
        .name(params.smartContract);
      // this.collectionIndex = params.index

      // console.log(this.baseTokenURi)
      // // @dev get list nft
      this.getListActive(params.index)
    })


  }


  /// @dev get list nft
  async getListActive(index: string) {

    /// @dev get list nft
    let data = await this.contractService
      .getListActive(index)

    /// @dev map data
    this.listNft = await Promise.all(data.map(async x => {
      return {
        metadata_json: await this.metadataNft.getMetadata(this.baseTokenURi, x['token_id']),
        is_active: x['is_active'],
        owner: x['owner'],
        price: x['price'],
        token_id: x['token_id'],
      }
    }))

    console.log("this.listNft", this.listNft)

  }
}
