import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  ComposedChart, Area, Line
} from "recharts";
import { Rocket, TrendingUp, Zap, Shield, ArrowRight, DollarSign, Users, Clock, Target, ChevronLeft, Globe, Brain, Building2, Landmark, Heart } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const brand = {
  bg: "bg-slate-950",
  card: "bg-slate-900/70",
  border: "border border-slate-800/60",
  text: "text-slate-200",
  sub: "text-slate-400",
  accent: "#003B70",
  accentSoft: "#4A90D9",
  success: "#22C55E",
  warning: "#F59E0B",
  citiRed: "#E31837",
  gold: "#C9922A",
};

const fmt = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 });

// Year-1 Financial Impact Data — adapted for CCB digital lending
const financialData = [
  { metric: "Reach", base: 60, optimistic: 70 },
  { metric: "Engagement", base: 35, optimistic: 45 },
  { metric: "Conversion Lift", base: 15, optimistic: 25 },
  { metric: "Digital Applications", base: 15.4, optimistic: 55.1 },
  { metric: "Avg Credit/App", base: 60, optimistic: 80 },
  { metric: "Revenue Impact", base: 16.7, optimistic: 79.4 },
  { metric: "Efficiency Savings", base: 2.6, optimistic: 9.2 },
  { metric: "Total Annual Lift", base: 19.3, optimistic: 102.9 },
];

// Detailed breakdown for Optimistic scenario
const detailedBreakdown = [
  { name: "Lending Revenue", value: 79.4, color: brand.accent },
  { name: "Operational Savings", value: 9.2, color: brand.accentSoft },
  { name: "Cross-Sell & Fees", value: 14.3, color: "#7dd3fc" },
];

// Strategic Leverage Comparison
const leverageData = [
  { category: "Credit Visibility", legacy: 20, lumiq: 95 },
  { category: "Application Efficiency", legacy: 25, lumiq: 90 },
  { category: "Underwriting Speed", legacy: 30, lumiq: 98 },
  { category: "Risk Intelligence", legacy: 40, lumiq: 92 },
  { category: "Cross-Border Scoring", legacy: 15, lumiq: 88 },
];

// Stage 2 Lending Data
const stage2Data = [
  { product: "Revolving Credit", volumeMin: 8, volumeMax: 12, revenueMin: 70, revenueMax: 110 },
  { product: "Term Loans", volumeMin: 5, volumeMax: 8, revenueMin: 60, revenueMax: 90 },
  { product: "Commercial Cards & LOC", volumeMin: 4, volumeMax: 6, revenueMin: 80, revenueMax: 120 },
];

// Revenue progression chart data
const revenueProgression = [
  { month: "M0", base: 0, optimistic: 0 },
  { month: "M3", base: 4.8, optimistic: 25.7 },
  { month: "M6", base: 9.7, optimistic: 51.5 },
  { month: "M9", base: 14.5, optimistic: 77.2 },
  { month: "M12", base: 19.3, optimistic: 102.9 },
];

// 5-Front Transformation data
const transformationFronts = [
  {
    icon: Brain,
    title: "AI-First",
    subtitle: "Stylus Workspaces",
    body: "Stylus Workspaces consumes LumiqAI signals natively \u2014 agentic AI for commercial lending, powered by structured credit intelligence.",
    kpi: "RM productivity via Stylus-integrated credit briefings",
    source: "Stylus Workspaces (Sep 2025)",
    color: brand.accent,
  },
  {
    icon: Rocket,
    title: "Digital Lending",
    subtitle: "CCB / CitiDirect",
    body: "83ms pre-qualification before CitiDirect submission \u2014 revolving credit, term loans, commercial cards, LOC up to $10M.",
    kpi: "Digital application-to-approval conversion rate",
    source: "CCB Digitizes Lending (Jun 2025)",
    color: brand.accentSoft,
  },
  {
    icon: Globe,
    title: "Cross-Border",
    subtitle: "Token Services",
    body: "Eligibility scoring across 94 markets, 300 clearing networks. Aligned with Token Services' 24/7 multi-currency liquidity.",
    kpi: "Cross-border credit decision accuracy",
    source: "Token Services Euro Expansion (Nov 2025)",
    color: "#5CBFEF",
  },
  {
    icon: TrendingUp,
    title: "Trade Finance",
    subtitle: "$7.75T Supercycle",
    body: "Supply chain credit scoring for the $7.75T capex supercycle. LatAm exports to South Asia/ASEAN up 82%. AI-powered document processing.",
    kpi: "Trade finance credit assessment throughput",
    source: "Supply Chain Financing Report (Feb 2026)",
    color: brand.success,
  },
  {
    icon: Heart,
    title: "Community",
    subtitle: "CRA Outstanding",
    body: "$60B housing commitment. CRA Outstanding. $13.5B small business lending. LumiqAI maps SPCP-eligible zones.",
    kpi: "CRA-eligible lending volume via credit intelligence",
    source: "CRA Rating (May 2025), $60B Housing Blueprint (Feb 2026)",
    color: brand.gold,
  },
];

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return { ref, count };
}

function AnimatedMetric({ label, value, suffix = "", prefix = "", color = brand.accent, delay = 0 }: {
  label: string; value: number; suffix?: string; prefix?: string; color?: string; delay?: number;
}) {
  const { ref, count } = useCountUp(value, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`rounded-2xl p-6 ${brand.card} ${brand.border} relative overflow-hidden`}
    >
      <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(circle at 30% 50%, ${color}, transparent)` }} />
      <div className="relative z-10">
        <div className="text-xs sm:text-sm text-slate-400 mb-2">{label}</div>
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color }}>
          {prefix}{fmt.format(count)}{suffix}
        </div>
      </div>
    </motion.div>
  );
}

function ComparisonBar({ label, legacy, lumiq, delay = 0 }: {
  label: string; legacy: number; lumiq: number; delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="mb-6"
    >
      <div className="text-sm text-slate-300 mb-2 flex justify-between">
        <span>{label}</span>
        <span className="text-slate-500">Legacy: {legacy}% &rarr; LUMIQ: {lumiq}%</span>
      </div>
      <div className="relative h-12 bg-slate-900 rounded-lg overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${legacy}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="absolute h-full bg-slate-700"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${lumiq}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.4 }}
          className="absolute h-full"
          style={{ background: `linear-gradient(90deg, ${brand.accent}, ${brand.accentSoft})` }}
        />
        <div className="absolute inset-0 flex items-center justify-end px-4">
          <span className="text-white font-semibold text-sm">+{lumiq - legacy}% improvement</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Impact() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.title = "LUMIQ AI \u2014 Digital Lending Impact";
    document.body.style.background = "#020617";
  }, []);

  return (
    <PageLayout>
      {/* HERO */}
      <section ref={heroRef} className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
              The <span style={{ color: brand.accentSoft }}>Digital Lending</span> Impact
              <br />
              <span className="text-2xl md:text-3xl text-muted-foreground">90 Days. 7 KPIs. Measurable CCB Performance.</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Digital credit pre-qualification, cross-border eligibility, and portfolio intelligence &mdash; measured across Citi's commercial lending platform.
            </p>
          </motion.div>

          {/* Hero Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12">
            <AnimatedMetric label="Application Conversion Lift" value={25} suffix="%" prefix="+" delay={0.1} color={brand.accentSoft} />
            <AnimatedMetric label="Pre-Qualification Speed" value={83} suffix="ms" prefix="" delay={0.2} color={brand.accent} />
            <AnimatedMetric label="Cross-Sell Accuracy" value={70} suffix="%+" prefix="" delay={0.3} color={brand.success} />
            <AnimatedMetric label="Governance Coverage" value={100} suffix="%" prefix="" delay={0.4} color={brand.gold} />
          </div>
        </div>
      </section>

      {/* CITI'S 5-FRONT TRANSFORMATION IMPACT */}
      <section className="py-16 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-extrabold mb-4">Credit Intelligence Across Citi's Five Transformation Fronts</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              One credit intelligence layer. Five strategic priorities. Every signal connected.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transformationFronts.map((front, idx) => {
              const Icon = front.icon;
              return (
                <motion.div
                  key={front.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`rounded-2xl p-6 ${brand.card} ${brand.border} relative overflow-hidden group hover:border-slate-700 transition-all duration-300`}
                >
                  <div className="absolute inset-0 opacity-5" style={{ background: `radial-gradient(circle at 30% 20%, ${front.color}, transparent)` }} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-xl grid place-items-center" style={{ background: `${front.color}20` }}>
                        <Icon className="h-5 w-5" style={{ color: front.color }} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: front.color }}>{front.title}</div>
                        <div className="text-sm text-slate-400">{front.subtitle}</div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">{front.body}</p>
                    <div className="border-t border-slate-800/60 pt-3 space-y-2">
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">KPI</div>
                        <div className="text-xs text-slate-300">{front.kpi}</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Source</div>
                        <div className="text-xs text-slate-400 italic">{front.source}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* YEAR-1 FINANCIAL IMPACT */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="h-6 w-6" style={{ color: brand.accentSoft }} />
              <h2 className="text-4xl font-extrabold">Year-1 Financial Impact</h2>
            </div>
            <p className="text-xl text-slate-400">Modeled for CCB Digital Lending &mdash; Grounded in Proven Credit Journey Trajectory</p>
          </motion.div>

          {/* Revenue Breakdown Visualization */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 ${brand.card} ${brand.border}`}
            >
              <h3 className="text-2xl font-semibold mb-6">Revenue Composition Breakdown</h3>
              <div className="space-y-4">
                {detailedBreakdown.map((item, idx) => (
                  <div key={item.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-300">{item.name}</span>
                      <span className="font-semibold" style={{ color: item.color }}>${item.value}M</span>
                    </div>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.2 }}
                      className="h-8 rounded-lg origin-left relative overflow-hidden"
                      style={{ backgroundColor: item.color, opacity: 0.8 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                    </motion.div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-700">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-slate-300">Total Annual Uplift</span>
                  <span className="text-3xl font-bold" style={{ color: brand.accentSoft }}>$102.9M</span>
                </div>
              </div>
            </motion.div>

            {/* Revenue Progression Chart */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 ${brand.card} ${brand.border}`}
            >
              <h3 className="text-2xl font-semibold mb-6">Revenue Acceleration Timeline</h3>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={revenueProgression}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" tickFormatter={(v) => `$${v}M`} />
                  <Tooltip
                    contentStyle={{ background: "#0f172a", border: "1px solid #334155", borderRadius: 12, color: "#e2e8f0" }}
                    formatter={(v: number) => [`$${v}M`, ""]}
                  />
                  <Legend />
                  <Area type="monotone" dataKey="optimistic" fill={brand.accentSoft} fillOpacity={0.3} stroke={brand.accentSoft} strokeWidth={3} name="Optimistic Path" />
                  <Line type="monotone" dataKey="base" stroke="#64748b" strokeWidth={2} strokeDasharray="5 5" name="Base Case" />
                </ComposedChart>
              </ResponsiveContainer>
              <p className="text-xs text-slate-500 mt-4">Growth curve modeled on CCB digital lending adoption rates and CitiDirect integration timeline</p>
            </motion.div>
          </div>

          {/* Detailed Metrics Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 ${brand.card} ${brand.border}`}
          >
            <h3 className="text-2xl font-semibold mb-6">Complete Financial Model &mdash; Base vs. Optimistic</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm min-w-[600px]">
                <thead>
                  <tr className="text-left border-b border-slate-700">
                    <th className="py-2 sm:py-3 pr-3 sm:pr-6 text-slate-400 font-semibold">Metric</th>
                    <th className="py-2 sm:py-3 pr-3 sm:pr-6 text-slate-400 font-semibold">Base Case</th>
                    <th className="py-2 sm:py-3 pr-3 sm:pr-6 text-slate-400 font-semibold">Optimistic</th>
                    <th className="py-2 sm:py-3 text-slate-400 font-semibold">Uplift</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 text-slate-300">Reach (CCB Market Segments)</td>
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6">60%</td>
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 font-semibold" style={{ color: brand.accentSoft }}>70%</td>
                    <td className="py-3 sm:py-4 text-slate-400">+10%</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 text-slate-300">Engagement</td>
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6">35%</td>
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 font-semibold" style={{ color: brand.accentSoft }}>45%</td>
                    <td className="py-3 sm:py-4 text-slate-400">+10%</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 text-slate-300">Application Conversion Lift</td>
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6">+15%</td>
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 font-semibold" style={{ color: brand.accentSoft }}>+25%</td>
                    <td className="py-3 sm:py-4 text-slate-400">+67%</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 text-slate-300">Digital Applications Scored</td>
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6">&asymp; 15.4K</td>
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 font-semibold" style={{ color: brand.accentSoft }}>&asymp; 55.1K</td>
                    <td className="py-3 sm:py-4 text-slate-400">+257%</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 text-slate-300">Avg Credit / Application</td>
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6">$60K</td>
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 font-semibold" style={{ color: brand.accentSoft }}>$80K</td>
                    <td className="py-3 sm:py-4 text-slate-400">+33%</td>
                  </tr>
                  <tr className="border-b border-slate-800 bg-slate-800/30">
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 text-slate-200 font-semibold">Lending Revenue</td>
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 font-semibold">$16.7M</td>
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 font-bold text-lg sm:text-xl" style={{ color: brand.accentSoft }}>$79.4M</td>
                    <td className="py-3 sm:py-4 text-slate-300 font-semibold">+375%</td>
                  </tr>
                  <tr className="border-b border-slate-800 bg-slate-800/30">
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 text-slate-200 font-semibold">Operational Savings</td>
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 font-semibold">$2.6M</td>
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 font-bold text-lg sm:text-xl" style={{ color: brand.accentSoft }}>$9.2M</td>
                    <td className="py-3 sm:py-4 text-slate-300 font-semibold">+254%</td>
                  </tr>
                  <tr className="bg-slate-800/50">
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 text-white font-bold text-base sm:text-lg">Total Annual Lift</td>
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 font-semibold">$19.3M</td>
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 font-bold text-xl sm:text-2xl" style={{ color: brand.gold }}>$102.9M</td>
                    <td className="py-3 sm:py-4 text-white font-bold">+433%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-400 mt-6">
              <strong className="text-slate-300">Breakdown:</strong> $79.4M lending revenue + $9.2M operational savings + $14.3M cross-sell & fee income =
              <strong style={{ color: brand.accentSoft }}> $102.9M</strong> triple-digit-million uplift in Year 1.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ROI COMPARISON TABLE */}
      <section className="py-16 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6" style={{ color: brand.success }} />
              <h2 className="text-4xl font-extrabold">CCB Performance Shift</h2>
            </div>
            <p className="text-xl text-slate-400">Before vs. After LumiqAI &mdash; Across CCB's Digital Lending Platform</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 ${brand.card} ${brand.border}`}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm min-w-[500px]">
                <thead>
                  <tr className="text-left border-b border-slate-700">
                    <th className="py-2 sm:py-3 pr-3 sm:pr-6 text-slate-400 font-semibold">Metric</th>
                    <th className="py-2 sm:py-3 pr-3 sm:pr-6 text-slate-400 font-semibold">Legacy State</th>
                    <th className="py-2 sm:py-3 text-slate-400 font-semibold">Post-LumiqAI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 text-slate-300">Pre-Qualification Time</td>
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 text-slate-400">Manual review</td>
                    <td className="py-3 sm:py-4 font-semibold" style={{ color: brand.accentSoft }}>83ms automated</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 text-slate-300">Digital Applications Processed/Day</td>
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 text-slate-400">Manual queue</td>
                    <td className="py-3 sm:py-4 font-semibold" style={{ color: brand.accentSoft }}>Real-time scoring</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 text-slate-300">Application Conversion</td>
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 text-slate-400">Baseline</td>
                    <td className="py-3 sm:py-4 font-semibold" style={{ color: brand.success }}>+15-25% lift</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 text-slate-300">Cross-Sell Accuracy</td>
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 text-slate-400">Below 40%</td>
                    <td className="py-3 sm:py-4 font-semibold" style={{ color: brand.success }}>&ge;70%</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 text-slate-300">Governance Coverage</td>
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 text-slate-400">Fragmented</td>
                    <td className="py-3 sm:py-4 font-semibold" style={{ color: brand.gold }}>100%</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 text-slate-300">Application Conversion Lift per CCB Segment</td>
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 text-slate-400">No unified view</td>
                    <td className="py-3 sm:py-4 font-semibold" style={{ color: brand.accentSoft }}>Segment-level tracking</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CROSS-BORDER CREDIT INTELLIGENCE */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Globe className="h-6 w-6" style={{ color: "#5CBFEF" }} />
              <h2 className="text-4xl font-extrabold">Credit Intelligence for 94 Markets</h2>
            </div>
            <p className="text-xl text-slate-400">
              Every cross-border transaction generates a credit signal. LumiqAI captures these.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 ${brand.card} ${brand.border}`}
            >
              <h3 className="text-2xl font-semibold mb-6">Token Services Integration</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Citi's Token Services processes payments across 94 markets, 300 clearing networks, and 135 currencies.
                Partnerships with Coinbase and Dandelion extend coverage into digital assets and emerging-market corridors.
              </p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                LumiqAI sits alongside Token Services to generate credit eligibility scores for every cross-border counterparty.
                Real-time payment flows become real-time credit signals &mdash; enriching CCB's view of international borrowers
                before they apply for credit on CitiDirect.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className={`rounded-lg p-4 ${brand.border} bg-slate-800/40`}>
                  <div className="text-2xl font-bold mb-1" style={{ color: "#5CBFEF" }}>94</div>
                  <div className="text-xs text-slate-400">Markets covered</div>
                </div>
                <div className={`rounded-lg p-4 ${brand.border} bg-slate-800/40`}>
                  <div className="text-2xl font-bold mb-1" style={{ color: "#5CBFEF" }}>300</div>
                  <div className="text-xs text-slate-400">Clearing networks</div>
                </div>
                <div className={`rounded-lg p-4 ${brand.border} bg-slate-800/40`}>
                  <div className="text-2xl font-bold mb-1" style={{ color: "#5CBFEF" }}>135</div>
                  <div className="text-xs text-slate-400">Currencies supported</div>
                </div>
                <div className={`rounded-lg p-4 ${brand.border} bg-slate-800/40`}>
                  <div className="text-2xl font-bold mb-1" style={{ color: "#5CBFEF" }}>24/7</div>
                  <div className="text-xs text-slate-400">Multi-currency liquidity</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 ${brand.card} ${brand.border}`}
            >
              <h3 className="text-2xl font-semibold mb-6">Cross-Border Credit Signal Flow</h3>
              <div className="space-y-4">
                {[
                  { step: "1", label: "Payment Initiated", desc: "Token Services processes cross-border transaction via 300 clearing networks" },
                  { step: "2", label: "Signal Captured", desc: "LumiqAI extracts counterparty data, payment patterns, and currency-risk indicators" },
                  { step: "3", label: "Eligibility Scored", desc: "Real-time credit eligibility across jurisdiction-specific compliance rules" },
                  { step: "4", label: "Intelligence Delivered", desc: "Structured JSON signals feed Stylus Workspaces for RM action or CitiDirect pre-qualification" },
                ].map((item, idx) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="h-8 w-8 rounded-full grid place-items-center text-sm font-bold shrink-0" style={{ background: "#5CBFEF20", color: "#5CBFEF" }}>
                      {item.step}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-200">{item.label}</div>
                      <div className="text-xs text-slate-400">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl bg-slate-800/40 border border-slate-700/40">
                <p className="text-xs text-slate-400 italic">
                  "Citi Token Services for Payments and Trade... enables 24/7 cross-border payments through always-on liquidity."
                  <span className="text-slate-500 block mt-1">&mdash; Source: Token Services Euro Expansion (Nov 2025)</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRADE FINANCE INTELLIGENCE */}
      <section className="py-16 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="h-6 w-6" style={{ color: brand.success }} />
              <h2 className="text-4xl font-extrabold">Credit Intelligence for the $7.75T Supercycle</h2>
            </div>
            <p className="text-xl text-slate-400">
              Citi's Supply Chain Financing Report identifies a generational opportunity. LumiqAI provides the credit layer.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {[
              { stat: "$7.75T", label: "Global capex supercycle by 2030", color: brand.success },
              { stat: "+82%", label: "LatAm exports to South Asia / ASEAN", color: brand.accentSoft },
              { stat: "+18%", label: "AI-driven trade finance processing", color: brand.gold },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-2xl p-6 ${brand.card} ${brand.border} text-center`}
              >
                <div className="text-4xl font-extrabold mb-2" style={{ color: item.color }}>{item.stat}</div>
                <div className="text-sm text-slate-400">{item.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 ${brand.card} ${brand.border}`}
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Supply Chain Credit Scoring</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  The $7.75T capex supercycle is reshaping global supply chains. 64% of manufacturers cite input costs as the top challenge.
                  65% are actively diversifying sourcing. Adoniro Cestari's Trade and Working Capital division needs real-time
                  credit intelligence to match the pace of supply chain reconfiguration.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  LumiqAI scores counterparties, suppliers, and trade corridors in real time &mdash; enabling faster credit decisions
                  for letters of credit, supply chain financing, and trade receivables. AI-powered document processing reduces
                  manual review while maintaining compliance across jurisdictions.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { metric: "Input cost pressure", value: "64%", desc: "of manufacturers cite as top challenge" },
                  { metric: "Sourcing diversification", value: "65%", desc: "actively reshaping supply chains" },
                  { metric: "LatAm to S. Asia/ASEAN", value: "+82%", desc: "export corridor growth" },
                  { metric: "AI document processing", value: "+18%", desc: "efficiency gain in trade finance" },
                ].map((item, idx) => (
                  <div key={item.metric} className={`rounded-lg p-4 ${brand.border} bg-slate-800/40 flex justify-between items-center`}>
                    <div>
                      <div className="text-sm text-slate-300">{item.metric}</div>
                      <div className="text-xs text-slate-500">{item.desc}</div>
                    </div>
                    <div className="text-xl font-bold" style={{ color: brand.success }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-slate-800/40 border border-slate-700/40">
              <p className="text-sm text-slate-300 italic">
                "Trade and supply chain financing... the $7.75 trillion capex supercycle creates generational demand for credit intelligence."
              </p>
              <p className="text-xs text-slate-500 mt-1">&mdash; Adoniro Cestari, Global Head of Trade &amp; Working Capital. Source: Supply Chain Financing Report (Feb 2026)</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STRATEGIC LEVERAGE */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-6 w-6" style={{ color: brand.gold }} />
              <h2 className="text-4xl font-extrabold">Strategic Leverage</h2>
            </div>
            <p className="text-xl text-slate-400">The Transformation &mdash; Legacy State vs. Post-LumiqAI Reality Across CCB</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Before/After Comparison */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 ${brand.card} ${brand.border}`}
            >
              <h3 className="text-2xl font-semibold mb-8">Performance Radar</h3>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={leverageData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="category" stroke="#94a3b8" tick={{ fontSize: 12 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#94a3b8" />
                  <Radar name="Legacy State" dataKey="legacy" stroke="#64748b" fill="#64748b" fillOpacity={0.3} />
                  <Radar name="Post-LumiqAI" dataKey="lumiq" stroke={brand.accentSoft} fill={brand.accentSoft} fillOpacity={0.5} />
                  <Legend />
                  <Tooltip
                    contentStyle={{ background: "#0f172a", border: "1px solid #334155", borderRadius: 12 }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Detailed Comparison Bars */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 ${brand.card} ${brand.border}`}
            >
              <h3 className="text-2xl font-semibold mb-8">Capability Transformation</h3>
              {leverageData.map((item, idx) => (
                <ComparisonBar
                  key={item.category}
                  label={item.category}
                  legacy={item.legacy}
                  lumiq={item.lumiq}
                  delay={idx * 0.1}
                />
              ))}
            </motion.div>
          </div>

          {/* Legacy vs LUMIQ Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 ${brand.card} ${brand.border} mt-8`}
          >
            <h3 className="text-2xl font-semibold mb-6">The Reality Shift</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm min-w-[400px]">
                <thead>
                  <tr className="text-left border-b border-slate-700">
                    <th className="py-2 sm:py-3 pr-3 sm:pr-6 text-slate-400 font-semibold">Legacy State</th>
                    <th className="py-2 sm:py-3 text-slate-400 font-semibold">Post-LumiqAI Reality</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 text-slate-400">No unified personal + business credit view</td>
                    <td className="py-3 sm:py-4 font-semibold" style={{ color: brand.accentSoft }}>Integrated FICO + Intelliscore + FSR dashboard</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 text-slate-400">Manual credit application review</td>
                    <td className="py-3 sm:py-4 font-semibold" style={{ color: brand.accentSoft }}>83ms pre-qualification on CitiDirect</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 text-slate-400">No cross-border credit signals</td>
                    <td className="py-3 sm:py-4 font-semibold" style={{ color: brand.accentSoft }}>Real-time eligibility across 94 markets via Token Services</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 sm:py-4 pr-3 sm:pr-6 text-slate-400">Fragmented risk data across lending segments</td>
                    <td className="py-3 sm:py-4 font-semibold" style={{ color: brand.accentSoft }}>Unified CCB portfolio intelligence with Stylus integration</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STAGE 2 PREVIEW */}
      <section className="py-16 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6" style={{ color: brand.success }} />
              <h2 className="text-4xl font-extrabold">Stage 2 Preview &mdash; CCB Lending Expansion</h2>
            </div>
            <p className="text-xl text-slate-400">The Next Wave: <span style={{ color: brand.success }}>$210&ndash;320M</span> Additional Uplift Potential</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {stage2Data.map((product, idx) => (
              <motion.div
                key={product.product}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-2xl p-4 sm:p-6 ${brand.card} ${brand.border} relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-5" style={{ background: `radial-gradient(circle at 50% 50%, ${brand.success}, transparent)` }} />
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{product.product}</h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div>
                      <div className="text-xs text-slate-400 mb-1">Volume Uplift</div>
                      <div className="text-xl sm:text-2xl font-bold" style={{ color: brand.success }}>
                        +{product.volumeMin}&ndash;{product.volumeMax}%
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 mb-1">Revenue Lift (Year 1)</div>
                      <div className="text-xl sm:text-2xl font-bold" style={{ color: brand.accentSoft }}>
                        ${product.revenueMin}&ndash;{product.revenueMax}M
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 ${brand.card} ${brand.border} text-center`}
          >
            <div className="text-sm text-slate-400 mb-2">Combined Stage 2 Impact (CCB Full Rollout)</div>
            <div className="text-5xl font-extrabold mb-4" style={{ color: brand.success }}>
              $210&ndash;320M
            </div>
            <p className="text-slate-300 mb-6">Lending uplift potential across Revolving Credit, Term Loans, and Commercial Cards &amp; LOC on CitiDirect</p>
            <div className="inline-flex items-center gap-2 text-slate-400 text-sm">
              <Clock className="h-4 w-4" />
              <span>Stage 2 timeline begins Q2 post Stage-1 validation across CCB lending segments</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPLIANCE & GOVERNANCE */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6" style={{ color: brand.accentSoft }} />
              <h2 className="text-4xl font-extrabold">Compliance &amp; Governance</h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-6 ${brand.card} ${brand.border}`}
            >
              <h3 className="text-xl font-semibold mb-4">Regulatory Alignment</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full grid place-items-center mt-0.5" style={{ background: brand.accentSoft }}>
                    <div className="h-2 w-2 rounded-full bg-slate-950" />
                  </div>
                  <span>FCRA / GLBA / ECOA / CRA compliant</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full grid place-items-center mt-0.5" style={{ background: brand.accentSoft }}>
                    <div className="h-2 w-2 rounded-full bg-slate-950" />
                  </div>
                  <span>Individual and Company Liability framework adherence</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full grid place-items-center mt-0.5" style={{ background: brand.accentSoft }}>
                    <div className="h-2 w-2 rounded-full bg-slate-950" />
                  </div>
                  <span>Full explainability and audit trail for regulators</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full grid place-items-center mt-0.5" style={{ background: brand.accentSoft }}>
                    <div className="h-2 w-2 rounded-full bg-slate-950" />
                  </div>
                  <span>SPCP-compliant lending zone mapping for CRA Outstanding</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-6 ${brand.card} ${brand.border}`}
            >
              <h3 className="text-xl font-semibold mb-4">CCB Underwriting Criteria</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className={`rounded-lg p-4 ${brand.border} bg-slate-800/40`}>
                  <div className="text-2xl font-bold mb-1" style={{ color: brand.accentSoft }}>&ge;680</div>
                  <div className="text-xs text-slate-400">Minimum FICO threshold</div>
                </div>
                <div className={`rounded-lg p-4 ${brand.border} bg-slate-800/40`}>
                  <div className="text-2xl font-bold mb-1" style={{ color: brand.accentSoft }}>&lt;35%</div>
                  <div className="text-xs text-slate-400">Utilization ceiling</div>
                </div>
                <div className={`rounded-lg p-4 ${brand.border} bg-slate-800/40`}>
                  <div className="text-2xl font-bold mb-1" style={{ color: brand.accentSoft }}>$10M</div>
                  <div className="text-xs text-slate-400">Max per digital application</div>
                </div>
                <div className={`rounded-lg p-4 ${brand.border} bg-slate-800/40`}>
                  <div className="text-2xl font-bold mb-1" style={{ color: brand.accentSoft }}>&lt;40%</div>
                  <div className="text-xs text-slate-400">Exposure threshold</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold mb-6">Ready to Deploy Across CCB?</h2>
            <p className="text-xl text-slate-300 mb-8">
              90-day pilot. $600K investment. 7 KPIs. Measurable application conversion lift across Citi's digital lending platform.
            </p>
            <Link
              to="/#demo"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 font-semibold text-lg text-white"
              style={{ background: brand.citiRed }}
            >
              Explore Interactive Demo <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs text-muted-foreground text-center">&copy; {new Date().getFullYear()} FuteurCredX &middot; For internal evaluation by Citibank.</p>
        </div>
      </footer>
    </PageLayout>
  );
}
