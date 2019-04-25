import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import {NavigationComponent} from './navigation.component';

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,

  ]
})
export class NavigationModule { }
