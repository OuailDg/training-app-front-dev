import { Component, Output , EventEmitter } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule} from 'primeng/inputtext';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService} from '../../services/authentication/auth.service';
//import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule,InputTextModule, ReactiveFormsModule,ButtonModule, RouterModule, CommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() loggeduser: EventEmitter<string>  = new EventEmitter<string>();


  loginError: string = '' ; 

  loginForm = this.fb.group({
    email:['', [Validators.required]],
    password:['', Validators.required]
  });
  constructor(
    private fb:FormBuilder ,
    private authService : AuthService , 
  ){
    
  }
  

  get email(){
    return this.loginForm.controls['email'];
  }

  get password(){
    return this.loginForm.controls['password'];
  }

  login(){


    if (this.loginForm.invalid) {
      return;
    }

    const username = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    if (username && password) {

      this.authService.login(username, password).subscribe(
        res => {
          console.log(res);
          this.loggeduser.emit("aymen");
          this.loggedIn.emit(true);

        
        
        });
      
    } else {
      console.error('Username or password is missing');
    }

    
        
      
    }
  

}
