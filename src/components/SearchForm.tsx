import { BiSearch, BiArrowToRight } from 'react-icons/bi'
import { useGithubStore } from '../store/github'

export default function SearchForm() {
  const changeUser = useGithubStore((state) => state.changeUser)
  const value = useGithubStore((state) => state.inputValue)
  const setValue = useGithubStore((state) => state.setInputValue)

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    changeUser(value)
  }
  return (
    <form className="flex gap-3" onSubmit={handleSubmit}>
      <div className="bg-surface-container flex items-center rounded-md overflow-hidden sm:w-145 md:w-190 lg:w-200 h-17 pl-2 gap-1">
        <BiSearch className="text-white size-7" />
        <input
          name="github-name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="search"
          placeholder="Trev7or23"
          className="border-0 outline-none w-full input-autofill-fix"
        />
        <button
          type="submit"
          className="flex rounded-md py-3 px-4 text-center items-center text-xl font-bold gap-1 self-center enabled:cursor-pointer transition-colors duration-200 bg-on-surface text-background hover:bg-surface-bright hover:text-on-surface"
        >
          Search <BiArrowToRight className="size-8" />
        </button>
      </div>
    </form>
  )
}
