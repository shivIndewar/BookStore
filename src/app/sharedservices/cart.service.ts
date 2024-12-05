import { Injectable } from '@angular/core';
import { book } from '../model/book';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  cartProducts : any[] = []; 
  cartSubject = new Subject();
  constructor() { }

  addProductToCart(product: book){
    let currentBook = {... product, count:1}
    this.cartProducts.push(currentBook);
    this.cartSubject.next(this.cartProducts);
  }

  getAllCartItems(){
    return this.cartProducts;
  }

  getPriceDetailsOfCartProduct(product: any){
    let priceDetails ={
      discountedPrice : (product.price * product.count) - (product.discount)/100*(product.price * product.count),
      totoalPrice : product.price * product.count
    }

    return priceDetails;
  }

  incrementProductCount(product: any){
    let index = this.cartProducts.findIndex((item) => {
      return item.isbn === product.isbn;
    });
    this.cartProducts[index].count++;  
    this.getPriceDetailsOfCartProduct(product);
    this.cartSubject.next(this.cartProducts);  
  }

  decrementProductCount(product: any){
    let index = this.cartProducts.findIndex((item) => {
      return item.isbn === product.isbn;
    });
    this.cartProducts[index].count--;  
    this.getPriceDetailsOfCartProduct(product);
    this.cartSubject.next(this.cartProducts);  
  }

  removeItemFromCart(product:any){
    let removeConfirm = window.confirm("Are you sure!!");
    if(removeConfirm){
      let index = this.cartProducts.findIndex((item) => {
        return item.isbn === product.isbn;
      });

      this.cartProducts.splice(index,1);
      this.cartSubject.next(this.cartProducts);
    }
  }

  getBilling(cartItems: any){
    let billingDetails ={
      price :0,
      discount: 0,
      deliveryCharge: 0
    }
    cartItems.forEach((item: any) => {
      billingDetails.price = billingDetails.price + (item.price * item.count);
      billingDetails.discount = billingDetails.discount + ((item.discount/100 * item.price)*item.count);
      billingDetails.price >= 1500? billingDetails.deliveryCharge = 0 : billingDetails.deliveryCharge = 50;    
    });

    return billingDetails;
  }

  isProductInCart(id: any){
    let book = this.cartProducts.find((book:any)=>{
      return book.isbn === id.isbn
    })
     
    if(book)
      return true
    else
      return false;
  }

  getDiscountedPrice(currentItem : any){
    return currentItem.price - (currentItem.discount)/100 * currentItem.price;
  }

}
