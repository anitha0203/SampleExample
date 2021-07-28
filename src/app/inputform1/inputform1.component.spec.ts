import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inputform1Component } from './inputform1.component';

describe('Inputform1Component', () => {
  let component: Inputform1Component;
  let fixture: ComponentFixture<Inputform1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inputform1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inputform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
