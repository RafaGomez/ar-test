import { Injectable } from '@angular/core';
import { ILocationElement } from '../models/ILocationElement';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  LOCAL_STORAGE_KEY = 'locationDB';
  storedLocations = [] as ILocationElement[];

  constructor() {
    this.loadLocalStorage();
   }

  getLocations(): Observable<ILocationElement[]> {
    return of(this.storedLocations);
  }

  addLocation(newLocation: ILocationElement) {
    this.storedLocations.push(newLocation);
    this.saveLocalStorage();
  }

  removeLocation(id: number){
    this.storedLocations = this.storedLocations.filter ( e => e.id !== id);
    this.saveLocalStorage();
  }

  private saveLocalStorage() {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.storedLocations));
  }

  private loadLocalStorage() {
    if (localStorage.getItem(this.LOCAL_STORAGE_KEY)) {
      this.storedLocations = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY)) as ILocationElement[];
    }
  }

}
