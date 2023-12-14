import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { createClient } from '@supabase/supabase-js';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone:true,
  imports: [ReactiveFormsModule]
})
export class SignUpComponent  implements OnInit {

  signUpForm!:FormGroup;

  constructor(private supabaseService:SupabaseService,private formbuilder:FormBuilder) {

    this.signUpForm = this.formbuilder.group({
      email:[''],
      password:['']
    })
  }

  ngOnInit() {}

  onSubmit(){

  }

}
