import { Route } from '@angular/router';

import { Checkout2Component } from './checkout2.component';

export const checkout2Route: Route = {
    path: 'checkout2',
    component: Checkout2Component,
    data: {
        authorities: [],
        pageTitle: 'Checkout'
    }
};
