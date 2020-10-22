import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Blog2 } from 'src/app/blog2';


@Component({
  selector: 'app-show-booking',
  templateUrl: './show-booking.component.html',
  styleUrls: ['./show-booking.component.css']
})
export class ShowBookingComponent implements OnInit {

  resData;
  data;
  id:number;
  post:Blog2;
  constructor(private temp:ApiserviceService,
              private router : Router,
              private route : ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    //console.log(id);

    this.temp.getBlog2(+id).subscribe((result)=>{
      this.resData=result;
      this.data=this.resData.show_booking;
      console.log(result);
      
  
     })

  }

}
