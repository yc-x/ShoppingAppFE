import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignupComponent } from './signup/signup.component';
import { ProductCollectionComponent } from './product-collection/product-collection.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { AuthGuardService } from './services/auth-guard.service';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminGuardService } from './services/admin-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'products/all', component: ProductCollectionComponent, canActivate: [AuthGuardService]},
  { path: 'products/add', component:AddProductComponent, canActivate: [AdminGuardService]},
  { path: 'products/:id', component: ProductDetailComponent, canActivate: [AuthGuardService]},
  { path: 'products/:id/edit', component: EditProductComponent, canActivate: [AdminGuardService]},
  { path: 'cart', component: ShoppingCartComponent, canActivate: [AuthGuardService]},
  { path: 'orders/all', component: OrderlistComponent, canActivate: [AuthGuardService]},
  { path: 'orders/:id', component: OrderDetailComponent, canActivate: [AuthGuardService]},
  { path: 'watchlist', component: WatchListComponent, canActivate: [AuthGuardService]},
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
