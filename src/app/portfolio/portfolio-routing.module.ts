import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'about', component: AboutComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'contact', component: ContactComponent},
  {path:'blog', loadChildren: () => import('../blog/blog.module').then(m => m.BlogModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
