import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatTooltipModule} from '@angular/material';
import {CheckinComponent} from './checkin.component';
import {HotelsRoutingModule} from '../hotels-routing.module';

@NgModule({
  declarations: [
    CheckinComponent
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
export class CheckinModule { }
