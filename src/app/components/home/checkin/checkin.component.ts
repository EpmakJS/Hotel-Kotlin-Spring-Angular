import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Client} from '../../../models/Client';
import {ClientService} from '../../../services/client/client.service';
import {HotelService} from '../../../services/hotel/hotel.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent implements OnInit {

  client: Client;
  checkinForm: FormGroup;
  constructor(
    private clientService: ClientService,
    private hotelService: HotelService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.checkinForm = this.fb.group({
      id: [null],
      firstName: [null, Validators.compose([Validators.required])],
      lastName: [null, Validators.compose([Validators.required])]
    });
  }

  checkinClient(client: Client) {
    this.activatedRoute.params.subscribe(params => {
      const name: string = params.name;

      this.hotelService.checkinClient(name , client)
        .subscribe(() => {
          this.router.navigateByUrl(`/hotels/${name}`);
        });
    });
  }

}
