import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GithubReposPageRoutingModule } from './github-routing.module';

import { SharedModule } from '../shared/shared.module';
import { GitHubReposPage } from './repos/repos.page';
import { GitHubRepoPage } from './repo/repo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GithubReposPageRoutingModule,
    SharedModule,
  ],
  declarations: [GitHubReposPage, GitHubRepoPage],
})
export class GithubReposPageModule {}
