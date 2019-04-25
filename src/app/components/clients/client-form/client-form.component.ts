import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Client} from '../../../models/Client';
import {ClientService} from '../../../services/client/client.service';


@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
  client: Client;
  clients: Array<Client>;
  clientForm: FormGroup;
  constructor(
    private clientService: ClientService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.clientService.getClients()
      .subscribe(res => this.clients = res);

    this.initForm();
  }

  initForm() {
      this.clientForm = this.fb.group({
        firstName: [null, Validators.compose([Validators.required])],
        lastName: [null, Validators.compose([Validators.required])]
    });
  }

  addClient(client: Client) {
    this.clientService.createClient(client)
      .subscribe(newClient => {
        this.clients.push(newClient);
        this.router.navigateByUrl('/clients');
      });
  }
}
