import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStaticComponent } from './widget-static.component';

describe('WidgetStaticComponent', () => {
  let component: WidgetStaticComponent;
  let fixture: ComponentFixture<WidgetStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
