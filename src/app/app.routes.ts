import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shared/navigation/components/tabs/tabs.routes').then((m) => m.routes),
    canActivate: [
      AuthGuard
    ],
  },  {
    path: 'connect',
    loadComponent: () => import('./components/connect/connect.page').then( m => m.ConnectPage)
  },

  

];
