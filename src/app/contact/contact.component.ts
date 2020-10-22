import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup ,Validators } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  //alert:boolean=false
  url="http://127.0.0.1:8000/api/add"
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  contactForm =new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    mobile_no:new FormControl(''),
    message:new FormControl(''),
 })

  collectData()
  {
    console.warn(this.contactForm.value);
    this.http.post(this.url,this.contactForm.value)
    .subscribe((result)=>{
      console.warn(result);
      // this.alert=true;
      this.contactForm.reset();
    })

  }

}
