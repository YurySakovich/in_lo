import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardPageComponent} from './dashboard-page.component';
import {DashboardService} from '@app/core/services/dashboard.service';
import {MockDashboardService} from '@testing/services';

import {DebugElement, inject} from "@angular/core";
import {By} from "@angular/platform-browser";
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('DashboardPageComponent', () => {
  let component: DashboardPageComponent;
  let fixture: ComponentFixture<DashboardPageComponent>;
  let debugElements: DebugElement[];
  let debugElement: DebugElement;
  let dashboardService;
  const mockCardData = [1,1];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPageComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: DashboardService, useValue: MockDashboardService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPageComponent);
    component = fixture.componentInstance;
    dashboardService = TestBed.get(DashboardService);
    fixture.detectChanges();
    this.blocks = [1,1];
    debugElement = fixture.debugElement;
    debugElements = debugElement.query(By.css(".block")).children;
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // describe('getCardData', () => {
 
  //   it('should return mock heroes', () => {
  //     dashboardService.getCardData().subscribe(
  //       blocks => expect(blocks.length).toEqual(this.blocks.length)
  //     );
  //   });
  // });

  // it("compare blocks data length", () => {
  //   expect(component.blocks.length).toBe(mockDashboardService.getProducts().length);
  // });

  // it("count of card-blocks", () => {
  //   expect(component.blocks.length).toBe(debugElements.length);
  // });
});
