import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientsRoutingModule} from './clients-routing.module';
import {ClientsComponent} from './clients.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClientModule} from './client/client.module';
import {ClientFormModule} from './client-form/client-form.module';

@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ClientModule,
    ClientFormModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
  ],
  declarations: [
    ClientsComponent,
  ]
})
export class ClientsModule { }
