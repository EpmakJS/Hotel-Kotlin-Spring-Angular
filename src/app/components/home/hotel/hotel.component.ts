import {Component, OnInit} from '@angular/core';
import {HotelService} from '../../../services/hotel/hotel.service';
import {Hotel} from '../../../models/Hotel';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfirmationDialogComponent} from '../confirmation-dialog/confirmation-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  hotel: Hotel;
  constructor(
    private hotelService: HotelService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {

      const name: string = params.name;

      this.hotelService.getHotel(name)
        .subscribe(res => this.hotel = res);
    });
  }

  openDialog(name: string) {
    const hotelName = name;

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Are you sure you want to delete this hotel?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        this.deleteHotel(hotelName);
      }
    });
  }

  deleteHotel(name: string) {
    this.hotelService.deleteHotel(name)
      .subscribe(() => {
        this.router.navigate(['/hotels']);
      });
  }

}
