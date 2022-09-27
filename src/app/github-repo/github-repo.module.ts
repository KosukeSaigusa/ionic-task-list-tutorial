import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GithubRepoPageRoutingModule } from './github-repo-routing.module';

import { GithubRepoPage } from './github-repo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GithubRepoPageRoutingModule
  ],
  declarations: [GithubRepoPage]
})
export class GithubRepoPageModule {}
