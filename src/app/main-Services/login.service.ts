import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { RoleServiceService } from './role-service.service';
import { Role } from './role.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  headers = new HttpHeaders({ 'x-tenant-code': 'servana' });

  constructor(
    private auth: HttpClient,
    private role: RoleServiceService
  ) { }

  login(email: string, password: string, mobile?: string): Observable<Role> {
    return this.auth.post(environment.apiUrls.directory + '/users/signIn', { email, mobile, password }, { headers: this.headers }).pipe(map((data: Role) => {
      this.role.setItem('role', this.setRole(data))
      return data;
    }));
  }

  setRole(role: Role) {
    return role
  }
}
