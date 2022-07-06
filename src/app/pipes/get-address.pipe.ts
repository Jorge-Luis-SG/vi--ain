import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getAddress'
})
export class GetAddressPipe implements PipeTransform {

  transform(address: any): unknown {
    if (!address) { return }
    return address.substring(0, 6) + '...' + address.substring(address.length - 4, address.length)
  }

}
