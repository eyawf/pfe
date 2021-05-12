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
  signInError :String="Erreur d'authentification !";
  AdminlocalStorage:Boolean;
  PartenairelocalStorage:Boolean;
  UserlocalStorage:Boolean;
  constructor(private authService: AuthService, private router: Router) { 

    
  }

  ngOnInit() {
    this.AdminlocalStorage=false;
    if(localStorage.getItem("admin").length>0){
      this.router.navigateByUrl('/admin');
    }else if(localStorage.getItem("user").length>0){
      this.router.navigateByUrl('/user');
    }else if(localStorage.getItem("partenaire").length>0){
      this.router.navigateByUrl('/partenaire');
    }
  }
  loggedIn: Boolean;

  onLogin(form): void {
   
    this.authService.login(form.value).subscribe(res => {
      
      if(Number(res.dataUser.etat)==0){
        localStorage.setItem('admin',res.dataUser.email);
        localStorage.setItem('name',res.dataUser.name);
        this.AdminlocalStorage=true;
        this.PartenairelocalStorage=false;
        this.UserlocalStorage=false;
        this.router.navigateByUrl('/admin');
      }else if(Number(res.dataUser.etat)==1){
        localStorage.setItem('partenaire','true');
        localStorage.setItem('name',res.dataUser.name);
        this.AdminlocalStorage=true;
        this.PartenairelocalStorage=false;
        this.UserlocalStorage=false;
        this.router.navigateByUrl('/partenaire');
      }else if(Number(res.dataUser.etat)==2){
        localStorage.setItem('user','true');
        localStorage.setItem('name',res.dataUser.name);
        this.AdminlocalStorage=true;
        this.PartenairelocalStorage=false;
        this.UserlocalStorage=false;
        this.router.navigateByUrl('/user');
      }else{
        this.signInError="Erreur d'authentification !";
        
      }
      
    });
      this.loggedIn=false;
  
  }

}
