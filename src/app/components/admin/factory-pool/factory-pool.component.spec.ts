import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryPoolComponent } from './factory-pool.component';

describe('FactoryPoolComponent', () => {
  let component: FactoryPoolComponent;
  let fixture: ComponentFixture<FactoryPoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactoryPoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
