const STAT_PLACEHOLDERS = ['repositories', 'gists', 'followers', 'following']
const DETAIL_PLACEHOLDERS = ['company', 'location', 'blog', 'email']

export default function ProfileSkeleton() {
  return (
    <section
      role="status"
      aria-busy="true"
      aria-label="Loading GitHub profile"
      className="bg-container w-full max-w-3xl rounded-md border border-outline-variant p-5 md:p-6 flex flex-col gap-5"
    >
      <span className="sr-only">Loading GitHub profile...</span>

      <div aria-hidden="true" className="flex flex-col gap-5">
        <header className="flex gap-5 items-center flex-col md:flex-row">
          <div className="flex gap-3 flex-1 w-full min-w-0">
            <div className="skeleton size-24 md:size-30 rounded-full shrink-0" />
            <div className="flex flex-col gap-2 min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <div className="skeleton h-6 w-40 max-w-full rounded-md" />
                <div className="skeleton h-5 w-12 rounded-full" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="skeleton h-4 w-24 rounded-sm" />
                <div className="skeleton h-4 w-32 rounded-sm" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-fit">
            <div className="skeleton h-10 w-full md:w-32 rounded-md" />
          </div>
        </header>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="skeleton h-4 w-full rounded-sm" />
            <div className="skeleton h-4 w-11/12 rounded-sm" />
            <div className="skeleton h-4 w-2/3 rounded-sm" />
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {STAT_PLACEHOLDERS.map((stat) => (
              <div
                key={stat}
                className="flex flex-col gap-1 rounded-md border border-outline-variant bg-surface-container-low px-3 py-2"
              >
                <div className="skeleton h-3 w-16 rounded-sm" />
                <div className="skeleton h-5 w-10 rounded-sm" />
              </div>
            ))}
          </div>

          <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {DETAIL_PLACEHOLDERS.map((detail) => (
              <div key={detail} className="flex items-center gap-2">
                <div className="skeleton size-4 rounded-sm shrink-0" />
                <div className="skeleton h-3.5 w-32 rounded-sm" />
              </div>
            ))}
          </div>

          <div className="skeleton h-3 w-28 rounded-sm" />
        </div>
      </div>
    </section>
  )
}
