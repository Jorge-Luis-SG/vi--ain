import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetVaultAddressComponent } from './set-vault-address.component';

describe('SetVaultAddressComponent', () => {
  let component: SetVaultAddressComponent;
  let fixture: ComponentFixture<SetVaultAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetVaultAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetVaultAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
