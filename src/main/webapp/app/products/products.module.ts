import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { products_state, ProductsComponent } from './';

@NgModule({
    imports: [
        RouterModule.forChild( products_state )
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
