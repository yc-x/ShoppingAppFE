import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignupComponent } from './signup/signup.component';
import { ProductCollectionComponent } from './product-collection/product-collection.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductBriefComponent } from './product-brief/product-brief.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    SignupComponent,
    ProductCollectionComponent,
    ProductDetailComponent,
    ProductBriefComponent,
    OrderlistComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
