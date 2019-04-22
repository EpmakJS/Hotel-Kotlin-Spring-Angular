import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ClientsComponent} from './components/clients/clients.component';
import {HotelComponent} from './components/hotel/hotel.component';
import {ClientComponent} from './components/client/client.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/hotels',
    pathMatch: 'full'
  },
  {
    path: 'hotels',
    component: HomeComponent,
    data: { title: 'Hotels List' }
  },
  {
    path: 'hotels/:name',
    component: HotelComponent
  },
  {
    path: 'clients',
    component: ClientsComponent,
    data: { title: 'Clients List' }
  },
  {
    path: 'clients/:id',
    component: ClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
