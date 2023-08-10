import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePurchaseComponent } from './manage-purchase.component';

describe('ManagePurchaseComponent', () => {
  let component: ManagePurchaseComponent;
  let fixture: ComponentFixture<ManagePurchaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagePurchaseComponent]
    });
    fixture = TestBed.createComponent(ManagePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
