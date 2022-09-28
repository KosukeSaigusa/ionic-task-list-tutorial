import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { GitHubService } from '../../github.service';
import { GitHubRepo } from '../../interfaces/github';

@Component({
  selector: 'app-github-repos',
  templateUrl: './repos.page.html',
  styleUrls: ['./repos.page.scss'],
})
export class GitHubReposPage implements OnInit {
  readonly pageTitle = 'GitHub リポジトリ';

  gitHubRepos: GitHubRepo[] = [];

  constructor(
    public gitHubService: GitHubService,
    public loadingController: LoadingController
  ) {}

  ngOnInit(): void {}

  /**
   * ページの表示が完了する際に発火するライフサイクルイベント。
   * ローディングを管理しつつ、GitHub の Search Repositories API をコールする。
   *  */
  async ionViewDidEnter(): Promise<void> {
    const loadingElement = await this.loadingController.create({
      message: 'Loading...',
    });
    // まだ GitHub リポジトリを取得していないときだけ Loading を表示する。
    // つまり、リポジトリ詳細画面から戻ってきたときには Loading は表示しない。
    if (!this.gitHubRepos.length) {
      await loadingElement.present();
    }
    try {
      const response = await this.gitHubService.searchRepos({});
      this.gitHubRepos = response.items;
    } finally {
      loadingElement.dismiss();
    }
  }

  /**
   * ngFor で再描画のパフォーマンスを最適化する目的で、
   * ユニークな GitHubRepo.id に基づくバインディングが行われるようにする。
   * */
  trackByRepoId(_: number, gitHubRepo: GitHubRepo): number {
    return gitHubRepo.id;
  }
}
