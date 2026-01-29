import Container from "@/components/ui/Container";
import Pill from "@/components/ui/Pill";

const steps = [
  {
    title: "Create your plan",
    desc: "Pick a split, add exercises, and tailor sets/reps/rest to your style.",
  },
  {
    title: "Log sessions fast",
    desc: "Quick set logging with a clean layout built for the gym floor.",
  },
  {
    title: "Review + improve",
    desc: "Use trends and PRs to plan your next session with confidence.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-t border-zinc-900/80">
      <Container>
        <div className="py-16">
          <div className="space-y-3">
            <Pill>How it works</Pill>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Simple workflow, strong results
            </h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {steps.map((s, idx) => (
              <div
                key={s.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-zinc-50 text-zinc-950 grid place-items-center text-sm font-black">
                    {idx + 1}
                  </div>
                  <h3 className="text-sm font-semibold">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">{s.desc}</p>
                <div className="mt-6 h-24 rounded-xl border border-zinc-800 bg-zinc-950/30" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
