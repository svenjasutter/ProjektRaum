import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsInfoComponent } from './projects-info.component';

describe('BuildingInfoComponent', () => {
  let component: ProjectsInfoComponent;
  let fixture: ComponentFixture<ProjectsInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsInfoComponent]
    });
    fixture = TestBed.createComponent(ProjectsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
