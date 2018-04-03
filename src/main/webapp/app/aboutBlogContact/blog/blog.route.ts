import { Route } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { BlogComponent } from './blog.component';

export const blogRoute: Route = {
    path: 'blog',
    component: BlogComponent,
    data: {
        authorities: [],
        pageTitle: 'Blog'
    },
    canActivate: [UserRouteAccessService]
};
