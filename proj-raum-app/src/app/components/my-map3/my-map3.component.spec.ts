import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMap3Component } from './my-map3.component';

describe('MyMap3Component', () => {
  let component: MyMap3Component;
  let fixture: ComponentFixture<MyMap3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyMap3Component]
    });
    fixture = TestBed.createComponent(MyMap3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
