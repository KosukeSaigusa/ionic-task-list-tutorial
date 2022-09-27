/* eslint-disable @typescript-eslint/naming-convention */

/** Search Repositories API のレスポンス。 */
interface SearchGitHubReposResponse {
  total_count: number;
  incomplete_result: number;
  items: GitHubRepo[];
}

/** GitHub API の Repo。 */
interface GitHubRepo {
  id: number;
  name: string;
  owner: Owner;
  html_url: string;
  description: string;
  updated_at: string;
  star_gazer_count: number;
  forks_count: number;
}

/** GitHub API の Owner。 */
interface Owner {
  id: number;
  login: string;
  avatar_rrl: string;
  html_url: string;
}
