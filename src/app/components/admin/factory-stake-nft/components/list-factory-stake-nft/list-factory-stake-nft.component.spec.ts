import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFactoryStakeNftComponent } from './list-factory-stake-nft.component';

describe('ListFactoryStakeNftComponent', () => {
  let component: ListFactoryStakeNftComponent;
  let fixture: ComponentFixture<ListFactoryStakeNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFactoryStakeNftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFactoryStakeNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
