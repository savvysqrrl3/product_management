import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(
    private _productService: ProductService,
    private _router: Router,
  ) { }
  allProducts = [];

  newP = {
    title: "",
    price: "",
    image: null
  };

  onSubmit(){
    console.log("New product:", this.newP);
    this.addP2List();
    this.newP = {
      title: "",
      price: "",
      image: ""
    };
    this._router.navigate(['/products']);
  }

  addP2List(){
    console.log("****** 1", this.allProducts);
    this._productService.addProduct(this.newP, (productList) => {
      this.allProducts = productList;
      console.log("****** 3", this.allProducts)
    })
  }

  ngOnInit() {
  }

}
