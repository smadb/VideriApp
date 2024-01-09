import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IonHeaderService {

  constructor() { }
  private currentTitle = new BehaviorSubject<string>('')

  setTitle(title:string){
    this.currentTitle.next(title)
  }

  getTitle(){
    return this.currentTitle
  }
}
