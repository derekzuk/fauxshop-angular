import { Route } from '@angular/router';

import { ConfirmationComponent } from './confirmation.component';

export const confirmationRoute: Route = {
    path: 'confirmation',
    component: ConfirmationComponent,
    data: {
        authorities: [],
        pageTitle: 'Confirmation'
    }
};
