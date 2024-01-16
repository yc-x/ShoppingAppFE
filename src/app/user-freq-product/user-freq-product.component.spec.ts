import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFreqProductComponent } from './user-freq-product.component';

describe('UserFreqProductComponent', () => {
  let component: UserFreqProductComponent;
  let fixture: ComponentFixture<UserFreqProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFreqProductComponent]
    });
    fixture = TestBed.createComponent(UserFreqProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
