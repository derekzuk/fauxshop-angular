import { Routes } from '@angular/router';

import { aboutRoute } from './about/about.route';

const ABOUT_BLOG_CONTACT_ROUTES = [
    aboutRoute
];

export const aboutBlogContactState: Routes = [{
    path: '',
    children: ABOUT_BLOG_CONTACT_ROUTES
}];
