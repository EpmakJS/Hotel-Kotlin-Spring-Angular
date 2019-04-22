import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../services/hotel/hotel.service';

import { Hotel } from '../../models/Hotel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  protected hotels: Array<Hotel>;
  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.hotelService.getHotels()
      .subscribe(res => this.hotels = res);
  }

}
