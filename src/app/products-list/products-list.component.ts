import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  allProducts = [];

  constructor(private _productService: ProductService) {
    this._productService.getProducts(productList => {
      this.allProducts = productList;
      console.log(this.allProducts);
    })

   }



  ngOnInit() {
  }

}
