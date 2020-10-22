import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog2 } from './blog2';
import { About } from './about';
import { Product2 } from './product2';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  url="http://127.0.0.1:8000/api/"
  constructor(private http:HttpClient) { }

  saveResto(data)
  {
    //console.log(data)
    return this.http.post(this.url+'booking',data)
  }

  saveContact(data)
  {
    //console.log(data)
    return this.http.post(this.url+'add',data)
  }

  viewAbout()
  {
    //console.log(data)
    return this.http.get(this.url+'about')
  }

  saveFeedback(data)
  {
    //console.log(data)
    return this.http.post(this.url+'feedback',data)
  }

  viewCard()
  {
    //console.log(data)
    return this.http.get(this.url+'card')
  }

  viewInfo()
  {
    //console.log(data)
    return this.http.get(this.url+'inform')
  }

  viewSubscribers()
  {
    //console.log(data)
    return this.http.get(this.url+'view-subscribers')
  }

  viewContacts()
  {
    //console.log(data)
    return this.http.get(this.url+'view-contacts')
  }

  viewBookings()
  {
    //console.log(data)
    return this.http.get(this.url+'view-bookings')
  }

  viewFeedbacks()
  {
    //console.log(data)
    return this.http.get(this.url+'view-feedbacks')
  }

  viewAbouts()
  {
    //console.log(data)
    return this.http.get(this.url+'view-abouts')
  }

  getBlog2(id: number):Observable<any> 
  {
    return this.http.get<Blog2>(this.url + 'show_booking/' + id)  
  }

  getshow2(id):Observable<any>{
    return this.http.get<Product2>(this.url +'show_booking/' +id);
  }

  addBooking(data):Observable<any>
  {
    //console.log(data)
    return this.http.post(this.url+'add_booking',data)
  }

  updateBooking(blog2)
  {
    console.log(blog2)
    return this.http.post(this.url+ 'update_booking',blog2)
  }

  deleteBlog2(id: number) {
    return this.http.delete(this.url + 'delete_booking/' + id)  
  }

  deleteContact(id: number) {
    return this.http.delete(this.url + 'delete_contact/' + id)  
  }

  deleteSubscribe(id: number) {
    return this.http.delete(this.url + 'delete_subscribe/' + id)  
  }

  deleteFeedback(id: number) {
    return this.http.delete(this.url + 'delete_feedback/' + id)  
  }

  deleteAbout(id: number) {
    return this.http.delete(this.url + 'delete_About/' + id)  
  }

   // Myregister Form
   addAbout(data5)                                   
   {
     return this.http.post(this.url+'add_about',data5)
   }
 
 
   getAbout(id: number):Observable<any>                           //show user
   {
     return this.http.get<About>(this.url + 'show_about/' + id)  
   }
 
   
 
   updateAbout(about)
   {
     return this.http.post<any>(this.url + 'update_about/',about)
   }
  
}
