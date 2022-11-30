import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeForgetComponent } from './employee-forget.component';

describe('EmployeeForgetComponent', () => {
  let component: EmployeeForgetComponent;
  let fixture: ComponentFixture<EmployeeForgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeForgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeForgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
