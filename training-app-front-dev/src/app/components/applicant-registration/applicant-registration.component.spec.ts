import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantRegistrationComponent } from './applicant-registration.component';

describe('ApplicantRegistrationComponent', () => {
  let component: ApplicantRegistrationComponent;
  let fixture: ComponentFixture<ApplicantRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicantRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicantRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
