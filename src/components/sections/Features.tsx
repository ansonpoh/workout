import Container from "@/components/ui/Container";
import Pill from "@/components/ui/Pill";

const features = [
  {
    title: "Customizable workout plans",
    desc: "Build routines your way: days, splits, exercises, sets, reps, rest—everything editable.",
  },
  {
    title: "Analytics that matter",
    desc: "See volume, PRs, consistency, and trends without drowning in charts.",
  },
  {
    title: "Exercise library",
    desc: "Browse a clean library with muscle groups, cues, and quick add to your plan.",
  },
  {
    title: "Fast gym logging",
    desc: "Minimal taps to record sets. Stay in the zone and keep sessions moving.",
  },
  {
    title: "Progressive overload helpers",
    desc: "Gentle nudges: suggested targets based on your recent sessions.",
  },
  {
    title: "Clean, distraction-free UI",
    desc: "Athletic minimal design: readable, quick, and built for daily use.",
  },
];

export default function Features() {
  return (
    <section id="features" className="border-t border-zinc-900/80">
      <Container>
        <div className="py-16">
          <div className="flex items-center justify-between gap-6">
            <div className="space-y-3">
              <Pill>Features</Pill>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Everything you need to train consistently
              </h2>
              <p className="max-w-2xl text-sm text-zinc-300">
                A flexible plan builder, gym-friendly logging, and analytics that guide your next session.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 transition hover:border-zinc-700"
              >
                <div className="mb-3 h-9 w-9 rounded-xl border border-zinc-800 bg-zinc-950/40 grid place-items-center text-zinc-200 transition group-hover:border-zinc-700">
                  {/* placeholder icon */}
                  <span className="text-sm font-semibold">•</span>
                </div>
                <h3 className="text-sm font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
