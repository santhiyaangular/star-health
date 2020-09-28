import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingCellrendererComponent } from './rating-cellrenderer.component';

describe('RatingCellrendererComponent', () => {
  let component: RatingCellrendererComponent;
  let fixture: ComponentFixture<RatingCellrendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingCellrendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingCellrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
