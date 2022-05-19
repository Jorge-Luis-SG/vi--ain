import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFactorySwapComponent } from './list-factory-swap.component';

describe('ListFactorySwapComponent', () => {
  let component: ListFactorySwapComponent;
  let fixture: ComponentFixture<ListFactorySwapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFactorySwapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFactorySwapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
