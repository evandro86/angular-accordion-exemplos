import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionExemplo1Component } from './accordion-exemplo1.component';

describe('AccordionExemplo1Component', () => {
  let component: AccordionExemplo1Component;
  let fixture: ComponentFixture<AccordionExemplo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionExemplo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionExemplo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
