import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component'; // Import your DashboardComponent here


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent }, // Route for the dashboard

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductListComponent,canActivate: [AuthGuard]},
  { path: 'products/add', component: ProductAddComponent },
  { path: 'products/edit/:id', component: ProductEditComponent },
  { path: 'products/:id', component: ProductViewComponent },
  { path: 'products/:id', component: ProductDeleteComponent },

  //  { path: '', redirectTo: '/products', pathMatch: 'full' },
  //  { path: '**', redirectTo: '/products', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
