import { Route } from '@angular/router';

import { ProductsComponent } from './products.component';

export const PRODUCTS_ROUTE: Route = {
    path: 'products',
    component: ProductsComponent,
    data: {
        authorities: [],
        pageTitle: 'Products Page Title!'
    }
};
