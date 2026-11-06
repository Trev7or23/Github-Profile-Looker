import { BiWorld } from 'react-icons/bi'
import Card from '@/components/shared/Card'
export default function InitialCard() {
  return (
    <Card className="w-full max-w-3xl h-fit">
      <section className="flex gap-5 flex-col items-center">
        <div className="p-2.5 rounded-xl bg-content h-fit w-fit">
          <BiWorld className="size-20 md:size-40 text-element" />
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Ready to explore Developers?
        </h2>
      </section>

      <p className="text-lg md:text-xl lg:text-2xl mt-4 mb-4 text-center text-white/80 max-w-2xl mx-auto">
        Type any public GitHub username above to instantly inspect activity
        metrics, repository telemetry, verified metadata, and primary language
        stacks
      </p>
    </Card>
  )
}
