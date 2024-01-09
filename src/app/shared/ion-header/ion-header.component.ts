import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { powerOutline } from 'ionicons/icons';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-ion-header',
  templateUrl: './ion-header.component.html',
  styleUrls: ['./ion-header.component.scss'],
  standalone:true,
  imports:[IonicModule]
})
export class IonHeaderComponent  implements OnInit {

  constructor(private SupabaseService:SupabaseService) {

    addIcons({powerOutline})
   }

  ngOnInit() {}

  @Input() ionTitle:string|undefined;

  deconnect(){
    this.SupabaseService.signOut().then((v)=>{
      
    })
  }
}
