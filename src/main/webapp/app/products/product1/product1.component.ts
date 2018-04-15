import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../shared/shop/product.service';
import { Product } from '../../shared/shop/product.model';

@Component({
  selector: 'jhi-product1',
  templateUrl: './product1.component.html'
})
export class Product1Component implements OnInit {
    productNumber: string;
    product = new Product;

    constructor(private router: Router, private productService: ProductService) {

    }

    ngOnInit() {
        this.productService.getProductsByProductsId(1).subscribe((productData) => {
            this.product = productData;
        });
    }

}
