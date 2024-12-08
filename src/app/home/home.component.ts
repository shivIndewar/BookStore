import { Component, inject, OnInit, signal } from '@angular/core';
import { SidePanelComponent } from '../side-panel/side-panel.component';
import { BookserviceService } from '../sharedservices/bookservice.service';
import { ProductComponent } from '../product/product.component';
import { book } from '../model/book';
import { WareHouseNode } from '../model/WareHouseNode';
import { Product, WareHouseDto } from '../model/warehouse';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WareHouseRecord } from '../state/warehouse-records';
import { selectAll } from '../state/warehouse-selector';
import * as Actions from '../state/warehouse-records.actions';
import { BottomBarComponent } from '../bottom-bar/bottom-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidePanelComponent, ProductComponent, BottomBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  books = signal<book[]>([]);
  booksService = inject(BookserviceService);
  warehoiseNode: WareHouseNode[] = [];
  wareHouse : WareHouseDto[] = [];
  homeProducts : WareHouseNode[] = [];

  // store = inject(Store);
  // dataSource: any []= [];
  // dataSource$ : Observable<WareHouseRecord[]> = this.store.select(selectAll);

  constructor(){
    // this.store.dispatch(Actions.callWarehousrRecordsApi());
    // this.booksService.onCategoryClick$.subscribe((res)=>{
    //   this.homeProducts = res;
    // });
  }

  ngOnInit(): void {
  //  this.loadAllBooks();

    // this.booksService.sortBookSubject.subscribe((criteria:any)=>{
    //   this.books.set(this.booksService.sortBooks(criteria));
    // });
    this.loadAllProducts();
  }

  loadAllBooks(){
    this.booksService.getAllBooks().subscribe((res)=>{
      this.books.set(res);
    });
  }

  loadAllProducts(){
    this.booksService.getAllProducts().subscribe((data: WareHouseDto[])=>{
      this.wareHouse = data;
      this.prepareDataSource();
    })
  }

  prepareDataSource(){
    this.wareHouse.forEach((product : WareHouseDto)=>{
      let initData = { 
        name : "", 
        categoryId : 0,
        productId: 0,
        products:[],
        productType:"" 
    } 
      let node : WareHouseNode = {name :"", categoryId:0,productId:0,productType:"",children: [], productSeriesNo :"", description:"" }
      node.name = product.categpryName;
      node.categoryId = product.categoryId;
      node.productId = product.categoryId;
      node.productType = "category";
      node.productSeriesNo = "";
      node.description = product.cateogyDescription;
      product.products.forEach((child : Product)=>{
        let prodNode : WareHouseNode =  {name :"",categoryId:0,productId:0,productType:"",children:[],  productSeriesNo :"", description:""}
        prodNode.name = child.productName;
        prodNode.productId =child.productId;
        prodNode.categoryId = child.categoryId;
        prodNode.productType = "product";
        prodNode.productSeriesNo = child.productSerieasNo;
        prodNode.description = child.productDescription;
        node.children?.push(prodNode);
      })
       this.warehoiseNode.push(node);
       this.homeProducts.push(node);
    })  
    this.booksService.setWareHouseProducts(this.warehoiseNode);
  }

  displayConcernedChildProducts(data:WareHouseNode[]){
    this.homeProducts = data;
  }

  displayConcernedChildProductsOn(data:WareHouseNode[]){
    this.homeProducts = data;
  }


}
