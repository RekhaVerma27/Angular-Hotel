import { Component, OnInit } from '@angular/core';
import { TempService } from '../temp.service';

@Component({
  selector: 'app-myuserlist',
  templateUrl: './myuserlist.component.html',
  styleUrls: ['./myuserlist.component.css']
})
export class MyuserlistComponent implements OnInit {

  resData;
  datas;
  constructor(private temp:TempService) { }

  ngOnInit(): void {
    this.viewUserData();
  }

  viewUserData()
  {
    //console.log("Hello");
    this.temp.viewUserList().subscribe(res=>{
    //  console.log(res);

     this.resData=res;
     this.datas=this.resData.userlist;
    //  this.datas=res;
      console.log(this.datas);
    })
  }

  onDelete(id: number) {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.temp.deleteBlog(+id).subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
       
      )}
    }

}
