import { Pipe, PipeTransform } from '@angular/core';
import { ContractService } from '../services/contract.service';

@Pipe({
  name: 'erc721'
})
export class Erc721Pipe implements PipeTransform {

  constructor(
    private contractSrv: ContractService,
  ){}

  async transform(address: string, field: string): Promise<any> {
    return await this.contractSrv.calculateAndCallCustomABI({
      contractAddress: address,
      method: field,
      callType: 'call',
      optionals: null,
      urlABI: this.contractSrv.erc721ABIf
    });
  }

}
