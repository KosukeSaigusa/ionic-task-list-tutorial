import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-github-repo',
  templateUrl: './github-repo.page.html',
  styleUrls: ['./github-repo.page.scss'],
})
export class GithubRepoPage implements OnInit {
  readonly pageTitle = 'GitHub リポジトリ詳細';
  ownerName: string;
  repoName: string;
  repo: GitHubRepo | null = null;

  /**
   * URL ルーティングから任意の値を取得するためには、@angular/router の
   * `ActivatedRoute` を利用する。
   * */
  constructor(
    public activatedRoute: ActivatedRoute,
    public httpClient: HttpClient
  ) {}

  // Note: 下のように async/await で書いたときとの挙動の違いを知りたい。
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.ownerName = paramMap.get('ownerName');
      this.repoName = paramMap.get('repoName');
    });
  }

  // async ngOnInit(): Promise<void> {
  //   const paramMap = await this.activatedRoute.paramMap.toPromise();
  //   this.ownerName = paramMap.get('ownerName');
  //   this.repoName = paramMap.get('repoName');
  // }

  async ionViewDidEnter(): Promise<void> {
    const repo = await this.httpClient
      .get<GitHubRepo>(
        `https://api.github.com/repos/${this.ownerName}/${this.repoName}`,
        {
          headers: {
            accept: 'application/vnd.github.v3+json',
          },
        }
      )
      .toPromise();
    this.repo = repo;
  }
}
