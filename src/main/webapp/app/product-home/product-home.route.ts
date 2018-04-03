import { Route } from '@angular/router';

import { ProductHomeComponent } from './product-home.component';

export const PRODUCT_HOME_ROUTE: Route = {
    path: 'product-home',
    component: ProductHomeComponent,
    data: {
        authorities: [],
        pageTitle: 'Product Home Page Title!'
    }
};
