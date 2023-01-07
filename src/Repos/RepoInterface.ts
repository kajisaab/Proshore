// Results need to indicate the repository name, its author, the number of stars, watchers and forks (use
// appropriate icons), a short description, the date of the last update. The results should be paginated
// with an appropriate UI and indicate the total number of pages.
// Every result needs to be linked to a detail page, showing the following information:
// ■ Full owner name (with link to the Github page)
// ■ Repository name (with link to the Github page)
// ■ Number of open issues
// ■ Default branch

export interface IRepo {
  full_name?: string;
  archive_url?: string;
  branches_url?: string;
  clone_url?: string;
  collaborators_url?: string;
  commits_url?: string;
  default_branch?: string;
  forks?: number;
  forks_count?: number;
  git_url?: string;
  open_issues?: number;
  open_issues_count?: number;
  description?: string;
  name?: string;
  watchers?: number;
  watchers_count?: number;
  stargazers_count?: number;
  owner: {
    login?: string;
  };
}
