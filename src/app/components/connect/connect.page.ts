import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, EmailValidator, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
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
   

    // this.supabaseService.getCurrentUser().subscribe((v)=>{
    //   if(v){
    //     router.navigateByUrl('');
    //   }
    // })

    this.signInForm = this.formbuilder.group({
      email:['', Validators.compose([Validators.required,Validators.email]) ],
      password:['',Validators.compose([Validators.required,Validators.minLength(6)]) ]
    })

    this.signUpForm = this.formbuilder.group({
      email:['', Validators.compose([Validators.required,Validators.email]) ],
      password:['', Validators.compose([Validators.required,Validators.minLength(6)]) ],
      verifyPassword:['',Validators.compose([Validators.required,Validators.minLength(6)]) ]
    })

  }

  ngOnInit() {
  }

  

  switchLogin(isSignIn:boolean){
    this.signInBool = isSignIn;
    this.signInForm.reset();
    this.signUpForm.reset();
  }
  onSignIn(){
    const FormValues = this.signInForm.value;

    if(this.signInForm.valid){
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
    else{
      throw new Error('Formulaire non valide')
    }
    
  }
  onSignUp(){
    const FormValues = this.signUpForm.value;

    if(this.signUpForm.valid){

      if(FormValues.password === FormValues.verifyPassword){
        this.supabaseService.signUp(FormValues.email,FormValues.password).then(()=>{this.router.navigateByUrl('')})
        console.log('submit')
      }
      else{
        throw new Error('Les mots de passe ne sont pas similaires.')
      }
      
    }
    else{
      console.log(this.signUpForm.value)
      throw new Error('Le formulaire n\'est pas valide');
    }
    
  }

}
