import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferFriendComponent } from './refer-friend.component';

describe('ReferFriendComponent', () => {
  let component: ReferFriendComponent;
  let fixture: ComponentFixture<ReferFriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferFriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
