import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
import { Cart } from '../shared/shop/cart.model';
import { CartService } from '../shared/shop/cart.service';
import { Account, LoginModalService, Principal } from '../shared';
import { UUIDService } from '../shared/uuid/uuid.service';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: [
        'home.scss'
    ]

})
export class HomeComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;
    cart: Cart[] = [];
    totalCartQuantity: number;
    uuid: number;

    constructor(
        private principal: Principal,
        private cartService: CartService,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,
        private uuidService: UUIDService
    ) {
    }

    ngOnInit() {
        this.principal.identity().then((account) => {
            this.account = account;
            this.updateCart();
            if (this.account != null) {
                this.uuid = this.uuidService.getUUID(this.account.id);
            } else {
                this.uuid = this.uuidService.getUUID(null);
            }
            console.log(this.uuid);
        });
        this.registerAuthenticationSuccess();
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', (message) => {
            this.principal.identity().then((account) => {
                this.account = account;
                this.updateCart();
            });
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    updateCart() {
        if (this.account != null) {
            this.cartService.getCartByUserId(this.account.id).subscribe((cartData) => {
                this.cart = cartData;
                this.getTotalCartQuantity(cartData);
            });
        }
    }

    getTotalCartQuantity(cartData) {
        let totalQuantity = 0;
        for (const cartRecord of cartData) {
            totalQuantity += cartRecord.cartItemQuantity;
        }
        this.totalCartQuantity = totalQuantity;
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }
}
