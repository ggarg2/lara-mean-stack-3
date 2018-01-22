import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDeliveryComponent } from './home-delivery.component';

describe('HomeDeliveryComponent', () => {
  let component: HomeDeliveryComponent;
  let fixture: ComponentFixture<HomeDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
