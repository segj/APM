import { IcuPlaceholder } from "@angular/compiler/src/i18n/i18n_ast";
import { Component, OnInit } from "@angular/core";
import { IProduct } from './Product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    [x: string]: any;
   
   pageTitle = "Product List";
   imageWidth: number = 50;
   imageMargin: number = 2;
   showImage: boolean = false;
   private _listFilter: string;
   filteredProducts: IProduct[];

   
    private _products: IProduct[];
  

   constructor(private productService : ProductService){
       
       //this.listFilter = 'cart';
       
   } 
   toggleImage(): void
   {
        this.showImage = !this.showImage;        
   }
   ngOnInit(): void 
   {
        //this._products = 
        this.productService.getProducts().subscribe({
            next: _products => {
                this._products = _products;
                this.filteredProducts = this.products;    
           
            },
            error: err => this.errorMessage = err
        });
        
   }
   performFilter(filterBy: string): IProduct[]
   {
       filterBy = filterBy.toLocaleLowerCase();
       
       return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
   }
   onRatingClicked(message : string) : void{
      this.pageTitle = 'Product list: ' + message;
      console.log('onraringclicked');
   }

   get listFilter(): string{
       return this._listFilter;
   }
   set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
   get products(): IProduct[]{
       return this._products;
   }
}

