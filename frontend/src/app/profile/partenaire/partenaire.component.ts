import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})

export class PartenaireComponent implements OnInit {
  AdminlocalStorage:Boolean;
  PartenairelocalStorage:Boolean;
  UserlocalStorage:Boolean;
  name:String;
  constructor(private router: Router) { }


  ngOnInit() {
    if(!localStorage.getItem('partenaire')){
      this.AdminlocalStorage=false;
       this.PartenairelocalStorage=false;
       this.UserlocalStorage=false;
     this.router.navigateByUrl('/auth/login');
   }else{
     this.name=localStorage.getItem('name');
     this.AdminlocalStorage=false;
       this.PartenairelocalStorage=true;
       this.UserlocalStorage=false;
   }
  }

}
