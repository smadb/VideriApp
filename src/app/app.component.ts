import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { SupabaseService } from './services/supabase.service';
import { Router } from '@angular/router';
import { IonHeaderComponent } from './shared/ion-header/ion-header.component';
import { IonHeaderService } from './services/ionheader/ion-header.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet,IonHeaderComponent],
})
export class AppComponent implements OnInit{

  headerTitle!:string;

  constructor(private SupabaseService:SupabaseService,private router:Router,private ionheaderservice:IonHeaderService) {

    this.SupabaseService.getCurrentUser().subscribe(
      (user)=>{
        if(user){
          this.router.navigateByUrl('')
        }
        else{
          this.router.navigateByUrl('connect')
        }
      }
    )

    this.ionheaderservice.getTitle().subscribe(
      (v)=>this.headerTitle = v
    )
  }

  ngOnInit(): void {
 
  }


  getTitle(title:any){
    this.headerTitle = title;
  }

}
