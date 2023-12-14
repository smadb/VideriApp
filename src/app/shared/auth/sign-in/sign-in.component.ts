import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
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

  constructor(private supabaseService:SupabaseService,private formbuilder:FormBuilder) {

    this.signInForm = this.formbuilder.group({
      email:[''],
      password:['']
    })
  }

  ngOnInit() {}

  onSubmit(){
    const FormValues = this.signInForm.value;

    this.supabaseService.signInWithPassword(FormValues.email,FormValues.password)
    
  }


}
