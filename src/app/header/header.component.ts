import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../sharedservices/cart.service';
import { RouterLink } from '@angular/router';
import { BookserviceService } from '../sharedservices/bookservice.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  headerText : string="";
  cartService = inject(CartService);
  bookService = inject(BookserviceService);
  cartItemCount : number = 0;
  criteria : any[] = ['Price (low to high)','Price (high to low)', 'Discount (High to low)','Discount (Low to High)'];
  isShowSortMenu :boolean = false;
  ngOnInit(): void {
    this.cartService.cartSubject.subscribe((cartItem:any)=>{
      this.cartItemCount = cartItem.length;
    })
  }

  sortBookAccordingToCriteria(criteria: any){
    console.log(criteria);
    this.bookService.sortBooksCriteria(criteria);
    this.isShowSortMenu = !this.isShowSortMenu;
  }

  showSortMenu(){
    this.isShowSortMenu = !this.isShowSortMenu;
  }
}
