import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GithubRepoPage } from './github-repo.page';

const routes: Routes = [
  {
    path: '',
    component: GithubRepoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GithubRepoPageRoutingModule {}
