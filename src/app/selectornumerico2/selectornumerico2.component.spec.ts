import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Selectornumerico2Component } from './selectornumerico2.component';

describe('Selectornumerico2Component', () => {
  let component: Selectornumerico2Component;
  let fixture: ComponentFixture<Selectornumerico2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Selectornumerico2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Selectornumerico2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
