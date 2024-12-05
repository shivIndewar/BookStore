
export interface WareHouseRecord {
    categoryId: number;
    categpryName: string;
    cateogyDescription: string;
    products: Product[];
    brand: string;
    usage: string;
}

export interface Product {
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
}