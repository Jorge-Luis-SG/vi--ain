import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryStakeNftStoreComponent } from './factory-stake-nft-store.component';

describe('FactoryStakeNftStoreComponent', () => {
  let component: FactoryStakeNftStoreComponent;
  let fixture: ComponentFixture<FactoryStakeNftStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactoryStakeNftStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryStakeNftStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
