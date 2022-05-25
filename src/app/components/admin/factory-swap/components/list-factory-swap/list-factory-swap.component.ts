import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-list-factory-swap',
  templateUrl: './list-factory-swap.component.html',
  styleUrls: ['./list-factory-swap.component.css']
})
export class ListFactorySwapComponent implements OnInit {

  @ViewChild('closeUpdateModalBtn', {read: ElementRef}) closeUpdateModalBtn!: ElementRef<HTMLButtonElement>;

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

  updatePair(item: any){  this.toUpdate = item; }

  onUpdateCall(){
    this.closeUpdateModalBtn.nativeElement.click();
    this.toUpdate = null;
  }

}
