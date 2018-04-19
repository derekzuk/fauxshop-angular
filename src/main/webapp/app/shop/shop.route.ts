import { Routes } from '@angular/router';

import { cartRoute } from './cart/cart.route';

const SHOP_ROUTES = [
    cartRoute
];

export const cartState: Routes = [{
    path: '',
    children: SHOP_ROUTES
}];
