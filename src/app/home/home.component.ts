import { Component, inject, OnInit, signal } from '@angular/core';
import { SidePanelComponent } from '../side-panel/side-panel.component';
import { BookserviceService } from '../sharedservices/bookservice.service';
import { ProductComponent } from '../product/product.component';
import { book } from '../model/book';
import { WareHouseNode } from '../model/WareHouseNode';
import { Product, WareHouseDto } from '../model/warehouse';

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
  warehoiseNode: WareHouseNode[] = [];
  wareHouse : WareHouseDto[] = [];
  ngOnInit(): void {
   this.loadAllBooks();

    this.booksService.sortBookSubject.subscribe((criteria:any)=>{
      this.books.set(this.booksService.sortBooks(criteria));
    });
    this.loadAllProducts();
  }

  loadAllBooks(){
    this.booksService.getAllBooks().subscribe((res)=>{
      this.books.set(res);
    });
  }

  loadAllProducts(){
    debugger;
    this.booksService.getAllProducts().subscribe((data: WareHouseDto[])=>{
      this.wareHouse = data;
      this.prepareDataSource();
    })
  }

  prepareDataSource(){
    debugger;
    this.wareHouse.forEach((product : WareHouseDto)=>{
      let initData = { 
        name : "", 
        categoryId : 0,
        productId: 0,
        products:[],
        productType:"" 
    } 
      let node : WareHouseNode = {name :"", categoryId:0,productId:0,productType:"",children: [], productSeriesNo :"" }
      node.name = product.categpryName;
      node.categoryId = product.categoryId;
      node.productId = 0;
      node.productType = "category";
      node.productSeriesNo = "";
      product.products.forEach((child : Product)=>{
        let prodNode : WareHouseNode =  {name :"",categoryId:0,productId:0,productType:"",children:[],  productSeriesNo :""}
        prodNode.name = child.productName;
        prodNode.productId =child.productId;
        prodNode.categoryId = child.categoryId;
        prodNode.productType = "product";
        prodNode.productSeriesNo = child.productSerieasNo;
        node.children?.push(prodNode);
      })
       this.warehoiseNode.push(node);
    })  
  }
}
