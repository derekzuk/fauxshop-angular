import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PRODUCTS_ROUTE, ProductsComponent } from './';

@NgModule({
    imports: [
        RouterModule.forRoot([ PRODUCTS_ROUTE ])
    ],
    declarations: [
        ProductsComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FauxshopangularProductsModule {}
