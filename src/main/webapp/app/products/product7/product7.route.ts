import { Route } from '@angular/router';

import { Product7Component } from './product7.component';

export const product7Route: Route = {
    path: 'product7',
    component: Product7Component,
    data: {
        authorities: [],
        pageTitle: 'Product7'
    }
};
