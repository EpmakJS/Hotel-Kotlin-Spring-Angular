import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatTooltipModule} from '@angular/material';
import {UpdateHotelComponent} from './update-hotel.component';
import {HotelsRoutingModule} from '../hotels-routing.module';

@NgModule({
  declarations: [
    UpdateHotelComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule
  ]
})
export class UpdateHotelModule { }
