import { Routes } from '@angular/router';
import { AuthComponent } from './shared/auth/auth.component';
import { SignUpComponent } from './shared/auth/sign-up/sign-up.component';
import { SignInComponent } from './shared/auth/sign-in/sign-in.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shared/navigation/components/tabs/tabs.routes').then((m) => m.routes),
    canActivate: [
      
    ]
  },
  {
    path:'signUp', component:SignUpComponent 
  },
  {
    path:'login', component:SignInComponent
  }
];
