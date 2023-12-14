import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-send-magic-link',
  templateUrl: './send-magic-link.component.html',
  styleUrls: ['./send-magic-link.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule],

})
export class SendMagicLinkComponent  implements OnInit {


  ngOnInit() {}
  loading = false

  signInForm = this.formBuilder.group({
    email: '',
  })

  constructor(
    private readonly supabase: SupabaseService,
    private readonly formBuilder: FormBuilder
  ) {}

  async onSubmit(): Promise<void> {
    try {
      this.loading = true
      const email = this.signInForm.value.email as string
      const { error } = await this.supabase.signInWithOtp(email)
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.signInForm.reset()
      this.loading = false
    }
  }

}
