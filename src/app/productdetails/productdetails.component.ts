import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookserviceService } from '../sharedservices/bookservice.service';
import { CartService } from '../sharedservices/cart.service';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit {

  currentProduct : any;
  discountedPrice: any;
  isProductInCart : any;

  bookservice = inject(BookserviceService);
  cartService = inject(CartService);
  activatedRoutes = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoutes.queryParams.subscribe((res)=>{
      debugger;
      this.currentProduct = this.bookservice.getCurrentBook(res);
    })
    this.isProductInCart = this.cartService.isProductInCart(this.currentProduct); 
    this.discountedPrice = this.cartService.getDiscountedPrice(this.currentProduct);
  }

  addToCart(product: any){
    this.cartService.addProductToCart(product);
  }
}
