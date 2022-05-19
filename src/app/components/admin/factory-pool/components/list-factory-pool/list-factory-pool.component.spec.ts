import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFactoryPoolComponent } from './list-factory-pool.component';

describe('ListFactoryPoolComponent', () => {
  let component: ListFactoryPoolComponent;
  let fixture: ComponentFixture<ListFactoryPoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFactoryPoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFactoryPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
