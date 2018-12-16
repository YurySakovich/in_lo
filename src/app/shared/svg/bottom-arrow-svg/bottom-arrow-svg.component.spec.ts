import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomArrowSvgComponent } from './bottom-arrow-svg.component';

describe('BottomArrowSvgComponent', () => {
  let component: BottomArrowSvgComponent;
  let fixture: ComponentFixture<BottomArrowSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomArrowSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomArrowSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
