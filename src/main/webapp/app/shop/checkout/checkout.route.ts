import { Route } from '@angular/router';

import { CheckoutComponent } from './checkout.component';

export const checkoutRoute: Route = {
    path: 'checkout',
    component: CheckoutComponent,
    data: {
        authorities: [],
        pageTitle: 'Checkout'
    }
};
