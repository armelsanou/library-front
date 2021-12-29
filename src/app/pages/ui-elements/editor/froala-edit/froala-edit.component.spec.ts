import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FroalaEditComponent } from './froala-edit.component';

describe('FroalaEditComponent', () => {
  let component: FroalaEditComponent;
  let fixture: ComponentFixture<FroalaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FroalaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FroalaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
