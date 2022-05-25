import { Pipe, PipeTransform } from '@angular/core';
import { ContractService } from '../services/contract.service';

@Pipe({
  name: 'erc20'
})
export class Erc20Pipe implements PipeTransform {

  constructor(
    private contractSrv: ContractService,
  ){}

  async transform(address: string, field: string): Promise<any> {
    console.log({address, field});
    return await this.contractSrv.calculateAndCallCustomABI({
      contractAddress: address,
      method: field,
      callType: 'call',
      optionals: null,
      urlABI: this.contractSrv.erc20ABI
    });
    // return await this.contractSrv.getMethod(address, field, this.contractSrv.erc20ABI);
  }

}
