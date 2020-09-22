import { Component, OnInit, Input } from '@angular/core';
import {HotelQualities} from '../hotel-qualities';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() HotelQualities;
  
  HotelDirectory: HotelQualities[];
  hotel1;
  constructor() { 
    this.hotel1 = {name: 'Marriott', city: 'Los Angeles', state: 'CA'};
    this.HotelDirectory.push(this.hotel1);
  }

  ngOnInit() {
  }

}
