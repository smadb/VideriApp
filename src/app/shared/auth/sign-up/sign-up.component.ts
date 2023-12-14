import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SupabaseService } from 'src/app/services/supabase.service';
import { DisplayLogoComponent } from '../../display-logo/display-logo.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone:true,
  imports: [ReactiveFormsModule , DisplayLogoComponent]
})
export class SignUpComponent  implements OnInit {

  signUpForm!:FormGroup;

  constructor(private supabaseService:SupabaseService,private formbuilder:FormBuilder) {

    this.signUpForm = this.formbuilder.group({
      email:[''],
      password:['']
    })
  }

  ngOnInit() {
    console.log('signup')

  }

  onSubmit(){
    const FormValues = this.signUpForm.value;

    this.supabaseService.signUp(FormValues.email,FormValues.password)
    console.log('submit')
  }

}
