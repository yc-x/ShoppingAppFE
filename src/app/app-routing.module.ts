import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignupComponent } from './signup/signup.component';
import { ProductCollectionComponent } from './product-collection/product-collection.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { OrderlistComponent } from './orderlist/orderlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/orders/all', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'products/all', component: ProductCollectionComponent},
  { path: 'product/:id', component: ProductDetailComponent},
  { path: 'orders/all', component: OrderlistComponent},
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
