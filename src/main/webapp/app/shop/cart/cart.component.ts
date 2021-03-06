import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../../shared/shop/cart.model';
import { CartService } from '../../shared/shop/cart.service';
import { CheckoutService } from '../../shared/shop/checkout.service';
import { Account, Principal } from '../../shared';
import { JhiEventManager } from 'ng-jhipster';
import { UUIDService } from '../../shared/uuid/uuid.service';

@Component({
  selector: 'jhi-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
    cart: Cart[] = [];
    account: Account;
    totalCartPrice = 0;
    tax = 20;
    uuid: number;
    totalCartQuantity: number;

    constructor(private router: Router,
                private principal: Principal,
                private eventManager: JhiEventManager,
                private cartService: CartService,
                private checkoutService: CheckoutService,
                private uuidService: UUIDService) {
    }

    ngOnInit() {
        this.principal.identity().then((account) => {
            this.account = account;
            this.uuid = this.uuidService.getUUID(account);
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
                this.getTotalCartQuantity(cartData);
            });
        } else {
            this.cartService.getCartByUserId(this.uuid).subscribe((cartData) => {
                this.cart = cartData;
                this.total();
                this.getTotalCartQuantity(cartData);
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
        this.cartService.removeFromCart(cartId).subscribe(() => {
            console.log('Item removed from cart');
        });
        this.cart.splice(index, 1);
    }

    createOrdersRecord() {
        /** if this is successful, then we can run the createOrdersRecord() */
        this.cartService.updateCartQuantity(this.cart).subscribe(() => {
            this.checkoutService.createOrdersRecord(this.cart).subscribe((results) => {
                this.checkoutService.createOrderDTO(results);
            });
        });
        this.router.navigateByUrl('/checkout');
    }

    getTotalCartQuantity(cartData) {
        let totalQuantity = 0;
        for (const cartRecord of cartData) {
            totalQuantity += cartRecord.cartItemQuantity;
        }
        this.totalCartQuantity = totalQuantity;
    }

}
