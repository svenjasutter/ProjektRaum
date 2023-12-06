import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapProjectsComponent } from './map-projects.component';

describe('MapProjectsComponent', () => {
  let component: MapProjectsComponent;
  let fixture: ComponentFixture<MapProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapProjectsComponent]
    });
    fixture = TestBed.createComponent(MapProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
