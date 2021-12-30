import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { BlogLandingComponent } from './blog-landing/blog-landing.component';

const routes: Routes = [
  {path:'', component:BlogLandingComponent},
  {
    path: ':slug',
    component: BlogComponent,
  },
  {
    path: '**',
    component: BlogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}

