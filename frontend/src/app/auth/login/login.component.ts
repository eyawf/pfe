import { Component, Input, OnInit } from '@angular/core';
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
  @Input()
  signInError :String;

  constructor(private authService: AuthService, private router: Router) { 

    
  }

  ngOnInit() {
    if(this.authService.getToken!=null){
      console.log(this.authService.getToken());
     
    }
  }
  loggedIn: Boolean;
  onLogin(form): void {
    
    this.authService.login(form.value).subscribe(res => {
      if(Number(res.dataUser.etat)==0){
        this.router.navigateByUrl('/admin');
      }else if(Number(res.dataUser.etat)==1){
        this.router.navigateByUrl('/partenaire');
      }else if(Number(res.dataUser.etat)==2){
        this.router.navigateByUrl('/user');
      }
    });

    this.signInError="Erreur d'authentification !";
    this.router.navigateByUrl('/auth/login');
  }

}
