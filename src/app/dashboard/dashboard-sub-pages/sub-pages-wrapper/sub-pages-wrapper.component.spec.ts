import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPagesWrapperComponent } from './sub-pages-wrapper.component';

describe('SubPagesWrapperComponent', () => {
  let component: SubPagesWrapperComponent;
  let fixture: ComponentFixture<SubPagesWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPagesWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPagesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
