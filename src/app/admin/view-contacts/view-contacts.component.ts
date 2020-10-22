import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.css']
})
export class ViewContactsComponent implements OnInit {
  resData;
  datas;
  constructor(private temp:ApiserviceService) { }

  ngOnInit(): void {
    this.viewContactsData();
  }

  viewContactsData()
  {
    //console.log("Hello");
    this.temp.viewContacts().subscribe(res=>{
    //  console.log(res);

     this.resData=res;
     this.datas=this.resData.contact;
    //  this.datas=res;
      console.log(this.datas);
    })

  }

  onDelete(id: number) {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.temp.deleteContact(+id).subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
       
      )}
    }

}
