import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules, Route } from '@angular/router';

import { NotFound404Component } from './content/not-found404/not-found404.component';
import { QuizMainComponent } from './content/quiz-main/quiz-main.component';

/** {@link Route[] | Routes} used to navigate the application. */
const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: QuizMainComponent,
  },
  {
    path: '404-not-found',
    component: NotFound404Component
  },
  {
    path: '**',
    redirectTo: '/404-not-found'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      relativeLinkResolution: 'legacy',
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64],
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
