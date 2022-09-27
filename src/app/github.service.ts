import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GitHubService {
  readonly baserUrl = 'https://api.github.com';

  constructor(public httpClient: HttpClient) {}

  /** Search repositories API を実行する。 */
  async searchRepos({
    q = 'ionic',
    page = 1,
    perPage = 100,
  }): Promise<SearchGitHubReposResponse> {
    return this.httpClient
      .get<SearchGitHubReposResponse>(`${this.baserUrl}/search/repositories`, {
        headers: {
          accept: 'application/vnd.github.v3+json',
        },
        params: { q, page, perPage },
      })
      .toPromise();
  }

  /** Get repository API を実行する。 */
  async fetchRepo({
    ownerName,
    repoName,
  }: {
    ownerName: string;
    repoName: string;
  }): Promise<GitHubRepo> {
    return this.httpClient
      .get<GitHubRepo>(`${this.baserUrl}/repos/${ownerName}/${repoName}`, {
        headers: {
          accept: 'application/vnd.github.v3+json',
        },
      })
      .toPromise();
  }
}
