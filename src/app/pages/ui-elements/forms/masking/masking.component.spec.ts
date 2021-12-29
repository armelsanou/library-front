import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskingComponent } from './masking.component';

describe('MaskingComponent', () => {
  let component: MaskingComponent;
  let fixture: ComponentFixture<MaskingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaskingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
