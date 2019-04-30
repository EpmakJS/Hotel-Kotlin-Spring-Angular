import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardRadiobuttonComponent} from './card-radiobutton.component';
import {MatIconModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  declarations: [CardRadiobuttonComponent],
  exports: [CardRadiobuttonComponent]
})
export class CardRadiobuttonModule { }
