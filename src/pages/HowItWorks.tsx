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

        {/* SECTION 1 — OVERVIEW (Hero) */}
        <section id="overview" className="relative overflow-hidden pt-8 md:pt-12 lg:pt-16 pb-20 md:pb-24 lg:pb-32 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Text Content - Left Side */}
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
                    CITI — HOW IT WORKS
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-foreground leading-tight">
                    Real-time credit intelligence inside CitiDirect's digital lending experience.
                  </h1>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Pre-score businesses before they submit Digital Credit Applications on CitiDirect, deliver 83ms decisioning across revolving credit, term loans, commercial cards, and letters of credit, and track portfolio health across CCB's commercial footprint — while Stylus Workspaces consumes the signals natively.
                  </p>

                  {/* Quick Facts Strip */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
                    {[
                      { value: "83ms", label: "Pre-qualification (vs. manual review)" },
                      { value: "$10M", label: "Per digital credit application" },
                      { value: ">=70%", label: "Cross-sell accuracy" },
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
                      Start Citi Pilot
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
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
                      src="/How it works/How It Works Hero.png"
                      alt="How It Works"
                      className="w-full h-auto"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Architecture Diagram */}
              <div className="mt-16">
                <h3 className="text-xl font-heading font-bold text-center mb-8">Architecture Overview</h3>
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

        {/* SECTION 2 — SEVEN INTELLIGENCE OUTPUTS */}
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

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
                {[
                  {
                    num: "01",
                    title: "Digital Lending Intelligence",
                    desc: "Pre-score every business before they submit a Digital Credit Application on CitiDirect. Territory analysis across CCB's commercial footprint.",
                    icon: Target
                  },
                  {
                    num: "02",
                    title: "Relationship Manager Copilot (Stylus)",
                    desc: "Each RM gets an AI briefing aligned with Stylus Workspaces — top prospects, risk flags, and next-best-action. Structured JSON signals consumed natively by Citi's agentic AI.",
                    icon: MessageSquareText
                  },
                  {
                    num: "03",
                    title: "CitiDirect Onboarding Acceleration",
                    desc: "83ms full scoring pipeline. Complement CitiDirect's Digital Credit Application with instant pre-qualification. Electronic signatures. Zero re-keying.",
                    icon: Rocket
                  },
                  {
                    num: "04",
                    title: "Multi-Product Pre-Qualification ($10M)",
                    desc: "Revolving credit, term loans, commercial cards, letters of credit — scoring across CCB's full product shelf, up to $10M per application.",
                    icon: CreditCard
                  },
                  {
                    num: "05",
                    title: "Cross-Border Portfolio Radar (94 markets)",
                    desc: "Monitor your entire CCB book across 94 markets. Cross-sell signals. Early warning. Aligned with Citi Token Services' 24/7 multi-currency liquidity.",
                    icon: Globe
                  },
                  {
                    num: "06",
                    title: "Trade Finance Intelligence ($7.75T)",
                    desc: "Score supply chain credit needs in the $7.75T supercycle. AI-powered document processing. LatAm-to-ASEAN trade corridor scoring.",
                    icon: TrendingUp
                  },
                  {
                    num: "07",
                    title: "CRA & Community Lending Toolkit ($145.9B, $60B)",
                    desc: "Map CRA-eligible zones across Citi's $145.9B allocated activity. SPCP-compliant scoring for the $60B housing commitment. Market-level impact dashboards.",
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
                      <p className="text-sm text-muted-foreground leading-relaxed">{module.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* LLM Suite Integration Note */}
              <div className="p-6 md:p-8 rounded-xl bg-primary/5 border border-primary/20 text-center">
                <h4 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Stylus Workspaces Integration</h4>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Citi's Stylus Workspaces — the proprietary agentic AI platform rolling out to thousands of employees — needs structured credit signals. LumiqAI produces intelligence outputs (JSON, not dashboards) that Stylus Workspaces and CitiDirect consume natively. We generate the signals — Stylus renders the narrative.
                </p>
                <p className="text-xs text-muted-foreground/70 mt-2">Source: Stylus Workspaces with Agentic AI (Sep 22, 2025)</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 — STYLUS WORKSPACES INTEGRATION (NEW) */}
        <section id="stylus-integration" className="py-20 md:py-24 lg:py-32 bg-background-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
                  AI INFRASTRUCTURE
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  Native Integration with Citi's AI Infrastructure
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

              {/* Integration Flow Diagram */}
              <Card className="bg-card border border-border shadow-sm">
                <CardContent className="p-8 md:p-10">
                  <h3 className="text-lg font-heading font-bold text-center mb-8">Signal Flow Architecture</h3>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
                    {[
                      { label: "CitiDirect", sublabel: "Digital Credit Application" },
                      { label: "LumiqAI API", sublabel: "83ms Decisioning" },
                      { label: "Structured JSON", sublabel: "7 Intelligence Outputs" },
                      { label: "Stylus Workspaces", sublabel: "Agentic AI Platform" },
                      { label: "RM Action", sublabel: "Informed Decision" }
                    ].map((step, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`px-4 py-3 rounded-xl text-center min-w-[140px] ${idx === 1 ? 'bg-primary/10 border-2 border-primary/30' : 'bg-muted/50 border border-border'}`}>
                          <div className={`text-sm font-bold ${idx === 1 ? 'text-primary' : 'text-foreground'}`}>{step.label}</div>
                          <div className="text-xs text-muted-foreground">{step.sublabel}</div>
                        </div>
                        {idx < 4 && (
                          <ArrowRight className="w-5 h-5 text-primary/50 hidden md:block shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground/70 text-center mt-6">Source: Stylus Workspaces with Agentic AI (Sep 22, 2025)</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4 — WHAT THE ENGINE DOES UNDER THE HOOD */}
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
                          <p className="text-muted-foreground mb-4 leading-relaxed max-w-2xl mx-auto">
                            83ms pre-scoring before the business submits a Digital Credit Application on CitiDirect. Mapped to CCB's underwriting standards for revolving credit, term loans, commercial cards, and letters of credit.
                          </p>
                          {/* Mockup */}
                          <div className="mb-4 max-w-xs mx-auto">
                            <img
                              src="/How it works/what users see/consumer/1.png"
                              alt="Digital Pre-Qualification View"
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                          <p className="text-xs text-muted-foreground/80 italic">
                            Source: Citi CCB Digitizes Lending (Jun 25, 2025)
                          </p>
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
                          {/* Business Mockup */}
                          <div className="mb-3 max-w-xs mx-auto">
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
                          <ul className="space-y-2 text-sm text-muted-foreground max-w-md mx-auto">
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

        {/* SECTION 5 — IMPACT ON CITI'S CCB PLATFORM */}
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
              <div>
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

              {/* Pilot Economics */}
              <div className="mt-12 p-6 md:p-8 rounded-xl bg-[#C9922A]/10 border border-[#C9922A]/30 text-center">
                <h4 className="text-sm font-bold tracking-widest text-[#C9922A] uppercase mb-2">$600K Pilot Economics</h4>
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

        {/* SECTION 6 — SECURITY & GOVERNANCE */}
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
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Citi earned an Outstanding CRA rating for the 2nd consecutive period — $145.9B in allocated activity. LumiqAI's governance framework supports that standard.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {[
                  { icon: Shield, title: "CCB Underwriting Alignment", desc: "Uses Citi's own underwriting rules — policy-aligned decision logic, not external models" },
                  { icon: Lock, title: "Zero Risk Interference", desc: "Zero interference with risk appetite — your rules, your thresholds, your controls" },
                  { icon: FileText, title: "Full Audit Trail", desc: "Complete audit trail + explainability logs. BCBS 239 data lineage compliant" },
                  { icon: CheckCircle2, title: "SOC2 Compliant", desc: "SOC2 + ISO27001 compliant infrastructure" },
                  { icon: CreditCard, title: "PCI DSS", desc: "PCI DSS compliant data handling across all credit signals" },
                  { icon: Database, title: "Flexible Deployment", desc: "On-prem or VPC deployment options within Citi's infrastructure" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-center sm:justify-start">
                    <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-all w-full max-w-sm sm:max-w-none">
                      <CardContent className="p-5 sm:p-6 md:p-8">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 mx-auto sm:mx-0">
                          <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </div>
                        <h3 className="text-base sm:text-lg font-heading font-bold mb-2 text-center sm:text-left">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-center sm:text-left">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* CRA & Community Investment Callout */}
              <div className="mt-10 p-6 md:p-8 rounded-xl bg-primary/5 border border-primary/20">
                <h4 className="text-sm font-bold tracking-widest text-primary uppercase mb-3 text-center">CRA & Community Investment</h4>
                <p className="text-muted-foreground max-w-3xl mx-auto text-center">
                  Citi's $60B Housing Blueprint: 250,000 units over 5 years. $50M Citi Foundation grants. Jane Fraser: supporting "the homeownership dreams of millions of Americans." Outstanding CRA rating backed by $82.9B in mortgage lending, $13.5B in small business/farm lending, $1.1B in community development lending, and $6.8B in community development investments. LumiqAI maps SPCP-eligible zones, generates CRA-supportive analytics, and supports credit-building intelligence for underserved communities — powering Citi's position as U.S. Affordable Housing Lender for the 15th consecutive year.
                </p>
                <p className="text-xs text-muted-foreground/70 mt-2 text-center">Sources: $60B Housing Blueprint (Feb 24, 2026), Outstanding CRA Rating (May 1, 2025)</p>
              </div>

              {/* Token Services Governance Callout */}
              <div className="mt-6 p-6 md:p-8 rounded-xl bg-primary/5 border border-primary/20">
                <h4 className="text-sm font-bold tracking-widest text-primary uppercase mb-3 text-center">Cross-Border Governance — Token Services + Credit Intelligence</h4>
                <p className="text-muted-foreground max-w-3xl mx-auto text-center">
                  Citi Token Services processes billions on private permissioned blockchain across US, UK, Singapore, Hong Kong, and now Dublin (Euro). LumiqAI provides credit governance for cross-border lending decisions — every eligibility assessment logged, every cross-border credit signal auditable, aligned with BCBS 239 data lineage standards.
                </p>
                <p className="text-xs text-muted-foreground/70 mt-2 text-center">Sources: Token Services Expansion to Euro + Dublin (Nov 7, 2025)</p>
              </div>

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

        {/* SECTION 7 — GLOBAL SCALABILITY */}
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
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {[
                      { icon: Globe, label: "Scales to 94+ markets across CCB's footprint" },
                      { icon: Database, label: "Works with credit bureau heterogeneity across jurisdictions" },
                      { icon: LineChart, label: "Merges global + local commercial lending eligibility logic" },
                      { icon: Users, label: "Supports multilingual UX for cross-border RMs" },
                      { icon: Zap, label: "Deploys as modular credit intelligence microservice" },
                      { icon: Shield, label: "Regional compliance adaptability (CRA, BCBS 239, ECOA)" }
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

        {/* Cross-Border Credit Intelligence */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Cross-Border Credit Intelligence
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Built for the only top-4 bank with a 94-market global network and 300 clearing networks.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="rounded-2xl border border-border/50 p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Multi-Jurisdiction KYB</h3>
                <p className="text-sm text-muted-foreground">
                  Verify business credit across domestic and international bureaus. Automated compliance checks for businesses operating across Citi's 94-market footprint.
                </p>
              </div>
              <div className="rounded-2xl border border-border/50 p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Trade Finance Scoring</h3>
                <p className="text-sm text-muted-foreground">
                  AI-powered import/export risk assessment for the $7.75T global capex supercycle. LatAm exports to South Asia/ASEAN up 82%. Credit intelligence at trade finance scale.
                </p>
              </div>
              <div className="rounded-2xl border border-border/50 p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Token Services Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Credit decisioning aligned with Citi Token Services' 24/7 multi-currency liquidity. Cross-sell treasury services alongside credit products across US, UK, Singapore, Hong Kong, and Dublin.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8 — CALL TO ACTION */}
        <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div {...fadeInUp} className="max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
                GET STARTED TODAY
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                Start a 90-Day Pilot Alongside Citi's Digital Lending Rollout
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
                $600,000 Strategic Pilot. Across CCB's digital lending platform. 7 KPIs. Measurable conversion lift.
              </p>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Measured against pre-agreed KPIs.
              </p>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 sm:px-10 py-5 sm:py-7 text-lg sm:text-xl shadow-lg"
                asChild
              >
                <Link to="/pilot">
                  Start Citi Pilot
                  <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
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
              Start Citi Pilot
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
