import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCellrendererComponent } from './action-cellrenderer.component';

describe('ActionCellrendererComponent', () => {
  let component: ActionCellrendererComponent;
  let fixture: ComponentFixture<ActionCellrendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionCellrendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionCellrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
