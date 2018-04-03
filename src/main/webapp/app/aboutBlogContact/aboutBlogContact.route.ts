import { Routes } from '@angular/router';

import { aboutRoute } from './about/about.route';
import { blogRoute } from './blog/blog.route';
import { contactRoute } from './contact/contact.route';

const ABOUT_BLOG_CONTACT_ROUTES = [
    aboutRoute,
    blogRoute,
    contactRoute
];

export const aboutBlogContactState: Routes = [{
    path: '',
    children: ABOUT_BLOG_CONTACT_ROUTES
}];
