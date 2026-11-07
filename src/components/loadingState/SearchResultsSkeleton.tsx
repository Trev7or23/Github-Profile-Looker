export default function SearchResultsSkeleton() {
  return (
    <section
      role="status"
      aria-busy="true"
      aria-label="Loading GitHub user search"
      className="bg-container w-full max-w-3xl rounded-md border border-outline-variant p-5 md:p-6 flex flex-col gap-5"
    >
      <span className="sr-only">Loading GitHub user search...</span>

      <div aria-hidden="true" className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex gap-3 items-center">
              <div className="skeleton size-12 rounded-full shrink-0" />
              <div className="flex flex-col gap-2 flex-1">
                <div className="skeleton h-6 w-32 rounded-md" />
                <div className="skeleton h-4 w-24 rounded-sm" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
