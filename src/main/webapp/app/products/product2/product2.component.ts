import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../shared/shop/product.service';
import { Product } from '../../shared/shop/product.model';

@Component({
  selector: 'jhi-product2',
  templateUrl: './product2.component.html'
})
export class Product2Component implements OnInit {
    productNumber: string;
    product = new Product;

    constructor(private router: Router, private productService: ProductService) {

    }

    ngOnInit() {
        this.productService.getProductsByProductsId(2).subscribe((productData) => {
            this.product = productData;
        });
    }

}
