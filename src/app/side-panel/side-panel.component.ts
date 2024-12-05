import { Component, inject, Input, OnInit, signal } from '@angular/core';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BookserviceService } from '../sharedservices/bookservice.service';
import { Product, WareHouseDto } from '../model/warehouse';
import { WareHouseNode } from '../model/WareHouseNode';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WareHouseRecord } from '../state/warehouse-records';
import { selectAll } from '../state/warehouse-selector';
import * as Actions from '../state/warehouse-records.actions';
interface FoodNode {
  name: string;
  chld : string;
  children?: FoodNode[];
}




 const tree_data1 : WareHouseNode [] = [
  {
      "name": "GEDC- 10 SERIES (Bridge)",
      "categoryId": 1,
      "productId": 0,
      "productType": "category",
      "children": [
          {
              "name": "GEDC- 10 SERIES (Bridge)",
              "categoryId": 1,
              "productId": 1,
              "productType": "product",
              "children": [],
              "productSeriesNo": "GEDC-10x10"
          },
          {
              "name": "GEDC- 10 SERIES (Bridge)",
              "categoryId": 1,
              "productId": 2,
              "productType": "product",
              "children": [],
              "productSeriesNo": "GEDC-10x15"
          },
          {
              "name": "GEDC- 10 SERIES (Bridge)",
              "categoryId": 1,
              "productId": 3,
              "productType": "product",
              "children": [],
              "productSeriesNo": "GEDC-10x20"
          }
      ],
      "productSeriesNo": ""
  },
];

@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [MatTreeModule,MatIconModule,MatButtonModule],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.css'
})
export class SidePanelComponent implements OnInit {
 
  booksService = inject(BookserviceService);
  products = signal<any[]>([]);
  wareHouse : WareHouseDto[] = [];
  warehoiseNode: WareHouseNode[] = tree_data1;

  store = inject(Store);
  dataSource: any []= [];
  dataSource$ : Observable<WareHouseRecord[]> = this.store.select(selectAll);

  @Input() warehouseSideData : WareHouseNode[] = tree_data1;

  constructor(){
    console.log('called side pannel');
    this.store.dispatch(Actions.callWarehousrRecordsApi());
  }

  ngOnInit(): void {
    this.warehoiseNode = this.warehouseSideData;
    this.dataSource$.subscribe((response : any)=>{
      console.log(response);
    });
  }

  childrenAccessor = (node: WareHouseNode) => node.children ?? [];

  hasChild = (_: number, node: WareHouseNode) => !!node.children && node.children.length > 0;

  performAction(node:any){
    console.log(node);
  }
}