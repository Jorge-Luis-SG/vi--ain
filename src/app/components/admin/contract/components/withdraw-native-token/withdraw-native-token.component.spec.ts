import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawNativeTokenComponent } from './withdraw-native-token.component';

describe('WithdrawMaticOwnerComponent', () => {
  let component: WithdrawNativeTokenComponent;
  let fixture: ComponentFixture<WithdrawNativeTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawNativeTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawNativeTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
