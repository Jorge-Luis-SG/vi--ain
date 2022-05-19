import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFactoryStakeTokenComponent } from './list-factory-stake-token.component';

describe('ListFactoryStakeTokenComponent', () => {
  let component: ListFactoryStakeTokenComponent;
  let fixture: ComponentFixture<ListFactoryStakeTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFactoryStakeTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFactoryStakeTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
