import { BiWorld } from 'react-icons/bi'
export default function InitialCard() {
  return (
    <article className="bg-container mx-7 sm:w-[70%] lg:w-[55%] rounded-xl py-4 px-10 flex flex-col gap-5">
      <section className="flex gap-5  flex-col flex-1 items-center">
        <div className="p-2.5 rounded-xl bg-content h-fit w-fit">
          <BiWorld className="size-20 md:w-50 md:h-40 text-element" />
        </div>
        <h2 className="text-4xl font-bold">Ready to explore Developers?</h2>
      </section>

      <p className="text-xl prose prose-lg md:mx-6  lg:text-2xl mb-4  text-center text-white/80">
        Type any public GitHub username above to instantly inspect activity
        metrics, repository telemetry, verified metadata, and primary language
        stacks
      </p>
    </article>
  )
}
