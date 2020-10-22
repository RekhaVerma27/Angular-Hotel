import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { ViewSubscribersComponent } from './view-subscribers/view-subscribers.component';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { ViewAboutComponent } from './view-about/view-about.component';
import { ShowBookingComponent } from './show-booking/show-booking.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { AboutComponent } from '../about/about.component';
import { EditAboutComponent } from './edit-about/edit-about.component';


const routes: Routes = [
  {path:'',component:AdminComponent,
  children:[
    {path:'header',component:HeaderComponent},
    {path:'view-subscribers',component:ViewSubscribersComponent},
    {path:'view-contacts',component:ViewContactsComponent},
    {path:'view-bookings',component:ViewBookingComponent},
    {path:'view-feedbacks',component:ViewFeedbackComponent},
    {path:'view-abouts',component:ViewAboutComponent},
    {path:'show-bookings/:id',component:ShowBookingComponent},
    {path:'add-booking',component:AddBookingComponent},
    {path:'add-booking/:id',component:AddBookingComponent},
    {path:'edit-about/:id',component:EditAboutComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
