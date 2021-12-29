import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnementEffectueComponent } from './abonnement-effectue.component';

describe('AbonnementEffectueComponent', () => {
  let component: AbonnementEffectueComponent;
  let fixture: ComponentFixture<AbonnementEffectueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonnementEffectueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonnementEffectueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
