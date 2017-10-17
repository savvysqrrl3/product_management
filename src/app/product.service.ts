import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class ProductService {

  productList = [];

  constructor(private _http: Http, private _route: ActivatedRoute) {}

  addProduct(newP, callback){
    this.productList.push(newP);{
      console.log("****** 2", this.productList)
      callback(this.productList)
    };
  }

  getProducts(callback){
    callback (this.productList);
  }
  getProduct(id){
    // console.log(this.productList);
    // console.log(id);
    console.log("***** object retrieved:", this.productList[id]);
    return this.productList[id];
  }

  updateProduct (updated){
    console.log("arrived at update function")
      let oldobj = this.getProduct(updated.id);
      oldobj.title = updated.title;
      oldobj.price = updated.price;
      oldobj.image = updated.image;   
  }

  removeProduct (id){
    this.productList.splice(id, 1);
  }

}
