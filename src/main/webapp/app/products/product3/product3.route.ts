import { Route } from '@angular/router';

import { Product3Component } from './product3.component';

export const product3Route: Route = {
    path: 'product3',
    component: Product3Component,
    data: {
        authorities: [],
        pageTitle: 'Product3'
    }
};
