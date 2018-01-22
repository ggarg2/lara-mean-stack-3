import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinePaymentComponent } from './online-payment.component';

describe('OnlinePaymentComponent', () => {
  let component: OnlinePaymentComponent;
  let fixture: ComponentFixture<OnlinePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinePaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
