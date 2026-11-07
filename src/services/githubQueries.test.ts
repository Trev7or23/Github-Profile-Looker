import { QueryClient } from '@tanstack/react-query'
import { describe, expect, it } from 'vitest'
import {
  githubUserOptions,
  githubUserSearchByEmailOptions,
} from '@/services/githubQueries'
import { isEmail } from '@/utils/is-email'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
  },
})

describe('githubUserOptions', () => {
  it('fetches a real GitHub user by username', async () => {
    const user = await queryClient.fetchQuery(githubUserOptions('trev7or23'))

    expect(user.login.toLowerCase()).toBe('trev7or23')
    expect(user.html_url).toMatch(/^https:\/\/github\.com\//)
  })

  it('fails for a non-existent username', async () => {
    await expect(
      queryClient.fetchQuery(
        githubUserOptions('this-user-definitely-does-not-exist-848291'),
      ),
    ).rejects.toThrow('User not found')
  })
})

describe('githubUserSearchByEmailOptions', () => {
  it('fetches users by a real public email', async () => {
    const options = githubUserSearchByEmailOptions('elguason.5020@gmail.com')

    expect(options.enabled).toBe(true)

    const result = await queryClient.fetchQuery(options)

    expect(Array.isArray(result.items)).toBe(true)
    expect(typeof result.total_count).toBe('number')
    expect(typeof result.incomplete_results).toBe('boolean')
  })

  it('is disabled for an invalid email', () => {
    const options = githubUserSearchByEmailOptions('not-a-valid-email')

    expect(options.enabled).toBe(false)
    expect(isEmail('not-a-valid-email')).toBe(false)
  })

  it('does not treat a username with @ as an email', () => {
    expect(isEmail('@trev7or23')).toBe(false)
    expect(isEmail('trev7or23')).toBe(false)
  })
})
