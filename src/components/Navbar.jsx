import { Menu, SoccerBall, ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-2 text-white">
            <SoccerBall className="h-6 w-6 text-blue-400" />
            <span className="font-semibold">ClubManager</span>
          </div>

          <nav className="hidden gap-6 text-sm text-blue-200 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Clubs</a>
            <a href="#" className="hover:text-white">Support</a>
          </nav>

          <div className="flex items-center gap-2">
            <a href="#get-started" className="hidden items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20 md:inline-flex">
              Get started <ArrowRight className="h-4 w-4" />
            </a>
            <button className="inline-flex items-center rounded-lg p-2 text-blue-200 hover:bg-white/10 md:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
