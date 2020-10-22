import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AsidebarComponent } from './asidebar/asidebar.component';
import { ViewSubscribersComponent } from './view-subscribers/view-subscribers.component';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { ViewAboutComponent } from './view-about/view-about.component';
import { ShowBookingComponent } from './show-booking/show-booking.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditAboutComponent } from './edit-about/edit-about.component';


@NgModule({
  declarations: [AdminComponent, HeaderComponent, FooterComponent, SidebarComponent, TopbarComponent, AsidebarComponent, ViewSubscribersComponent, ViewContactsComponent, ViewBookingComponent, ViewFeedbackComponent, ViewAboutComponent, ShowBookingComponent, AddBookingComponent, EditAboutComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
