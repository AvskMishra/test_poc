import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipspageComponent } from './shipspage.component';

describe('ShipspageComponent', () => {
  let component: ShipspageComponent;
  let fixture: ComponentFixture<ShipspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
