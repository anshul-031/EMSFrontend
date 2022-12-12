import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchJobDashboardComponent } from './search-job-dashboard.component';

describe('SearchJobDashboardComponent', () => {
  let component: SearchJobDashboardComponent;
  let fixture: ComponentFixture<SearchJobDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchJobDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchJobDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
