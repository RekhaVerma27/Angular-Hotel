import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {
  alert:boolean=false
  constructor(private temp:ApiserviceService,
              private router : Router,
              private route : ActivatedRoute) { }

  resData;
  data;
  collection;
  pageTitle;
  imagePath;
  imagePath1;

  myregister =new FormGroup({
    id: new FormControl(''),
    heading:new FormControl(''),
    content:new FormControl(''),
    heading1:new FormControl(''),
    content1:new FormControl(''),
    image:new FormControl(''),
    image1:new FormControl(''),
    })

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      console.log(id);
  
      if (id) {
        this.pageTitle = 'Edit';
        this.temp.getAbout(+id).subscribe((result)=>{
          this.resData=result;
          this.collection=this.resData.show_about;
           console.log(this.collection);
        
           this.myregister.patchValue({
             
            heading: this.collection.heading,
            content: this.collection.content,
            heading1: this.collection.heading1,
            content1: this.collection.content1,
            id: this.collection.id
          });
          this.imagePath = this.collection.image_path,
          this.imagePath1 = this.collection.image_path1
    
       });
      }
    }

    onSelectedFile(event) {
      if (event.target.files.length > 0)
      {
        const file = event.target.files[0];
        this.myregister.get('image').setValue(file);
        //console.log(this.blogForm)  
      }
    }

    onSelectedFile1(event1) {
      if (event1.target.files.length > 0)
      {
        const file = event1.target.files[0];
        this.myregister.get('image1').setValue(file);
        //console.log(this.blogForm)  
      }
    }

    onSubmit()
    {
      //console.log(this.myregister.value)
      const formData = new FormData();

      formData.append('heading', this.myregister.get('heading').value);
      formData.append('content', this.myregister.get('content').value);
      formData.append('heading1', this.myregister.get('heading1').value);
      formData.append('content1', this.myregister.get('content1').value);
      formData.append('image', this.myregister.get('image').value);
      formData.append('image1', this.myregister.get('image1').value);
      const id = this.myregister.get('id').value;

      if(id)
      {
        console.log('Update Product Id' + id);
        formData.append('id', id);
        this.temp.updateAbout(formData).subscribe((result)=>{
          console.log(result)
          this.router.navigate(['/admin/view-abouts']);
        })
      }
      else
      {
        this.pageTitle = 'Add Register';
        this.temp.addAbout(formData).subscribe((result)=>{
          this.router.navigate(['/admin/view-abouts']);
        })
        this.myregister.reset({})
      }
    }

}
