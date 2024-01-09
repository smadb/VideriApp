import { Injectable } from '@angular/core'
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js'
import { BehaviorSubject, Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

export interface Profile {
  id?: string
  username: string
  website: string
  avatar_url: string
}

@Injectable({
  providedIn: 'root',
})

export class SupabaseService {
  private supabase: SupabaseClient
  _session: AuthSession | null = null

  private currentUser = new BehaviorSubject<any>(null)


  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
    this.supabase.auth.onAuthStateChange((event,session)=>{
      console.log('hello')
      if(event === "SIGNED_IN" || event ==="TOKEN_REFRESHED"){
        this.currentUser.next(session?.user);
      }
      else{
        this.currentUser.next(false);
      }
    })
    this.loadUser()
  }

  get session() {
    this.supabase.auth.getSession().then(({ data }) => {
      this._session = data.session
    })
    return this._session
  }

  getCurrentUser():Observable<any>{
    return this.currentUser.asObservable()
  }

  async loadUser(){
    if(this.currentUser.value){
      return;
    }
    const user = await this.supabase.auth.getUser().then(
      (user)=> {
        return user
      },
    ).catch(
      (err)=>{
        this.currentUser.next(false)
        return err;
      }
    )

    if(user.data.user){
      this.currentUser.next(user.data.user);
    }
    else{
      this.currentUser.next(false);
    }
  }

  profile(user: User) {
    return this.supabase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', user.id)
      .single()
  }


  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabase.auth.onAuthStateChange(callback)
  }

  signUp(email:string,password:string){
    return this.supabase.auth.signUp(
      {
        email:email,
        password:password
      }
    )
  }

  signInWithOtp(email: string) {
    return this.supabase.auth.signInWithOtp({ email })
  }

  signInWithPassword(email:string,password:string){
    return this.supabase.auth.signInWithPassword(
      {
        email:email,
        password:password
      }
    )
  
  }

  signOut() {
    return this.supabase.auth.signOut()
  }

  updateProfile(profile: Profile) {
    const update = {
      ...profile,
      updated_at: new Date(),
    }

    return this.supabase.from('profiles').upsert(update)
  }

  downLoadImage(path: string) {
    return this.supabase.storage.from('avatars').download(path)
  }

  uploadAvatar(filePath: string, file: File) {
    return this.supabase.storage.from('avatars').upload(filePath, file)
  }
}