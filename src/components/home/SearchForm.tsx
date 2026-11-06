import type { FormEvent } from 'react'
import { BiSearch, BiArrowToRight } from 'react-icons/bi'
import { useGithubStore } from '@/store/github'

export default function SearchForm() {
  const changeUser = useGithubStore((state) => state.changeUser)
  const value = useGithubStore((state) => state.inputValue)
  const setValue = useGithubStore((state) => state.setInputValue)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    changeUser(value)
  }
  return (
    <form className="flex gap-3 w-full max-w-3xl mx-auto" onSubmit={handleSubmit}>
      <div className="bg-surface-container flex items-center rounded-md w-full h-17 pl-2 pr-2 gap-1 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-blue-500">
        <BiSearch className="text-white size-7 shrink-0" />
        <input
          name="github-name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="search"
          placeholder="Trev7or23"
          className="border-0 outline-none w-full min-w-0 flex-1 input-autofill-fix"
        />
        <button
          type="submit"
          aria-label="Search"
          className="flex shrink-0 rounded-md py-3 px-4 text-center items-center text-xl font-bold gap-1 self-center enabled:cursor-pointer transition-colors duration-200 bg-on-surface text-background hover:bg-surface-bright hover:text-on-surface"
        >
          <span className="hidden sm:inline">Search</span>
          <BiArrowToRight className="size-8" />
        </button>
      </div>
    </form>
  )
}
