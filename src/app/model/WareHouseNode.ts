export interface WareHouseNode{
    name:string;
    productType: string;
    productId: number;
    categoryId : number;
    children?: WareHouseNode[];
    productSeriesNo : string;
    description: string;
    // constructor(){
    //    this.name = "";
    //    this.productType = "";
    //    this.productId = 0;
    //    this.categoryId = 0;
    //    this.children = []; 
    // }
  }