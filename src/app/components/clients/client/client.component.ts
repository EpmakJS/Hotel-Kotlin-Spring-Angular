import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/Client';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../../../services/client/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  client: Client;
  constructor(
    private clientService: ClientService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {

      const id: number = params.id;

      this.clientService.getClient(id)
        .subscribe(res => this.client = res);
    });
  }

  deleteClient(id: number) {
    this.clientService.deleteClient(id)
      .subscribe( () =>
        this.router.navigate(['/clients'])
      );
  }

}
