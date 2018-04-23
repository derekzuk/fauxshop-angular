import { Routes } from '@angular/router';

import { cartRoute } from './cart/cart.route';
import { checkoutRoute } from './checkout/checkout.route';

const SHOP_ROUTES = [
    cartRoute,
    checkoutRoute
];

export const cartState: Routes = [{
    path: '',
    children: SHOP_ROUTES
}];
