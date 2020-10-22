import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { FormControl, FormGroup ,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  alert:boolean=false
  constructor(private temp:ApiserviceService) { }

  ngOnInit(): void {
    this.viewContactData();
  }
  resData;
  datas;
  contactForm =new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    mobile_no:new FormControl(''),
    message:new FormControl('')
 })

 collectData()
  {
    this.temp.saveContact(this.contactForm.value).subscribe((result)=>{
      console.log(result)
      this.alert=true;
      })
      this.contactForm.reset({})

  }

  viewContactData()
  {
    //console.log("Hello");
    this.temp.viewInfo().subscribe(res=>{
    //  console.log(res);

     this.resData=res;
     this.datas=this.resData.information;
    //  this.datas=res;
      console.log(this.datas);
    })

  }

}
