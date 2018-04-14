import { Route } from '@angular/router';

import { Product1Component } from './product1.component';

export const product1Route: Route = {
    path: 'product1',
    component: Product1Component,
    data: {
        authorities: [],
        pageTitle: 'Product1'
    }
};
