import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../sharedservices/cart.service';

@Component({
  selector: 'app-pize-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './pize-details.component.html',
  styleUrl: './pize-details.component.css'
})
export class PizeDetailsComponent implements OnInit {
 
  
  cartItems : any[]=[];
  cartItemsPrice  :any;
  cartItemsDiscount : any;
  deliveryCharge : any;

  cartService = inject(CartService);

  ngOnInit(): void {
    this.cartItems = this.cartService.getAllCartItems();
    this.getBillingDetails();
    this.cartService.cartSubject.subscribe((items : any)=>{
      this.cartItems = items;
      this.getBillingDetails();
    })
  }

  getBillingDetails(){
    let billingDetails = this.cartService.getBilling(this.cartItems);
    this.cartItemsPrice = billingDetails.price;
    this.cartItemsDiscount = billingDetails.discount;
    this.deliveryCharge = billingDetails.deliveryCharge; 
  }
}
