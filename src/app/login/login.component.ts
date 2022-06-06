import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TokenStorageService } from '../token.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 

  constructor(private fb: FormBuilder, private router: Router, private as: AuthService, private http: HttpClient,private ts:TokenStorageService) { }



  // loginForm=new FormGroup({
  //   user:new FormControl('',[Validators.email,Validators.required]),
  //   password:new FormControl('',[Validators.required,Validators.minLength(4)])
  // });

  loginForm = this.fb.group({
    user: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  })

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = 'username or password is wrong';

  isClicked!:boolean;


  ngOnInit(): void {
 
    if(this.ts.getToken()==null){
      this.router.navigate(['/login']);
    }else{
      this.router.navigate(['/dashboard']);
    }

    
  }

 

  get user() {
    return this.loginForm.get('user');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login(): void {
   
    this.as.login(this.loginForm.value.user, this.loginForm.value.password).subscribe(
      data => {
       
        //console.log("remember me "+this.isClicked)
      this.ts.saveToken(data.response,this.isClicked);

       
        console.log(data.response);
       
        
        this.ts.saveUser(data);
        localStorage.setItem('user', this.user?.value);

       
        alert('Login Succesful');
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/dashboard'])
       
      },
      err => {
        // this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
      
    );
  }


  rememberMe(isClick:boolean){
    
      this.isClicked=isClick;
      
  }

 

}
