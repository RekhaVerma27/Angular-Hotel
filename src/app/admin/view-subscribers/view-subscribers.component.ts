import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-view-subscribers',
  templateUrl: './view-subscribers.component.html',
  styleUrls: ['./view-subscribers.component.css']
})
export class ViewSubscribersComponent implements OnInit {
  resData;
  datas;

  constructor(private temp:ApiserviceService) { }

  ngOnInit(): void {
    this.viewSubscribersData();
  }

  viewSubscribersData()
  {
    //console.log("Hello");
    this.temp.viewSubscribers().subscribe(res=>{
    //  console.log(res);

     this.resData=res;
     this.datas=this.resData.subscribe;
    //  this.datas=res;
      console.log(this.datas);
    })

  }

  onDelete(id: number) {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.temp.deleteSubscribe(+id).subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
       
      )}
    }

}
