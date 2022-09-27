import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.page.html',
  styleUrls: ['./github-repos.page.scss'],
})
export class GithubReposPage implements OnInit {
  readonly pageTitle = 'GitHub リポジトリ';

  gitHubRepos: GitHubRepo[] = [];

  constructor(
    public httpClient: HttpClient,
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
      const response = await this.httpClient
        .get<SearchGitHubReposResponse>(
          'https://api.github.com/search/repositories',
          {
            headers: {
              accept: 'application/vnd.github.v3+json',
            },
            params: {
              q: 'ionic',
              page: 1,
              perPage: 100,
            },
          }
        )
        .toPromise();
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
