import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {HotelService} from '../../services/hotel/hotel.service';

@Injectable()
export class HotelsResolver implements Resolve<any> {
  constructor(
    private hotelService: HotelService
  ) {}

  resolve() {
    return this.hotelService.getHotels();
  }
}
