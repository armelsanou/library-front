import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLecteurComponent } from './profile-lecteur.component';

describe('ProfileLecteurComponent', () => {
  let component: ProfileLecteurComponent;
  let fixture: ComponentFixture<ProfileLecteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileLecteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
