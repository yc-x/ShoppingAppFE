import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBriefComponent } from './product-brief.component';

describe('ProductBriefComponent', () => {
  let component: ProductBriefComponent;
  let fixture: ComponentFixture<ProductBriefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductBriefComponent]
    });
    fixture = TestBed.createComponent(ProductBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
