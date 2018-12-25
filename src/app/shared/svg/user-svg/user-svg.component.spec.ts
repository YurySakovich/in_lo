import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSvgComponent } from './user-svg.component';

describe('UserSvgComponent', () => {
  let component: UserSvgComponent;
  let fixture: ComponentFixture<UserSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
