import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContractService } from 'src/app/services/contract.service';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';

@Component({
  selector: 'app-factory-stake-token-store',
  templateUrl: './factory-stake-token-store.component.html',
  styleUrls: ['./factory-stake-token-store.component.scss']
})
export class FactoryStakeTokenStoreComponent implements OnInit {

  @ViewChild('closeModalBtn', {read: ElementRef}) closeModalBtn!: ElementRef<HTMLButtonElement>;

  public form: FormGroup;
  submitted = false;

  constructor(
    public fb: FormBuilder,
    public contractService: ContractService,
    public sweetalert2Service: Sweetalert2Service,
  ) {
    this.form = fb.group({
      nameToken: ["", Validators.required],
      addressToken: ["", Validators.required],
      rewardRate: [0, [Validators.required, Validators.min(1)]],
      rewardPerMonth: [0, Validators.required],
      dayStaking: [0, [Validators.required, Validators.min(1)]],
      minStaked: [0, [Validators.required, Validators.min(1)]],
      active: [false, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  get f(){ return this.form.controls; }

  async onSubmit() {
    this.submitted = true;
    const _data = this.form.value;
    console.warn("_data", _data.nameToken, _data.addressToken, _data.rewardRate, _data.dayStaking, _data.minStaked, _data.active)

    if (this.form.invalid) { return; }

    try {
      const data = {
        nameAddressToken: _data.nameToken,
        addressToken: _data.addressToken,
        rewardRate: _data.rewardRate,
        rewardPerMonth: _data.rewardPerMonth,
        day: _data.dayStaking,
        minStaked: _data.minStaked,
        status: _data.active,
      };

      const result = await this.contractService.registerStakeToken( Object.values(data) );
      this.form.reset();
      this.closeModalBtn.nativeElement.click();
      return this.sweetalert2Service.showSuccess('Transacción exitosa', 0);
      
    } catch (err) {
      console.log('Error on RegisterStakeComponent@registerStakeToken', err);
    }
  }
}
