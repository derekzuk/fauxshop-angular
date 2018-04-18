import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../../shared/shop/cart.model';
import { CartService } from '../../shared/shop/cart.service';
import { Product } from '../../shared/shop/product.model';
import { ProductService } from '../../shared/shop/product.service';
import { Account, Principal } from '../../shared';
import { JhiEventManager } from 'ng-jhipster';

@Component({
  selector: 'jhi-product8',
  templateUrl: './product8.component.html'
})
export class Product8Component implements OnInit {
    productNumber: string;
    product = new Product;
    cart: Cart[] = [];
    account: Account;

    constructor(private router: Router,
                private principal: Principal,
                private eventManager: JhiEventManager,
                private cartService: CartService,
                private productService: ProductService) {
    }

    ngOnInit() {
        this.principal.identity().then((account) => {
            this.account = account;
            this.updateCart();
        });
        this.registerAuthenticationSuccess();

        this.productService.getProductsByProductsId(8).subscribe((productData) => {
            this.product = productData;
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', (message) => {
            this.principal.identity().then((account) => {
                this.account = account;
                this.updateCart();
            });
        });
    }

    updateCart() {
        if (this.account != null) {
            this.cartService.getCartByUserId(this.account.id).subscribe((cartData) => {
                this.cart = cartData;
            });
        }
    }

}
