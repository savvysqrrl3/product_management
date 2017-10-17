import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private _productService: ProductService, private _router: Router,
    private _route: ActivatedRoute) {
      this._route.paramMap.subscribe( params => {
        console.log(params.get('id'));
        this.upd8P.id = params.get('id');
   })

    }

  allProducts = [];
  
    upd8P = {
      title: "",
      price: "",
      image: null,
      id: null
    };
  
    onSubmit(){
      // e.preventDefault();
      console.log("Updated product:", this.upd8P);
      this._productService.updateProduct(this.upd8P)

        this.upd8P = {
          title: "",
          price: "",
          image: null,
          id: null
        };
        this._router.navigate(['/products']);  
    }

    destroy(){
      this._productService.removeProduct(this.upd8P.id);
      this._router.navigate(['/products']);
    }
  ngOnInit() {
  }

}
