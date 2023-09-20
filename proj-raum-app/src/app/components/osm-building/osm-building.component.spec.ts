import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsmBuildingComponent } from './osm-building.component';

describe('OsmBuildingComponent', () => {
  let component: OsmBuildingComponent;
  let fixture: ComponentFixture<OsmBuildingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OsmBuildingComponent]
    });
    fixture = TestBed.createComponent(OsmBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
