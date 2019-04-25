import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatTooltipModule} from '@angular/material';
import {CheckoutComponent} from './checkout.component';
import {HotelsRoutingModule} from '../hotels-routing.module';

@NgModule({
  declarations: [
    CheckoutComponent
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
export class CheckoutModule { }
