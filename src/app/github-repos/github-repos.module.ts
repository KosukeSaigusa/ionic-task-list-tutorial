import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GithubReposPageRoutingModule } from './github-repos-routing.module';

import { GithubReposPage } from './github-repos.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GithubReposPageRoutingModule,
    SharedModule,
  ],
  declarations: [GithubReposPage],
})
export class GithubReposPageModule {}
