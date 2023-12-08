import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallProductsComponent } from './fall-products.component';

describe('FallProductsComponent', () => {
  let component: FallProductsComponent;
  let fixture: ComponentFixture<FallProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FallProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FallProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
