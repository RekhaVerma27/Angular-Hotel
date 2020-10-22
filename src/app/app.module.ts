import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ServiceComponent } from './service/service.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MyuserlistComponent } from './myuserlist/myuserlist.component';
import { MyregisterComponent } from './myregister/myregister.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ServiceComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    RoomBookingComponent,
    FeedbackComponent,
    ProductComponent,
    LoginComponent,
    ContactPageComponent,
    MyuserlistComponent,
    MyregisterComponent,
    EditComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
