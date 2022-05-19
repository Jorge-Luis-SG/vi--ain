import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorySwapStorePairComponent } from './factory-swap-store-pair.component';

describe('FactorySwapStorePairComponent', () => {
  let component: FactorySwapStorePairComponent;
  let fixture: ComponentFixture<FactorySwapStorePairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactorySwapStorePairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactorySwapStorePairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
