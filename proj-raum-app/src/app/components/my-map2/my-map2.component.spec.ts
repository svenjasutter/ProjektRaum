import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMap2Component } from './my-map2.component';

describe('MyMap2Component', () => {
  let component: MyMap2Component;
  let fixture: ComponentFixture<MyMap2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyMap2Component]
    });
    fixture = TestBed.createComponent(MyMap2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
