import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone:true,
  imports: [ReactiveFormsModule]
})
export class SignInComponent  implements OnInit {

  signInForm!:FormGroup;

  constructor(private supabaseService:SupabaseService,private formbuilder:FormBuilder,private authenticationService:AuthenticationService,private router:Router) {

    this.signInForm = this.formbuilder.group({
      email:[''],
      password:['']
    })
  }

  ngOnInit() {
    console.log('signin')
  }

  onSubmit(){
    const FormValues = this.signInForm.value;

    this.supabaseService.signInWithPassword(FormValues.email,FormValues.password)
    .then(
      (v)=>{
        if(v.error){
          console.log(v.error.name,v.error.message)
        }
        else if(v.data.user){
          console.log('Connected as ',v.data.user.email)
          this.router.navigateByUrl('')
        }
      }
    )
  }


}
