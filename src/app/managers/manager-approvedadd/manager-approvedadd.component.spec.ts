import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerApprovedaddComponent } from './manager-approvedadd.component';

describe('ManagerApprovedaddComponent', () => {
  let component: ManagerApprovedaddComponent;
  let fixture: ComponentFixture<ManagerApprovedaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerApprovedaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerApprovedaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
