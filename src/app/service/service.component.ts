import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  resData;
  datas;
  constructor(private temp:ApiserviceService) { }

  ngOnInit(): void {
    this.viewCardData();
  }

  viewCardData()
  {
    //console.log("Hello");
    this.temp.viewCard().subscribe(res=>{
    //  console.log(res);

     this.resData=res;
     this.datas=this.resData.card;
    //  this.datas=res;
      console.log(this.datas);
    })

  }

}
