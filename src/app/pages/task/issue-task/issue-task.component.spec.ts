import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueTaskComponent } from './issue-task.component';

describe('IssueTaskComponent', () => {
  let component: IssueTaskComponent;
  let fixture: ComponentFixture<IssueTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
