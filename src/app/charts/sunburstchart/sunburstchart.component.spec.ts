import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunburstchartComponent } from './sunburstchart.component';

describe('SunburstchartComponent', () => {
  let component: SunburstchartComponent;
  let fixture: ComponentFixture<SunburstchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunburstchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunburstchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
