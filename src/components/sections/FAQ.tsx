import Container from "@/components/ui/Container";
import Pill from "@/components/ui/Pill";

const faqs = [
  {
    q: "Is this for beginners or experienced lifters?",
    a: "Both. The app is flexible: you can run simple full-body plans or detailed splits.",
  },
  {
    q: "Can I edit plans anytime?",
    a: "Yes—swap exercises, adjust sets/reps, and update rest times whenever you want.",
  },
  {
    q: "What analytics do I get?",
    a: "Core trends like volume, PR tracking, consistency, and basic progress views (kept intentionally simple).",
  },
  {
    q: "Do I need to follow a specific program style?",
    a: "No. It supports any gym style—strength, hypertrophy, general fitness, or mixed training.",
  },
];

export default function FAQ() {
  return (
    <section className="border-t border-zinc-900/80">
      <Container>
        <div className="py-16">
          <div className="space-y-3">
            <Pill>FAQ</Pill>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Quick answers
            </h2>
          </div>

          <div className="mt-10 grid gap-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 open:border-zinc-700"
              >
                <summary className="cursor-pointer list-none select-none text-sm font-semibold text-zinc-100 flex items-center justify-between">
                  {f.q}
                  <span className="ml-4 text-zinc-400 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
