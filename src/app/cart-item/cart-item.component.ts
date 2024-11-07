import { Component, inject, Input, OnInit } from '@angular/core';
import { book } from '../model/book';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../sharedservices/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent implements OnInit {
  
  cartService = inject(CartService);
  discountPrice : any;
  itemPrice : any;
  ngOnInit(): void {
    this.getPriceDetails(this.book);
  }
  @Input() book : any;


  getPriceDetails(item:any){
    this.discountPrice = this.cartService.getPriceDetailsOfCartProduct(item).discountedPrice;
    this.itemPrice = this.cartService.getPriceDetailsOfCartProduct(item).totoalPrice;
  }

  removeProduct(item:any){
    this.cartService.removeItemFromCart(item);
  }

  decrementItemCount(item:any) {
    this.cartService.decrementProductCount(item);
    this.getPriceDetails(item);
  }

  incrementItemCount(item:any){
    this.cartService.incrementProductCount(item);
    this.getPriceDetails(item);
  } 
}
