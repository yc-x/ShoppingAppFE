import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecentProductComponent } from './user-recent-product.component';

describe('UserRecentProductComponent', () => {
  let component: UserRecentProductComponent;
  let fixture: ComponentFixture<UserRecentProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserRecentProductComponent]
    });
    fixture = TestBed.createComponent(UserRecentProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
