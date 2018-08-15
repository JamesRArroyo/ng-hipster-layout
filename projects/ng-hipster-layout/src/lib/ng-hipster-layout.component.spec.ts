import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgHipsterLayoutComponent } from './ng-hipster-layout.component';

describe('NgHipsterLayoutComponent', () => {
  let component: NgHipsterLayoutComponent;
  let fixture: ComponentFixture<NgHipsterLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgHipsterLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgHipsterLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
