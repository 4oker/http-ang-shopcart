import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalcalculatorComponent } from './totalcalculator.component';

describe('TotalcalculatorComponent', () => {
  let component: TotalcalculatorComponent;
  let fixture: ComponentFixture<TotalcalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalcalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
