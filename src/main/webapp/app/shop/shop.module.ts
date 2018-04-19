import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FauxshopangularSharedModule } from '../shared';
import { cartState } from './';
import { CartComponent } from './cart/cart.component';
import { CartService } from '../shared/shop/cart.service';

@NgModule({
    imports: [
        FauxshopangularSharedModule,
        RouterModule.forChild( cartState )
    ],
    declarations: [
        CartComponent,
    ],
    entryComponents: [
    ],
    providers: [
        CartService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FauxshopangularShopModule {}
