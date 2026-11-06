import { queryOptions } from '@tanstack/react-query'
import type { GithubResponse } from '../types/github-response'

const fetchGithubUser = async (username: string): Promise<GithubResponse> => {
  const url = `${import.meta.env.VITE_GITHUB_API}/${username}`
  console.log(url)
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Error getting the github user')
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
