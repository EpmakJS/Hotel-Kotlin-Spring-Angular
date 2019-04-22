import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client/client.service';

import { Client } from '../../models/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  protected clients: Array<Client>;
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients()
      .subscribe(res => this.clients = res);
  }

}
