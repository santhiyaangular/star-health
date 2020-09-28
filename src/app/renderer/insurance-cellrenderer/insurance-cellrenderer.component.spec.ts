import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceCellrendererComponent } from './insurance-cellrenderer.component';

describe('InsuranceCellrendererComponent', () => {
  let component: InsuranceCellrendererComponent;
  let fixture: ComponentFixture<InsuranceCellrendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceCellrendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceCellrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
