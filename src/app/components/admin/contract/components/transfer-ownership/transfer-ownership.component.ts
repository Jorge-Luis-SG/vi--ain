import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContractService } from 'src/app/services/contract.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-transfer-ownership',
  templateUrl: './transfer-ownership.component.html',
  styleUrls: ['./transfer-ownership.component.scss']
})
export class TransferOwnershipComponent implements OnInit {

  public form: FormGroup;
  submitted = false;

  constructor(
    public fb: FormBuilder,
    public contractService: ContractService) {
    this.form = fb.group({
      address: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    const data = this.form.value;
    console.log("data", data)

    if (this.form.invalid) {
      return;
    }

    console.log("data.account", data.account.trim())
    // this.contractService.transferOwnership(data.account.trim())
  }

}
