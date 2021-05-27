import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }
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
