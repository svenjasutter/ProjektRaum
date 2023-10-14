import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor() {}

  private buildingSelectedSubject = new BehaviorSubject<string>('');

  buildingSelected$ = this.buildingSelectedSubject.asObservable();

  public selectBuilding(building: string) {
    console.log(building);
    this.buildingSelectedSubject.next(building);
  }
}
