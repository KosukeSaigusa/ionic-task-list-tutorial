import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GithubRepoPageRoutingModule } from './github-repo-routing.module';

import { GithubRepoPage } from './github-repo.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GithubRepoPageRoutingModule,
    SharedModule,
  ],
  declarations: [GithubRepoPage],
})
export class GithubRepoPageModule {}
