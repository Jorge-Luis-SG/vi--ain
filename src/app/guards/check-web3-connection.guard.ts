import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ContractService } from '../services/contract.service';

@Injectable({
  providedIn: 'root'
})
export class CheckWeb3ConnectionGuard implements CanActivate {

  constructor(
    private contractSrv: ContractService,
    private router: Router
  ){ }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.contractSrv.uToken){ return true; }
    // return false;
    return this.router.navigate(["/admin/dashboard"]);
  }
  
}
