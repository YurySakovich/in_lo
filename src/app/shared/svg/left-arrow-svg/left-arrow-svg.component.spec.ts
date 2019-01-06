import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LeftArrowSvgComponent} from './left-arrow-svg.component';

describe('LeftArrowSvgComponent', () => {
  let component: LeftArrowSvgComponent;
  let fixture: ComponentFixture<LeftArrowSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeftArrowSvgComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftArrowSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
