import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlanSvgComponent} from './plan-svg.component';

describe('PlanSvgComponent', () => {
  let component: PlanSvgComponent;
  let fixture: ComponentFixture<PlanSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlanSvgComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
