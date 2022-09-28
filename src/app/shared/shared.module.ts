import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GitHubHeadComponent } from './github-head/github-head.component';

@NgModule({
  declarations: [GitHubHeadComponent],
  imports: [IonicModule, CommonModule],
  exports: [GitHubHeadComponent],
})
export class SharedModule {}
