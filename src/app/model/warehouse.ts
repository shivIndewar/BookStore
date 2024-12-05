
export class WareHouseDto {
    categoryId: number;
    categpryName: string;
    cateogyDescription: string;
    products: Product[];
    brand: string;
    usage: string;

    constructor(data : any){
        this.categoryId = data.categoryId;
        this.categpryName = data.categpryName;
        this.cateogyDescription= data.cateogyDescription;
        this.products = data.products;
        this.brand = data.brand;
        this.usage = data.usage;
    }
}

export class Product {
    productId: number;
    productName: string;
    productDescription: string;
    productUsage: string;
    categoryId: number;
    productSerieasNo: string;
    productInnerWidth: number;
    productOuterWidth: number;
    productInnerHeight: number;
    productOuterHeight: number;
    productBendingRadius: string;
    productPitch: number;
    productLinkPerMeter: number;
    
    constructor(){
        this.productId = 0;
        this.productName = "";
        this.productDescription = "";
        this.productUsage ="";
        this.categoryId = 0;
        this.productSerieasNo = "";
        this.productInnerWidth = 0;
        this.productOuterWidth = 0;
        this.productInnerHeight = 0;
        this.productOuterHeight = 0;
        this.productBendingRadius = "";
        this.productPitch = 0;
        this.productLinkPerMeter = 0;
    }
}