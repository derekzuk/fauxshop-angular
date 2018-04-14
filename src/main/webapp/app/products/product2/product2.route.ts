import { Route } from '@angular/router';

import { Product2Component } from './product2.component';

export const product2Route: Route = {
    path: 'product2',
    component: Product2Component,
    data: {
        authorities: [],
        pageTitle: 'Product2'
    }
};
