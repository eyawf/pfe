import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }
  AdminlocalStorage:Boolean;
  PartenairelocalStorage:Boolean;
  UserlocalStorage:Boolean;
  name:String;
  ngOnInit() {
    if(!localStorage.getItem('admin')){
       this.AdminlocalStorage=false;
        this.PartenairelocalStorage=false;
        this.UserlocalStorage=false;
      this.router.navigateByUrl('/auth/login');
    }else{
      this.name=localStorage.getItem('name');
      this.AdminlocalStorage=true;
        this.PartenairelocalStorage=false;
        this.UserlocalStorage=false;
    }
    console.log(this.AdminlocalStorage);
  }

}
