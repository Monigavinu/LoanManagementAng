import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanofficerAddComponent } from './loanofficer-add.component';

describe('LoanofficerAddComponent', () => {
  let component: LoanofficerAddComponent;
  let fixture: ComponentFixture<LoanofficerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanofficerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanofficerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
