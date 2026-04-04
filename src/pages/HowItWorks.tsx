import { motion, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Database, Shield, Rocket, Lock, Users, TrendingUp, BarChart3, CheckCircle2,
  FileText, Target, DollarSign, Zap, ArrowRight, Smartphone, Building2,
  CreditCard, AlertCircle, Globe, RefreshCw, Bell, LineChart, Clock,
  ChevronRight, Info, MessageSquareText, X
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ImpactChatWidget } from "@/components/ImpactChatWidget";
import { Footer } from "@/components/Footer";
import { ArchitectureFlow } from "@/components/ArchitectureFlow";
import { ApiResponsePreview } from "@/components/ApiResponsePreview";
import { BeforeAfterTable } from "@/components/BeforeAfterTable";
import { InfrastructureComparison } from "@/components/InfrastructureComparison";
import { ComplianceTrust } from "@/components/ComplianceTrust";

// Animated Counter Component for numeric values
const AnimatedCounter = ({ num, suffix = "", decimals = 0 }: {
  num: number;
  suffix?: string;
  decimals?: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;
        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return <span ref={ref}>0</span>;
};

export default function HowItWorks() {
  useEffect(() => {
    document.title = "LUMIQ AI \u2014 From Application to Decision in 83ms";
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <PageLayout>
      <div className="min-h-screen relative">

        {/* SECTION 1 — HERO */}
        <section id="overview" className="relative overflow-hidden pt-8 md:pt-12 lg:pt-16 pb-20 md:pb-24 lg:pb-32 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Text Content - Left Side */}
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
                    HOW IT WORKS
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-foreground leading-tight">
                    From Application to Decision in 83ms.
                  </h1>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Pre-qualify businesses before they submit digital credit applications. 7 intelligence outputs from one API call. Deploy in 90 days.
                  </p>

                  {/* Quick Facts Strip */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
                    {[
                      { value: "83ms", label: "Pre-qualification (vs. manual review)" },
                      { value: "$10M", label: "Per application" },
                      { value: "70%+", label: "Cross-sell accuracy" },
                      { value: "90 days", label: "Pilot with pre-agreed KPIs" }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-primary/5 border border-primary/20 rounded-xl p-3 text-center">
                        <div className="text-lg font-bold text-primary">{item.value}</div>
                        <div className="text-xs text-muted-foreground">{item.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* What This Enables */}
                  <Card className="bg-card border border-border shadow-sm mb-6">
                    <CardContent className="p-6 md:p-8">
                      <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">What This Enables</p>
                      <div className="space-y-2">
                        {[
                          "Personal FICO/VantageScore for the business owner",
                          "Business scores: FSR and Experian Intelliscore",
                          "Policy-aligned decision logic matched to CCB underwriting",
                          "Eligible Citi commercial products: revolving credit, term loans, commercial cards, LOC"
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg"
                    asChild
                  >
                    <Link to="/pilot">
                      Start the 90-Day Pilot
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                {/* Hero Image - Right Side (KEEP phone mockups) */}
                <div className="order-1 lg:order-2">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <img
                      src="/How it works/How It Works Hero.png"
                      alt="How It Works"
                      className="w-full h-auto"
                    />
                  </motion.div>
                </div>
              </div>

              {/* SECTION 2 — ARCHITECTURE */}
              <div className="mt-16">
                <h3 className="text-xl font-heading font-bold text-center mb-8">Integration Architecture</h3>

                {/* ArchitectureFlow component above the cards */}
                <div className="mb-8">
                  <ArchitectureFlow />
                </div>

                <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  <Card className="bg-card border border-border shadow-sm">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-bold text-foreground mb-1">CitiDirect Platform</h4>
                      <p className="text-xs text-muted-foreground">Digital Credit Applications, electronic signatures, end-to-end status</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-primary/5 border border-primary/30 shadow-sm">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <Zap className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-bold text-primary mb-1">LUMIQ AI API</h4>
                      <p className="text-xs text-muted-foreground">83ms decisioning, 7 intelligence outputs, structured JSON signals</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card border border-border shadow-sm">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <LineChart className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-bold text-foreground mb-1">Portfolio & Cross-Border Intelligence</h4>
                      <p className="text-xs text-muted-foreground">Credit signals aligned with Token Services' 24/7 multi-currency liquidity</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 — SEVEN INTELLIGENCE OUTPUTS */}
        <section id="seven-outputs" className="py-20 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
                  SEVEN OUTPUTS, ONE API CALL
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  Seven Intelligence Outputs
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Not seven products. Seven outputs from a single API call — each one built for the decisions Citi's commercial bankers make through CitiDirect every day.
                </p>
              </div>

              <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-10 items-start">
                {/* Output Cards */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      num: "01",
                      title: "Digital Lending Intelligence",
                      desc: "Pre-score every business before they submit a Digital Credit Application on CitiDirect. Territory analysis across CCB's commercial footprint.",
                      tech: "FSR + Intelliscore + Owner FICO fusion. JSON output.",
                      icon: Target
                    },
                    {
                      num: "02",
                      title: "Relationship Manager Copilot (Stylus)",
                      desc: "Each RM gets an AI briefing aligned with Stylus Workspaces — top prospects, risk flags, and next-best-action. Structured JSON signals consumed natively by Citi's agentic AI.",
                      tech: "Structured JSON signal array consumed via Stylus API.",
                      icon: MessageSquareText
                    },
                    {
                      num: "03",
                      title: "CitiDirect Onboarding Acceleration",
                      desc: "83ms full scoring pipeline. Complement CitiDirect's Digital Credit Application with instant pre-qualification. Electronic signatures. Zero re-keying.",
                      tech: "REST endpoint, <100ms p95, idempotent.",
                      icon: Rocket
                    },
                    {
                      num: "04",
                      title: "Multi-Product Pre-Qualification ($10M)",
                      desc: "Revolving credit, term loans, commercial cards, letters of credit — scoring across CCB's full product shelf, up to $10M per application.",
                      tech: "Product eligibility matrix with confidence bands.",
                      icon: CreditCard
                    },
                    {
                      num: "05",
                      title: "Cross-Border Portfolio Radar (94 markets)",
                      desc: "Monitor your entire CCB book across 94 markets. Cross-sell signals. Early warning. Aligned with Citi Token Services' 24/7 multi-currency liquidity.",
                      tech: "Multi-jurisdiction KYB + bureau heterogeneity handling.",
                      icon: Globe
                    },
                    {
                      num: "06",
                      title: "Trade Finance Intelligence ($7.75T)",
                      desc: "Score supply chain credit needs in the $7.75T supercycle. AI-powered document processing. LatAm-to-ASEAN trade corridor scoring.",
                      tech: "Import/export risk model + document AI.",
                      icon: TrendingUp
                    },
                    {
                      num: "07",
                      title: "CRA & Community Lending Toolkit ($145.9B, $60B)",
                      desc: "Map CRA-eligible zones across Citi's $145.9B allocated activity. SPCP-compliant scoring for the $60B housing commitment. Market-level impact dashboards.",
                      tech: "Geocoded CRA eligibility + branch-level dashboards.",
                      icon: Users
                    }
                  ].map((module, idx) => (
                    <Card key={idx} className="bg-card border border-border shadow-sm hover:shadow-md transition-all">
                      <CardContent className="p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <module.icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="text-xs font-bold text-primary/60">{module.num}</span>
                        </div>
                        <h3 className="text-lg font-heading font-bold mb-2 text-foreground">{module.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{module.desc}</p>
                        <p className="text-xs text-primary/70 font-mono bg-primary/5 rounded-lg px-3 py-2">
                          {module.tech}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* API Response Preview — beside the output cards */}
                <div className="hidden lg:block lg:sticky lg:top-24 lg:w-[380px]">
                  <ApiResponsePreview />
                </div>
              </div>

              {/* API Response Preview — mobile (below cards) */}
              <div className="mt-8 lg:hidden">
                <ApiResponsePreview />
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4 — AI INFRASTRUCTURE (Integration Architecture) */}
        <section id="stylus-integration" className="py-20 md:py-24 lg:py-32 bg-background-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
                  AI INFRASTRUCTURE
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  Integration Architecture
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  LumiqAI produces structured JSON intelligence signals — not dashboards. These signals are designed to be consumed by Citi's Stylus Workspaces, the proprietary agentic AI platform that David Griffiths' team is rolling out to thousands of employees.
                </p>
              </div>

              {/* Signal Types */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10">
                {[
                  { title: "Credit Pre-Qualification", desc: "83ms scoring across revolving credit, term loans, commercial cards, and LOC", icon: Zap },
                  { title: "Risk Flags", desc: "Early warning signals, portfolio concentration alerts, cross-border risk indicators", icon: AlertCircle },
                  { title: "Product Matching", desc: "Multi-product eligibility scoring across CCB's full shelf, up to $10M per application", icon: Target },
                  { title: "Adverse Action Codes", desc: "ECOA-compliant reason codes, decline recovery paths, credit-building recommendations", icon: FileText }
                ].map((item, idx) => (
                  <Card key={idx} className="bg-card border border-border shadow-sm hover:shadow-md transition-all">
                    <CardContent className="p-5 sm:p-6">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-base font-heading font-bold mb-2">{item.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Integration Flow Diagram with Latency Annotations */}
              <Card className="bg-card border border-border shadow-sm">
                <CardContent className="p-8 md:p-10">
                  <h3 className="text-lg font-heading font-bold text-center mb-8">Signal Flow Architecture</h3>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
                    {[
                      { label: "CitiDirect", sublabel: "Digital Credit Application", latency: null },
                      { label: "LumiqAI API", sublabel: "83ms Decisioning", latency: "p50: 47ms" },
                      { label: "Structured JSON", sublabel: "7 Intelligence Outputs", latency: "p95: 83ms" },
                      { label: "Stylus Workspaces", sublabel: "Agentic AI Platform", latency: "p99: 127ms" },
                      { label: "RM Action", sublabel: "Informed Decision", latency: null }
                    ].map((step, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="relative">
                          <div className={`px-4 py-3 rounded-xl text-center min-w-[140px] ${idx === 1 ? 'bg-primary/10 border-2 border-primary/30' : 'bg-muted/50 border border-border'}`}>
                            <div className={`text-sm font-bold ${idx === 1 ? 'text-primary' : 'text-foreground'}`}>{step.label}</div>
                            <div className="text-xs text-muted-foreground">{step.sublabel}</div>
                          </div>
                          {step.latency && (
                            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-mono text-primary/60 whitespace-nowrap">
                              {step.latency}
                            </div>
                          )}
                        </div>
                        {idx < 4 && (
                          <ArrowRight className="w-5 h-5 text-primary/50 hidden md:block shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* SECTION 5 — WHAT THE ENGINE DOES UNDER THE HOOD */}
        <section id="engine" className="py-20 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-7xl mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
                  UNDER THE HOOD
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  What the Engine Does Under the Hood
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  CCB-aligned AI decisioning with full explainability
                </p>
              </div>

              {/* Timeline UI */}
              <div className="relative max-w-6xl mx-auto">
                {/* Timeline Line */}
                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

                {/* Timeline Items */}
                <div className="space-y-12">
                  {/* Step 1: Pre-Qualification */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start"
                  >
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-0 w-16 h-16 items-center justify-center z-10">
                      <div className="w-16 h-16 rounded-full bg-background border-4 border-foreground flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                          <span className="text-white font-bold text-sm">1</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:ml-24 flex-1">
                      <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-all">
                        <CardContent className="p-6 md:p-8 text-center">
                          <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center md:hidden">
                              <Target className="w-6 h-6 text-foreground" />
                            </div>
                            <h3 className="text-xl font-heading font-bold">1. Digital Credit Pre-Qualification</h3>
                          </div>
                          <p className="text-muted-foreground mb-3 leading-relaxed max-w-2xl mx-auto">
                            83ms pre-scoring before the business submits a Digital Credit Application on CitiDirect. Mapped to CCB's underwriting standards for revolving credit, term loans, commercial cards, and letters of credit.
                          </p>
                          {/* Load Test Results */}
                          <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="bg-muted/50 border border-border rounded-lg px-3 py-1.5 text-center">
                              <div className="text-xs text-muted-foreground">p50</div>
                              <div className="text-sm font-bold font-mono text-foreground">47ms</div>
                            </div>
                            <div className="bg-primary/5 border border-primary/20 rounded-lg px-3 py-1.5 text-center">
                              <div className="text-xs text-muted-foreground">p95</div>
                              <div className="text-sm font-bold font-mono text-primary">83ms</div>
                            </div>
                            <div className="bg-muted/50 border border-border rounded-lg px-3 py-1.5 text-center">
                              <div className="text-xs text-muted-foreground">p99</div>
                              <div className="text-sm font-bold font-mono text-foreground">127ms</div>
                            </div>
                          </div>
                          {/* Mockup (smaller) */}
                          <div className="mb-4 max-w-[200px] mx-auto">
                            <img
                              src="/How it works/what users see/consumer/1.png"
                              alt="Digital Pre-Qualification View"
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>

                  {/* Step 2: Multi-Product Scoring */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start"
                  >
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-0 w-16 h-16 items-center justify-center z-10">
                      <div className="w-16 h-16 rounded-full bg-background border-4 border-foreground flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                          <span className="text-white font-bold text-sm">2</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:ml-24 flex-1">
                      <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-all">
                        <CardContent className="p-6 md:p-8 text-center">
                          <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center md:hidden">
                              <BarChart3 className="w-6 h-6 text-foreground" />
                            </div>
                            <h3 className="text-xl font-heading font-bold">2. Multi-Product Eligibility Scoring</h3>
                          </div>
                          <p className="text-muted-foreground mb-3 leading-relaxed max-w-2xl mx-auto">
                            AI scores eligibility across CCB's full product shelf — up to $10M per application:
                          </p>
                          <div className="flex flex-wrap gap-2 mb-3 justify-center">
                            <Badge className="bg-foreground/10 text-foreground border-foreground/30">Revolving Credit</Badge>
                            <Badge className="bg-foreground/10 text-foreground border-foreground/30">Term Loans</Badge>
                            <Badge className="bg-foreground/10 text-foreground border-foreground/30">Commercial Cards</Badge>
                            <Badge className="bg-foreground/10 text-foreground border-foreground/30">Letters of Credit</Badge>
                          </div>
                          {/* Business Mockup (smaller) */}
                          <div className="mb-3 max-w-[200px] mx-auto">
                            <img
                              src="/21.png"
                              alt="Business Eligibility View"
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                          <p className="text-xs text-muted-foreground/80 italic max-w-2xl mx-auto">
                            Policy-aligned decision logic matched to CCB underwriting standards.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>

                  {/* Step 3: Cross-Border & Trade Finance */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start"
                  >
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-0 w-16 h-16 items-center justify-center z-10">
                      <div className="w-16 h-16 rounded-full bg-background border-4 border-foreground flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                          <span className="text-white font-bold text-sm">3</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:ml-24 flex-1">
                      <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-all">
                        <CardContent className="p-6 md:p-8 text-center">
                          <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center md:hidden">
                              <Globe className="w-6 h-6 text-foreground" />
                            </div>
                            <h3 className="text-xl font-heading font-bold">3. Cross-Border & Trade Finance Scoring</h3>
                          </div>
                          <p className="text-muted-foreground mb-3 leading-relaxed max-w-2xl mx-auto">
                            Credit intelligence across 94 markets, 300 clearing networks. Aligned with Token Services' 24/7 multi-currency liquidity and the $7.75T capex supercycle.
                          </p>
                          <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground max-w-md mx-auto">
                            <span>* Cross-border eligibility</span>
                            <span>* Trade corridor scoring</span>
                            <span>* Supply chain credit</span>
                            <span>* Multi-currency signals</span>
                            <span>* LatAm-ASEAN corridors</span>
                            <span>* Token Services alignment</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>

                  {/* Step 4: Decline-Recovery & CRA Logic */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start"
                  >
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-0 w-16 h-16 items-center justify-center z-10">
                      <div className="w-16 h-16 rounded-full bg-background border-4 border-foreground flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                          <span className="text-white font-bold text-sm">4</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:ml-24 flex-1">
                      <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-all">
                        <CardContent className="p-6 md:p-8 text-center">
                          <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center md:hidden">
                              <RefreshCw className="w-6 h-6 text-foreground" />
                            </div>
                            <h3 className="text-xl font-heading font-bold">4. Decline-Recovery & CRA Compliance</h3>
                          </div>
                          <p className="text-muted-foreground mb-3 leading-relaxed max-w-2xl mx-auto">
                            If a business cannot be approved today, LumiqAI generates ECOA-compliant adverse action codes and CRA-supportive lending paths:
                          </p>
                          <ul className="space-y-2 text-sm text-muted-foreground max-w-md mx-auto mb-4">
                            <li className="flex items-center justify-center gap-2">
                              <ChevronRight className="w-4 h-4 text-foreground shrink-0" />
                              <span>ECOA-compliant adverse action codes</span>
                            </li>
                            <li className="flex items-center justify-center gap-2">
                              <ChevronRight className="w-4 h-4 text-foreground shrink-0" />
                              <span>SPCP-eligible alternative product paths</span>
                            </li>
                            <li className="flex items-center justify-center gap-2">
                              <ChevronRight className="w-4 h-4 text-foreground shrink-0" />
                              <span>CRA-zone mapping for community lending</span>
                            </li>
                            <li className="flex items-center justify-center gap-2">
                              <ChevronRight className="w-4 h-4 text-foreground shrink-0" />
                              <span>Credit-building intelligence for underserved communities</span>
                            </li>
                          </ul>
                          {/* Adverse Action Code Example */}
                          <div className="bg-slate-950 rounded-xl p-4 text-left max-w-lg mx-auto">
                            <div className="text-[10px] font-mono text-slate-500 mb-2">// Adverse action response example</div>
                            <pre className="text-xs font-mono text-slate-300 leading-relaxed overflow-x-auto">{`{
  "action": "DECLINE",
  "codes": ["AA-201", "AA-305"],
  "reasons": [
    "Insufficient business credit history (< 24 mo)",
    "Owner FICO below product threshold"
  ],
  "recovery": {
    "spcp_eligible": true,
    "cra_zone": "LMI-qualified",
    "alt_products": ["secured_card", "micro_loc"]
  }
}`}</pre>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Compliance Alignment Statement */}
              <div className="mt-10 p-6 md:p-8 rounded-xl bg-primary/5 border border-primary/20 text-center">
                <h4 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Compliance Alignment</h4>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Designed with ECOA (Reg B) SPCP guidance in mind — credit extension without disparate impact, supported by explainability artifacts. Aligned with Citi's Outstanding CRA rating standards ($145.9B in allocated activity).
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 6 — IMPACT ON CITI'S CCB PLATFORM */}
        <section id="impact" className="py-20 md:py-24 lg:py-32 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
                  IMPACT
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  Impact on Citi's Digital Lending Platform
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Measurable impact across CCB's commercial footprint from day one
                </p>
              </div>

              {/* Before/After Table */}
              <div className="mb-12">
                <BeforeAfterTable />
              </div>

              {/* What Citi Gains */}
              <div className="mb-12">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-8 text-center">What Citi Gains</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6">
                  {[
                    { value: "+15-25%", label: "Application Conversion Lift", icon: TrendingUp },
                    { value: "83ms", label: "Pre-Qualification Speed", icon: Zap },
                    { value: ">=70%", label: "Cross-Sell Accuracy", icon: Target },
                    { value: "$10M", label: "Per Digital Credit Application", icon: DollarSign },
                    { value: "94", label: "Markets with Cross-Border Coverage", icon: Globe },
                    { value: "$7.75T", label: "Trade Finance Supercycle Scoring", icon: TrendingUp },
                    { value: "Outstanding", label: "CRA Rating Alignment", icon: Shield },
                    { value: "Stylus-Native", label: "JSON Signals for Agentic AI", icon: Zap }
                  ].map((item, idx) => (
                    <Card key={idx} className="bg-card border border-border shadow-sm hover:shadow-md transition-all">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-foreground mx-auto mb-2 sm:mb-3" />
                        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-1 sm:mb-2">{item.value}</div>
                        <p className="text-xs text-muted-foreground leading-tight">{item.label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* What Citi Saves */}
              <div className="mb-12">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-8 text-center">What Citi Saves</h3>
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                  <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-all">
                    <CardContent className="p-8 text-center">
                      <div className="text-4xl font-bold text-foreground mb-2">$40M-$70M</div>
                      <p className="text-muted-foreground">Development cost avoided</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-all">
                    <CardContent className="p-8 text-center">
                      <div className="text-4xl font-bold text-foreground mb-2">18-24 mo</div>
                      <p className="text-muted-foreground">Build time saved</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-all">
                    <CardContent className="p-8 text-center">
                      <div className="text-4xl font-bold text-foreground mb-2">
                        <AnimatedCounter num={90} /> days
                      </div>
                      <p className="text-muted-foreground">LumiqAI deployment time</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Infrastructure Comparison */}
              <div className="mb-12">
                <InfrastructureComparison />
              </div>

              {/* Pilot Economics */}
              <div className="mt-12 p-6 md:p-8 rounded-xl bg-primary/10 border border-primary/30 text-center">
                <h4 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">$600K Pilot Economics</h4>
                <p className="text-foreground font-medium max-w-3xl mx-auto mb-2">
                  $600K to validate credit intelligence across CitiDirect — less than a single RM's annual compensation.
                </p>
                <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
                  ROI measured against CCB's digital lending conversion baseline. $600K for 90 days of proof on a platform processing up to $10M per digital credit application.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 7 — SECURITY & GOVERNANCE */}
        <section id="security" className="py-20 md:py-24 lg:py-32 bg-background-secondary">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
                  SECURITY & GOVERNANCE
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  Security & Governance
                </h2>
              </div>

              {/* ComplianceTrust replaces the old security cards */}
              <ComplianceTrust />

              {/* BCBS 239 Link */}
              <div className="mt-6 p-6 md:p-8 rounded-xl bg-primary/5 border border-primary/20 text-center">
                <h4 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">BCBS 239 Data Lineage</h4>
                <p className="text-muted-foreground max-w-3xl mx-auto mb-3">
                  Every credit signal traced from source to decision. Full data lineage dashboard available in the demo.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://citi.demo.futeurcredx.com/demo/citi?tab=data-lineage" target="_blank" rel="noopener noreferrer">
                    View Data Lineage Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 8 — GLOBAL SCALABILITY (condensed from 6 to 3 bullets) */}
        <section id="scalability" className="py-20 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
                  GLOBAL SCALABILITY
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  Global Scalability
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Built for Citi's 94-market worldwide footprint
                </p>
              </div>

              <Card className="bg-card border border-border shadow-sm">
                <CardContent className="p-8 md:p-10">
                  <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
                    {[
                      { icon: Globe, label: "94+ markets with credit bureau heterogeneity handling across jurisdictions" },
                      { icon: Zap, label: "Modular microservice — merges global and local eligibility logic, deploys in 90 days" },
                      { icon: Shield, label: "Regional compliance adaptability: CRA, BCBS 239, ECOA, multilingual RM support" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </div>
                        <span className="text-xs sm:text-sm md:text-base text-foreground font-medium">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* SECTION 9 — BOTTOM CTA */}
        <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div {...fadeInUp} className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                $600K. 90 Days. 7 KPIs. Measured against your baselines.
              </h2>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-7 text-xl shadow-lg"
                asChild
              >
                <Link to="/pilot">
                  Start the 90-Day Pilot
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden z-50">
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6"
            asChild
          >
            <Link to="/pilot">
              Start the 90-Day Pilot
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Impact Chat Widget */}
        <ImpactChatWidget />
        <Footer />
      </div>
    </PageLayout>
  );
}
