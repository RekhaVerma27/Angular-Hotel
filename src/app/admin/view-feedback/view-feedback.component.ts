import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {
  resData;
  datas;

  constructor(private temp:ApiserviceService) { }

  ngOnInit(): void {
    this.viewFeedbacksData();
  }

  viewFeedbacksData()
  {
    //console.log("Hello");
    this.temp.viewFeedbacks().subscribe(res=>{
    //  console.log(res);

     this.resData=res;
     this.datas=this.resData.feedback;
    //  this.datas=res;
      console.log(this.datas);
    })

  }

  onDelete(id: number) {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.temp.deleteFeedback(+id).subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
       
      )}
    }

}
