import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  resData;
  datas;
  constructor(private temp:ApiserviceService) { }

  ngOnInit(): void {
    this.viewAboutData();
  }

  viewAboutData()
  {
    //console.log("Hello");
    this.temp.viewAbout().subscribe(res=>{
    //  console.log(res);

     this.resData=res;
     this.datas=this.resData.about;
    //  this.datas=res;
      console.log(this.datas);
    })

  }

}
