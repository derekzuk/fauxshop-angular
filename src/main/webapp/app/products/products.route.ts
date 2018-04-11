import { Routes } from '@angular/router';

import { ProductsComponent } from './products.component';

export const products_state: Routes = [{
    path: '',
    component: ProductsComponent,
    children: [
        {
            path: '1',
            component: ProductsComponent,
            data: {
                productNumber: '1'
            }
        },
        {
            path: '2',
            component: ProductsComponent,
            data: {
                productNumber: '2'
            }
        },
        {
            path: '3',
            component: ProductsComponent,
            data: {
                productNumber: '3'
            }
        },
    ]
}];
