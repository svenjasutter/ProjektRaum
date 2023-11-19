import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapProjectsService {

  constructor() { }
  
  private buildingSelectedSubject = new BehaviorSubject<string>('');

  buildingSelected$ = this.buildingSelectedSubject.asObservable();

  public selectBuilding(building: string) {
    console.log(building);
    this.buildingSelectedSubject.next(building);
  }

  private projectsSelectedSubject = new BehaviorSubject<string>('');

  projectsSelected$ = this.projectsSelectedSubject.asObservable();

  public selectProject(project: string) {
    console.log(project);
    this.projectsSelectedSubject.next(project);
  }
}
