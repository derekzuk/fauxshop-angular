import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PRODUCT_HOME_ROUTE, ProductHomeComponent } from './';

@NgModule({
    imports: [
        RouterModule.forRoot([ PRODUCT_HOME_ROUTE ])
    ],
    declarations: [
        ProductHomeComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Ang43ProductHomeModule {}
