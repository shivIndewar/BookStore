export class book {
    title: string;
    isbn: string;
    pageCount: number;
    publishedDate: Date;
    thumbnailUrl: string;
    shortDescription: string;
    longDescription: string;
    status: string;
    authors: string[];
    categories: string[];
    price: number;
    currency: string;
    discount: number;
    discountUnits: string;
    isProductInCart :boolean;

    constructor(){
    this.title = '';
    this.isbn = '';
    this.pageCount = 0;
    this.publishedDate = new Date();
    this.thumbnailUrl = '';
    this.shortDescription = '';
    this.longDescription = '';
    this.status = '';
    this.authors = [];
    this.categories = [];
    this.price = 0;
    this.currency = '';
    this.discount = 0;
    this.discountUnits = '';
    this.isProductInCart = false;
    }
  }