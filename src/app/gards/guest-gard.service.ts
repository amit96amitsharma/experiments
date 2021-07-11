import { Injectable } from '@angular/core';
import { RoleServiceService } from '../main-Services';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GuestGardService {

  constructor(
    private roleServiceService: RoleServiceService,
    private router: Router,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    const role = this.roleServiceService.get('role')
    if (role) {
      this.router.navigate(['/','dashboard']);
      return false;
    }

    return true;
  }
}
