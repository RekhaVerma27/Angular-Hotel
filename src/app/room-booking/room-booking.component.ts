import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { FormControl, FormGroup ,Validators } from '@angular/forms';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.css']
})
export class RoomBookingComponent implements OnInit {

  alert:boolean=false
  constructor(private temp:ApiserviceService) { }

  ngOnInit(): void {
  }

  booking =new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    mobile_no:new FormControl(''),
    room_type:new FormControl(''),
    no_of_guest:new FormControl(''),
    arival_date:new FormControl(''),
    departure_date:new FormControl(''),
    flight_no:new FormControl(''),
    special_request:new FormControl('')
  })

  collectData()
  {
    this.temp.saveResto(this.booking.value).subscribe((result)=>{
      console.log(result)
      this.alert=true;
      })
      this.booking.reset({})

  }


}
