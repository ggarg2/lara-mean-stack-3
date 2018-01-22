import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDishesComponent } from './best-dishes.component';

describe('BestDishesComponent', () => {
  let component: BestDishesComponent;
  let fixture: ComponentFixture<BestDishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestDishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
