import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { SupabaseService } from '../services/supabase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  currentUser!:any;

  constructor(private authenticationService:AuthenticationService,private supabaseService : SupabaseService, private router : Router){
    this.supabaseService.getCurrentUser().subscribe((v)=>{if(v){this.currentUser = v}})
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log(this.currentUser)
      if(this.currentUser){
        return true;
      }
      else{
        this.router.navigateByUrl('connect')
      }
    return true;
  }
  
}
