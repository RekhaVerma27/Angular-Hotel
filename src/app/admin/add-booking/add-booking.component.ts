import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { FormControl, FormGroup ,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {

  alert:boolean=false
  pageTitle;
  resData;
  collection;
  constructor(private temp:ApiserviceService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    if (id) {
      this.pageTitle = 'Edit Resto';
      this.temp.getshow2(+id).subscribe((result)=>{
        this.resData=result;
        this.collection=this.resData.show_booking;
        //  console.log(this.collection);
        this.booking2.patchValue({
          name: this.collection.name,
          email: this.collection.email,
          mobile_no: this.collection.mobile_no,
          room_type: this.collection.room_type,
          no_of_guest: this.collection.no_of_guest,
          arival_date: this.collection.arival_date,
          departure_date: this.collection.departure_date,
          flight_no: this.collection.flight_no,
          special_request: this.collection.special_request,
          
          id: this.collection.id
        });
    
        })
      }
  }

  booking2 =new FormGroup({
    id:new FormControl(''),
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
       //console.log(this.blogForm.value)
       const formData = new FormData();

       formData.append('name', this.booking2.get('name').value);
       formData.append('email', this.booking2.get('email').value);
       formData.append('mobile_no', this.booking2.get('mobile_no').value);
       formData.append('room_type', this.booking2.get('room_type').value);
       formData.append('no_of_guest', this.booking2.get('no_of_guest').value);
       formData.append('arival_date', this.booking2.get('arival_date').value);
       formData.append('departure_date', this.booking2.get('departure_date').value);
       formData.append('flight_no', this.booking2.get('flight_no').value);
       formData.append('special_request', this.booking2.get('special_request').value);
       const id = this.booking2.get('id').value;

           // console.log(id);
     if (id) {
      console.log('Update Product id ' + id);
      formData.append('id', id);
      this.temp.updateBooking(formData).subscribe((result)=>{
          console.log(result)
          this.router.navigate(['/admin/view-bookings']);
        })
      }else
      {
       this.pageTitle = 'Add Booking';
        this.temp.addBooking(formData).subscribe((result)=>{
         console.log(result)
       this.router.navigate(['/admin/view-bookings']);
     
    
       })

      
     this.booking2.reset({})
      }

       
    // this.temp.saveResto(this.booking2.value).subscribe((result)=>{
    //   console.log(result)
    //   this.alert=true;
    //   })
      // this.booking2.reset({})
       

  }

}
