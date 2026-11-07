import type { GithubUserSearchItem } from '@/types/github-user-search-response'
import type { GithubUserSearchResult } from '@/types/github-user-search-result'

export function mapGithubUserSearchItem(
  item: GithubUserSearchItem,
): GithubUserSearchResult {
  return {
    login: item.login,
    avatarUrl: item.avatar_url,
    htmlUrl: item.html_url,
    type: item.type,
  }
}
