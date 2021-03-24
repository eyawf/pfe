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
   if(!validateUsername() && passCheck()<4){
    $('#username').css("border-color","red") ;
    $('#username').css("color","red");
    $('#pass').css("border-color","red") ;
    $('#pass').css("color","red") ;
    $('#username').focus();
    return false;
   }else if(passCheck()<4){
    $('#pass').css("border-color","red") ;
    $('#pass').css("color","red") ;
    $('#pass').focus();
     return false;
   }else if(!validateUsername()){
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
        if(validateUsername()){
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
            
        }else{
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
    
    var email=$("#email").val();
   
     var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
     if(reg.test(email)){
         return true;
     }else{
         return false;
     }

}

function validateUsername(){
    var username=$('#username').val();
    if(username==""){
        return false;
    }else{
        return true;
    }
}
function passCheck(){
    var password=$('#pass').val();
    var strength=0;
    if (password.match(/[a-z]+/)){
        strength+=1;
    }
    if (password.match(/[A-Z]+/)){
        strength+=1;
    }
    if (password.match(/[0-9]+/)){
        strength+=1;
    }
        if(password.length>=8){
            strength+=1;
        }
    return strength; 
}

function Valid(){
    if(validateUsername() && passCheck()>=4){
        $("#btn").show();
    }else{

        $("#btn").hide();
    }
}
