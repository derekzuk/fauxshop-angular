import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../../shared/shop/cart.model';
import { Checkout } from '../../shared/shop/checkout.model';
import { CartService } from '../../shared/shop/cart.service';
import { CheckoutService } from '../../shared/shop/checkout.service';
import { Account, Principal } from '../../shared';
import { JhiEventManager } from 'ng-jhipster';

@Component({
  selector: 'jhi-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit, OnChanges {
    cart: Cart[] = [];
    account: Account;
    totalCartPrice = 0;
    tax = 20;
    createOrdersArray = [];
    checkoutData: Checkout;

    constructor(private router: Router,
                private principal: Principal,
                private eventManager: JhiEventManager,
                private cartService: CartService,
                private checkoutService: CheckoutService) {
        this.checkoutData = new Checkout;
    }

    ngOnInit() {
        this.principal.identity().then((account) => {
            this.account = account;
            this.updateCart();
            this.checkoutData = this.loadCheckoutData();
        });
        this.registerAuthenticationSuccess();
    }

    ngOnChanges() {
        this.checkoutService.setCheckoutData(this.checkoutData);
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
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

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', (message) => {
            this.principal.identity().then((account) => {
                this.account = account;
                this.updateCart();
            });
        });
    }

    loadCheckoutData() {
        return this.checkoutService.loadCheckoutData();
    }

    goToCheckout2() {
        this.createOrderDTO();
        this.router.navigateByUrl('/checkout2');
    }

    createOrderDTO() {
        this.checkoutService.createOrderDTO(this.checkoutData);
    }

}
