import {Component, OnInit, forwardRef, ChangeDetectionStrategy} from '@angular/core';
import {HotelService} from '../../services/hotel/hotel.service';
import {Hotel} from '../../models/Hotel';
import {ActivatedRoute} from '@angular/router';

import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const TYPE_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => HomeComponent),
  multi: true
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TYPE_CONTROL_ACCESSOR]
})
export class HomeComponent implements OnInit, ControlValueAccessor {
  value = 'All :)';
  selectors = ['All :)', '3-star', '4-star', '5-star'];
  private onTouch;
  private onModelChange;
  private hotels: Array<Hotel>;
  private hotelsHolder: Array<Hotel>;
  constructor(private hotelService: HotelService,
              private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.hotels = data.hotelsResolver;
      this.hotelsHolder = data.hotelsResolver;
    });
  }

  getRating(hotel: Hotel): number {
    return hotel.classification;
  }

  selectType(value: string) {
    this.value = value;
    switch (this.value) {
      case 'All :)':
        this.hotels = this.hotelsHolder;
        break;
      case '3-star':
        this.hotels = this.hotelsHolder.filter(hotel => hotel.classification === 3);
        break;
      case '4-star':
        this.hotels = this.hotelsHolder.filter(hotel => hotel.classification === 4);
        break;
      case '5-star':
        this.hotels = this.hotelsHolder.filter(hotel => hotel.classification === 5);
        break;
      default:
        this.hotels = this.hotelsHolder;
    }
  }

  writeValue(obj: string) {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

}
