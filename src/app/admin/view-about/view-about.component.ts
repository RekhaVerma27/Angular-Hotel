import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-view-about',
  templateUrl: './view-about.component.html',
  styleUrls: ['./view-about.component.css']
})
export class ViewAboutComponent implements OnInit {
  resData;
  datas;

  constructor(private temp:ApiserviceService) { }

  ngOnInit(): void {
    this.viewAboutsData();
  }

  viewAboutsData()
  {
    //console.log("Hello");
    this.temp.viewAbouts().subscribe(res=>{
    //  console.log(res);

     this.resData=res;
     this.datas=this.resData.about;
    //  this.datas=res;
      console.log(this.datas);
    })

  }

  onDelete(id: number) {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.temp.deleteAbout(+id).subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
       
      )}
    }

}
