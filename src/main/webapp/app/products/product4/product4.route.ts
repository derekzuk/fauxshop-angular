import { Route } from '@angular/router';

import { Product4Component } from './product4.component';

export const product4Route: Route = {
    path: 'product4',
    component: Product4Component,
    data: {
        authorities: [],
        pageTitle: 'Product4'
    }
};
