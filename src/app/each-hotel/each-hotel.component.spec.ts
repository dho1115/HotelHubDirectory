import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EachHotelComponent } from './each-hotel.component';

describe('EachHotelComponent', () => {
  let component: EachHotelComponent;
  let fixture: ComponentFixture<EachHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
