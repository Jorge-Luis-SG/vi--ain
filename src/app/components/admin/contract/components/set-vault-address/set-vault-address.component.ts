import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContractService } from 'src/app/services/contract.service';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';

@Component({
  selector: 'app-set-vault-address',
  templateUrl: './set-vault-address.component.html',
  styleUrls: ['./set-vault-address.component.css']
})
export class SetVaultAddressComponent implements OnInit {

  public form: FormGroup;
  submitted = false;

  constructor(
    public fb: FormBuilder,
    public contractService: ContractService,
    public sweetalert2Service: Sweetalert2Service,
  ) {
    this.form = fb.group({
      address: ["", Validators.required],
    });
  }

  ngOnInit(): void {
  }

  // @dev - Set address oraculo native
  async onSubmit() {
    this.submitted = true;
    const _data = this.form.value;
    console.warn("_data", _data.value)

    if (this.form.invalid) {
      return;
    }

    try {
      const result = await this.contractService.setVaultAddress(_data.value);
      return this.sweetalert2Service.showSuccess('Transacción exitosa', 0);
    } catch (err) {
      console.log('Error on SetValueAddressComponent@setVaultAddress', err);
    }
  }
}
