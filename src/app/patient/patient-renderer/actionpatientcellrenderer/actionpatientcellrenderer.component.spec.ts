import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionpatientcellrendererComponent } from './actionpatientcellrenderer.component';

describe('ActionpatientcellrendererComponent', () => {
  let component: ActionpatientcellrendererComponent;
  let fixture: ComponentFixture<ActionpatientcellrendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionpatientcellrendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionpatientcellrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
