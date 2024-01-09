import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { SupabaseService } from './services/supabase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit{
  constructor(private SupabaseService:SupabaseService,private router:Router) {

    this.SupabaseService.getCurrentUser().subscribe(
      (user)=>{
        if(user){
          this.router.navigateByUrl('')
        }
      }
    )
  }

  ngOnInit(): void {
 
  }

}
