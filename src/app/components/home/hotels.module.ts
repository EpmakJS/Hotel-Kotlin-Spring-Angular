import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckinModule} from './checkin/checkin.module';
import {CheckoutModule} from './checkout/checkout.module';
import {HotelModule} from './hotel/hotel.module';
import {HotelFormModule} from './hotel-form/hotel-form.module';
import {CardRadiobuttonModule} from './card-radiobutton/card-radiobutton.module';
import {HomeComponent} from './home.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatTooltipModule
} from '@angular/material';
import {StarRatingModule} from 'angular-star-rating';
import {HotelsRoutingModule} from './hotels-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HotelsRoutingModule,
    CommonModule,
    CheckinModule,
    CheckoutModule,
    HotelModule,
    HotelFormModule,
    CardRadiobuttonModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    StarRatingModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HotelsModule { }
