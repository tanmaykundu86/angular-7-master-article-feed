import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { FeedsComponent }        from './article/feeds/feeds.component';
import { MyarticleComponent }    from './article/myarticle/myarticle.component';

const appRoutes: Routes = [
  { path: 'my-article', component: MyarticleComponent },
  { path: 'article',        component: FeedsComponent },
  { path: '',   redirectTo: '/article', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}