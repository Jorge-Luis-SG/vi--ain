import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { toWei } from 'src/app/helpers/utils';
import { ContractService } from 'src/app/services/contract.service';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';

@Component({
  selector: 'app-withdraw-token-onwer',
  templateUrl: './withdraw-token-onwer.component.html',
  styleUrls: ['./withdraw-token-onwer.component.scss']
})
export class WithdrawTokenOnwerComponent implements OnInit {

  public form: FormGroup;
  public submitted = false;

  public pair: any = null;
  public pairList: any[] = [];

  public dataStatus$!: Observable<any>;

  constructor(
    public fb: FormBuilder,
    public contractService: ContractService,
    public sweetalert2Service: Sweetalert2Service,
  ) {
    this.form = fb.group({
      amount: [0, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    this.dataStatus$ = this.contractService.dataStatus$;
  }

  connectWallet(){ this.contractService.connectAccount(); }


  async loadPairs(){
    const pairList: any = await this.contractService.pairList();
    const toFormat: any[] = [];

    console.log({pairList});

    for (const [idx, entry] of Object.entries(pairList)) {
      const row: any = entry;
      toFormat.push( this.contractService.getTokenName(row, idx) );
    }

    const result = await Promise.all( toFormat );

    console.log('pairList', result);
    // console.log({result});
    
    // this.pairList = result.filter((row) => row.active)
    this.pairList = result.filter((row) => !row.isNative && row.active)

    console.log({result: this.pairList});
  }


  async selectPair(item){
    this.pair = item;
  }


  removePair(){ this.pair = null; }


  // @dev - Set a new Buy limit
  async onSubmit() {
    
    this.submitted = true;
    const _data = this.form.value;
    console.warn("_data", _data)

    if (this.form.invalid) {
      return;
    }

    try {
      const amount = toWei(_data.value, this.pair.tokenA.decimal);
      const withdraw = await this.contractService.withdrawTokenOnwer(this.pair.tokenA.contract, amount);
      return this.sweetalert2Service.showSuccess('Transacción exitosa', 0);
    } catch (err) {
      console.log('Error on WithdrawTokenOnwerComponent@withdrawTokenOnwer', err);
    }
  }
}
