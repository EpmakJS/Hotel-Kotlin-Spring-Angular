import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {HotelService} from '../../../services/hotel/hotel.service';

@Injectable()
export class UpdateHotelResolver implements Resolve<any> {
  constructor(
    private hotelService: HotelService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.hotelService.getHotel(route.paramMap.get('name'));
  }
}
