import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/main-Services';
import { Route } from '@angular/compiler/src/core';
import { RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  email: string
  password: string

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(email: string, password: string) {
    this.loginService.login(email, password).subscribe(data => {
      this.router.navigate(['/', 'dashboard'])
    })
  }

}
