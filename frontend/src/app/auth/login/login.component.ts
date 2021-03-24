import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import * as $ from "jquery";
import { UserI } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  loggedIn: Boolean;
  onLogin(form): void {
    
    this.authService.login(form.value).subscribe(res => {
      this.loggedIn=true;
      console.log(this.authService.logout);
      this.router.navigateByUrl('/profile');
    });

    this.loggedIn=false;
    console.log(this.loggedIn);
    
    this.router.navigateByUrl('/auth/login?error=login');
  }

}
