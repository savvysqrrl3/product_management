import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() thisItem;
  @Input() index;

  constructor(private _productService: ProductService,
    private _router: Router,
  ) { }

  edit(){
    this._router.navigate(['/products/edit/' + this.index]);
  }

  delete(){
    this._productService.removeProduct(this.index);
    this._router.navigate(['/products']);
  }
  ngOnInit() {
  }

}
