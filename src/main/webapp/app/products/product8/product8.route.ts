import { Route } from '@angular/router';

import { Product8Component } from './product8.component';

export const product8Route: Route = {
    path: 'product8',
    component: Product8Component,
    data: {
        authorities: [],
        pageTitle: 'Product8'
    }
};
