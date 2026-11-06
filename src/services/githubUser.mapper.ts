import type { GithubResponse } from '../types/github-response'
import type { GithubUser } from '../types/github-user'

export function mapGithubUser({
  avatar_url: avatarUrl,
  created_at: createdAt,
  followers,
  followers_url: followersUrl,
  following,
  following_url: followingUrl,
  html_url: htmlUrl,
  login,
  url,
  type,
}: GithubResponse): GithubUser {
  return {
    type,
    avatarUrl,
    createdAt,
    followers,
    followersUrl,
    following,
    followingUrl,
    htmlUrl,
    login,
    url,
  }
}
