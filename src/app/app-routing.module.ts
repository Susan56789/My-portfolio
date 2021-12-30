import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) }, { path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) }, { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

