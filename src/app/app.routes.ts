import { Routes } from '@angular/router';
import { AuthComponent } from './shared/auth/auth.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shared/navigation/components/tabs/tabs.routes').then((m) => m.routes),
    canActivate: [
      
    ]
  },
  {
    path:'login', component:AuthComponent 
  }
];
