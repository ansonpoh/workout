import Container from "@/components/ui/Container";

export default function Logos() {
  return (
    <section className="border-t border-zinc-900/80">
      <Container>
        <div className="py-10">
          <p className="text-xs text-zinc-500">PLACEHOLDER SOCIAL PROOF</p>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-12 rounded-xl border border-zinc-800 bg-zinc-900/30 grid place-items-center text-xs text-zinc-400"
              >
                Brand {i + 1}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
