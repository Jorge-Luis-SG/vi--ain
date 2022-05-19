import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/app/services/contract.service';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';

@Component({
  selector: 'app-list-factory-stake-token',
  templateUrl: './list-factory-stake-token.component.html',
  styleUrls: ['./list-factory-stake-token.component.css']
})
export class ListFactoryStakeTokenComponent implements OnInit {

  public stakeList: any[] = [];

  constructor(
    public contractService: ContractService,
    public sweetalert2Service: Sweetalert2Service,
  ) { }

  ngOnInit(): void {
    this.loadStakeList();
  }

  async loadStakeList(){
    const stakeList: any[] = await this.contractService.stakeListTokenToken();
    // console.log({stakeList});

    this.stakeList = stakeList.map((row, index) => Object.assign({stakeId: index}, row) );
  }

  async updateStake(item: any){
    try {
      const result = await this.contractService.activeStakeToken(item.stakeId, !item.active);
      await this.loadStakeList();
      return this.sweetalert2Service.showSuccess('Transacción exitosa', 0);
    } catch (err) {
      console.log('Error on FactoryStaketokenComponent@updateStake', err);
    }
  }



}
