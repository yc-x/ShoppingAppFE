import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignupComponent } from './signup/signup.component';
import { ProductCollectionComponent } from './product-collection/product-collection.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductBriefComponent } from './product-brief/product-brief.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { MyHttpInterceptorInterceptor } from './services/my-http-interceptor.interceptor';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserFreqProductComponent } from './user-freq-product/user-freq-product.component';
import { UserRecentProductComponent } from './user-recent-product/user-recent-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddProductComponent } from './add-product/add-product.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';




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
    OrderDetailComponent,
    ShoppingCartComponent,
    WatchListComponent,
    NavBarComponent,
    UserFreqProductComponent,
    UserRecentProductComponent,
    EditProductComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, // Include other Angular Material modules
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCardModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
