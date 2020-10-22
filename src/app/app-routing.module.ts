import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MyuserlistComponent } from './myuserlist/myuserlist.component';
import { MyregisterComponent } from './myregister/myregister.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'product',component:ProductComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'login',component:LoginComponent},
  {path:'room-booking',component:RoomBookingComponent},
  {path:'contact-page',component:ContactPageComponent},
  {path:'myuserlist',component:MyuserlistComponent},
  {path:'myregister',component:MyregisterComponent},
  {path:'myregister/:id', component:MyregisterComponent},
  {path:'show/:id', component:ShowComponent},
  {path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
