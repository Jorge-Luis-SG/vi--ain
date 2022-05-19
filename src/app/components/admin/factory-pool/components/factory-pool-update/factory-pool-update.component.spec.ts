import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryPoolUpdateComponent } from './factory-pool-update.component';

describe('FactoryPoolUpdateComponent', () => {
  let component: FactoryPoolUpdateComponent;
  let fixture: ComponentFixture<FactoryPoolUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactoryPoolUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryPoolUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
