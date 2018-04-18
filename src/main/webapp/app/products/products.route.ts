import { Routes } from '@angular/router';

import { product1Route } from './product1/product1.route';
import { product2Route } from './product2/product2.route';
import { product3Route } from './product3/product3.route';
import { product4Route } from './product4/product4.route';
import { product5Route } from './product5/product5.route';
import { product6Route } from './product6/product6.route';
import { product7Route } from './product7/product7.route';
import { product8Route } from './product8/product8.route';

const PRODUCT_ROUTES = [
    product1Route,
    product2Route,
    product3Route,
    product4Route,
    product5Route,
    product6Route,
    product7Route,
    product8Route
];

export const productState: Routes = [{
    path: '',
    children: PRODUCT_ROUTES
}];
