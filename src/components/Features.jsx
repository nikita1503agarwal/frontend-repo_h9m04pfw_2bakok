import { motion } from 'framer-motion';
import { Trophy, Users, LineChart, Wallet } from 'lucide-react';

const features = [
  {
    icon: Trophy,
    title: 'Tactics & Matchday',
    desc: 'Design formations, set roles, and simulate match plans powered by live data.'
  },
  {
    icon: Users,
    title: 'Squad & Academy',
    desc: 'Manage contracts, injuries, and progression with wellness and training insights.'
  },
  {
    icon: LineChart,
    title: 'Scouting & Analytics',
    desc: 'Discover talent with performance metrics, heatmaps, and AI-powered recommendations.'
  },
  {
    icon: Wallet,
    title: 'Finance & Ops',
    desc: 'Track budgets, salaries, and commercial impact with clear dashboards.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-white sm:text-4xl">
            Everything you need to run a winning club
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-blue-200">
            From academy to first team, unite people, data, and decisions in one place.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 backdrop-blur-sm">
              <div className="mb-3 inline-flex rounded-xl bg-blue-500/15 p-3 text-blue-300 ring-1 ring-inset ring-blue-500/20">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-blue-200/90">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
