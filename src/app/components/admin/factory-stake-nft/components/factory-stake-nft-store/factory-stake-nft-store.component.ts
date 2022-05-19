import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContractService } from 'src/app/services/contract.service';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';

@Component({
  selector: 'app-factory-stake-nft-store',
  templateUrl: './factory-stake-nft-store.component.html',
  styleUrls: ['./factory-stake-nft-store.component.css']
})
export class FactoryStakeNftStoreComponent implements OnInit {

  @ViewChild('closeModalBtn', {read: ElementRef}) closeModalBtn!: ElementRef<HTMLButtonElement>;

  public form: FormGroup;
  submitted = false;

  constructor(
    public fb: FormBuilder,
    public contractService: ContractService,
    public sweetalert2Service: Sweetalert2Service,
  ) {
    this.form = fb.group({
      _nameAddressNft: ["", Validators.required],
      _addressNft: ["", Validators.required],
      _nameAddressTokenReward: ["", Validators.required],
      _addressTokenReward: ["", Validators.required],
      _rewardTotal: [0, Validators.required],
      _day: [0, Validators.required],
      active: [false, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  async registerStakeNFT() {

    this.submitted = true;
    const _data = this.form.value;

    let registerStakeNftData = {
      "_nameAddressNft": _data._nameAddressNft,
      "_addressNft": _data._addressNft,
      "_nameAddressTokenReward": _data._nameAddressTokenReward,
      "_addressTokenReward": _data._addressTokenReward,
      "_rewardTotal": _data._rewardTotal,
      "_day": _data._day,
      "active": _data.active,

    }

    console.warn("_data", registerStakeNftData)

    if (this.form.invalid) { return; }

    try {
      const result = await this.contractService.registerStakeNft( Object.values(registerStakeNftData) );
      
      this.form.reset();
      this.closeModalBtn.nativeElement.click();

      return this.sweetalert2Service.showSuccess('Transacción exitosa', 0);
      
    } catch (err) {
      console.log('Error on RegisterStakeComponent@registerStakeToken', err);
    }
  }
}
