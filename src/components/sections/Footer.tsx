import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900/80">
      <Container>
        <div className="py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-zinc-50 text-zinc-950 grid place-items-center font-black">
              W
            </div>
            <div>
              <div className="text-sm font-semibold">Workout App</div>
              <div className="text-xs text-zinc-400">Minimal gym tracking</div>
            </div>
          </div>

          <div className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Workout App. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
