import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FauxshopangularSharedModule } from '../shared';
import { productState } from './';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { CartService } from '../shared/shop/cart.service';
import { ProductService } from '../shared/shop/product.service';

@NgModule({
    imports: [
        FauxshopangularSharedModule,
        RouterModule.forChild( productState )
    ],
    declarations: [
        Product1Component,
        Product2Component,
    ],
    entryComponents: [
    ],
    providers: [
        CartService,
        ProductService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FauxshopangularProductsModule {}
