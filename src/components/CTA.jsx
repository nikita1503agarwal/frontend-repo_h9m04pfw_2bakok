import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="get-started" className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-10 text-center shadow-2xl backdrop-blur">
          <h3 className="text-3xl font-semibold text-white">Ready to kick off?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-blue-200">
            Launch your club workspace in minutes. Invite staff, sync data sources, and get match-ready fast.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="rounded-xl bg-blue-500 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400">Create your workspace</a>
            <a href="#features" className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur transition hover:border-white/25">See how it works</a>
          </div>
        </div>
      </div>
    </section>
  );
}
