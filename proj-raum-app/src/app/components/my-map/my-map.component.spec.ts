import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMapComponent } from './my-map.component';

describe('MyMapComponent', () => {
  let component: MyMapComponent;
  let fixture: ComponentFixture<MyMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyMapComponent]
    });
    fixture = TestBed.createComponent(MyMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
