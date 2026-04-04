import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Shield,
  CheckCircle2,
  ArrowRight,
  Zap,
  Users,
  Building2,
  Target,
  RefreshCw,
  Globe,
  Lock,
  FileCheck,
  BarChart3,
  Clock,
  Server,
  Key,
  XCircle
} from "lucide-react";
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

// Competitor comparison data
const competitorData = [
  { bank: "Chase", logo: "/The Compet Cost/chase.svg", consumer: "Credit Journey", business: false, prequal: true, pathways: true },
  { bank: "Capital One", logo: "/The Compet Cost/Capital_One_logo.svg", consumer: "CreditWise", business: false, prequal: true, pathways: true },
  { bank: "Wells Fargo", logo: "/The Compet Cost/wells-fargo.svg", consumer: "Close Up", business: false, prequal: true, pathways: true },
  { bank: "AmEx", logo: "/The Compet Cost/amex-3.svg", consumer: "Internal scoring", business: "Business logic only", prequal: true, pathways: true },
  { bank: "Citi", logo: "/citibank-5.svg", consumer: false, business: false, prequal: false, pathways: false }
];

export default function Pilot() {
  const location = useLocation();

  useEffect(() => {
    document.title = "LUMIQ AI \u2014 90-Day Pilot, $600K, Measured Against Your KPIs";
  }, []);

  // Handle hash navigation when component mounts or hash changes
  useEffect(() => {
    if (location.hash === '#pilot-form') {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById('pilot-form');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-20 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto text-center">
            <Badge className="mb-6 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 px-4 py-2">
              Credit Intelligence for Citi Commercial Bank
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-primary-foreground leading-tight">
              90-Day Credit Intelligence Pilot for{" "}
              <span className="text-primary-foreground/90">Citi Commercial Bank</span>
            </h1>

            <p className="text-base md:text-lg text-primary-foreground/80 mb-4 max-w-3xl mx-auto">
              Deploy credit intelligence across CCB's digital lending platform, measure 7 KPIs against pre-agreed baselines, and generate measurable conversion lift — within your risk framework.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                "+15-25% application conversion lift",
                "83ms pre-qualification on CitiDirect",
                "ECOA/FCRA/CRA/GLBA compliant"
              ].map((pill, idx) => (
                <span key={idx} className="px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-sm text-primary-foreground/90 font-medium">
                  {pill}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold rounded-full shadow-lg px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base"
                asChild
              >
                <a href="https://citi.demo.futeurcredx.com/integration-preview?bank=citi">
                  Explore the Credit Intelligence Engine
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground hover:text-primary-foreground rounded-full font-semibold shadow-md transition-all px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base"
                asChild
              >
                <a href="/model-governance-framework">
                  View the 90-Day Pilot Framework
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1 - Why This Pilot Matters Now */}
      <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">01 — WHY THIS PILOT MATTERS NOW</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                CCB is digitizing lending end-to-end. The credit intelligence layer is the missing piece.
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Digital Credit Applications on CitiDirect. Up to $10M per application. Electronic signatures.
                This pilot adds the 83ms pre-qualification layer that scores every business before it applies — with minimal lift from CCB teams.
              </p>
              <div className="h-px w-24 bg-primary mx-auto mt-6" />
            </div>

            <motion.div {...fadeInUp}>
              <Card className="bg-card border border-border shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">The Pilot Instantly Enables CCB's Digital Lending Platform To:</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { icon: Zap, text: "Pre-qualify businesses in 83ms before CitiDirect submission" },
                      { icon: Target, text: "Score revolving credit, term loans, commercial cards, LOC eligibility" },
                      { icon: BarChart3, text: "Generate product-level confidence bands across CCB's shelf" },
                      { icon: TrendingUp, text: "Deliver structured JSON signals to Stylus Workspaces" },
                      { icon: Globe, text: "Monitor cross-border portfolio health across 94 markets" },
                      { icon: RefreshCw, text: "Map CRA-eligible zones for community lending compliance" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                        <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 rounded-lg bg-foreground/5 border border-foreground/20">
                    <p className="text-sm text-foreground font-medium">
                      $600K pilot investment. Measured against pre-agreed KPIs. 90 days of validated credit intelligence.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 2 - Why This Matters (Competitor Table) */}
      <section className="py-20 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">02 — WHY THIS MATTERS</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                CCB's digital lending platform needs a credit intelligence layer.
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Competitors already pre-qualify businesses digitally. CCB's Digital Credit Application on CitiDirect is ready — the intelligence layer completes the picture.
              </p>
              <div className="h-px w-24 bg-primary mx-auto mt-6" />
            </div>

            {/* Competitor Comparison Table */}
            <motion.div {...fadeInUp}>
              <Card className="bg-card border border-border shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px]">
                    <thead>
                      <tr className="border-b border-border bg-primary">
                        <th className="px-2 sm:px-4 py-3 sm:py-4 text-left text-xs font-bold text-primary-foreground uppercase tracking-wider">Bank</th>
                        <th className="px-2 sm:px-4 py-3 sm:py-4 text-left text-xs font-bold text-primary-foreground uppercase tracking-wider">Consumer Credit Layer</th>
                        <th className="px-2 sm:px-4 py-3 sm:py-4 text-left text-xs font-bold text-primary-foreground uppercase tracking-wider">Business Credit Layer</th>
                        <th className="px-2 sm:px-4 py-3 sm:py-4 text-center text-xs font-bold text-primary-foreground uppercase tracking-wider">In-App Prequal</th>
                        <th className="px-2 sm:px-4 py-3 sm:py-4 text-center text-xs font-bold text-primary-foreground uppercase tracking-wider">Predictive Pathways</th>
                      </tr>
                    </thead>
                    <tbody>
                      {competitorData.map((row, idx) => (
                        <tr 
                          key={idx} 
                          className={`border-b border-border ${row.bank === 'Citi' ? 'bg-foreground/5' : idx % 2 === 0 ? 'bg-background-secondary' : 'bg-background'}`}
                        >
                          <td className={`px-2 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-semibold ${row.bank === 'Citi' ? 'text-foreground' : 'text-foreground'}`}>
                            {row.logo && (
                              <img 
                                src={row.logo} 
                                alt={`${row.bank} logo`}
                                className="h-5 sm:h-6 w-auto"
                              />
                            )}
                          </td>
                          <td className="px-2 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm">
                            {row.consumer ? (
                              <span className="text-primary">{row.consumer}</span>
                            ) : (
                              <span className="flex items-center gap-1 text-foreground">
                                <XCircle className="h-3 w-3 sm:h-4 sm:w-4" /> None
                              </span>
                            )}
                          </td>
                          <td className="px-2 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm">
                            {row.business === true ? (
                              <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-foreground" />
                            ) : row.business ? (
                              <span className="text-muted-foreground text-xs">{row.business}</span>
                            ) : (
                              <span className="flex items-center gap-1 text-foreground">
                                <XCircle className="h-3 w-3 sm:h-4 sm:w-4" /> None
                              </span>
                            )}
                          </td>
                          <td className="px-2 sm:px-4 py-3 sm:py-4 text-center">
                            {row.prequal ? (
                              <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-foreground mx-auto" />
                            ) : (
                              <XCircle className="h-3 w-3 sm:h-4 sm:w-4 text-foreground mx-auto" />
                            )}
                          </td>
                          <td className="px-2 sm:px-4 py-3 sm:py-4 text-center">
                            {row.pathways ? (
                              <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-foreground mx-auto" />
                            ) : (
                              <XCircle className="h-3 w-3 sm:h-4 sm:w-4 text-foreground mx-auto" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} className="mt-8">
              <Card className="bg-primary border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <p className="text-primary-foreground text-lg">
                    This pilot positions CCB with <span className="font-bold">83ms digital pre-qualification</span> — complementing CitiDirect's end-to-end Digital Credit Application platform.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 3 - Pilot Scope */}
      <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">03 — PILOT SCOPE</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                What's Included in the Pilot
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Three intelligence modules deployed across CCB's digital lending platform.</p>
              <div className="h-px w-24 bg-primary mx-auto mt-6" />
            </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 1: Digital Lending Intelligence */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="h-full bg-card border border-border overflow-hidden">
                <div className="p-4 bg-primary/10 border-b border-primary/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Zap className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Digital Lending Intelligence</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    Pre-score businesses before they submit Digital Credit Applications on CitiDirect. Revolving credit, term loans, commercial cards, LOC.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Territory analysis across CCB's commercial footprint",
                      "Business pre-scoring by industry, revenue, credit signals",
                      "Product-level eligibility across CCB's full shelf",
                      "Structured JSON signals for Stylus Workspaces"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 2: CitiDirect Pre-Qualification */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="h-full bg-card border border-border overflow-hidden">
                <div className="p-4 bg-primary/10 border-b border-primary/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Target className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">CitiDirect Pre-Qualification</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    83ms full scoring pipeline complements CitiDirect's end-to-end Digital Credit Application. Electronic signatures. Up to $10M per application.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "83ms pre-qualification before submission",
                      "Confidence bands calibrated to CCB thresholds",
                      "Decline-recovery flows tied to Citi policy",
                      "Zero re-keying — data flows directly"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 3: Portfolio Intelligence */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <Card className="h-full bg-card border border-border overflow-hidden">
                <div className="p-4 bg-primary/10 border-b border-primary/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Globe className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Portfolio Intelligence</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    Monitor the CCB portfolio across markets. Cross-border signals aligned with Token Services. Trade finance credit assessment for the $7.75T supercycle.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Cross-sell triggers and early warning signals",
                      "Cross-border eligibility aligned with Token Services",
                      "CRA-eligible zone mapping and community analytics",
                      "Portfolio health dashboards for executive review"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="mt-8">
            <Card className="bg-primary border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <p className="text-primary-foreground text-lg">
                  <span className="font-bold">$600K pilot investment.</span>{" "}
                  <span className="text-primary-foreground/80">Measured against pre-agreed baselines.</span>
                </p>
              </CardContent>
            </Card>
          </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 4 - 90-Day Implementation Plan */}
      <section className="py-20 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">04 — 90-DAY IMPLEMENTATION PLAN</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                From Kickoff to Live Pilot
              </h2>
              <div className="h-px w-24 bg-primary mx-auto" />
            </div>

            {/* Timeline UI */}
            <div className="relative max-w-[1600px] mx-auto">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Phase 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative flex flex-col lg:flex-row gap-6 lg:gap-8 items-start"
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute left-0 w-16 h-16 items-center justify-center z-10">
                    <div className="w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-sm">1</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:ml-24 flex-1 w-full flex justify-center lg:justify-start">
                    <Card className="h-full border border-border bg-card shadow-sm w-full max-w-md lg:max-w-none">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                          <div className="lg:hidden w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm sm:text-base">1</div>
                          <div className="text-center lg:text-left">
                            <h3 className="font-bold text-foreground text-base sm:text-lg">Phase 1</h3>
                            <p className="text-xs sm:text-sm text-primary font-medium">Weeks 0–2</p>
                          </div>
                        </div>
                        <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base text-center lg:text-left">Signal Connection + Validation</h4>
                        <ul className="space-y-2">
                          {[
                            "Connect credit signals (FICO, Intelliscore, FSR) in secure sandbox",
                            "Validate against CCB's underwriting standards",
                            "Configure CitiDirect integration parameters",
                            "Security review + architecture approval",
                            "Risk governance sign-off"
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground">
                              <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>

                {/* Phase 2 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative flex flex-col lg:flex-row gap-6 lg:gap-8 items-start"
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute left-0 w-16 h-16 items-center justify-center z-10">
                    <div className="w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-sm">2</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:ml-24 flex-1 w-full flex justify-center lg:justify-start">
                    <Card className="h-full border border-border bg-card shadow-sm w-full max-w-md lg:max-w-none">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                          <div className="lg:hidden w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm sm:text-base">2</div>
                          <div className="text-center lg:text-left">
                            <h3 className="font-bold text-foreground text-base sm:text-lg">Phase 2</h3>
                            <p className="text-xs sm:text-sm text-primary font-medium">Weeks 3–8</p>
                          </div>
                        </div>
                        <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base text-center lg:text-left">Deploy + Measure</h4>
                        <ul className="space-y-2">
                          {[
                            "Deploy across CCB's digital lending platform",
                            "Track application conversion, cross-sell accuracy, portfolio health",
                            "A/B test pre-qualification vs. manual review",
                            "Weekly performance dashboards for CCB leadership"
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground">
                              <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>

                {/* Phase 3 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative flex flex-col lg:flex-row gap-6 lg:gap-8 items-start"
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute left-0 w-16 h-16 items-center justify-center z-10">
                    <div className="w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-sm">3</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:ml-24 flex-1 w-full flex justify-center lg:justify-start">
                    <Card className="h-full border border-border bg-card shadow-sm w-full max-w-md lg:max-w-none">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                          <div className="lg:hidden w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm sm:text-base">3</div>
                          <div className="text-center lg:text-left">
                            <h3 className="font-bold text-foreground text-base sm:text-lg">Phase 3</h3>
                            <p className="text-xs sm:text-sm text-primary font-medium">Weeks 9–12</p>
                          </div>
                        </div>
                        <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base text-center lg:text-left">Executive Review + Scale Decision</h4>
                        <ul className="space-y-2">
                          {[
                            "Executive review with KPI results vs. pre-agreed baselines",
                            "Scale decision: full CCB integration roadmap",
                            "Stylus Workspaces integration planning",
                            "Cross-border expansion roadmap with Token Services"
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground">
                              <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div {...fadeInUp} className="grid sm:grid-cols-2 gap-4">
              <Card className="bg-card border border-border">
                <CardContent className="p-4 flex items-center gap-4">
                  <Clock className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-sm font-bold text-foreground">18–24 months faster</p>
                    <p className="text-xs text-muted-foreground">than building internally</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border border-border">
                <CardContent className="p-4 flex items-center gap-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-sm font-bold text-foreground">$40M–$70M saved</p>
                    <p className="text-xs text-muted-foreground">in internal engineering cost</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 5 - Risk Controls */}
      <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">05 — RISK CONTROLS SHEET</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                Enterprise Governance Framework
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Designed for Risk, Compliance, AML, Fair Lending, and Legal teams.</p>
              <div className="h-px w-24 bg-primary mx-auto mt-6" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: Target,
                  title: "Underwriting Alignment",
                  items: ["No new approval rules introduced", "Uses Citi's existing product criteria", "All decisioning remains Citi-controlled", "Model explainability logs for every output"]
                },
                {
                  icon: Shield,
                  title: "Credit Risk Governance",
                  items: ["Soft-pull only — no credit impact", "Real-time performance monitoring", "Decline-recovery follows Citi policy"]
                },
                {
                  icon: Users,
                  title: "Fair Lending Compliance",
                  items: ["No demographic inputs", "No proxy inference", "Uniform evaluation across all users", "Full transparency logs for audit"]
                },
                {
                  icon: FileCheck,
                  title: "Model Risk Management",
                  items: ["SR 11-7 aligned", "Model inventory indexing", "Periodic validation cycles", "Conceptual Soundness + Ongoing Monitoring"]
                },
                {
                  icon: Server,
                  title: "Operational Risk",
                  items: ["On-prem / VPC deployment", "No PII leaves Citi's environment", "Audit-ready logs for all system calls"]
                }
              ].map((section, idx) => (
                <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.1 }}>
                  <Card className="h-full bg-card border border-border shadow-sm">
                    <CardContent className="p-4 sm:p-5">
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                          <section.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                        </div>
                        <h3 className="font-bold text-foreground text-xs sm:text-sm">{section.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-foreground">
                            <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeInUp} className="mt-8 space-y-4">
              <Card className="bg-card border border-border shadow-sm">
                <CardContent className="p-5">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">Designed for seamless integration with Citi Stylus Workspaces</span> — Citi's agentic AI platform led by CTO David Griffiths, with 150,000+ employees already using AI tools. LumiqAI's governance-first architecture aligns with Citi's enterprise AI infrastructure strategy.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border border-border shadow-sm">
                <CardContent className="p-5">
                  <h4 className="font-bold text-foreground mb-2">Cross-Border Governance — Token Services + Credit Intelligence</h4>
                  <p className="text-sm text-foreground">
                    Citi Token Services processes billions on private permissioned blockchain across US, UK, Singapore, Hong Kong, and Dublin (Euro). LumiqAI provides credit governance for cross-border lending decisions — every eligibility assessment logged, every cross-border credit signal auditable, aligned with BCBS 239 data lineage standards.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-primary border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <p className="text-primary-foreground">
                    <span className="font-bold">Zero changes to Citi's risk appetite.</span>{" "}
                    <span className="text-primary-foreground/80">Maximum control remains inside the bank. CRA Outstanding compliance maintained.</span>
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 6 - Security Appendix */}
      <section className="py-20 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">06 — SECURITY APPENDIX</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                Enterprise-Grade Security Architecture
              </h2>
              <div className="h-px w-24 bg-primary mx-auto" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
              {[
                { label: "SOC2 Type II", icon: Shield },
                { label: "ISO 27001", icon: FileCheck },
                { label: "PCI DSS Level 1", icon: Lock },
                { label: "AES-256 + TLS 1.3", icon: Key }
              ].map((badge, idx) => (
                <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.1 }}>
                  <Card className="bg-card border border-border">
                    <CardContent className="p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                      <badge.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-foreground">{badge.label}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <Card className="h-full bg-card border border-border">
                  <CardContent className="p-4 sm:p-5">
                    <h3 className="font-bold text-foreground mb-3 sm:mb-4 text-xs sm:text-sm">Data Handling</h3>
                    <ul className="space-y-2">
                      {[
                        "No persistent storage of Citi customer data",
                        "Tokenized session design",
                        "Data isolation by environment",
                        "No cross-tenant commingling"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground">
                          <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Card className="h-full bg-card border border-border">
                  <CardContent className="p-4 sm:p-5">
                    <h3 className="font-bold text-foreground mb-3 sm:mb-4 text-xs sm:text-sm">Permissions & Access</h3>
                    <ul className="space-y-2">
                      {[
                        "Role-based access control",
                        "Just-In-Time credentials",
                        "Principle of Least Privilege",
                        "Immutable audit logs"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground">
                          <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
                <Card className="h-full bg-card border border-border">
                  <CardContent className="p-4 sm:p-5">
                    <h3 className="font-bold text-foreground mb-3 sm:mb-4 text-xs sm:text-sm">Deployment Options</h3>
                    <ul className="space-y-2">
                      {[
                        "Citi-managed Kubernetes",
                        "VPC Peering",
                        "Citi Private Cloud",
                        "On-prem container clusters"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground">
                          <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div {...fadeInUp}>
              <p className="text-center text-sm text-muted-foreground">
                Security posture exceeds internal development standards and reduces attack surface by minimizing custom-coded components.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 7 - Success Metrics */}
      <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">07 — PILOT SUCCESS METRICS</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                What Executives Care About
              </h2>
              <div className="h-px w-24 bg-primary mx-auto" />
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <Card className="h-full border-t-4 border-t-primary bg-card">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      Digital Lending KPIs
                    </h3>
                    <div className="space-y-3">
                      {[
                        { metric: "83ms", label: "Pre-Qualification Time (vs. manual review)" },
                        { metric: "Real-time", label: "Digital Applications Scored/Day (vs. manual queue)" },
                        { metric: "+15-25%", label: "Application conversion lift" },
                        { metric: "70%+", label: "Cross-sell accuracy" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                          <span className="text-sm text-muted-foreground">{item.label}</span>
                          <span className="text-sm font-bold text-foreground">{item.metric}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Card className="h-full border-t-4 border-t-primary bg-card">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-primary" />
                      Portfolio + Cross-Border KPIs
                    </h3>
                    <div className="space-y-3">
                      {[
                        { metric: "90%+", label: "Monitoring enrollment (existing book)" },
                        { metric: "+20-35%", label: "Treasury attach rate improvement" },
                        { metric: "100%", label: "Governance coverage (audit trail)" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                          <span className="text-sm text-muted-foreground">{item.label}</span>
                          <span className="text-sm font-bold text-foreground">{item.metric}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
                <Card className="h-full border-t-4 border-t-primary bg-card">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      Pilot Investment
                    </h3>
                    <div className="space-y-3">
                      {[
                        { metric: "$600K", label: "90-day pilot investment" },
                        { metric: "7", label: "KPIs measured against baselines" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                          <span className="text-sm text-muted-foreground">{item.label}</span>
                          <span className="text-sm font-bold text-foreground">{item.metric}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <p className="text-xs text-foreground font-medium">
                        $600K for 90 days of proof on a platform processing up to $10M per digital credit application. ROI measured against CCB's digital lending conversion baseline.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 8 - Global Scale */}
      <section className="py-20 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">08 — GLOBAL SCALE PATH</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                From CCB Pilot to Global Credit Intelligence Platform
              </h2>
              <div className="h-px w-24 bg-primary mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div {...fadeInUp}>
                <p className="text-lg text-muted-foreground mb-6">
                  After CCB pilot validation, LumiqAI scales across Citi's global commercial lending platform — aligned with Token Services' 24/7 multi-currency infrastructure:
                </p>
                <ul className="space-y-3">
                  {[
                    "Support for TransUnion, Equifax, Experian, CIBIL, CRIF, etc.",
                    "Configurable to local regulatory environments",
                    "Cross-border payment intelligence powered by Citi Token Services — 24/7 multi-currency liquidity with real-time credit decisioning for international SMB transactions",
                    "Multi-product eligibility across regions",
                    "Multi-language UX",
                    "Seamless API replication across markets"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Card className="bg-primary border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <Globe className="h-16 w-16 text-primary-foreground mx-auto mb-4" />
                    <p className="text-primary-foreground text-lg font-bold mb-2">160+ Markets</p>
                    <p className="text-primary-foreground/70 text-sm">
                      Citi can scale this globally — a platform move, not a single feature.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 9 - Final CTA */}
      <section id="pilot-form" className="py-20 md:py-24 lg:py-32 bg-gradient-to-br from-primary via-primary to-primary-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-[1400px] mx-auto">
            <motion.div {...fadeInUp} className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
                Start a 90-Day Pilot Alongside Citi's Digital Lending Rollout
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-4">
                $600,000 Strategic Pilot across CCB's digital lending platform. 83ms pre-qualification on CitiDirect. 7 KPIs measured against pre-agreed baselines.
              </p>
              <p className="text-sm text-primary-foreground/60 max-w-xl mx-auto mb-8">
                Measured against pre-agreed KPIs.
              </p>
              
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Card className="bg-primary-foreground/5 backdrop-blur-sm border-primary-foreground/10 max-w-2xl mx-auto">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <p className="text-primary-foreground text-lg mb-4">
                        To get started, please contact us at:
                      </p>
                      <a 
                        href="mailto:support@futeurcredx.com"
                        className="text-2xl md:text-3xl font-bold text-primary-foreground hover:text-primary-foreground/80 transition-colors inline-block"
                      >
                        support@futeurcredx.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
