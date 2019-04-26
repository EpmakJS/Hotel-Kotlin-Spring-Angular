import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Hotel} from '../../../models/Hotel';
import {HotelService} from '../../../services/hotel/hotel.service';


@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.scss']
})
export class HotelFormComponent implements OnInit {
  hotel: Hotel;
  editingStatus = false;
  hotelForm: FormGroup;
  nameControl: FormControl;
  classificationControl: FormControl;
  nbRoomsControl: FormControl;

  constructor(
    private hotelService: HotelService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    if ('name' in this.activatedRoute.snapshot.params) {
      this.editingStatus = true;
    }
  }

  ngOnInit() {
    if (this.editingStatus) {
      this.activatedRoute.data.subscribe(data => {
        this.hotel = data.uhData;
        this.initForm(this.hotel);
      });
    } else {
      this.initForm();
    }
  }

  initForm(hotel?: Hotel) {
    let name = null;
    let classification = null;
    let nbRooms = null;

    if (hotel) {
      name = hotel.name;
      classification = hotel.classification;
      nbRooms = hotel.nbRooms;
    }

    const clients: FormArray = new FormArray([]);

    this.nameControl = new FormControl(
      name,
      [Validators.required, Validators.minLength(3), Validators.maxLength(75)]
    );
    this.classificationControl = new FormControl(
      classification,
      [Validators.required, Validators.min(1), Validators.max(5), Validators.maxLength(1)]
    );
    this.nbRoomsControl = new FormControl(
      nbRooms,
      [Validators.required, Validators.min(1), Validators.max(1500)]
    );

    this.hotelForm = this.fb.group({
      name: this.nameControl,
      classification: this.classificationControl,
      nbRooms: this.nbRoomsControl,
      clients
    });
  }

  addHotel() {
    this.hotelService.createHotel(this.hotelForm.value)
      .subscribe(newHotel => {
        this.router.navigateByUrl('/');
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
