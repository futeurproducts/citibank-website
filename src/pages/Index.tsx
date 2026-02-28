import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Shield, Zap, TrendingUp, Database, Lock, GitBranch, CloudCog, FileCheck, Users, ArrowRight, BarChart3, Info, Download, Briefcase, UserCheck, Target, LineChart as LineChartIcon, AlertTriangle, Upload, ImageIcon, DollarSign, Clock, Globe, Brain, Building2, Landmark, Heart } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";
import { Hero, BankComparison, StrategicBridge } from "@/components/sections/home";
import { ImpactChatWidget } from "@/components/ImpactChatWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Animated counter hook
function useCountUp(target: number, isInView: boolean, suffix = "") {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, isInView]);
  return count + suffix;
}

function MetricCard({ value, label, suffix = "", delay = 0 }: { value: number; label: string; suffix?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animatedValue = useCountUp(value, isInView, suffix);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center p-6 rounded-xl bg-card border border-border shadow-sm hover:border-primary/50 transition-all duration-300"
    >
      <div className="text-4xl font-bold text-primary mb-2">{animatedValue}</div>
      <div className="text-sm text-muted-foreground text-center">{label}</div>
    </motion.div>
  );
}

function Index() {
  useEffect(() => {
    document.title = "LUMIQ AI \u00d7 Citi \u2014 Credit Intelligence for the Digital Commercial Bank";
  }, []);

  return (
    <PageLayout>
      <Hero />

      {/* Press Intelligence */}
      <section className="py-6 border-y border-border/30 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
              <span className="font-medium">Feb 2026:</span> Citi invests in Sakana AI — first-ever strategic AI investment
            </div>
            <div className="hidden md:block w-px h-4 bg-border"></div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="font-medium">Dec 2025:</span> OCC removes consent order — transformation validated
            </div>
            <div className="hidden md:block w-px h-4 bg-border"></div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-purple-500"></span>
              <span className="font-medium">Oct 2025:</span> Jane Fraser elected Board Chair
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="py-12 bg-background border-b border-border/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary">$145.9B</div>
              <div className="text-sm text-muted-foreground mt-1">CRA retail/lending allocated</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary">Outstanding</div>
              <div className="text-sm text-muted-foreground mt-1">CRA rating — 2nd consecutive</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary">$60B</div>
              <div className="text-sm text-muted-foreground mt-1">Housing Blueprint commitment</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary">$7.75T</div>
              <div className="text-sm text-muted-foreground mt-1">Global capex supercycle by 2030</div>
            </motion.div>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">
            Sources: Citi Outstanding CRA Rating (May 1, 2025), Citi $60B Housing Blueprint (Feb 24, 2026), Citi Supply Chain Financing Report (Feb 20, 2026)
          </p>
        </div>
      </section>

      {/* Award Callout — Citi AI + Celent + Stylus */}
      <section className="py-16 bg-primary/5 border-b border-border/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-2xl border border-primary/20 bg-card p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Recognition</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Citi: AI Innovation Award + Celent Model Bank Award for "Transforming Client Connectivity" — and Stylus Workspaces rolling out agentic AI to thousands of employees.
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                David Griffiths, Citi CTO, described Stylus Workspaces as "turbocharging productivity" with agentic AI that integrates internal data, project management, and enterprise platforms. Citi also invested in Sakana AI — its first strategic AI investment in Japan — for nature-inspired financial AI models. LumiqAI delivers the credit intelligence module that Stylus Workspaces needs for commercial lending decisioning — structured signals from one API, consumed natively by Citi's AI infrastructure.
              </p>
              <p className="text-xs text-muted-foreground">
                Sources: Citi Stylus Workspaces with Agentic AI (Sep 22, 2025), Sakana AI Investment (Feb 24, 2026), AI Innovation Award, Celent Model Bank Award
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5-Front Transformation Visual */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
              THE PLATFORM
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Citi's 5-Front Transformation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              LumiqAI is the credit intelligence layer that connects all five.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-[1600px] mx-auto">
            {[
              {
                icon: Brain,
                title: "AI-First",
                initiative: "Stylus Workspaces / Sakana AI",
                lumiq: "Credit signals for agentic AI workflows",
                color: "text-purple-500",
                bg: "bg-purple-500/10",
                border: "border-purple-500/20",
              },
              {
                icon: Building2,
                title: "Digital Lending",
                initiative: "CCB / CitiDirect",
                lumiq: "Pre-qualify before businesses apply",
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                border: "border-blue-500/20",
              },
              {
                icon: Globe,
                title: "Cross-Border",
                initiative: "Token Services / Coinbase",
                lumiq: "Cross-border eligibility scoring",
                color: "text-cyan-500",
                bg: "bg-cyan-500/10",
                border: "border-cyan-500/20",
              },
              {
                icon: TrendingUp,
                title: "Trade Finance",
                initiative: "$7.75T Supercycle",
                lumiq: "Supply chain credit scoring",
                color: "text-amber-500",
                bg: "bg-amber-500/10",
                border: "border-amber-500/20",
              },
              {
                icon: Heart,
                title: "Community Impact",
                initiative: "$60B Housing / CRA Outstanding",
                lumiq: "SPCP zones + CRA analytics",
                color: "text-green-500",
                bg: "bg-green-500/10",
                border: "border-green-500/20",
              },
            ].map((col, i) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`rounded-2xl border ${col.border} ${col.bg} p-6 text-center flex flex-col items-center`}
              >
                <div className={`w-12 h-12 rounded-full ${col.bg} flex items-center justify-center mb-4`}>
                  <col.icon className={`w-6 h-6 ${col.color}`} />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-2">{col.title}</h4>
                <p className="text-xs text-muted-foreground mb-3">{col.initiative}</p>
                <div className="w-full border-t border-border/50 pt-3 mt-auto">
                  <p className="text-xs font-medium text-primary">{col.lumiq}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-6">
            Each column maps to a Citi press release (May 2025 - Feb 2026) and shows the LumiqAI capability that serves it.
          </p>
        </div>
      </section>

      {/* Strategic Moment */}
      <section className="py-24 relative bg-background-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
              THE STRATEGIC MOMENT
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              The Strategic Moment
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Citi Commercial Bank is digitizing lending end-to-end. Digital Credit Applications on CitiDirect.
              Up to $10M per application. And the AI infrastructure to power it.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Source: CCB Digitizes Lending (Jun 25, 2025)
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                value: "$10M",
                label: "Per digital credit application on CitiDirect — revolving credit, term loans, commercial cards, letters of credit",
                source: "Citi CCB Digitizes Lending, Jun 2025",
              },
              {
                value: "$7.75T",
                label: "Global capex supercycle by 2030 — Citi's trade finance clients need credit intelligence at scale",
                source: "Citi Supply Chain Financing Report, Feb 2026",
              },
              {
                value: "18%",
                label: "AI adoption increase among large corporate trade finance clients — momentum Citi is already riding",
                source: "Citi Supply Chain Financing Report, Feb 2026",
              },
              {
                value: "Outstanding",
                label: "CRA rating for 2nd consecutive period — $145.9B in retail/CRA activities, $13.5B in small business lending",
                source: "Citi Outstanding CRA Rating, May 2025",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center p-6 rounded-xl bg-card border border-border shadow-sm hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-3">{card.value}</div>
                <p className="text-sm text-muted-foreground text-center mb-2">{card.label}</p>
                <p className="text-[10px] text-muted-foreground/60 text-center">{card.source}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seven Outputs */}
      <section className="py-24 relative bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
              SEVEN INTELLIGENCE OUTPUTS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Seven Outputs. One API Call.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Not seven products. Seven outputs from a single API call — each one built for the decisions
              Citi's commercial bankers make through CitiDirect every day.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1600px] mx-auto">
            {[
              {
                icon: Building2,
                title: "Digital Lending Intelligence",
                description: "Pre-score every business before they submit a Digital Credit Application on CitiDirect. Territory analysis across CCB's commercial footprint.",
              },
              {
                icon: UserCheck,
                title: "Relationship Manager Copilot",
                description: "Each RM gets an AI briefing aligned with Stylus Workspaces — top prospects, risk flags, and next-best-action. Structured JSON signals consumed natively by Citi's agentic AI.",
              },
              {
                icon: Zap,
                title: "CitiDirect Onboarding Acceleration",
                description: "83ms full scoring pipeline. Complement CitiDirect's Digital Credit Application with instant pre-qualification. Electronic signatures. Zero re-keying.",
              },
              {
                icon: FileCheck,
                title: "Multi-Product Pre-Qualification",
                description: "Revolving credit, term loans, commercial cards, letters of credit — scoring across CCB's full product shelf, up to $10M per application.",
              },
              {
                icon: Globe,
                title: "Cross-Border Portfolio Radar",
                description: "Monitor your entire CCB book across 94 markets. Cross-sell signals. Early warning. Aligned with Citi Token Services' 24/7 multi-currency liquidity.",
              },
              {
                icon: TrendingUp,
                title: "Trade Finance Intelligence",
                description: "Score supply chain credit needs in the $7.75T supercycle. AI-powered document processing. LatAm-to-ASEAN trade corridor scoring.",
              },
              {
                icon: Landmark,
                title: "CRA & Community Lending Toolkit",
                description: "Map CRA-eligible zones across Citi's $145.9B allocated activity. SPCP-compliant scoring for the $60B housing commitment. Branch-level impact dashboards.",
              },
            ].map((module, i) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                      <module.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-3">{module.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{module.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Stylus Workspaces Integration Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Stylus Workspaces Integration:</span>{" "}
                Citi's Stylus Workspaces — the proprietary agentic AI platform rolling out to thousands
                of employees — needs structured credit signals. LumiqAI produces intelligence outputs
                (JSON, not dashboards) that Stylus Workspaces and CitiDirect consume natively. We generate
                the signals — Stylus renders the narrative.
              </p>
              <p className="text-xs text-muted-foreground/60 mt-2">
                Source: Stylus Workspaces with Agentic AI (Sep 22, 2025)
              </p>
            </div>
          </motion.div>

          <p className="text-xs text-muted-foreground text-center mt-6">
            Sources: CCB Digitizes Lending (Jun 2025), Stylus Workspaces (Sep 2025), Token Services Expansion (Nov 2025), Supply Chain Report (Feb 2026), CRA Rating (May 2025), $60B Housing Blueprint (Feb 2026)
          </p>
        </div>
      </section>

      <BankComparison />
      <StrategicBridge />

      {/* Citi Dual-Engine Section */}
      <section className="py-24 relative bg-background">
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-[1600px] mx-auto"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight mb-4">
              Chase, Capital One, and Wells Fargo each built only one side of this stack.
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight mb-4">
              Citi has neither side — which is why intent escapes.
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
                LUMIQ AI built both sides, fully functional today — ready for Citi.
              </span>
            </h2>
          </motion.div>

          {/* Two Cards Side by Side */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-[1600px] mx-auto">

            {/* Left Card - Consumer */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="h-full bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
                {/* Card Header */}
                <div className="bg-secondary/10 px-6 py-5 border-b border-secondary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Users className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary">Powered by LumiqAI</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Citi Consumer Credit Journey</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Real-time visibility + instant prequal + 1-tap apply for Citi's entire consumer card portfolio.
                  </p>
                </div>

                {/* Mockup Images - 3 Phones */}
                <div className="mx-6 mt-6 flex items-center justify-center">
                  <img
                    src="/images/3-phone-consumer.png"
                    alt="Citi Consumer Credit Journey - 3 Phone Mockups"
                    className="w-full max-w-full h-auto object-contain rounded-xl"
                  />
                </div>

                {/* Features */}
                <div className="p-6 space-y-3">
                  <ul className="space-y-2.5 text-sm">
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Display daily VantageScore 3.0</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>AI-driven prequalification for Citi consumer cards</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>1-tap Apply for eligible users</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Decline recovery flow</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Predictive pathways & credit simulations</span>
                    </li>
                  </ul>
                </div>

                {/* Impact Footer */}
                <div className="bg-secondary/5 px-6 py-4 border-t border-secondary/20">
                  <p className="text-xs font-bold uppercase tracking-wider text-secondary mb-3">Impact for Citi</p>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="text-muted-foreground"><span className="text-secondary font-semibold">+18-25%</span> consumer approvals</div>
                    <div className="text-muted-foreground"><span className="text-secondary font-semibold">30-50%</span> more organic apps</div>
                    <div className="text-muted-foreground"><span className="text-secondary font-semibold">$300M-$500M</span> recovered revenue</div>
                    <div className="text-muted-foreground"><span className="text-secondary font-semibold">Zero CAC</span> in-app activation</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Card - Business */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="h-full bg-card border border-primary/30 rounded-2xl overflow-hidden shadow-lg">
                {/* Card Header */}
                <div className="bg-primary/10 px-6 py-5 border-b border-primary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Powered by LumiqAI</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Citi Business Credit Journey</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Unified Owner FICO + Business Score + AI eligibility for Citi's SMB credit products.
                  </p>
                </div>

                {/* Mockup Images - 3 Phones */}
                <div className="mx-6 mt-6 flex items-center justify-center">
                  <img
                    src="/images/3-phones-business.png"
                    alt="Citi Business Credit Journey - 3 Phone Mockups"
                    className="w-full max-w-full h-auto object-contain rounded-xl"
                  />
                </div>

                {/* Features */}
                <div className="p-6 space-y-3">
                  <ul className="space-y-2.5 text-sm">
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Experian Business Score + Owner Score displayed together</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>AI-powered prequal for Citi small-business cards</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Predictive loan pathways</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>1-tap Apply inside the Citi Business App</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Thin-file enhancement (cashflow + risk layering)</span>
                    </li>
                  </ul>
                </div>

                {/* Impact Footer */}
                <div className="bg-primary/5 px-6 py-4 border-t border-primary/20">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Impact for Citi</p>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="text-muted-foreground"><span className="text-primary font-semibold">+20-30%</span> SMB approvals</div>
                    <div className="text-muted-foreground"><span className="text-primary font-semibold">25-40%</span> fewer manual reviews</div>
                    <div className="text-muted-foreground"><span className="text-primary font-semibold">$300M-$700M</span> incremental revenue</div>
                    <div className="text-muted-foreground"><span className="text-primary font-semibold">First bank</span> with unified intelligence</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* What It Does Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 mb-16"
          >
            <h3 className="text-center text-2xl md:text-3xl font-heading font-bold text-foreground mb-12">What It Does</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-[1600px] mx-auto">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-3">Find creditworthy applicants Citi currently declines</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Unlock hidden revenue from qualified customers slipping through the cracks.</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-3">Approve more, without increasing default risk</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Expand approvals confidently with risk-calibrated decisioning.</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-3">Expand credit access compliantly and fairly</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Built for Reg B, ECOA, and SPCP alignment from day one.</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Section: THE COMPETITIVE COST */}
      <section className="py-24 relative bg-background-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              The Competitive Cost
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Citi is losing approvals, spend, and loyalty at the exact moment customers form credit intent. Competitors intercept Citi customers before they reach Citi's funnels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-[1600px] mx-auto">
            {/* Left Column - Competitor Diversion */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-secondary/30">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-6">
                    <AlertTriangle className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-6">Each month Citi's customers are diverted to:</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-20 h-12 rounded-xl bg-card border border-border flex items-center justify-center flex-shrink-0 p-2">
                        <img src="/The Compet Cost/chase.svg" alt="Chase" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <span className="text-foreground font-semibold">Chase:</span>
                        <span className="text-muted-foreground ml-2">In-app prequals + 1-tap approvals</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-20 h-12 rounded-xl bg-card border border-border flex items-center justify-center flex-shrink-0 p-2">
                        <img src="/The Compet Cost/Capital_One_logo.svg" alt="Capital One" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <span className="text-foreground font-semibold">Capital One:</span>
                        <span className="text-muted-foreground ml-2">CreditWise funnel dominance</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-20 h-12 rounded-xl bg-card border border-border flex items-center justify-center flex-shrink-0 p-2">
                        <img src="/The Compet Cost/wells-fargo.svg" alt="Wells Fargo" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <span className="text-foreground font-semibold">Wells Fargo:</span>
                        <span className="text-muted-foreground ml-2">Close-Up SMB activation</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-20 h-12 rounded-xl bg-card border border-border flex items-center justify-center flex-shrink-0 p-2">
                        <img src="/The Compet Cost/Apple_Card.svg" alt="Apple Card" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <span className="text-foreground font-semibold">Apple Card:</span>
                        <span className="text-muted-foreground ml-2">frictionless instant approvals</span>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Revenue Leakage Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-primary/30">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-6">
                    Estimated Annual Revenue Leakage
                  </h4>
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-0 border-b border-border pb-4">
                      <span className="text-muted-foreground font-medium">Consumer:</span>
                      <span className="text-2xl sm:text-2xl font-bold text-primary">$600M-$900M</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-0 border-b border-border pb-4">
                      <span className="text-muted-foreground font-medium">Business:</span>
                      <span className="text-2xl sm:text-2xl font-bold text-primary">$300M-$700M</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-0 pt-2">
                      <span className="text-foreground font-bold text-lg">Total:</span>
                      <span className="text-3xl sm:text-3xl font-bold text-primary">$900M-$1.6B lost annually</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Footnote */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-muted-foreground mt-8 text-center"
          >
            Benchmarking: Credit Journey, CreditWise, Close-Up, applied to Citi TAM.
          </motion.p>

        </div>
      </section>

      {/* Section: THE IMPACT - WHAT CITI GAINS */}
      <section className="py-24 relative bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              The Impact<br />
              What Citi Gains
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Modeled on Chase Credit Journey, Capital One CreditWise, Wells Fargo Close-Up, and calibrated to Citi's TAM.
            </p>
          </motion.div>

          {/* 2x2 Impact Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-[1600px] mx-auto">
            {/* Metric 1 - Consumer Lift */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-2xl bg-success/10 border border-success/20 flex items-center justify-center mb-6">
                    <TrendingUp className="w-6 h-6 text-success" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-6">Consumer Lift</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <span className="text-foreground"><span className="font-semibold text-success">+12-24%</span> approval lift</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <span className="text-foreground"><span className="font-semibold text-success">+25-40%</span> fewer manual reviews</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <span className="text-foreground"><span className="font-semibold text-success">2-3x</span> engagement</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <span className="text-foreground"><span className="font-semibold text-success">+5-10%</span> card conversions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Metric 2 - Business Lift */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-2xl bg-success/10 border border-success/20 flex items-center justify-center mb-6">
                    <TrendingUp className="w-6 h-6 text-success" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-6">Business Lift</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <span className="text-foreground"><span className="font-semibold text-success">+18-30%</span> approval lift</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <span className="text-foreground"><span className="font-semibold text-success">+35-50%</span> fewer manual reviews</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <span className="text-foreground"><span className="font-semibold text-success">+5-12%</span> SMB conversions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <span className="text-foreground"><span className="font-semibold text-success">+$300M-$700M</span> uplift</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Metric 3 - Total Financial Impact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/30">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-6">Total Financial Impact</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-foreground"><span className="font-semibold text-primary">+$900M-$1.6B</span> annual uplift</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-foreground"><span className="font-semibold text-primary">Zero CAC</span></span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-foreground">First-mover advantage in credit intelligence</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Metric 4 - Development Savings */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-secondary/30">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-6">Development Savings</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <span className="text-foreground">Save <span className="font-semibold text-secondary">$40M-$70M</span> in build cost</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <span className="text-foreground">Save <span className="font-semibold text-secondary">18-24 months</span> of internal development</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-foreground">LumiqAI deploys in <span className="font-semibold text-primary">90 days</span></span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* CTA Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mt-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-7 text-xl group"
            >
              <Link
                to="/pilot"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Review Citi Pilot Plan
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Closing Line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-xl md:text-2xl font-bold mt-12 text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-secondary"
          >
            Citi becomes the only bank in America with a dual consumer + business credit intelligence engine.
          </motion.p>
        </div>
      </section>

      {/* Expansion Economics */}
      <section className="py-24 relative bg-background-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
              PILOT ECONOMICS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              The Economics of Proof
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Jane Fraser: "Two-thirds of Transformation programs at or near target state." Citi is investing in AI (Stylus, Sakana),
              digital lending (CCB/CitiDirect), and cross-border infrastructure (Token Services). $150K validates credit intelligence
              across the CCB portfolio — less than a single RM's annual compensation.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Source: Jane Fraser Elected Board Chair (Oct 22, 2025)
            </p>
          </motion.div>

          {/* Gold Highlight Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="rounded-2xl border-2 border-[#C9922A]/40 bg-[#C9922A]/5 p-8 md:p-10 text-center space-y-6">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#C9922A] mb-2">$150K</div>
                <p className="text-lg text-foreground font-semibold">to validate credit intelligence across CitiDirect</p>
              </div>
              <div className="border-t border-[#C9922A]/20 pt-6 space-y-3">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">ROI:</span> Measured against CCB's digital lending conversion baseline
                </p>
                <p className="text-muted-foreground">
                  $150K for 90 days of proof on a platform processing up to $10M per digital credit application.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-24 relative bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
              GOVERNANCE & COMPLIANCE
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Built for Citi's Standards
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Citi earned an Outstanding CRA rating for the 2nd consecutive period — $145.9B in allocated activity.
              The Transformation is "two-thirds at or near target state." LumiqAI's governance framework supports that standard —
              compliance built into every decision, not bolted on after.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Sources: CRA Rating (May 1, 2025), Jane Fraser Board Chair (Oct 22, 2025)
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-[1600px] mx-auto">
            {/* CRA & Community Investment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                    <Landmark className="w-6 h-6 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">CRA & Community Investment</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Citi's $60B Housing Blueprint: 250,000 units over 5 years. $50M Citi Foundation grants. Jane Fraser: supporting
                    "the homeownership dreams of millions of Americans." Outstanding CRA rating backed by $82.9B in mortgage lending,
                    $13.5B in small business/farm lending, $1.1B in community development lending, and $6.8B in community
                    development investments.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    LumiqAI maps SPCP-eligible zones, generates CRA-supportive analytics, and supports credit-building intelligence
                    for underserved communities — powering Citi's #1 position as U.S. Affordable Housing Lender for the 15th consecutive year.
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-4">
                    Sources: $60B Housing Blueprint (Feb 24, 2026), Outstanding CRA Rating (May 1, 2025), #1 Affordable Housing Lender
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Token Services Governance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                    <Globe className="w-6 h-6 text-cyan-500" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">Cross-Border Governance — Token Services + Credit Intelligence</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Citi Token Services processes billions on private permissioned blockchain across US, UK, Singapore, Hong Kong, and
                    now Dublin (Euro). LumiqAI provides credit governance for cross-border lending decisions — every eligibility assessment
                    logged, every cross-border credit signal auditable, aligned with BCBS 239 data lineage standards.
                  </p>
                  <div className="mt-4">
                    <a
                      href="https://citi.demo.futeurcredx.com/demo/citi?tab=data-lineage"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      View BCBS 239 Data Lineage Dashboard
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-xs text-muted-foreground/60 mt-4">
                    Sources: Token Services Expansion to Euro + Dublin (Nov 7, 2025), Swift Fiat-to-Digital Settlement Trial
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Regulatory Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">Regulatory Alignment</h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>ECOA / Reg B adverse action compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>FCRA-compliant data handling and scoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>SPCP program support for community lending</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>BCBS 239 data lineage and audit trail</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>SOC 2 Type II controls (in progress)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>100% auditable decision logging</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Model Risk Management */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">Model Risk Management</h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>SR 11-7 / OCC 2011-12 model governance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Pre-built validation documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Challenger model framework</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Drift detection and performance monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Aligned with Citi's Transformation standards</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="pt-24 md:pt-32 lg:pt-40 pb-24 md:pb-32 lg:pb-40 relative scroll-mt-20 bg-background-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-24"
          >
            <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-6">
              HOW IT WORKS
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
              Three steps to convert qualified customers
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform declined applicants into approved customers through intelligent analysis and compliant expansion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-[1600px] mx-auto">
            {[
              {
                step: 1,
                title: "Analyze declined applicants",
                description: "Review your existing decline population to identify patterns and underwriting gaps.",
                icon: Database
              },
              {
                step: 2,
                title: "Identify hidden creditworthy segments",
                description: "Surface qualified applicants that current models miss using alternative data signals.",
                icon: Target
              },
              {
                step: 3,
                title: "Approve safely through SPCP programs",
                description: "Expand credit access compliantly through Special Purpose Credit Programs.",
                icon: CheckCircle2
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="group h-full bg-background rounded-2xl p-10 lg:p-12 transition-all duration-300 shadow-sm hover:shadow-lg border border-border">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Step Number */}
                  <div className="text-primary text-sm font-semibold uppercase tracking-wide mb-4">
                    Step {item.step}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-heading text-foreground mb-6">{item.title}</h3>

                  {/* Description */}
                  <p className="text-base md:text-lg font-body text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Border Advantage */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Why Citi — The Cross-Border Advantage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No other top-4 bank operates at this global scale. LumiqAI is built to match it.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-border/50 p-8 text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">$14.53B</div>
              <div className="text-sm font-semibold text-foreground mb-2">Treasury & Trade Solutions</div>
              <p className="text-sm text-muted-foreground">24/7 multi-currency liquidity with Citi Token Services. LumiqAI provides credit intelligence for instant cross-border decisions.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-border/50 p-8 text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">$7.75T</div>
              <div className="text-sm font-semibold text-foreground mb-2">Global Trade Market</div>
              <p className="text-sm text-muted-foreground">AI adoption in trade finance at 64%. LumiqAI scores cross-border credit risk for import/export decisioning.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-border/50 p-8 text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">15 to 0 Days</div>
              <div className="text-sm font-semibold text-foreground mb-2">Digital Credit Application</div>
              <p className="text-sm text-muted-foreground">Current 15-day approval cycle reduced to same-day with AI-powered multi-bureau orchestration across domestic and international bureaus.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pilot CTA */}
      <section id="cta" className="py-32 relative scroll-mt-20 bg-primary/5">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[1600px] mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Start a 90-Day Pilot Alongside Citi's Digital Lending Rollout
            </h2>
            <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              $150,000 Strategic Pilot. Across CCB's digital lending platform. Measurable results. Built on proven principles.
            </p>
            <p className="text-sm text-muted-foreground mb-10 max-w-2xl mx-auto">
              $150K pilot investment. 100% redeemable against Year 1 platform license upon full-scale deployment.
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto max-w-xl gap-2 px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-xs sm:text-sm md:text-base font-semibold text-center justify-center"
              asChild
            >
              <Link to="/pilot#pilot-form" className="leading-snug whitespace-normal flex items-center justify-center gap-2">
                <span className="hidden sm:inline">Book a 20-minute pilot review — see conversion lift & model audit in action</span>
                <span className="sm:hidden">Book Pilot Review</span>
                <ArrowRight className="inline-flex w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <ImpactChatWidget />
      <Footer />
    </PageLayout>
  );
}

export default Index;
