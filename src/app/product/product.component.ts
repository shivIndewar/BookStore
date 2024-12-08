import { Component, inject, Inject, Input, OnInit, Output } from '@angular/core';
import { book } from '../model/book';
import { CartService } from '../sharedservices/cart.service';
import { RouterLink } from '@angular/router';
import { WareHouseNode } from '../model/WareHouseNode';
import { EventEmitter } from 'stream';
import { BookserviceService } from '../sharedservices/bookservice.service';
import { Subject } from 'rxjs';
import { Router } from 'express';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
 
  @Input() book : book = new book();
  @Input() warehoiseProducts : WareHouseNode={name:"",productId:0, categoryId:0,productType:"",children:[],productSeriesNo:"", description:""};

  isProductInCart : boolean = false;
  cartService = inject(CartService);
  bookservice = inject(BookserviceService);
  router = inject(Router);
  id : any;
  ngOnInit(): void {
    this.id = {'isbn':this.book.isbn};
    // console.log("Products",this.warehoiseProducts);
    this.book.isProductInCart = this.cartService.isProductInCart(this.book);
  }

  addToCart(book: book){
    this.cartService.addProductToCart(book); 
    this.book.isProductInCart = true;
  } 

  productDispaly(productType : any, productId: any){
    if(productType === 'category'){
       const cat =  this.bookservice.getCurrentProduct(productId);
    }
    else{
      // this.router.navigate(['/product-details']);
    }
  }

}
