import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FauxshopangularSharedModule } from '../shared';
import { cartState } from './';
import { CartComponent } from './cart/cart.component';
import { CartService } from '../shared/shop/cart.service';
import { CheckoutService } from '../shared/shop/checkout.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { Checkout2Component } from './checkout/checkout2.component';

@NgModule({
    imports: [
        FauxshopangularSharedModule,
        RouterModule.forChild( cartState )
    ],
    declarations: [
        CartComponent,
        CheckoutComponent,
        Checkout2Component,
    ],
    entryComponents: [
    ],
    providers: [
        CartService,
        CheckoutService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FauxshopangularShopModule {}
