import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorUpdateProductsComponent } from './addor-update-products.component';

describe('AddorUpdateProductsComponent', () => {
  let component: AddorUpdateProductsComponent;
  let fixture: ComponentFixture<AddorUpdateProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddorUpdateProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddorUpdateProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
