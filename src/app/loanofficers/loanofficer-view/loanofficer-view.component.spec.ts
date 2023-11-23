import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanofficerViewComponent } from './loanofficer-view.component';

describe('LoanofficerViewComponent', () => {
  let component: LoanofficerViewComponent;
  let fixture: ComponentFixture<LoanofficerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanofficerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanofficerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
