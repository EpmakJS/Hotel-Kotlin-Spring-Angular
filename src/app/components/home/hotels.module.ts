import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HotelsRoutingModule} from './hotels-routing.module';
import {HomeComponent} from './home.component';

import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {CheckinModule} from './checkin/checkin.module';
import {CheckoutModule} from './checkout/checkout.module';
import {HotelModule} from './hotel/hotel.module';
import {HotelFormModule} from './hotel-form/hotel-form.module';
import {StarRatingModule} from 'angular-star-rating';
import {MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    CheckinModule,
    CheckoutModule,
    HotelModule,
    HotelFormModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    StarRatingModule.forRoot()
  ]
})
export class HotelsModule { }
