import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PayeePackageComponent} from './payee-package.component';

describe('PayeePackageComponent', () => {
  let component: PayeePackageComponent;
  let fixture: ComponentFixture<PayeePackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PayeePackageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
