import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FauxshopangularSharedModule } from '../shared';

import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { aboutBlogContactState } from './';

@NgModule({
    imports: [
        FauxshopangularSharedModule,
        RouterModule.forChild(aboutBlogContactState)
    ],
    declarations: [
        AboutComponent,
        BlogComponent,
        ContactComponent
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FauxshopangularAboutBlogContactModule {}
