import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  AdminlocalStorage:Boolean;
  PartenairelocalStorage:Boolean;
  UserlocalStorage:Boolean;
  name:String;
  constructor(private router: Router) { }

  ngOnInit() {
    if(!localStorage.getItem('user')){
      this.AdminlocalStorage=false;
       this.PartenairelocalStorage=false;
       this.UserlocalStorage=false;
     this.router.navigateByUrl('/auth/login');
   }else{
     this.name=localStorage.getItem('name');
     this.AdminlocalStorage=false;
       this.PartenairelocalStorage=false;
       this.UserlocalStorage=true;
   }
  }

}
