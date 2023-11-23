import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanofficersComponent } from './loanofficers.component';

describe('LoanofficersComponent', () => {
  let component: LoanofficersComponent;
  let fixture: ComponentFixture<LoanofficersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanofficersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanofficersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
