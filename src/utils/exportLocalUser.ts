import { IGithubUser } from "../types/user";

export const exportLocalUser = (user: IGithubUser) => ({
  login: user.login,
  id: user.id,
  avatar_url: user.avatar_url,
  name: user.name,
  company: user.company,
  public_repos: user.public_repos,
  blog: user.blog,
  location: user.location,
  bio: user.bio,
  twitter_username: user.twitter_username,
  followers: user.followers,
  following: user.following,
  created_at: user.created_at,
});
