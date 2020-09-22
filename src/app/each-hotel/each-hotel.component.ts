import { Component, OnInit, Input } from '@angular/core';
import {HotelQualities} from '../hotel-qualities'; //How to write: import{[the name of the class]} from '../path to the class';

@Component({
  selector: 'app-each-hotel',
  templateUrl: './each-hotel.component.html',
  styleUrls: ['./each-hotel.component.css']
})

export class EachHotelComponent {
  @Input() hotel1: HotelQualities;
}
