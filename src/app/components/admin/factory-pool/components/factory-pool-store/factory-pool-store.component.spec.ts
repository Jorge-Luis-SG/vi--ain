import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryPoolStoreComponent } from './factory-pool-store.component';

describe('FactoryPoolStoreComponent', () => {
  let component: FactoryPoolStoreComponent;
  let fixture: ComponentFixture<FactoryPoolStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactoryPoolStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryPoolStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
