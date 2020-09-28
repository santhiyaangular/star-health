import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCellrendererComponent } from './status-cellrenderer.component';

describe('StatusCellrendererComponent', () => {
  let component: StatusCellrendererComponent;
  let fixture: ComponentFixture<StatusCellrendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusCellrendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusCellrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
