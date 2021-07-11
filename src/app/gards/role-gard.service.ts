import { Injectable } from '@angular/core';
import { RoleServiceService } from '../main-Services';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGardService {

  constructor(
    private roleServiceService: RoleServiceService,
    private router: Router,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    const role = this.roleServiceService.get('role')
    if (!role) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
