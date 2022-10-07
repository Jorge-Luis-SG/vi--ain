import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PoolService } from 'src/app/services/pool.service';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';

@Component({
  selector: 'app-list-factory-pool',
  templateUrl: './list-factory-pool.component.html',
  styleUrls: ['./list-factory-pool.component.scss']
})
export class ListFactoryPoolComponent implements OnInit {

  public poolList$!: Observable<any>;
  public toUpdate: any;

  constructor(
    // public contractService: ContractService,
    public poolSrv: PoolService,
    public sweetalert2Service: Sweetalert2Service,
  ){ }

  ngOnInit(): void {
    // this.poolList$ = this.poolSrv.getDynamic([]);
  }

  async updateStake(item: any){
    try {
      // const result = await this.contractService.activateStakedNft(item.stakeId, !item.active);
      return this.sweetalert2Service.showSuccess('Transacción exitosa', 0);
    } catch (err) {
      console.log('Error on FactoryStaketokenComponent@updateStake', err);
    }
  }

}
