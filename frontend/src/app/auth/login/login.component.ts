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
  email:String;
  showPass:Number;
  constructor(private authService: AuthService, private router: Router) { 

    
  }

  ngOnInit() {
    (function ($) {
      "use strict";
  
   
  $('.resetPassword').hide();
  $('.loginPage').hide();
  
  $('.resetPassword').on('submit',function(){
      if(!validateEmail()){
          $('#email').css("border-color","") ;
           $('#email').css("color","") ;
          return false;
      }
  });
  
  
  $('.form1').on('submit',function(){
     if(!validateEmail() && passCheck()<5){
      $('#username').css("border-color","red") ;
      $('#username').css("color","red");
      $('#pass').css("border-color","red") ;
      $('#pass').css("color","red") ;
      $('#username').focus();
      return false;
     }else if(passCheck()<5){
      $('#pass').css("border-color","red") ;
      $('#pass').css("color","red") ;
      $('#pass').focus();
       return false;
     }else if(!validateEmail()){
      $('#username').css("border-color","red") ;
      $('#username').css("color","red");
      $('#username').focus();
      return false;
     }
    
      
  
  }); 
  
  
  $(document).ready(function(){
      $('.resetPassword').hide();
      $('.loginPage').hide();
      $("#btn").hide();
      
      $('#username').keyup(function(){
        console.log("email: "+validateEmail());
          if(validateEmail()){
              $('#username').css("border-color","#29A2DF") ;
              $('#username').css("color","") ;
              
          }else{
              $('#username').css("border-color","red") ;
              $('#username').css("color","red") ;
              
          }
          Valid();
      });
      
  
      $('#pass').keyup(function(){


          if(passCheck()<=2){
              $('#pass').css("border-color","red") ;
              $('#pass').css("color","red") ;
             
          }else if(passCheck()<=3 && passCheck()>2){
              $('#pass').css("border-color","#FBB724") ;
              $('#pass').css("color","#FBB724") ;
              
          }else if(passCheck()<=4 && passCheck()>3){
            $('#pass').css("border-color","#FBB724") ;
            $('#pass').css("color","#FBB724") ;}
          
            else{
              $('#pass').css("border-color","#29A2DF") ;
              $('#pass').css("color","") ;
              
          }
          
          Valid();
      });
      $('#email').keyup(function(){
          if(!validateEmail()){
              $('#email').css("border-color","red") ;
              $('#email').css("color","red") ;
          }else{
              $('#email').css("border-color","") ;
              $('#email').css("color","") ;
          }
         
      });
      var showPass = 0;
      $('.btn-show-pass').on('click', function(){
          if(showPass == 0) {
              $(this).next('input').attr('type','text');
              $(this).find('i').removeClass('fa-eye');
              $(this).find('i').addClass('fa-eye-slash');
              showPass = 1;
          }
          else {
              $(this).next('input').attr('type','password');
              $(this).find('i').removeClass('fa-eye-slash');
              $(this).find('i').addClass('fa-eye');
              showPass = 0;
          }
          
      });
  
      $('#oublie').click(function(){
          $('.validate-form').hide();
          $('.oublier').hide();
          $('.resetPassword').show();
          $('.loginPage').show();
      });
  
      
      $('#loginPage').click(function(){
          $('.validate-form').show();
          $('.oublier').show();
          $('.resetPassword').hide();
          $('.loginPage').hide();
      });
  });
  })(jQuery);
  function validateEmail(){
       if(isEmail()){
           return true;
       }else{
           return false;
       }
  
  }

  function isEmail():boolean{
    var email=$("#username").val();

    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if(reg.test(String(email))){
        return true;
    }else{
        return false;
    }

  }
  function passCheck() {
    var password=String($('#pass').val());
    let numberOfElements = 0;
    numberOfElements = /.*[a-z].*/.test(password) ? ++numberOfElements : numberOfElements;      // Lowercase letters
    numberOfElements = /.*[A-Z].*/.test(password) ? ++numberOfElements : numberOfElements;      // Uppercase letters
    numberOfElements = /.*[0-9].*/.test(password) ? ++numberOfElements : numberOfElements;      // Numbers
    numberOfElements = /[^a-zA-Z0-9]/.test(password) ? ++numberOfElements : numberOfElements;   // Special characters (inc. space)
    if(password.length>=5){numberOfElements+=1;} //Password Length
    return numberOfElements;
}
  
$('#formid').on('keyup keypress', function(e) {
  var keyCode = e.keyCode || e.which;
  if (keyCode === 13) { 
    e.preventDefault();
    return false;
  }
});

  function Valid(){
      if(validateEmail() && passCheck()>=5){
            
          $("#btn").show();

      }else{
          $("#btn").hide();
      }
  }
  
    this.AdminlocalStorage=false;
    if(localStorage.getItem("admin").length>0){
      this.router.navigateByUrl('/admin');
    }else if(localStorage.getItem("partenaire").length>0){
      this.router.navigateByUrl('/partenaire');
    }else if(localStorage.getItem("user").length>0){
      this.router.navigateByUrl('/user');
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
