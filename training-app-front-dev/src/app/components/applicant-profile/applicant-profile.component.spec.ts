import { ComponentFixture, TestBed } from '@angular/core/testing';

import { applicantProfileComponent } from './applicant-profile.component';

describe('ProfileComponent', () => {
  let component: applicantProfileComponent;
  let fixture: ComponentFixture<applicantProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [applicantProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(applicantProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});