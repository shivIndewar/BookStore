import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'cart',
        component: CartComponent,
    },
    {
        path:'home',
        redirectTo:'',
        pathMatch:'full'
    },
    {
        path:'product-details',
        component: ProductdetailsComponent,
    },
];
