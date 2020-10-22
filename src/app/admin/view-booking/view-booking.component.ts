import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {
  resData;
  datas;
  constructor(private temp:ApiserviceService) { }

  ngOnInit(): void {
    this.viewBookingsData();
  }

  viewBookingsData()
  {
    //console.log("Hello");
    this.temp.viewBookings().subscribe(res=>{
    //  console.log(res);

     this.resData=res;
     this.datas=this.resData.booking;
    //  this.datas=res;
      console.log(this.datas);
    })

  }

  onDelete(id: number) {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.temp.deleteBlog2(+id).subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
       
      )}
    }

}
