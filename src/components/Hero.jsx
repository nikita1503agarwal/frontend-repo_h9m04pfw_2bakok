import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-950/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(59,130,246,0.35),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-blue-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Live match insights and squad control
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Build, manage, and win with your club
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 max-w-2xl text-lg text-blue-200">
            The all-in-one football management platform for tactics, scouting, training, and finance—built for modern clubs and ambitious managers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-3 font-medium text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400">
              Start free trial
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:border-white/25">
              Explore features
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-10 grid grid-cols-2 gap-6 text-sm text-blue-200/90 sm:grid-cols-4">
            <div>
              <p className="text-2xl font-semibold text-white">30k+</p>
              <p>Players scouted</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">120</p>
              <p>Leagues covered</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">98%</p>
              <p>Uptime</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">24/7</p>
              <p>Analytics</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
