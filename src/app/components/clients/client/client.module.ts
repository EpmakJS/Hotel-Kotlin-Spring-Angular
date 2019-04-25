import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';
import {ClientComponent} from './client.component';

@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ]
})
export class ClientModule { }
