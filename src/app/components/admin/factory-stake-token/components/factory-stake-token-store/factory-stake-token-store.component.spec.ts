import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryStakeTokenStoreComponent } from './factory-stake-token-store.component';

describe('FactoryStakeTokenStoreComponent', () => {
  let component: FactoryStakeTokenStoreComponent;
  let fixture: ComponentFixture<FactoryStakeTokenStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactoryStakeTokenStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryStakeTokenStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
