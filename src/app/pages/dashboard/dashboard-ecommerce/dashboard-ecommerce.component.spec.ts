import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEcommerceComponent } from './dashboard-ecommerce.component';

describe('DashboardEcommerceComponent', () => {
  let component: DashboardEcommerceComponent;
  let fixture: ComponentFixture<DashboardEcommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardEcommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
