export interface IGithubUser {
  login: string;
  id: number;
  name: string;
  avatar_url: string;
  company: string | null;
  blog: string;
  location: string;
  bio: string;
  public_repos: number;
  twitter_username: string | null;
  followers: number;
  following: number;
  created_at: string;
}

export interface IGithubError {
  message: string;
  documentation_url: string;
}
