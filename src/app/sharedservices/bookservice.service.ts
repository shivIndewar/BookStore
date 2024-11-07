import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http : HttpClient) { }
  books : any [] = [];
  sortBookSubject = new Subject();
  filteredBooks : any;

  getAllBooks(){
    return this.http.get("http://localhost:3000/books").pipe(map((book : any)=>{
      debugger;
      this.books = book;
      this.filteredBooks = this.books;
      return book;
    }));
  }

  sortBooksCriteria(criteria : any){
    debugger;
    this.sortBookSubject.next(criteria);
  }

  sortBooks(criteria:any){
    debugger;
    switch (criteria) {
      case 'Price (low to high)':
          this.filteredBooks.sort((a:any, b: any)=>{
            if(a.price > b.price)
              return 1;
            if(a.price < b.price)
              return -1;

            return 0;
          });

          return this.filteredBooks;
        break;
        case 'Price (high to low)':
          break;
        case 'Discount (High to low)':
          break;
        case 'Discount (Low to High)':
          break;  
      default:
        break;
    }     
  }

  getCurrentBook(id:any){
    let book =  this.books.find((book: any)=>{
      return book.isbn === id.isbn;
    })
      return book;
  }

}
