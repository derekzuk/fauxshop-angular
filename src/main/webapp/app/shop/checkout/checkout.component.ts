import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../../shared/shop/cart.model';
import { CartService } from '../../shared/shop/cart.service';
import { CheckoutService } from '../../shared/shop/checkout.service';
import { Account, Principal } from '../../shared';
import { JhiEventManager } from 'ng-jhipster';

@Component({
  selector: 'jhi-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {
    cart: Cart[] = [];
    account: Account;
    totalCartPrice = 0;
    tax = 20;
    createOrdersArray = [];

    constructor(private router: Router,
                private principal: Principal,
                private eventManager: JhiEventManager,
                private cartService: CartService,
                private checkoutService: CheckoutService) {
    }

    ngOnInit() {
        this.principal.identity().then((account) => {
            this.account = account;
            this.updateCart();
        });
        this.registerAuthenticationSuccess();
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
                this.total();
            });
        }
    }

    total() {
        let totalCalculatedValue = 0;
        this.cart.forEach(function(item) {
            totalCalculatedValue += item.cartItemQuantity * item.productsPrice;
        });
        this.totalCartPrice = totalCalculatedValue;
        return this.totalCartPrice;
    }

    shipping() {
        let shipping = 0;

        if (this.total() < 100) {
            shipping = 25;
        } else {
            shipping = 0;
        }

        return shipping;
    }

    removeFromCart(index, cartId) {
        this.cartService.removeFromCart(cartId);
        this.cart.splice(index, 1);
    }

    createOrdersRecord() {
        /** if this is successful, then we can run the createOrdersRecord() */
        this.cartService.updateCartQuantity(this.cart).subscribe();

        this.checkoutService.createOrdersRecord(this.cart).subscribe((results) => {
            this.createOrdersArray = results;
        });
/**            $state.go('checkout');               */
    }

}
