import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Hotel} from '../../../models/Hotel';
import {HotelService} from '../../../services/hotel/hotel.service';


@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.scss']
})
export class HotelFormComponent implements OnInit {
  hotel: Hotel;
  hotelForm: FormGroup;
  nameControl: FormControl;
  classificationControl: FormControl;
  nbRoomsControl: FormControl;

  constructor(
    private hotelService: HotelService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    const clients: FormArray = new FormArray([]);

    this.nameControl = new FormControl(
      null,
      [Validators.required, Validators.minLength(3), Validators.maxLength(75)]
    );
    this.classificationControl = new FormControl(
      null,
      [Validators.required, Validators.min(1), Validators.max(5), Validators.maxLength(1)]
    );
    this.nbRoomsControl = new FormControl(
      null,
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
}
