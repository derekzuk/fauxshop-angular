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
    product: Product;
    productService: ProductService;

    constructor(private router: Router, productService: ProductService) {
        this.productService = productService;
    }

    ngOnInit() {
        this.productService.getProductsByProductsId(1).subscribe((productData) => {
            console.log(productData);
        });
    }

    ngOnDestroy() {
    }

}
