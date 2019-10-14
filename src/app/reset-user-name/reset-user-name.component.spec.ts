import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetUserNameComponent } from './reset-user-name.component';

describe('ResetUserNameComponent', () => {
  let component: ResetUserNameComponent;
  let fixture: ComponentFixture<ResetUserNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetUserNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetUserNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
