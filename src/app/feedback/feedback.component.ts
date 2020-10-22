import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { FormControl, FormGroup ,Validators } from '@angular/forms';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  alert:boolean=false;
  constructor(private temp:ApiserviceService) { }

  ngOnInit(): void {
  }

  feedback =new FormGroup({
    rating:new FormControl(''),
    message:new FormControl('')
 })

  collectData()
  {
    this.temp.saveFeedback(this.feedback.value).subscribe((result)=>{
      console.log(result)
      this.alert=true;
      })
      this.feedback.reset({})

  }
}