import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiOtherComponent } from './ui-other.component';

describe('UiOtherComponent', () => {
  let component: UiOtherComponent;
  let fixture: ComponentFixture<UiOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
