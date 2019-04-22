import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client/client.service';
import { Client } from '../../models/Client';
import { ActivatedRoute } from '@angular/router';
import {HotelService} from '../../services/hotel/hotel.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  client: Client;
  constructor(private clientService: ClientService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {

      const id: number = params.id;

      this.clientService.getClient(id)
        .subscribe(res => this.client = res);
    });
  }

}
