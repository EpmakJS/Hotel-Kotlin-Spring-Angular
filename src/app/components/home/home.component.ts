import {Component, OnInit} from '@angular/core';
import {HotelService} from '../../services/hotel/hotel.service';
import {Hotel} from '../../models/Hotel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  protected hotels: Array<Hotel>;
  constructor(private hotelService: HotelService,
              private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.hotels = data.hotelsResolver;
    });
  }

  getRating(hotel: Hotel): number {
    return hotel.classification;
  }

}
