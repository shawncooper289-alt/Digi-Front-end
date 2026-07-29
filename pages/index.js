import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Bot,
  BrainCircuit,
  Check,
  ChevronRight,
  CircleDollarSign,
  Crown,
  Globe2,
  Mail,
  MessageCircle,
  Mic2,
  Sparkles,
  Store,
  Users,
  Video,
  Wand2,
  Zap,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const trustItems = ['Cancel Anytime', 'Mobile App Ready', '24/7 AI Support', 'Secure Checkout'];

const stats = [
  ['16+', 'AI Tools Included'],
  ['340%', 'Avg. Lead Increase'],
  ['40 hrs', 'Time Saved / Week'],
  ['$5k+', 'Agency Fees Replaced'],
];

const features = [
  ['Ava Skye', 'Your AI Chief of Staff orchestrates campaigns, content, clients, and growth.', BrainCircuit],
  ['Lead Command Center', 'Track every prospect, pipeline stage, conversion, and next best action.', Users],
  ['Lead Marketplace', 'Source high-intent leads and launch offers into ready-made audiences.', Store],
  ['AI Voice Sales Calls', 'Qualify, follow up, and book calls with natural AI voice agents.', Mic2],
  ['Funnel & Website Builders', 'Launch polished pages, funnels, and offers without developer delays.', Globe2],
  ['Social Hub & Content Studio', 'Plan, generate, and publish magnetic content across channels.', Wand2],
  ['Email Builder & Integrations', 'Create campaigns and connect your favorite email platforms fast.', Mail],
  ['AI Bots & Virtual AI Team', 'Deploy bots for sales, support, onboarding, fulfillment, and ops.', Bot],
  ['Paid Communities Management', 'Manage premium communities, members, resources, and engagement.', Crown],
  ['Cinematic Video Maker', 'Turn scripts and campaigns into scroll-stopping visual assets.', Video],
  ['Revenue & Analytics Dashboards', 'See revenue, attribution, funnel performance, and campaign ROI.', BarChart3],
];

const pricing = [
  ['Starter', '$47', 'Launch your AI marketing stack.', ['Ava Skye Lite', '3 funnels', 'Email templates', 'Basic analytics']],
  ['Growth', '$97', 'Grow leads and automate follow-up.', ['10 funnels', 'Lead Command Center', 'Social content studio', 'Chat bot builder']],
  ['Pro', '$197', 'Scale like a full agency.', ['Unlimited funnels', 'AI voice sales calls', 'Advanced automations', 'Priority Ava workflows'], true],
  ['Agency', '$497', 'Run multiple client brands.', ['Client workspaces', 'White-label portals', 'Team permissions', 'Agency dashboards']],
  ['Elite', '$997', 'Dominate with premium AI ops.', ['Dedicated AI strategy flows', 'Revenue command center', 'VIP onboarding', 'Elite support']],
];

const integrations = ['Mailchimp', 'ConvertKit', 'ActiveCampaign', 'GetResponse', 'AWeber'];

export default function Home() {
  return (
    <>
      <Head>
        <title>DigiMark101 | AI-Powered Marketing Platform</title>
        <meta
          name="description"
          content="DigiMark101 is an AI-powered marketing platform with funnels, websites, content, emails, bots, and Ava Skye, your AI Chief of Staff."
        />
      </Head>

      <main className="min-h-screen overflow-hidden bg-[#0B0F17] text-white selection:bg-cyan-400/30 selection:text-white">
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute left-[-12rem] top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-indigo-600/25 blur-[120px]" />
          <div className="absolute right-[-10rem] top-1/4 h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-[120px]" />
          <div className="absolute bottom-[-16rem] left-1/3 h-[36rem] w-[36rem] rounded-full bg-fuchsia-500/10 blur-[140px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        </div>

        <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#top" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_28px_rgba(6,182,212,.35)]">
              <Sparkles className="h-5 w-5 text-cyan-300" />
            </span>
            <span className="text-xl font-black tracking-tight">DigiMark101</span>
          </a>
          <a
            href="#pricing"
            className="rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 py-3 text-sm font-bold text-white shadow-[0_0_35px_rgba(79,70,229,.35)] transition hover:scale-105"
          >
            Get Started
          </a>
        </nav>

        <section id="top" className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-28 lg:pt-24">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center lg:text-left">
            <motion.div variants={fadeUp} className="mx-auto mb-6 inline-flex rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-[0_0_30px_rgba(6,182,212,.18)] backdrop-blur lg:mx-0">
              🚀 The World&apos;s Most Advanced AI Marketing Platform
            </motion.div>
            <motion.h1 variants={fadeUp} className="mx-auto max-w-5xl text-5xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:mx-0 lg:text-7xl">
              Your Digital{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                Empire
              </span>{' '}
              Starts Here.
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 lg:mx-0">
              DigiMark101 gives you a complete AI-powered agency in a box — funnels, websites, content, emails, bots, and an AI Chief of Staff named Ava Skye who runs it all. No team needed. No agency fees. Just results.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a href="#pricing" className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-7 py-4 text-base font-black text-white shadow-[0_0_45px_rgba(79,70,229,.42)] transition hover:-translate-y-1">
                Start Building My Empire
                <ChevronRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a href="#ava" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:border-cyan-300/60 hover:bg-cyan-300/10">
                Chat with Ava Free
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 grid gap-3 text-sm font-semibold text-slate-300 sm:grid-cols-2 lg:max-w-2xl xl:grid-cols-4">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3 py-2 lg:justify-start">
                  <Check className="h-4 w-4 text-cyan-300" />
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-indigo-500/30 to-cyan-400/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 font-black shadow-[0_0_30px_rgba(6,182,212,.35)]">A</div>
                  <div>
                    <p className="font-black">Ava Skye</p>
                    <p className="text-xs text-cyan-200">Online • AI Chief of Staff</p>
                  </div>
                </div>
                <Zap className="h-5 w-5 text-cyan-300" />
              </div>
              <div className="space-y-4">
                {[
                  ['Ava', 'I found 128 warm leads, drafted your launch emails, and built the funnel outline.'],
                  ['You', 'Can you launch the campaign tonight?'],
                  ['Ava', 'Already scheduling content, setting up follow-up automations, and preparing the checkout flow.'],
                  ['Ava', 'Projected lift: +34% conversions this week.'],
                ].map(([name, text], index) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: name === 'You' ? 24 : -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 }}
                    className={`max-w-[86%] rounded-3xl px-4 py-3 text-sm leading-6 ${name === 'You' ? 'ml-auto bg-indigo-600 text-white' : 'bg-white/8 text-slate-200'}`}
                  >
                    <span className="mb-1 block text-xs font-bold text-cyan-200">{name}</span>
                    {text}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="ava" className="relative z-10 mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger} className="grid items-center gap-8 rounded-[2rem] border border-white/10 bg-white/[.045] p-6 shadow-2xl shadow-indigo-950/20 backdrop-blur md:grid-cols-[.8fr_1.2fr] lg:p-10">
            <motion.div variants={fadeUp} className="rounded-[1.75rem] border border-cyan-300/20 bg-gradient-to-br from-indigo-500/20 to-cyan-400/10 p-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,.08)]">
              <div className="mx-auto mb-5 grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-5xl font-black shadow-[0_0_55px_rgba(6,182,212,.45)]">A</div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-200">Meet your AI Chief of Staff</p>
              <h2 className="mt-4 text-4xl font-black">Ava Skye</h2>
            </motion.div>
            <motion.div variants={fadeUp}>
              <blockquote className="text-2xl font-semibold leading-snug text-slate-100 lg:text-3xl">
                “I build funnels, write emails, create content, manage your social media, onboard your clients, and grow your business — all while you sleep...”
              </blockquote>
              <p className="mt-6 text-slate-300">Ava connects your strategy, content, automations, client operations, and revenue insights into one always-on command center.</p>
            </motion.div>
          </motion.div>
        </section>

        <section className="relative z-10 mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([value, label]) => (
              <motion.div key={label} variants={fadeUp} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-center shadow-[0_0_35px_rgba(6,182,212,.08)]">
                <p className="bg-gradient-to-r from-indigo-300 to-cyan-200 bg-clip-text text-4xl font-black text-transparent">{value}</p>
                <p className="mt-2 text-sm font-bold text-slate-300">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-300">One Platform. Infinite Power.</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Everything your agency needs, powered by AI.</h2>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={stagger} className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map(([title, description, Icon]) => (
              <motion.div key={title} variants={fadeUp} className="group rounded-[1.5rem] border border-white/10 bg-white/[.045] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[.07] hover:shadow-[0_0_35px_rgba(6,182,212,.16)]">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600/80 to-cyan-500/80 shadow-[0_0_25px_rgba(79,70,229,.25)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="pricing" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-300">Choose Your Power Level</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Start lean. Scale into an empire.</h2>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger} className="mt-12 grid gap-5 lg:grid-cols-5">
            {pricing.map(([name, price, description, items, popular]) => (
              <motion.div key={name} variants={fadeUp} className={`relative flex flex-col rounded-[1.5rem] border p-6 ${popular ? 'border-cyan-300/60 bg-gradient-to-b from-indigo-600/25 to-cyan-500/10 shadow-[0_0_55px_rgba(6,182,212,.22)]' : 'border-white/10 bg-white/[.045]'}`}>
                {popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">Most Popular</span>}
                <h3 className="text-xl font-black">{name}</h3>
                <p className="mt-2 text-sm text-slate-300">{description}</p>
                <div className="mt-6 flex items-end gap-1">
                  <span className="text-4xl font-black">{price}</span>
                  <span className="pb-1 text-slate-400">/mo</span>
                </div>
                <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-300">
                  {items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#top" className={`mt-7 inline-flex justify-center rounded-full px-5 py-3 text-sm font-black transition hover:-translate-y-1 ${popular ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-[0_0_30px_rgba(6,182,212,.25)]' : 'border border-white/15 bg-white/5 text-white hover:border-cyan-300/50'}`}>
                  Get Started
                </a>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/[.045] p-8 text-center backdrop-blur">
            <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200 shadow-[0_0_35px_rgba(6,182,212,.2)]">
              <Mail className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-black">Email Integration Add-on</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-300">Plug DigiMark101 into the email tools you already trust and let Ava coordinate campaigns end-to-end.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {integrations.map((integration) => (
                <span key={integration} className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-slate-950/70 px-4 py-2 text-sm font-bold text-slate-100 shadow-[0_0_22px_rgba(6,182,212,.08)]">
                  <CircleDollarSign className="h-4 w-4 text-cyan-300" />
                  {integration}
                </span>
              ))}
            </div>
          </div>
        </section>

        <a href="#ava" className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-slate-950/90 px-5 py-4 font-black text-white shadow-[0_0_45px_rgba(6,182,212,.35)] backdrop-blur transition hover:-translate-y-1 hover:bg-slate-900">
          <span className="relative grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500">
            <MessageCircle className="h-5 w-5" />
            <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-slate-950 bg-emerald-400" />
          </span>
          Ask Ava Skye
        </a>
      </main>
    </>
  );
}
