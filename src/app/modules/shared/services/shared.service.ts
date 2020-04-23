import { Injectable } from '@angular/core';
import { ILocationElement } from '../models/ILocationElement';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  getCoordinates(): Observable<ILocationElement[]> {
    const el1: ILocationElement = {
      id: 1,
      latitute: 37.2882290,
      longitude: -5.9351281,
      color: 'green'
    };
    const el2: ILocationElement = {
      id: 2,
      latitute: 37.2883165,
      longitude: -5.9349816,
      color: 'yellow'
    };
    const el3: ILocationElement = {
      id: 3,
      latitute: 37.2877603,
      longitude: -5.9351415,
      color: 'red'
    };
    return of([el1, el2, el3]);
  }
}
