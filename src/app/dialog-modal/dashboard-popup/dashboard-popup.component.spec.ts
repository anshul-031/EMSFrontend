import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPopupComponent } from './dashboard-popup.component';

describe('DashboardPopupComponent', () => {
  let component: DashboardPopupComponent;
  let fixture: ComponentFixture<DashboardPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
