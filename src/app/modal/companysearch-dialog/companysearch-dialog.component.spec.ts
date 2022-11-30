import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanysearchDialogComponent } from './companysearch-dialog.component';

describe('CompanysearchDialogComponent', () => {
  let component: CompanysearchDialogComponent;
  let fixture: ComponentFixture<CompanysearchDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanysearchDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanysearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
