import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup ,Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  url3="http://127.0.0.1:8000/api/subscribe"
  constructor(private http:HttpClient) { }

  resData;
  datas;
  ngOnInit(): void {
    const url2="http://127.0.0.1:8000/api/inform";
    this.http.get(url2).subscribe(res=>{     // data store
     //console.log(res);
     this.resData=res;
     this.datas=this.resData.information;
     console.log(this.datas);
    })
  }
  subscribe =new FormGroup({
    email:new FormControl(''),
 })

 collectData()
 {
   console.warn(this.subscribe.value);
   this.http.post(this.url3,this.subscribe.value)
   .subscribe((result)=>{
     console.warn(result);
     // this.alert=true;
     this.subscribe.reset();
   })

 }

}
