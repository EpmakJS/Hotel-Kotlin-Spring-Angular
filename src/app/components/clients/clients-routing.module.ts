import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ClientFormComponent} from './client-form/client-form.component';
import {ClientComponent} from './client/client.component';
import {ClientsComponent} from './clients.component';
import {ClientsResolver} from './clients.resolver';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
    resolve: {
      clientsResolver: ClientsResolver
    }
  },
  {
    path: 'add_client',
    component: ClientFormComponent
  },
  {
    path: ':id',
    component: ClientComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    ClientsResolver
  ]
})
export class ClientsRoutingModule { }
