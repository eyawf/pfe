import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserI } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem("admin").length>0){
      this.router.navigateByUrl('/admin');
    }else if(localStorage.getItem("user").length>0){
      this.router.navigateByUrl('/user');
    }else if(localStorage.getItem("partenaire").length>0){
      this.router.navigateByUrl('/partenaire');
    }
  }

  onRegister(form): void {
    form.value.etat=Number(form.value.etat);
    this.authService.register(form.value).subscribe(res => {
      this.router.navigateByUrl('/auth/login');
    });
  }

}
