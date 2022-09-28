import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitHubRepoPage } from './repo/repo.page';
import { GitHubReposPage } from './repos/repos.page';

const routes: Routes = [
  { path: '', component: GitHubReposPage },
  {
    path: ':ownerName/:repoName',
    component: GitHubRepoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GithubReposPageRoutingModule {}
