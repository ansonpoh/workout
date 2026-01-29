import Container from "@/components/ui/Container";
import Pill from "@/components/ui/Pill";

const items = [
  {
    quote: "Clean interface. I log sets faster and actually check my progress now.",
    name: "Gym-goer",
    meta: "3–5x / week",
  },
  {
    quote: "The analytics are simple but useful—volume trends and PRs are exactly what I need.",
    name: "Intermediate lifter",
    meta: "Strength focus",
  },
  {
    quote: "Planning my week takes minutes. No clutter, no distractions.",
    name: "Busy student",
    meta: "Short sessions",
  },
];

export default function Testimonials() {
  return (
    <section className="border-t border-zinc-900/80">
      <Container>
        <div className="py-16">
          <div className="space-y-3">
            <Pill>Social proof</Pill>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Built for real gym habits
            </h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {items.map((t) => (
              <figure
                key={t.quote}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6"
              >
                <blockquote className="text-sm leading-relaxed text-zinc-200">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-zinc-400">{t.meta}</div>
                  </div>
                  <div className="h-10 w-10 rounded-full border border-zinc-800 bg-zinc-950/40" />
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
