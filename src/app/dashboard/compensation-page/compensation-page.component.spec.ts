import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensationPageComponent } from './compensation-page.component';

describe('CompensationPageComponent', () => {
  let component: CompensationPageComponent;
  let fixture: ComponentFixture<CompensationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompensationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompensationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
