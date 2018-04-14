import { Routes } from '@angular/router';

import { product1Route } from './product1/product1.route';
import { product2Route } from './product2/product2.route';

const PRODUCT_ROUTES = [
    product1Route,
    product2Route
];

export const productState: Routes = [{
    path: '',
    children: PRODUCT_ROUTES
}];
