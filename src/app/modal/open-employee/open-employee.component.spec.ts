import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenEmployeeComponent } from './open-employee.component';

describe('OpenEmployeeComponent', () => {
  let component: OpenEmployeeComponent;
  let fixture: ComponentFixture<OpenEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
