import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {Store} from '@ngrx/store';
import {TestStore} from '@testing/utils';
import {UserService} from '@core/services/user.service';
import {MockUserService} from '@testing/services/user.service.mock';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: Store, useClass: TestStore},   // use test store instead of ngrx store
        {provide: UserService, useClass: MockUserService}   // use test store instead of ngrx store
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
