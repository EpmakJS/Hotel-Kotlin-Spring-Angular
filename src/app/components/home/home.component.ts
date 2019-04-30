import {Component, OnInit} from '@angular/core';
import {Hotel} from '../../models/Hotel';
import {FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hotels: Array<Hotel>;
  hotelsHolder: Array<Hotel>;

  filterControl: FormControl;
  filterOptions: RadiobuttonOption[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.hotelsHolder = data.hotelsResolver;
    });

    this.hotels = this.hotelsHolder;

    this.filterOptions = [
      {
        value: 'all',
        label: 'All :)'
      },
      {
        value: 3,
        label: '3-star'
      },
      {
        value: 4,
        label: '4-star'
      },
      {
        value: 5,
        label: '5-star'
      },
    ];

    this.filterControl = new FormControl('all');
    this.filterControl.valueChanges.subscribe(value => {
      if (value === 'all') {
        this.hotels = this.hotelsHolder;
        return;
      }
      this.hotels = this.hotelsHolder.filter(hotel => hotel.classification === value);
    });
  }

  getRating(hotel: Hotel): number {
    return hotel.classification;
  }

}

export interface RadiobuttonOption {
  value: any;
  label: string;
}
