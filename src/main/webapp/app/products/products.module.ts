import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FauxshopangularSharedModule } from '../shared';
import { productState } from './';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { Product3Component } from './product3/product3.component';
import { Product4Component } from './product4/product4.component';
import { Product5Component } from './product5/product5.component';
import { Product6Component } from './product6/product6.component';
import { Product7Component } from './product7/product7.component';
import { Product8Component } from './product8/product8.component';
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
        Product3Component,
        Product4Component,
        Product5Component,
        Product6Component,
        Product7Component,
        Product8Component,
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
