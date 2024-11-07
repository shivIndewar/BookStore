import { Component, inject, OnInit} from '@angular/core';
import { CartService } from '../sharedservices/cart.service';
import { RouterLink } from '@angular/router';
import { book } from '../model/book';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { PizeDetailsComponent } from '../pize-details/pize-details.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, CartItemComponent, PizeDetailsComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  
  cartService = inject(CartService);
  cartItems : any[]=[];

  ngOnInit(): void {
     this.cartItems = this.cartService.getAllCartItems();
  }

} 