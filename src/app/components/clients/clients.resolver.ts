import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {ClientService} from '../../services/client/client.service';

@Injectable()
export class ClientsResolver implements Resolve<any> {
  constructor(
    private clientService: ClientService
  ) {}

  resolve() {
    return this.clientService.getClients();
  }
}
