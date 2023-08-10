import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ManagePurchaseComponent } from './/manage-purchase/manage-purchase.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products',component:ProductComponent},
  {path:'cart', component:CartComponent},
  {path:'admin', component:AdminLoginComponent},
  {path:'adminDashboard', component:AdminDashboardComponent},
  {path:'manageCustomer',component:ManageCustomersComponent},
  {path:'managePurchase',component:ManagePurchaseComponent},
  {path:'paymentGateway',component:PaymentGatewayComponent},
  {path:'orderSummary',component:OrderSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
