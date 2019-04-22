import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../services/hotel/hotel.service';
import { Hotel } from '../../models/Hotel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  hotel: Hotel;
  constructor(private hotelService: HotelService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {

      const name: string = params.name;

      this.hotelService.getHotel(name)
        .subscribe(res => this.hotel = res);
    });
  }

}
