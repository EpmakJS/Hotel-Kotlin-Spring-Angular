import {Component, OnInit} from '@angular/core';

import {Client} from '../../models/Client';
import {ClientService} from '../../services/client/client.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  protected clients: Array<Client>;
  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.clients = data.clientsResolver;
    });
  }

}
