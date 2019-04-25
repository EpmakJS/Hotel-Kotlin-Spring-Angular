import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Client} from '../../../models/Client';
import {ClientService} from '../../../services/client/client.service';
import {HotelService} from '../../../services/hotel/hotel.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  client: Client;
  checkoutForm: FormGroup;
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
    this.checkoutForm = this.fb.group({
      id: [null, Validators.compose([Validators.required])],
      firstName: [null, Validators.compose([Validators.required])],
      lastName: [null, Validators.compose([Validators.required])]
    });
  }

  checkoutClient(client: Client) {
    this.activatedRoute.params.subscribe(params => {
      const name: string = params.name;

      this.hotelService.checkoutClient(name , client)
        .subscribe(() => {
          this.router.navigateByUrl(`/hotels/${name}`);
        });
    });
  }

}
