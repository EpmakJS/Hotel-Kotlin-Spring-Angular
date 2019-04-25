import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Hotel} from '../../../models/Hotel';
import {HotelService} from '../../../services/hotel/hotel.service';

@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.scss']
})
export class UpdateHotelComponent implements OnInit {
  hotel: Hotel;
  hotelForm: FormGroup;
  constructor(
    private hotelService: HotelService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.hotel = data.uhData;
      this.initForm(this.hotel);
    });
  }

  initForm(hotel: Hotel) {
    const name: string = hotel.name;
    const classification: number = hotel.classification;
    const nbRooms: number = hotel.nbRooms;
    const clients: FormArray = new FormArray([]);

    this.hotelForm = this.fb.group({
      name: [name, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(75)])],
      classification: [classification,
        Validators.compose([Validators.required, Validators.min(1), Validators.max(5), Validators.maxLength(1)])],
      nbRooms: [nbRooms, Validators.compose([Validators.required, Validators.min(1), Validators.max(1500)])],
      clients
    });
  }

  updateHotel(hotel: Hotel) {
    this.activatedRoute.params.subscribe(params => {
      const name: string = params.name;

      this.hotelService.updateHotel(name, hotel)
        .subscribe(newHotel => {
          this.router.navigateByUrl('/hotels');
        });
    });
  }

}
