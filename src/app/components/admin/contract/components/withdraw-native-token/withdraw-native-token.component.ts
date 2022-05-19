import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContractService } from 'src/app/services/contract.service';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-withdraw-native-token',
  templateUrl: './withdraw-native-token.component.html',
  styleUrls: ['./withdraw-native-token.component.css']
})
export class WithdrawNativeTokenComponent implements OnInit {

  public form: FormGroup;
  public submitted = false;
  public nativeToken = environment.chain.nativeCurrency.name;


  constructor(
    public fb: FormBuilder,
    public contractService: ContractService,
    public sweetalert2Service: Sweetalert2Service,
  ) {
    this.form = fb.group({
      value: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void { }

  // @dev - Set a new Buy limit
  async onSubmit() {
    this.submitted = true;
    const _data = this.form.value;
    console.warn("_data", _data)

    if (this.form.invalid) {
      return;
    }

    try {
      const withdraw = await this.contractService.withdrawMaticOwner(_data.value);
    } catch (err) {
      console.log('Error on WithdrawMaticOwnerComponent@withdrawMaticOwner', err);
    }
    //  this.adminServices.withdrawMaticOwner(_data.value);
  }


}
