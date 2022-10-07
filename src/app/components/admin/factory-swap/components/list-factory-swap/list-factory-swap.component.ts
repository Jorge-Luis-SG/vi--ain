import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ContractService } from 'src/app/services/contract.service';
import { FactorySwapUpdatePairComponent } from '../factory-swap-update-pair/factory-swap-update-pair.component';

@Component({
  selector: 'app-list-factory-swap',
  templateUrl: './list-factory-swap.component.html',
  styleUrls: ['./list-factory-swap.component.scss']
})
export class ListFactorySwapComponent implements OnInit {

  // @ViewChild('closeUpdateModalBtn', {read: ElementRef}) closeUpdateModalBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild(FactorySwapUpdatePairComponent) updateForm!: FactorySwapUpdatePairComponent;

  public submitted = false;
  public accountStatus: any;

  public toUpdate: any;
  public pairList: any[] = [];

  constructor(
    public contractService: ContractService,
  ) { }

  ngOnInit(): void {
    this.loadPairList();
  }


  /**
   * Cargar listado de pairs registrados para hacer swap
   */
  async loadPairList(){
    const pairList: any = await this.contractService.pairList();
    const toFormat: any[] = [];


    for (const [idx, entry] of Object.entries(pairList)) {
      const row: any = entry;
      toFormat.push( this.contractService.getTokenName(row, idx) );
    }

    const result = await Promise.all( toFormat );
    this.pairList = result;
  }


  /**
   * Evento al registrar un nuevo pair refrescar listado
   */
  onStorePair(){ this.loadPairList(); }

  updatePair(item: any){
    // this.toUpdate = item;
    this.updateForm.onSelectPairToUpdate(item);
  }

  onUpdateCall(){
    // this.closeUpdateModalBtn.nativeElement.click();
    this.loadPairList();
    // this.toUpdate = null;
  }

}
