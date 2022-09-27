import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-repo',
  templateUrl: './github-repo.page.html',
  styleUrls: ['./github-repo.page.scss'],
})
export class GithubRepoPage implements OnInit {
  readonly pageTitle = 'GitHub リポジトリ詳細';

  constructor() {}

  ngOnInit() {}
}
