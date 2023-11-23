import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerViewnewComponent } from './manager-viewnew.component';

describe('ManagerViewnewComponent', () => {
  let component: ManagerViewnewComponent;
  let fixture: ComponentFixture<ManagerViewnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerViewnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerViewnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
