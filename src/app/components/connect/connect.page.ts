import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SupabaseService } from 'src/app/services/supabase.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Router } from '@angular/router';
import { SubmitConnectComponent } from './submit-connect/submit-connect.component';
import { SwitchLoginComponent } from './switch-login/switch-login.component';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule,SubmitConnectComponent,SwitchLoginComponent]
})
export class ConnectPage implements OnInit {
  signInForm!:FormGroup;
  signUpForm!:FormGroup;

  signInBool:boolean | undefined = undefined;

  constructor(private supabaseService:SupabaseService,private formbuilder:FormBuilder,private authenticationService:AuthenticationService,private router:Router) {

    this.signInForm = this.formbuilder.group({
      email:[''],
      password:['']
    })

    this.signUpForm = this.formbuilder.group({
      email:[''],
      password:['']
    })

  }

  ngOnInit() {
    console.log('signin')
  }

  onSignIn(){
    const FormValues = this.signInForm.value;

    this.supabaseService.signInWithPassword(FormValues.email,FormValues.password)
    .then(
      (v)=>{
        if(v.error){
          console.log(v.error.name,v.error.message)
          this.signInForm.reset()
        }
        else if(v.data.user){
          console.log('Connected as ',v.data.user.email)
          this.router.navigateByUrl('')
        }
      }
    )
  }
  onSignUp(){
    const FormValues = this.signUpForm.value;

    this.supabaseService.signUp(FormValues.email,FormValues.password).then(()=>{this.router.navigateByUrl('')})
    console.log('submit')
  }

}
