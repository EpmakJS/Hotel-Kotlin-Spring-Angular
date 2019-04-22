import { Client } from './Client';

export class Hotel {
  id: number;
  name: string;
  classification: number;
  nbRooms: number;
  clients: Client[];
}
