import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerSigninPage } from './seller-signin.page';

describe('SellerSigninPage', () => {
  let component: SellerSigninPage;
  let fixture: ComponentFixture<SellerSigninPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerSigninPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerSigninPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
