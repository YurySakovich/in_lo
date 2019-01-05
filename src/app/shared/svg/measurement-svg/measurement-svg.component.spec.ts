import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MeasurementSvgComponent} from './measurement-svg.component';

describe('MeasurementSvgComponent', () => {
  let component: MeasurementSvgComponent;
  let fixture: ComponentFixture<MeasurementSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MeasurementSvgComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
