import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../../shared/shop/cart.model';
import { CartService } from '../../shared/shop/cart.service';
import { Product } from '../../shared/shop/product.model';
import { ProductService } from '../../shared/shop/product.service';

@Component({
  selector: 'jhi-product1',
  templateUrl: './product1.component.html'
})
export class Product1Component implements OnInit {
    productNumber: string;
    product = new Product;
    cart: Cart[] = [];

    constructor(private router: Router,
                private cartService: CartService,
                private productService: ProductService) {
    }

    ngOnInit() {
        this.productService.getProductsByProductsId(1).subscribe((productData) => {
            this.product = productData;
            console.log(this.product);
        });

        this.cartService.getCartByUserId(5).subscribe((cartData) => {
            this.cart = cartData;
            console.log(this.cart);
        });
    }

}
