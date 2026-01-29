import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="border-t border-zinc-900/80">
      <Container>
        <div className="py-16">
          <div className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/60 to-zinc-950/40 p-8 sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Ready to make your training consistent?
                </h2>
                <p className="mt-2 text-sm text-zinc-300">
                  Create a plan, log your sessions, and track progress—all in one clean place.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href="/signup" variant="primary">
                  Get started
                </Button>
                <Button href="/login" variant="secondary">
                  Log in
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
