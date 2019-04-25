import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hotels',
    pathMatch: 'full'
  },
  {
    path: 'hotels',
    loadChildren: './components/home/hotels.module#HotelsModule'
  },
  {
    path: 'clients',
    loadChildren: './components/clients/clients.module#ClientsModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
