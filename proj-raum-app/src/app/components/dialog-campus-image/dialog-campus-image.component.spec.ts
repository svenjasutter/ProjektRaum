import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCampusImageComponent } from './dialog-campus-image.component';

describe('DialogCampusImageComponent', () => {
  let component: DialogCampusImageComponent;
  let fixture: ComponentFixture<DialogCampusImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCampusImageComponent]
    });
    fixture = TestBed.createComponent(DialogCampusImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
