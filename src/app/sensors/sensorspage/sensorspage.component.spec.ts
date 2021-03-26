import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorspageComponent } from './sensorspage.component';

describe('SensorspageComponent', () => {
  let component: SensorspageComponent;
  let fixture: ComponentFixture<SensorspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
