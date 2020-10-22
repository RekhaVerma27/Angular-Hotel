import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from './blog';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class TempService {

  url="http://127.0.0.1:8000/api/"
  constructor(private http:HttpClient) { }

  

  Add_myregister(data5)
  {
    return this.http.post(this.url+'my_register',data5)
  }

  viewUserList()
  {
     return this.http.get(this.url+'my_user_list')
  }

  getBlog(id: number):Observable<any> 
  {
    return this.http.get<Blog>(this.url + 'show/' + id)  
  }

  getshow(id):Observable<any>{
    return this.http.get<Product>(this.url +'show/' +id);
  }

  addResto(data):Observable<any>
  {
    //console.log(data)
    return this.http.post(this.url+'add',data)
  }

  updateblog(blog)
  {
    console.log(blog)
    return this.http.post(this.url+ 'update',blog)
  }

  deleteBlog(id: number) {
    return this.http.delete(this.url + 'delete/' + id)
      
    
  }
}
