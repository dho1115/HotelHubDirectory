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
  
  constructor() { 
    this.hotel1.name = "MGM";
  }

  ngOnInit() {
  }

}
