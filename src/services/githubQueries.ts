import { queryOptions } from '@tanstack/react-query'
import type { GithubResponse } from '@/types/github-response'
import type { GithubUserSearchResponse } from '@/types/github-user-search-response'
import { isEmail } from '@/utils/is-email'

const fetchGithubUser = async (username: string): Promise<GithubResponse> => {
  const url = `${import.meta.env.VITE_GITHUB_API}/users/${username}`
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(
      response.status === 404
        ? 'User not found'
        : `Error getting the GitHub user (${response.status})`,
    )
  }
  return await response.json()
}

export const githubUserOptions = (username: string) => {
  return queryOptions({
    queryKey: ['githubUser', username],
    queryFn: () => fetchGithubUser(username),
    staleTime: 1000 * 60 * 5, // Five Minutes
  })
}

const searchGithubUsersByEmail = async (
  email: string,
): Promise<GithubUserSearchResponse> => {
  const params = new URLSearchParams({ q: `${email} in:email` })
  const url = `${import.meta.env.VITE_GITHUB_API}/search/users?${params}`
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(
      response.status === 403
        ? 'Search rate limit exceeded. Try again later'
        : response.status === 422
          ? 'Invalid email search query'
          : `Error searching GitHub users (${response.status})`,
    )
  }
  return await response.json()
}

export const githubUserSearchByEmailOptions = (email: string) => {
  const normalizedEmail = email.trim().toLowerCase()

  return queryOptions({
    queryKey: ['githubUserSearch', 'email', normalizedEmail],
    queryFn: () => searchGithubUsersByEmail(normalizedEmail),
    staleTime: 1000 * 60 * 5, // Five Minutes
    enabled: isEmail(normalizedEmail),
  })
}
