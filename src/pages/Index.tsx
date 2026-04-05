import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TheGap } from "@/components/TheGap";
import {
  ArrowRight,
  Zap,
  Building2,
  Globe,
  TrendingUp,
  Heart,
  Clock,
  Layers,
  DollarSign,
  CalendarCheck,
  Plug,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Hero } from "@/components/sections/home";
import { ImpactChatWidget } from "@/components/ImpactChatWidget";
import { Button } from "@/components/ui/button";
import { InvestorDayCountdown } from "@/components/InvestorDayCountdown";
import { ApiResponsePreview } from "@/components/ApiResponsePreview";
import { TenKStatsHomepage } from "@/components/TenKStatCards";
import { CompetitiveMatrix } from "@/components/CompetitiveMatrix";
import { ComplianceTrust } from "@/components/ComplianceTrust";
import { PilotInvestment } from "@/components/PilotInvestment";

/* ------------------------------------------------------------------ */
/*  Fade-in wrapper — opacity:1 fallback if JS disabled               */
/* ------------------------------------------------------------------ */
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.5 },
};

/* ================================================================== */
/*  INDEX PAGE                                                         */
/* ================================================================== */
function Index() {
  useEffect(() => {
    document.title =
      "LUMIQ AI \u2014 Same-Day Credit Decisions for Commercial Lending";
  }, []);

  return (
    <PageLayout>
      {/* ── S1: HERO ──────────────────────────────────────────────── */}
      <Hero />

      {/* ── S2: METRICS STRIP ─────────────────────────────────────── */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { big: "83ms", sub: "Credit Score Response Time", icon: Zap },
              { big: "7 Outputs", sub: "One API Call Enterprise JSON", icon: Layers },
              { big: "$600K Pilot", sub: "Measured Against Your KPIs", icon: DollarSign },
              { big: "90 Days", sub: "To Prove ROI Or Scale", icon: CalendarCheck },
            ].map((m, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center text-center p-5 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-200"
              >
                <m.icon className="w-5 h-5 text-blue-500 mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-slate-900">
                  {m.big}
                </div>
                <div className="text-xs text-slate-500 mt-1">{m.sub}</div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <a
              href="https://citi.demo.futeurcredx.com/demo/citi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="gap-2 text-blue-500 border-blue-200 hover:bg-blue-50"
              >
                Try the 83ms Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── S3: CONTEXT LINE (replaces ticker) ────────────────────── */}
      <section className="py-8 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm md:text-base text-slate-600 max-w-3xl mx-auto">
            Citi is investing $12.5B in technology and digitizing commercial
            lending end-to-end. The credit intelligence layer is the missing
            piece.
          </p>
        </div>
      </section>

      {/* ── S5: THE GAP (interactive component) ─────────────────── */}
      <TheGap />

      {/* ── S6: ONE API. FIVE USE CASES. ──────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-4">
              One API. Five Use Cases.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
            {[
              {
                icon: Building2,
                title: "Digital Lending Intelligence",
                desc: "Pre-qualify every CitiDirect application before it reaches underwriting.",
                color: "text-blue-500",
                bg: "bg-blue-50",
                border: "border-blue-200",
              },
              {
                icon: Zap,
                title: "CitiDirect Pre-Qualification",
                desc: "83ms scoring across revolving credit, term loans, cards, and letters of credit.",
                color: "text-purple-500",
                bg: "bg-purple-50",
                border: "border-purple-200",
              },
              {
                icon: Globe,
                title: "Cross-Border Scoring",
                desc: "Credit intelligence across 94 markets, aligned with Citi Token Services.",
                color: "text-cyan-500",
                bg: "bg-cyan-50",
                border: "border-cyan-200",
              },
              {
                icon: TrendingUp,
                title: "Trade Finance Analytics",
                desc: "Supply chain credit scoring for the $7.75T global capex supercycle.",
                color: "text-amber-500",
                bg: "bg-amber-50",
                border: "border-amber-200",
              },
              {
                icon: Heart,
                title: "Community Impact (CRA)",
                desc: "SPCP-eligible zone mapping and CRA-supportive lending analytics.",
                color: "text-green-500",
                bg: "bg-green-50",
                border: "border-green-200",
              },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                {...fadeIn}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`rounded-xl border ${c.border} ${c.bg} p-5 flex flex-col items-center text-center`}
              >
                <div
                  className={`w-11 h-11 rounded-full ${c.bg} flex items-center justify-center mb-3`}
                >
                  <c.icon className={`w-5 h-5 ${c.color}`} />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">
                  {c.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S7: WHY NOW ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-4">
              Why Now
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Commercial lending is going digital. The banks that add credit
              intelligence first will own the next decade of market share.
            </p>
          </motion.div>
          <TenKStatsHomepage />
        </div>
      </section>

      {/* ── S8: SEVEN OUTPUTS ─────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-4">
              Seven Outputs. One API Call.
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
            {/* Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Digital Lending Intelligence",
                  desc: "Pre-score every business before they apply on CitiDirect.",
                },
                {
                  title: "Relationship Manager Copilot",
                  desc: "AI briefing per RM — top prospects, risk flags, next-best-action.",
                },
                {
                  title: "Onboarding Acceleration",
                  desc: "83ms scoring pipeline with instant pre-qualification.",
                },
                {
                  title: "Multi-Product Pre-Qualification",
                  desc: "Revolving credit, term loans, cards, letters of credit.",
                },
                {
                  title: "Cross-Border Portfolio Radar",
                  desc: "Monitor your book across 94 markets with early warning signals.",
                },
                {
                  title: "Trade Finance Intelligence",
                  desc: "Score supply chain credit in the $7.75T supercycle.",
                },
                {
                  title: "CRA & Community Toolkit",
                  desc: "Map CRA-eligible zones and generate SPCP-compliant scoring.",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  {...fadeIn}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    {card.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* API Preview */}
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <ApiResponsePreview />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── S9: COMPETITIVE COMPARISON ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-4">
              Competitive Comparison
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              Citi is the only top-4 bank without consumer or commercial credit
              intelligence in-app. LumiqAI closes both gaps.
            </p>
          </motion.div>
          <CompetitiveMatrix />
        </div>
      </section>

      {/* ── S10: COST OF INACTION (replaces competitive cost) ─────── */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <motion.p
            {...fadeIn}
            className="text-center text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Every month without credit intelligence, qualified applicants go to
            competitors who pre-qualify them first. The top-4 banks that
            deployed credit journeys saw{" "}
            <span className="font-semibold text-slate-900">
              15-25% application conversion lifts
            </span>{" "}
            within 90 days.
          </motion.p>
        </div>
      </section>

      {/* ── S11: IMPACT (condensed) ───────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-4">
              The Impact
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                stat: "+15-25%",
                label: "Application Conversion Lift",
                color: "text-green-600",
              },
              {
                stat: "$40M-$70M",
                label: "Development Cost Avoided",
                color: "text-blue-500",
              },
              {
                stat: "90 Days",
                label: "To Production (Not 18-24 Months)",
                color: "text-purple-600",
              },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                {...fadeIn}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className={`text-3xl md:text-4xl font-bold ${s.color} mb-2`}>
                  {s.stat}
                </div>
                <div className="text-sm text-slate-500">{s.label}</div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link to="/pilot">
              <Button
                size="lg"
                className="gap-2 px-8 py-5 text-base font-semibold bg-blue-500 hover:bg-blue-600"
              >
                Start the 90-Day Pilot
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── S12: COMPLIANCE ───────────────────────────────────────── */}
      <ComplianceTrust />

      {/* ── S13: PILOT ECONOMICS ──────────────────────────────────── */}
      <PilotInvestment />

      {/* ── S14: HOW IT WORKS ─────────────────────────────────────── */}
      <section
        id="how-it-works"
        className="py-20 bg-slate-50 scroll-mt-20"
      >
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-4">
              How It Works
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: 1,
                title: "Connect",
                desc: "Plug into CitiDirect's application pipeline. 2 weeks.",
                icon: Plug,
              },
              {
                step: 2,
                title: "Score",
                desc: "83ms pre-qualification on every application. 7 outputs.",
                icon: BarChart3,
              },
              {
                step: 3,
                title: "Prove",
                desc: "Measure conversion lift against pre-agreed KPIs. 90 days.",
                icon: CheckCircle2,
              },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                {...fadeIn}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-200">
                  <s.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-blue-500 text-xs font-semibold uppercase tracking-wide mb-2">
                  Step {s.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-500">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S15: FOOTER CTA ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 leading-tight">
              $600K. 90 Days. Measured Against Your KPIs.
            </h2>
            <Link to="/pilot">
              <Button
                size="lg"
                className="gap-2 px-8 py-6 mt-2 text-lg font-semibold bg-blue-500 hover:bg-blue-600"
              >
                Book 15-Minute Technical Review
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <ImpactChatWidget />
    </PageLayout>
  );
}

export default Index;
