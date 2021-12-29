import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeityComponent } from './peity.component';

describe('PeityComponent', () => {
  let component: PeityComponent;
  let fixture: ComponentFixture<PeityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
