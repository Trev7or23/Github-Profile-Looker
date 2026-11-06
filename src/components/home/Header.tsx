import RecentUsers from '@/components/home/RecentUsers'
import SearchForm from '@/components/home/SearchForm'

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-2 w-full">
      <SearchForm />
      <RecentUsers />
    </header>
  )
}
