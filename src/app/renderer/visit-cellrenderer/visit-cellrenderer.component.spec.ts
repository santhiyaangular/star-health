import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitCellrendererComponent } from './visit-cellrenderer.component';

describe('VisitCellrendererComponent', () => {
  let component: VisitCellrendererComponent;
  let fixture: ComponentFixture<VisitCellrendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitCellrendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitCellrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
