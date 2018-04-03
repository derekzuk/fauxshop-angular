import { Route } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { ContactComponent } from './contact.component';

export const contactRoute: Route = {
    path: 'contact',
    component: ContactComponent,
    data: {
        authorities: [],
        pageTitle: 'Contact'
    },
    canActivate: [UserRouteAccessService]
};
