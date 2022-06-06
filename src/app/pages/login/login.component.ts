import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserService} from 'src/app/services/user.service';
//import {FormBuilder,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _http:HttpClient,private router:Router,private userService:UserService) { }
  public user={
    username: '',
    password: ''
  }


  ngOnInit(): void {}
  formLogin(){
  
       
      // user
      if(this.user.username=="Ravikant9096" && this.user.password=="123456"){
        
        alert('User Login Succesfull');
      //this.formLogin.reset();
             this.router.navigate(['home'])
              }
              else if(this.user.username=="Ravikant Kumar" && this.user.password=="123456"){
        
                alert('Admin Login Succesfull');
              //this.formLogin.reset();
                     this.router.navigate(['homeadmin'])
                      }
                      else{
                alert('User not found');
                return;
                }
    
    alert(this.user.username+this.user.password);
  }
}

  
//})
  //}
  





// import { Component, OnInit } from '@angular/core';
// import {UserService} from 'src/app/services/user.service';
// import {FormBuilder,FormGroup} from '@angular/forms';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-login',
//   templateUrl:'./login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   loginForm!: FormGroup;

//   constructor(private formBuilder: FormBuilder,private _http:HttpClient,private router:Router,private userService:UserService,) { }
// //private userService:UserService,
//   // public user={
//   //   username: '',
//   //   password: '',
   
//   // };
//   ngOnInit(): void {

//     this.loginForm = this.formBuilder.group({

//       username:[''],
//       password:['']
//     })
//   }
//     // formLogin(){
//     //   console.log(this.user);
//     //   if(this.user.username== ''|| this.user.username == null){
//     //     alert('User is Required');
//     //     return;
//     //   }
//       // if(this.user.username== 'ravi'&& this.user.password== "123456"){ 
//       //   alert('Succesfull');
//       // }
//       formLogin(){

//         this._http.get<any>("http://localhost:8080/user/signup").subscribe(res=>{
//           const user=res.find((a:any)=>{
//             return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password

//           })
//           if(user){
//             alert('Login Succesfull');
//             this.loginForm.reset();
//            // this.router.navigate(['home'])
//           }
//           else{
//             alert('User not found');
//           }
//         },err=>{
//           alert('Somthing have wrong from server side')
//         }
//         )

//         // this.userService.loginUser(this.user).subscribe(
//         //   (data)=>{
//         //     //done onclick
//         //     console.log(data);
//         //     alert('success');
       
//         //   }
//         // );
//       }
//   }


