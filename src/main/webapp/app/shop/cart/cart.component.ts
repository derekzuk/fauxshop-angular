import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../../shared/shop/cart.model';
import { CartService } from '../../shared/shop/cart.service';
import { Account, Principal } from '../../shared';
import { JhiEventManager } from 'ng-jhipster';

@Component({
  selector: 'jhi-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
    cart: Cart[] = [];
    account: Account;
    totalCartPrice = 0;
    tax = 20;

    constructor(private router: Router,
                private principal: Principal,
                private eventManager: JhiEventManager,
                private cartService: CartService) {
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
        this.cartService.updateCartQuantity(this.cart).subscribe();

/**
        CheckoutService.createOrdersRecord(vm.cartInvoices)
            .then(function(result) {
            $scope.createOrdersRecord = result;
            $state.go('checkout');
        })
*/
    }

}
