import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatLivreComponent } from './etat-livre.component';

describe('EtatLivreComponent', () => {
  let component: EtatLivreComponent;
  let fixture: ComponentFixture<EtatLivreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatLivreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
