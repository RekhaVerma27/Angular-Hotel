import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms';
import { TempService } from '../temp.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-myregister',
  templateUrl: './myregister.component.html',
  styleUrls: ['./myregister.component.css']
})
export class MyregisterComponent implements OnInit {

  alert:boolean=false

  pageTitle;
  resData;
  collection;
  imagePath: string;
  constructor(private temp:TempService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    if (id) {
      this.pageTitle = 'Edit Resto';
      this.temp.getshow(+id).subscribe((result)=>{
        this.resData=result;
        this.collection=this.resData.show;
        //  console.log(this.collection);
        this.myregister.patchValue({
          name: this.collection.name,
          email: this.collection.email,
          password: this.collection.password,
          image: this.collection.image,
          
          id: this.collection.id
        });
        this.imagePath = this.collection.image_path;
        })
      }
  }

  myregister =new FormGroup({
    id: new FormControl(''),
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    image:new FormControl(''),
    })


    onSelectedFile(event) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.myregister.get('image').setValue(file);
        //console.log(this.blogForm)
  
        
      }
    }


    collectData() {
      //console.log(this.blogForm.value)
      const formData = new FormData();
      formData.append('name', this.myregister.get('name').value);
      formData.append('email', this.myregister.get('email').value);
      formData.append('password', this.myregister.get('password').value);
      formData.append('image', this.myregister.get('image').value);
      const id = this.myregister.get('id').value;
    // console.log(id);
     if (id) {
      console.log('Update Product id ' + id);
      formData.append('id', id);
      this.temp.updateblog(formData).subscribe((result)=>{
          console.log(result)
          this.router.navigate(['/myuserlist']);
        })
      }else
      {
       this.pageTitle = 'Add Resto';
        this.temp.addResto(formData).subscribe((result)=>{
         console.log(result)
       this.router.navigate(['/myuserlist']);
     
    
       })

      
     this.myregister.reset({})
      }
      // console.log(formData)
      // this.temp.Add_myregister(formData).subscribe((result)=>{
      //   //console.log(result)
      //   //this.router.navigate(['/list']);
      //   this.alert=true;   
      // })
      // this.myregister.reset({})
    }
}
