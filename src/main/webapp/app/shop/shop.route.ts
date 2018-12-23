import { Routes } from '@angular/router';

import { cartRoute } from './cart/cart.route';
import { checkoutRoute } from './checkout/checkout.route';
import { checkout2Route } from './checkout/checkout2.route';
import { confirmationRoute } from './confirmation/confirmation.route';

const SHOP_ROUTES = [
    cartRoute,
    checkoutRoute,
    checkout2Route,
    confirmationRoute
];

export const cartState: Routes = [{
    path: '',
    children: SHOP_ROUTES
}];
