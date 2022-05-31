import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
  }

  signupForm=this.fb.group({
    name:['',[Validators.required]],
    username:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(4)]]
  })

  get name() {
    return this.signupForm.get('name');
  }

  get username() {
    return this.signupForm.get('username');
  }

  get password() {
    return this.signupForm.get('password');
  }

  signup(){
    const options = {Headers, responseType: 'json' as 'blob'};
    this.http.post('/assets/data/emp.json', this.signupForm.value, options).subscribe(
      data => {
         console.log(data);
        });
  }


}
