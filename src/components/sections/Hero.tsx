import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* subtle background */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-zinc-700/20 blur-3xl" />
        <div className="absolute top-40 left-10 h-56 w-56 rounded-full bg-zinc-600/10 blur-3xl" />
        <div className="absolute top-64 right-0 h-56 w-56 rounded-full bg-zinc-600/10 blur-3xl" />
      </div>

      <Container>
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-zinc-50 text-zinc-950 grid place-items-center font-black">
              W
            </div>
            <span className="text-sm font-semibold tracking-tight text-zinc-200">
              Workout App
            </span>
          </div>

          <nav className="flex items-center gap-2">
            <Button href="/login" variant="ghost">
              Log in
            </Button>
            <Button href="/signup" variant="secondary">
              Sign up
            </Button>
          </nav>
        </header>

        <div className="grid gap-10 pb-16 pt-10 lg:grid-cols-2 lg:items-center lg:pt-16">
          <div className="space-y-6">
            <Pill>Minimal training planner • Built for the gym</Pill>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Plan smarter workouts.
              <span className="text-zinc-300"> Track progress. Build consistency.</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-zinc-300">
              A simple workout web app for gym-goers: create customizable plans, log sessions fast,
              and see analytics that actually help you improve.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button href="/signup" variant="primary">
                Get started
              </Button>
              <Button href="#features" variant="secondary">
                See features
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
              <span className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-2">
                No clutter UI
              </span>
              <span className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-2">
                Fast logging
              </span>
              <span className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-2">
                Useful insights
              </span>
            </div>
          </div>

          {/* placeholder app preview */}
          <div className="relative">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
                <div className="h-3 w-3 rounded-full bg-zinc-700" />
                <div className="h-3 w-3 rounded-full bg-zinc-700" />
                <div className="h-3 w-3 rounded-full bg-zinc-700" />
                <div className="ml-2 h-3 w-40 rounded bg-zinc-800" />
              </div>

              <div className="mt-4 grid gap-3">
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4 transition hover:border-zinc-700">
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-40 rounded bg-zinc-800" />
                    <div className="h-8 w-20 rounded-lg bg-zinc-50 text-zinc-950 grid place-items-center text-xs font-semibold">
                      Start
                    </div>
                  </div>
                  <div className="mt-3 grid gap-2">
                    <div className="h-3 w-4/5 rounded bg-zinc-800" />
                    <div className="h-3 w-3/5 rounded bg-zinc-800" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4 transition hover:border-zinc-700">
                    <div className="h-3 w-20 rounded bg-zinc-800" />
                    <div className="mt-3 h-10 w-full rounded bg-zinc-800" />
                  </div>
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4 transition hover:border-zinc-700">
                    <div className="h-3 w-24 rounded bg-zinc-800" />
                    <div className="mt-3 h-10 w-full rounded bg-zinc-800" />
                  </div>
                </div>

                <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4 transition hover:border-zinc-700">
                  <div className="h-3 w-28 rounded bg-zinc-800" />
                  <div className="mt-3 h-20 w-full rounded bg-zinc-800" />
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-10 left-10 h-24 w-24 rounded-full bg-zinc-700/10 blur-2xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}
