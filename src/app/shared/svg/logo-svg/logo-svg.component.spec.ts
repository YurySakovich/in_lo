import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSvgComponent } from './logo-svg.component';

describe('LogoSvgComponent', () => {
  let component: LogoSvgComponent;
  let fixture: ComponentFixture<LogoSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
