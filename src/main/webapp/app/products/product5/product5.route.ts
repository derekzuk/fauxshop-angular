import { Route } from '@angular/router';

import { Product5Component } from './product5.component';

export const product5Route: Route = {
    path: 'product5',
    component: Product5Component,
    data: {
        authorities: [],
        pageTitle: 'Product5'
    }
};
