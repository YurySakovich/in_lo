import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensationPageComponent } from './compensation-page.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('CompensationPageComponent', () => {
  let component: CompensationPageComponent;
  let fixture: ComponentFixture<CompensationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompensationPageComponent ],
      schemas: [NO_ERRORS_SCHEMA],
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
