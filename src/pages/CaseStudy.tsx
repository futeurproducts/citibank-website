import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { TenKStatsCaseStudy } from "@/components/TenKStatCards";
import { PerformanceRadar } from "@/components/PerformanceRadar";
import { FinancialModelTable } from "@/components/FinancialModelTable";
import { RevenueComposition } from "@/components/RevenueComposition";
import { RevenueAcceleration } from "@/components/RevenueAcceleration";
import { InvestorDayCountdown } from "@/components/InvestorDayCountdown";
import { CompetitiveMatrix } from "@/components/CompetitiveMatrix";
import {
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  Users,
  Target,
  CheckCircle2,
  ArrowRight,
  Brain,
  Smartphone,
  AlertTriangle,
  XCircle,
  Clock,
  DollarSign,
  Building2,
  CreditCard,
  LineChart,
  Gauge,
  FileCheck,
  Eye,
  Bell,
  ThumbsUp,
  RefreshCw,
  TrendingDown,
  ChevronRight,
  Globe,
  CalendarClock
} from "lucide-react";

export default function CaseStudy() {
  useEffect(() => {
    document.title = "Results — The $9.7B Problem | LumiqAI";
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <PageLayout>
      <div className="min-h-screen">

        {/* ================================================================
            SECTION 1 — HERO
            ================================================================ */}
        <section className="relative overflow-hidden pt-8 md:pt-12 lg:pt-16 pb-20 md:pb-24 lg:pb-32 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Text Content - Left Side */}
                <div className="order-2 lg:order-1">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-foreground leading-tight">
                    The{" "}
                    <span className="text-primary">$9.7B Problem:</span>{" "}
                    Credit Losses Without Credit Intelligence
                  </h1>
                  <div className="space-y-4 mb-8">
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                      Citi absorbed $9.7 billion in card credit losses in 2024 with zero AI-driven credit underwriting deployed. Criticized commercial loans grew 14%. The intelligence layer is missing.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      LumiqAI delivers dual consumer + commercial credit intelligence — pre-scoring businesses, matching products, and generating compliance documentation across Citi's digital platforms.
                    </p>
                  </div>
                </div>

                {/* Hero Image - Right Side */}
                <div className="order-1 lg:order-2">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <img
                      src="/Case Study/Case Study Hero.png"
                      alt="Case Study Hero"
                      className="w-full h-auto"
                    />
                    <p className="text-xs text-muted-foreground text-center mt-3 italic">
                      LumiqAI Credit Journey — Consumer + Business intelligence
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hero Stats Strip — 3 stats */}
        <section className="py-12 px-4 sm:px-6 bg-primary/5 border-y border-primary/20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-primary">$9.7B</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Annual Card Credit Losses</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-primary flex items-center justify-center gap-1">
                    14%<TrendingUp className="h-5 w-5" />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Criticized Loan Growth</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-primary">0</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">AI Credit Underwriting Deployed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 2 — THE WINDOW IS OPEN (was "Recent Strategic Context")
            ================================================================ */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <h2 className="text-2xl font-heading font-bold mb-8 text-foreground">The Window Is Open</h2>
              <div className="flex flex-col md:flex-row gap-4 overflow-x-auto pb-2">
                {[
                  {
                    date: "MAY 2026",
                    title: "Investor Day",
                    desc: "Citi's first major Investor Day since transformation launch. AI strategy, digital lending metrics, and ROI targets will be scrutinized by analysts.",
                    highlight: true
                  },
                  {
                    date: "FEB 2026",
                    title: "Sakana AI Investment",
                    desc: "Citi's first-ever strategic AI investment. David Griffiths: \"AI is infrastructure, not experiment.\"",
                    highlight: false
                  },
                  {
                    date: "DEC 2025",
                    title: "OCC Consent Order Removed",
                    desc: "Regulators validate Citi's transformation progress. Model governance infrastructure recognized.",
                    highlight: false
                  },
                  {
                    date: "SEP 2025",
                    title: "Stylus Workspaces Launch",
                    desc: "Agentic AI platform rolling out to thousands of Citi employees — needs credit signals to consume.",
                    highlight: false
                  }
                ].map((item, index) => (
                  <Card key={index} className={`flex-shrink-0 md:flex-1 min-w-[260px] ${item.highlight ? "border-2 border-primary shadow-md" : ""}`}>
                    <CardContent className="p-5">
                      <div className={`text-xs font-semibold mb-2 ${item.highlight ? "text-primary" : "text-primary"}`}>
                        {item.highlight && <CalendarClock className="inline h-3.5 w-3.5 mr-1 -mt-0.5" />}
                        {item.date}
                      </div>
                      <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            SECTION 3 — TRANSFORMATION BLUEPRINT (KEPT + 10-K data)
            ================================================================ */}
        <section className="py-20 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">THE BLUEPRINT</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  The Citi Transformation Blueprint
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Three inflection points that created the opportunity for credit intelligence. $3.3B in transformation expenses invested. 548 applications retired in 2025 alone.
                </p>
                <div className="h-px w-24 bg-primary mx-auto mt-6" />
              </div>

              <div className="relative max-w-4xl mx-auto">
                {/* Timeline Line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2"></div>

                <div className="space-y-12">
                  {/* 2023 */}
                  <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="relative flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/2 md:text-right md:pr-12">
                      <Card className="border border-primary/30 shadow-sm">
                        <CardContent className="p-6">
                          <div className="text-3xl font-bold text-primary mb-2">2023</div>
                          <h3 className="font-bold text-lg text-foreground mb-2">Citi Transformation Launches</h3>
                          <p className="text-muted-foreground">Jane Fraser launches Citi Transformation — simplifying the organization, modernizing infrastructure. $3.3B in transformation-related expenses through 2025.</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary items-center justify-center z-10">
                      <Zap className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="md:w-1/2 md:pl-12"></div>
                  </motion.div>

                  {/* 2025 */}
                  <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/2 md:pr-12"></div>
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary items-center justify-center z-10">
                      <CreditCard className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <Card className="border border-primary/30 shadow-sm">
                        <CardContent className="p-6">
                          <div className="text-3xl font-bold text-primary mb-2">2025</div>
                          <h3 className="font-bold text-lg text-foreground mb-2">548 Apps Retired + CCB Digital Launch</h3>
                          <p className="text-muted-foreground">CCB launches Digital Credit Application on CitiDirect. Meanwhile, 548 legacy applications retired as part of the simplification mandate — clearing the path for modern credit infrastructure.</p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>

                  {/* 2026 */}
                  <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="relative flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/2 md:text-right md:pr-12">
                      <Card className="border-2 border-primary shadow-md">
                        <CardContent className="p-6">
                          <div className="text-3xl font-bold text-primary mb-2">2026</div>
                          <h3 className="font-bold text-lg text-foreground mb-2">Convergence Point</h3>
                          <p className="text-muted-foreground">"Two-thirds of Transformation programs at or near target state" — digital lending, AI infrastructure, cross-border payments all converging. The credit intelligence layer is the missing piece.</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary items-center justify-center z-10">
                      <Target className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="md:w-1/2 md:pl-12"></div>
                  </motion.div>
                </div>

                <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="mt-8 text-center">
                  <p className="text-sm text-muted-foreground italic">
                    Sources: Citi 2025 10-K, CCB Digitizes Lending (Jun 25, 2025), Jane Fraser Board Chair (Oct 22, 2025)
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            SECTION 4 — 5-THREAD BUSINESS CASE (condensed to table)
            ================================================================ */}
        <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">THE 5-THREAD BUSINESS CASE</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  How LumiqAI Serves Each of Citi's 5 Strategic Priorities
                </h2>
                <div className="h-px w-24 bg-primary mx-auto mt-6" />
              </div>

              <div className="max-w-5xl mx-auto">
                <Card className="border border-primary/20 overflow-hidden shadow-sm">
                  <CardContent className="p-0">
                    <div className="w-full overflow-x-auto">
                      <table className="w-full text-sm min-w-[640px]">
                        <thead className="bg-primary">
                          <tr>
                            <th className="text-left p-3 sm:p-4 text-xs sm:text-sm text-primary-foreground font-semibold">Thread</th>
                            <th className="text-left p-3 sm:p-4 text-xs sm:text-sm text-primary-foreground font-semibold">Citi Initiative</th>
                            <th className="text-left p-3 sm:p-4 text-xs sm:text-sm text-primary-foreground font-semibold">LumiqAI Role</th>
                            <th className="text-left p-3 sm:p-4 text-xs sm:text-sm text-primary-foreground font-semibold">Impact</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { thread: "AI-First", initiative: "Stylus Workspaces / Sakana", role: "Credit signals for AI workflows", impact: "Structured JSON consumed natively by Stylus agentic AI" },
                            { thread: "Digital Lending", initiative: "CCB / CitiDirect", role: "Pre-qualify before apply", impact: "+15-25% application conversion lift" },
                            { thread: "Cross-Border", initiative: "Token Services / Coinbase", role: "Cross-border eligibility scoring", impact: "Credit assessment across 94 markets" },
                            { thread: "Trade Finance", initiative: "$7.75T Supercycle", role: "Supply chain credit scoring", impact: "Trade finance assessment at scale" },
                            { thread: "Community Impact", initiative: "$60B Housing / CRA", role: "SPCP zones + CRA analytics", impact: "CRA-compliant community lending analytics" }
                          ].map((row, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                              <td className="p-3 sm:p-4 font-semibold text-primary text-xs sm:text-sm">{row.thread}</td>
                              <td className="p-3 sm:p-4 text-foreground text-xs sm:text-sm">{row.initiative}</td>
                              <td className="p-3 sm:p-4 text-foreground text-xs sm:text-sm">{row.role}</td>
                              <td className="p-3 sm:p-4 text-muted-foreground text-xs sm:text-sm">{row.impact}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            SECTION 5 — EXECUTIVE DIAGNOSIS (KEPT — strongest section)
            ================================================================ */}
        <section className="py-20 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">05 — EXECUTIVE DIAGNOSIS</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  Executive Diagnosis
                </h2>
                <div className="h-px w-24 bg-primary mx-auto" />
              </div>

              <motion.div {...fadeInUp} className="mb-12 text-center max-w-4xl mx-auto">
                <p className="text-xl text-foreground leading-relaxed mb-6">
                  Citi is now the <span className="font-bold text-primary">only top-4 U.S. bank</span> with neither a consumer nor a business credit-intelligence layer inside its digital platforms. This absence blocks Citi from capturing early credit intent — the most valuable inflection point in the funnel.
                </p>
                <p className="text-xl font-semibold text-destructive mb-4">
                  Competitors convert before Citi even appears.
                </p>
                <p className="text-lg text-muted-foreground mt-4">
                  Confirmed by Citi's 2025 10-K: zero disclosed AI-driven credit underwriting. Meanwhile, card net credit losses are rising — Branded Cards 4.47% to 5.16%, Retail Services 6.79% to 7.84%.
                </p>
              </motion.div>

              {/* 10-K Stats Component */}
              <motion.div {...fadeInUp} className="mb-12">
                <TenKStatsCaseStudy />
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                  <Card className="h-full border border-border shadow-sm hover:shadow-md transition-all">
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="font-bold text-lg text-foreground">Consumer</h3>
                        <p className="text-muted-foreground text-sm">No score visibility, no prequalification, no credit alerts inside Citi App</p>
                      </div>
                      <img
                        src="/Case Study/Exec Diagnosis/Consumer.png"
                        alt="Consumer Credit Intelligence Gap"
                        className="w-full h-auto rounded-lg max-w-md mx-auto"
                      />
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                  <Card className="h-full border border-border shadow-sm hover:shadow-md transition-all">
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="font-bold text-lg text-foreground">Commercial / SMB</h3>
                        <p className="text-muted-foreground text-sm">No business score, no unified Business+PG model, no lending eligibility logic on CitiDirect</p>
                      </div>
                      <img
                        src="/Case Study/Exec Diagnosis/SMB.png"
                        alt="Commercial Credit Intelligence Gap"
                        className="w-full h-auto rounded-lg max-w-md mx-auto"
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Ecosystem Risk — Credit Karma / Nav intercept (KEPT) */}
              <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
                <Card className="border border-destructive/30 shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-2">Ecosystem-Level Risk</h3>
                      <p className="text-muted-foreground text-sm mb-4">Customers leave to check scores, get intercepted, never return to Citi</p>
                      <div className="space-y-2 text-sm">
                        <p className="text-foreground">
                          <span className="font-semibold">Consumer Credit Visibility:</span> Customers use <span className="font-bold text-primary">Credit Karma</span> to check their credit scores, where they're immediately shown prequalification offers from competitors.
                        </p>
                        <p className="text-foreground">
                          <span className="font-semibold">Business Credit Visibility:</span> Commercial clients use <span className="font-bold text-primary">Nav / Dun & Bradstreet</span> to check their business credit scores, where they're intercepted with lending offers from competitors.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6">
                      <div className="text-center">
                        <p className="text-xs font-semibold text-foreground mb-2">Credit Karma (Consumer)</p>
                        <img
                          src="/Case Study/Exec Diagnosis/Eco System Risk /Consumer.PNG"
                          alt="Ecosystem Risk Consumer - Credit Karma"
                          className="w-full h-auto rounded-lg max-w-sm mx-auto"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-semibold text-foreground mb-2">Nav / D&B (Business)</p>
                        <img
                          src="/Case Study/Exec Diagnosis/Eco System Risk /Business.PNG"
                          alt="Ecosystem Risk Business - Nav"
                          className="w-full h-auto rounded-lg max-w-sm mx-auto"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            SECTION 6 — COMPETITIVE CONSEQUENCE (KEPT + delinquency data)
            ================================================================ */}
        <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">06 — COMPETITIVE CONSEQUENCE</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  How Citi Loses the Customer Before the Application Begins
                </h2>
                <div className="h-px w-24 bg-primary mx-auto" />
              </div>

              <motion.div {...fadeInUp} className="mb-12 text-center max-w-4xl mx-auto">
                <p className="text-xl text-foreground leading-relaxed mb-4">
                  Citi's customers must leave Citi's ecosystem to check their credit score. The moment they do, Chase, AmEx, Capital One, Apple Card, and fintech lenders intercept them with prequalification offers.
                </p>
                <p className="text-xl font-bold text-foreground mb-4">
                  This creates silent funnel amputation: Citi never sees the demand signal.
                </p>
                <p className="text-base text-muted-foreground">
                  Meanwhile, delinquency deepens: 90+ day delinquencies at Branded Cards 1.50%, Retail Services 2.78%. These are customers who needed intelligence-driven intervention earlier in the journey.
                </p>
              </motion.div>

              {/* Timeline UI */}
              <div className="relative max-w-6xl mx-auto">
                {/* Timeline Line */}
                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

                {/* Timeline Items */}
                <div className="space-y-12">
                  {/* Step 1: Checks Score Elsewhere */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start"
                  >
                    <div className="hidden md:flex absolute left-0 w-16 h-16 items-center justify-center z-10">
                      <div className="w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-primary-foreground font-bold text-sm">1</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:ml-24 flex-1">
                      <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-all">
                        <CardContent className="p-6 md:p-8">
                          <div className="text-center mb-6">
                            <h3 className="text-xl font-heading font-bold text-foreground mb-2">Checks Score Elsewhere</h3>
                            <p className="text-muted-foreground text-sm">Customer leaves Citi's ecosystem to check credit score</p>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="text-center">
                              <p className="text-sm font-semibold text-foreground mb-3">Consumer</p>
                              <img
                                src="/Case Study/How Citi Loses the Customer Before the Application Begins/Checks Score Elsewhere/COnsumer/Consumer.PNG"
                                alt="Consumer Checks Score Elsewhere"
                                className="w-full h-auto rounded-lg max-w-xs mx-auto"
                              />
                            </div>
                            <div className="text-center">
                              <p className="text-sm font-semibold text-foreground mb-3">Business</p>
                              <img
                                src="/Case Study/How Citi Loses the Customer Before the Application Begins/Checks Score Elsewhere/Business/IMG_0202.PNG"
                                alt="Business Checks Score Elsewhere"
                                className="w-full h-auto rounded-lg max-w-xs mx-auto"
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>

                  {/* Step 2: Competitor Prequal */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start"
                  >
                    <div className="hidden md:flex absolute left-0 w-16 h-16 items-center justify-center z-10">
                      <div className="w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-primary-foreground font-bold text-sm">2</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:ml-24 flex-1">
                      <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-all">
                        <CardContent className="p-6 md:p-8">
                          <div className="text-center mb-6">
                            <h3 className="text-xl font-heading font-bold text-foreground mb-2">Competitor Prequal</h3>
                            <p className="text-muted-foreground text-sm">Competitors intercept with prequalification offers</p>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="text-center">
                              <p className="text-sm font-semibold text-foreground mb-3">Consumer</p>
                              <img
                                src="/Case Study/How Citi Loses the Customer Before the Application Begins/Comp Prequal/Consumer.PNG"
                                alt="Competitor Prequal Consumer"
                                className="w-full h-auto rounded-lg max-w-xs mx-auto"
                                loading="lazy"
                              />
                            </div>
                            <div className="text-center">
                              <p className="text-sm font-semibold text-foreground mb-3">Business</p>
                              <img
                                src="/Case Study/How Citi Loses the Customer Before the Application Begins/Comp Prequal/Business.PNG"
                                alt="Competitor Prequal Business"
                                className="w-full h-auto rounded-lg max-w-xs mx-auto"
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>

                  {/* Step 3: Competitor Approval */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start"
                  >
                    <div className="hidden md:flex absolute left-0 w-16 h-16 items-center justify-center z-10">
                      <div className="w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-primary-foreground font-bold text-sm">3</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:ml-24 flex-1">
                      <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-all">
                        <CardContent className="p-6 md:p-8">
                          <div className="text-center mb-6">
                            <h3 className="text-xl font-heading font-bold text-foreground mb-2">Competitor Approval</h3>
                            <p className="text-muted-foreground text-sm">Customer gets approved by competitor</p>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="text-center">
                              <p className="text-sm font-semibold text-foreground mb-3">Consumer</p>
                              <img
                                src="/Case Study/How Citi Loses the Customer Before the Application Begins/Comp Approval/Consumer.PNG"
                                alt="Competitor Approval Consumer"
                                className="w-full h-auto rounded-lg max-w-xs mx-auto"
                              />
                            </div>
                            <div className="text-center">
                              <p className="text-sm font-semibold text-foreground mb-3">Business</p>
                              <img
                                src="/Case Study/How Citi Loses the Customer Before the Application Begins/Comp Approval/Business.PNG"
                                alt="Competitor Approval Business"
                                className="w-full h-auto rounded-lg max-w-xs mx-auto"
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>

                  {/* Step 4: Citi Never Sees Intent */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start"
                  >
                    <div className="hidden md:flex absolute left-0 w-16 h-16 items-center justify-center z-10">
                      <div className="w-16 h-16 rounded-full bg-background border-4 border-foreground flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                          <span className="text-background font-bold text-sm">4</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:ml-24 flex-1 w-full flex justify-center md:justify-start">
                      <Card className="bg-card border-2 border-foreground shadow-sm hover:shadow-md transition-all w-full max-w-md md:max-w-none">
                        <CardContent className="p-6 md:p-8 text-center">
                          <AlertTriangle className="h-8 w-8 text-foreground mx-auto mb-4" />
                          <h3 className="text-xl font-heading font-bold text-foreground mb-2">Citi Never Sees Intent</h3>
                          <p className="text-muted-foreground">
                            Point of Loss: No Citi Credit Intelligence Layer
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            SECTION 7 — REVENUE LEAKAGE (+ 10-K anchors)
            ================================================================ */}
        <section className="py-20 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">07 — REVENUE LEAKAGE & ECONOMIC IMPACT</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  $900M-$1.6B Lost Annually
                </h2>
                <div className="h-px w-24 bg-primary mx-auto" />
              </div>

              <motion.div {...fadeInUp} className="mb-8 text-center max-w-3xl mx-auto">
                <p className="text-lg text-muted-foreground mb-4">
                  Based on benchmarking against Chase Credit Journey, Capital One CreditWise, and Wells Fargo Close-Up — and applying Citi's TAM:
                </p>
                <p className="text-base text-muted-foreground">
                  USPB holds $164B in card loans. Corporate banking manages $923B in exposure. $15.4B in consumer credit reserves (ACLL) means a 1% improvement equals $154M recovered.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8">
                <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="flex justify-center md:justify-start">
                  <Card className="h-full bg-card border border-border shadow-sm w-full max-w-md md:max-w-none">
                    <CardContent className="p-4 sm:p-6 md:p-8">
                      <div className="text-xs sm:text-sm font-bold text-foreground tracking-wider mb-3 sm:mb-4 uppercase text-center md:text-left">LEAKAGE TODAY</div>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 py-2 sm:py-3 border-b border-border">
                          <span className="text-xs sm:text-sm md:text-base text-foreground text-center sm:text-left">Consumer ($164B card loans)</span>
                          <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground text-center sm:text-right">$600M-$900M/year</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 py-2 sm:py-3 border-b border-border">
                          <span className="text-xs sm:text-sm md:text-base text-foreground text-center sm:text-left">Commercial ($923B exposure)</span>
                          <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground text-center sm:text-right">$300M-$700M/year</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 py-2 sm:py-3">
                          <span className="text-xs sm:text-sm md:text-base font-semibold text-foreground text-center sm:text-left">Total</span>
                          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground text-center sm:text-right">$900M-$1.6B+/year</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex justify-center md:justify-start">
                  <Card className="h-full bg-card border border-border shadow-sm w-full max-w-md md:max-w-none">
                    <CardContent className="p-4 sm:p-6 md:p-8">
                      <div className="text-xs sm:text-sm font-bold text-foreground tracking-wider mb-3 sm:mb-4 uppercase text-center md:text-left">RECOVERED WITH LUMIQAI</div>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 py-2 sm:py-3 border-b border-border">
                          <span className="text-xs sm:text-sm md:text-base text-foreground text-center sm:text-left">Consumer Recovery</span>
                          <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground text-center sm:text-right">$600M-$900M</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 py-2 sm:py-3 border-b border-border">
                          <span className="text-xs sm:text-sm md:text-base text-foreground text-center sm:text-left">Commercial Recovery</span>
                          <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground text-center sm:text-right">$300M-$700M</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 py-2 sm:py-3 border-b border-border">
                          <span className="text-xs sm:text-sm md:text-base text-foreground text-center sm:text-left">Build Cost Avoided</span>
                          <span className="text-base sm:text-lg md:text-xl font-bold text-foreground text-center sm:text-right">$40M-$70M saved</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 py-2 sm:py-3">
                          <span className="text-xs sm:text-sm md:text-base text-foreground text-center sm:text-left">ACLL Improvement (1%)</span>
                          <span className="text-base sm:text-lg md:text-xl font-bold text-primary text-center sm:text-right">$154M</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div {...fadeInUp} className="text-center">
                <p className="text-sm text-muted-foreground italic">
                  Sources: Citi 2025 10-K (USPB, Corporate Banking segments), JPMC filings, Capital One annual reports, Experian 2024 Credit Trends.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            SECTION 8 — ROOT CAUSE ANALYSIS (KEPT — 8 "No" items + 10-K quote)
            ================================================================ */}
        <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">08 — ROOT CAUSE ANALYSIS</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  Citi Lacks the Credit Intelligence Infrastructure
                </h2>
                <div className="h-px w-24 bg-primary mx-auto" />
              </div>

              <motion.div {...fadeInUp} className="mb-8 text-center">
                <p className="text-lg text-muted-foreground mb-2">Citi has no in-app:</p>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
                {[
                  { icon: Gauge, title: "No Score Panel" },
                  { icon: Target, title: "No Prequal" },
                  { icon: Building2, title: "No Commercial Logic" },
                  { icon: LineChart, title: "No Business+PG Model" },
                  { icon: TrendingUp, title: "No Predictive Pathways" },
                  { icon: RefreshCw, title: "No Decline Recovery" },
                  { icon: Bell, title: "No Credit Alerts" },
                  { icon: Users, title: "No Thin-File Enhancement" }
                ].map((item, index) => (
                  <motion.div key={index} {...fadeInUp} transition={{ delay: index * 0.05 }}>
                    <Card className="h-full bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-3 sm:p-5 text-center">
                        <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                          <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                        </div>
                        <h4 className="font-semibold text-foreground text-xs sm:text-sm leading-tight">{item.title}</h4>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Root Cause Images */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
                  <Card className="border border-border shadow-sm">
                    <CardContent className="p-4 flex justify-center">
                      <img
                        src="/Summary_.png"
                        alt="Citi Lacks Consumer Credit Intelligence"
                        className="w-full h-auto rounded-lg max-w-xs"
                      />
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div {...fadeInUp} transition={{ delay: 0.5 }}>
                  <Card className="border border-border shadow-sm">
                    <CardContent className="p-4 flex justify-center">
                      <img
                        src="/summary 2.png"
                        alt="Citi Lacks Business Credit Intelligence"
                        className="w-full h-auto rounded-lg max-w-xs"
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div {...fadeInUp}>
                <Card className="bg-primary border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <p className="text-primary-foreground text-lg mb-3">
                      <span className="font-bold">This is not a feature gap.</span>{" "}
                      <span className="text-primary-foreground/80">This is an infrastructure gap — and CCB's Digital Credit Application is the integration point.</span>
                    </p>
                    <p className="text-primary-foreground/70 text-sm italic">
                      Citi's 2025 10-K describes loan underwriting as one of "50+ complex processes" being re-engineered — but the intelligence layer is absent.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            SECTION 9 — SOLUTION MODULES (KEPT + Module B 10-K data)
            ================================================================ */}
        <section className="py-20 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">09 — THE SOLUTION</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  LumiqAI's Consumer + Commercial Credit Intelligence Layer
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A dual-system engine that rewires Citi's funnel architecture across Consumer and Commercial Banking — integrated with CitiDirect and aligned with Stylus Workspaces.
                </p>
                <div className="h-px w-24 bg-primary mx-auto mt-6" />
              </div>

              {/* Consumer Module */}
              <motion.div {...fadeInUp} className="mb-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground">A</span>
                      Consumer Intelligence Module
                    </h3>
                    <p className="text-muted-foreground mb-6">Integrated directly into the Citi App:</p>
                    <ul className="space-y-3">
                      {[
                        "Real-time VantageScore",
                        "AI-driven prequal for Citi cards",
                        "Predictive approval pathways",
                        "Credit alerts + file monitoring",
                        "1-tap Apply",
                        "Decline-recovery guidance"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-foreground">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-card rounded-2xl border border-border p-8 text-center shadow-sm">
                    <img
                      src="/images/3-phone-consumer.png"
                      alt="Citi Consumer LUMIQ"
                      className="w-full h-auto rounded-lg max-w-2xl mx-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Commercial / SMB Module */}
              <motion.div {...fadeInUp}>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="order-2 lg:order-1 bg-card rounded-2xl border border-border p-8 text-center shadow-sm">
                    <img
                      src="/images/3-phones-business.png"
                      alt="Citi Commercial LUMIQ"
                      className="w-full h-auto rounded-lg max-w-2xl mx-auto"
                      loading="lazy"
                    />
                  </div>
                  <div className="order-1 lg:order-2">
                    <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground">B</span>
                      Commercial Intelligence Module
                    </h3>
                    <p className="text-muted-foreground mb-6">Delivered inside CitiDirect's Digital Credit Application:</p>
                    <ul className="space-y-3">
                      {[
                        "Experian Business Score + FSR",
                        "Unified Business + PG model",
                        "Eligibility for revolving credit, term loans, commercial cards, LOC",
                        "Thin-file enhancement (SR 11-7 aligned)",
                        "Cross-border credit eligibility scoring",
                        "Up to $10M per digital credit application"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-foreground">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">10-K context:</span> $383B funded loans, $540B unfunded commitments, criticized credits up 14% — the commercial lending book needs intelligence-driven underwriting now.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            SECTION 10 — PERFORMANCE RADAR (NEW)
            ================================================================ */}
        <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">10 — PERFORMANCE RADAR</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  Legacy vs. LumiqAI Intelligence
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Five dimensions of credit infrastructure compared: Citi's current state versus LumiqAI-powered operations.
                </p>
                <div className="h-px w-24 bg-primary mx-auto mt-6" />
              </div>

              <PerformanceRadar />
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            SECTION 11 — FINANCIAL MODEL (NEW)
            ================================================================ */}
        <section className="py-20 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">11 — FINANCIAL MODEL</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  Year-1 Impact Projections
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Financial model anchored to Citi's 2025 10-K disclosures. Base and optimistic scenarios measured against $600K pilot investment.
                </p>
                <div className="h-px w-24 bg-primary mx-auto mt-6" />
              </div>

              <div className="space-y-12">
                <FinancialModelTable />

                <div className="grid md:grid-cols-2 gap-8">
                  <RevenueComposition />
                  <RevenueAcceleration />
                </div>

                <InvestorDayCountdown />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            SECTION 12 — PILOT FRAMEWORK ($600K + 7 KPIs)
            ================================================================ */}
        <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">12 — PILOT FRAMEWORK</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  90-Day Credit Intelligence Pilot
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  $600K investment against Citi's $9.7B loss baseline and $3.3B transformation spend. Measured against 7 pre-agreed KPIs.
                </p>
                <div className="h-px w-24 bg-primary mx-auto mt-4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
                {/* Track 1 */}
                <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                  <Card className="h-full border border-border shadow-sm">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-primary mb-6">Track 1: Consumer</h3>
                      <ul className="space-y-3">
                        {["Score panel in Citi App", "Prequal API for Citi cards", "Card pathways + 1-tap apply", "Credit alerts + monitoring"].map((item, index) => (
                          <li key={index} className="flex items-center gap-3 text-foreground">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Track 2 */}
                <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                  <Card className="h-full border border-border shadow-sm">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-primary mb-6">Track 2: Commercial (CCB)</h3>
                      <ul className="space-y-3">
                        {["CitiDirect pre-qualification (83ms)", "Business+PG model for up to $10M apps", "Cross-border eligibility scoring", "Stylus Workspaces JSON integration"].map((item, index) => (
                          <li key={index} className="flex items-center gap-3 text-foreground">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* 7 KPI Success Criteria */}
              <motion.div {...fadeInUp} className="mb-12">
                <Card className="border border-primary/30 shadow-sm">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="text-xl font-bold text-foreground mb-6 text-center">7 KPI Success Criteria</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { kpi: "Application Conversion Lift", target: "+15-25%", icon: TrendingUp },
                        { kpi: "Pre-Qualification Response Time", target: "<100ms", icon: Zap },
                        { kpi: "Manual Review Reduction", target: "-25-40%", icon: FileCheck },
                        { kpi: "Cross-Sell Accuracy", target: ">80%", icon: Target },
                        { kpi: "Decline-to-Recovery Rate", target: "+10-15%", icon: RefreshCw },
                        { kpi: "Compliance Documentation", target: "SR 11-7 aligned", icon: Shield },
                        { kpi: "Stylus Integration", target: "JSON-native", icon: Brain }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-background">
                          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <item.icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground">{item.kpi}</p>
                            <p className="text-sm text-primary font-medium">{item.target}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Governance */}
              <motion.div {...fadeInUp}>
                <Card className="bg-primary/10 border border-primary/30 shadow-sm">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <Shield className="h-6 w-6 text-primary" />
                      Governance (Critical for Citi)
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="flex items-start gap-3">
                        <FileCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">SR 11-7 compliant documentation</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">Weekly oversight with Risk, CCB, and Digital</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <BarChart3 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">Real-time dashboarding via Stylus</span>
                      </div>
                    </div>
                    <div className="mt-6 p-4 rounded-lg bg-primary/20 border border-primary/30">
                      <p className="text-sm text-primary font-medium">
                        Designed to align with ECOA/Reg B SPCP guidelines and CRA Outstanding compliance — written plan, eligibility parameters, explainability documentation.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Pilot Price */}
              <motion.div {...fadeInUp} className="mt-8">
                <Card className="bg-primary border-0 shadow-lg">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="text-4xl font-bold text-primary-foreground mb-3">$600,000</div>
                    <p className="text-primary-foreground/90 text-lg mb-2">90-Day Credit Intelligence Pilot</p>
                    <p className="text-primary-foreground/70 text-sm max-w-2xl mx-auto">
                      Measured against 7 pre-agreed KPIs. 90 days of validated results against Citi's $9.7B loss baseline.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            SECTION 13 — COMPETITIVE MATRIX (KEPT)
            ================================================================ */}
        <section className="py-20 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">13 — COMPETITIVE POSITIONING</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  The First Top-4 Bank With Dual Credit Intelligence
                </h2>
                <div className="h-px w-24 bg-primary mx-auto" />
              </div>

              <motion.div {...fadeInUp} className="mb-12 text-center max-w-3xl mx-auto">
                <p className="text-lg text-foreground mb-4">
                  Chase built consumer. Capital One built consumer. Wells Fargo built consumer. AmEx built consumer. Apple built consumer.
                </p>
                <p className="text-xl font-bold text-destructive mb-4">
                  No one has built commercial.
                </p>
                <p className="text-xl font-bold text-primary">
                  The first top-4 bank to deploy dual consumer + commercial credit intelligence wins the structural advantage.
                </p>
              </motion.div>

              <CompetitiveMatrix />
            </motion.div>
          </div>
        </section>

        {/* Footnotes & Citations */}
        <section className="py-16 md:py-20 px-4 sm:px-6 bg-background-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <motion.div {...fadeInUp} className="mb-8">
                <h3 className="text-lg font-bold text-foreground mb-4">Sources & References</h3>
                <div className="h-px w-16 bg-primary" />
              </motion.div>

              <motion.div {...fadeInUp}>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Citi 2025 10-K — Card credit losses $9.7B, ACLL $15.4B, USPB $164B card loans, $923B corporate exposure</li>
                  <li>Citi 2025 10-K — Transformation expenses $3.3B, 548 applications retired, 50+ complex processes</li>
                  <li>Citi 2025 10-K — Branded Cards NCL 5.16%, Retail Services NCL 7.84%, criticized loans +14%</li>
                  <li>CCB Digitizes Lending on CitiDirect (Jun 25, 2025)</li>
                  <li>Stylus Workspaces — Agentic AI Platform (Sep 22, 2025)</li>
                  <li>Sakana AI Investment (Feb 24, 2026)</li>
                  <li>OCC Consent Order Removal (Dec 2025)</li>
                  <li>Citi Investor Day scheduled May 7, 2026</li>
                  <li>Chase Credit Journey filings (2017-2023)</li>
                  <li>Capital One CreditWise adoption reports</li>
                  <li>Wells Fargo Business Credit Close-Up engagement metrics</li>
                  <li>Experian State of Credit 2023-2024</li>
                </ol>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            BOTTOM CTA
            ================================================================ */}
        <section className="py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-primary via-primary to-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div {...fadeInUp}>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                  $600K. 90 Days. Measured Against Your KPIs.
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  Book a 15-minute technical review to see how LumiqAI deploys dual credit intelligence across Citi's digital platforms.
                </p>
                <Button
                  size="lg"
                  className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-bold px-8 py-6 text-lg"
                  asChild
                >
                  <Link to="/pilot#pilot-form">
                    Book 15-Minute Technical Review
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </PageLayout>
  );
}
