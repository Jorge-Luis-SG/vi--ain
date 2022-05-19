import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryStakeNftComponent } from './factory-stake-nft.component';

describe('FactoryStakeNftComponent', () => {
  let component: FactoryStakeNftComponent;
  let fixture: ComponentFixture<FactoryStakeNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactoryStakeNftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryStakeNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
