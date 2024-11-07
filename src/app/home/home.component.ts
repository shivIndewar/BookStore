import { Component, inject, OnInit, signal } from '@angular/core';
import { SidePanelComponent } from '../side-panel/side-panel.component';
import { BookserviceService } from '../sharedservices/bookservice.service';
import { ProductComponent } from '../product/product.component';
import { book } from '../model/book';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidePanelComponent, ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  books = signal<book[]>([]);
  booksService = inject(BookserviceService);
  
  ngOnInit(): void {
    this.loadAllBooks();
    this.booksService.sortBookSubject.subscribe((criteria:any)=>{
      debugger;
      this.books.set(this.booksService.sortBooks(criteria));
    });
  }

  loadAllBooks(){
    this.booksService.getAllBooks().subscribe((res)=>{
      this.books.set(res);
    });
  }
}
