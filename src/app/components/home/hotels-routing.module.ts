import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {HotelFormComponent} from './hotel-form/hotel-form.component';
import {HotelComponent} from './hotel/hotel.component';
import {CheckinComponent} from './checkin/checkin.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {HotelsResolver} from './hotels.resolver';
import {UpdateHotelResolver} from './hotel-form/update-hotel.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      hotelsResolver: HotelsResolver
    }
  },
  {
    path: 'add_hotel',
    component: HotelFormComponent
  },
  {
    path: ':name',
    component: HotelComponent
  },
  {
    path: ':name/checkin',
    component: CheckinComponent
  },
  {
    path: ':name/checkout',
    component: CheckoutComponent
  },
  {
    path: ':name/update',
    component: HotelFormComponent,
    resolve: {
      uhData: UpdateHotelResolver
    }
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    HotelsResolver,
    UpdateHotelResolver
  ]
})
export class HotelsRoutingModule { }
