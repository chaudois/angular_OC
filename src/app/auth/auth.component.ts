import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  /**
   *
   */
  invalidLogin: boolean;
  authService: AuthService;
  login: string;
  pwd: string;
  router:Router;
  constructor(authService: AuthService, router: Router) {
    this.authService = authService;
    this.invalidLogin = false;
    this.router=router;
    if(authService.isAuth)this.login=authService.username;
  }
  ngOnInit() {
  }
  onLogin() {
    this.authService.login(this.login, this.pwd).then((result) => {
      if (result) {
        this.invalidLogin = false;
        this.router.navigate(['blog'])
      } else {
        this.invalidLogin = true;
        this.pwd = "";

      }
    }
    )
  }
  onLogout() {
    this.authService.logout();
  }

}
