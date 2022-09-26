import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GithubReposPage } from './github-repos.page';

const routes: Routes = [
  {
    path: '',
    component: GithubReposPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GithubReposPageRoutingModule {}
