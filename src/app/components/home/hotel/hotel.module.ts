import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatTooltipModule
} from '@angular/material';
import {HotelComponent} from './hotel.component';
import {HotelsRoutingModule} from '../hotels-routing.module';
import {ConfirmationDialogComponent} from '../confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    HotelComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDialogModule
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ]
})
export class HotelModule { }
