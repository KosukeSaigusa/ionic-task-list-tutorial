import { Component, Input, OnInit } from '@angular/core';
import { GitHubRepo } from '../../interfaces/github';

@Component({
  selector: 'app-github-head',
  templateUrl: './github-head.component.html',
  styleUrls: ['./github-head.component.scss'],
})
export class GitHubHeadComponent implements OnInit {
  // Note: @angular/core の `Input` でコンポーネント外から値を取り出すことができる。
  @Input() repo: GitHubRepo;
  // @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
