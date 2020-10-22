import { Component, OnInit } from '@angular/core';
import { TempService } from '../temp.service';
import { Blog } from '../blog';
// import { Route } from '@angular/compiler/src/core';
// import { ActivatedRoute } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  resData;
  data;
  id:number;
  post:Blog;
  constructor(private temp:TempService,
              private router : Router,
              private route : ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    //console.log(id);

    this.temp.getBlog(+id).subscribe((result)=>{
      this.resData=result;
      this.data=this.resData.show;
      console.log(result);
      
  
     })

  }

}
