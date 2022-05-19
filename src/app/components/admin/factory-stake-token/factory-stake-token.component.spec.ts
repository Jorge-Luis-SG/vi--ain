import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryStakeTokenComponent } from './factory-stake-token.component';

describe('FactoryStakeTokenComponent', () => {
  let component: FactoryStakeTokenComponent;
  let fixture: ComponentFixture<FactoryStakeTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactoryStakeTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryStakeTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
