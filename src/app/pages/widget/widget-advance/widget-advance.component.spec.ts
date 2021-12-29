import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetAdvanceComponent } from './widget-advance.component';

describe('WidgetAdvanceComponent', () => {
  let component: WidgetAdvanceComponent;
  let fixture: ComponentFixture<WidgetAdvanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetAdvanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
