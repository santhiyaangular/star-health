import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRendererComponent } from './patient-renderer.component';

describe('PatientRendererComponent', () => {
  let component: PatientRendererComponent;
  let fixture: ComponentFixture<PatientRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
