import { Component, inject, Inject, Input, OnInit } from '@angular/core';
import { book } from '../model/book';
import { CartService } from '../sharedservices/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
 
  @Input() book : book = new book();
  isProductInCart : boolean = false;
  cartService = inject(CartService);
  id : any;

  ngOnInit(): void {
    this.id = {'isbn':this.book.isbn};
    debugger;
    this.book.isProductInCart = this.cartService.isProductInCart(this.book);
  }
  addToCart(book: book){
    debugger;
    this.cartService.addProductToCart(book);
    this.book.isProductInCart = true;
  } 

}
