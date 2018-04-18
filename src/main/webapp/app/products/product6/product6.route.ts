import { Route } from '@angular/router';

import { Product6Component } from './product6.component';

export const product6Route: Route = {
    path: 'product6',
    component: Product6Component,
    data: {
        authorities: [],
        pageTitle: 'Product6'
    }
};
