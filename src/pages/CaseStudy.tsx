import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
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
  Globe
} from "lucide-react";

export default function CaseStudy() {
  useEffect(() => {
    document.title = "LUMIQ AI \u2014 The Commercial Lending Intelligence Gap";
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
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-8 md:pt-12 lg:pt-16 pb-20 md:pb-24 lg:pb-32 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Text Content - Left Side */}
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
                    CITI CASE STUDY · EXECUTIVE EDITION
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-foreground leading-tight">
                    The Missing Intelligence Layer for Citi's{" "}
                    <span className="text-primary">$10M Digital Credit</span>{" "}
                    Applications
                  </h1>
                  <div className="space-y-4 mb-8">
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                      Citi Commercial Bank is digitizing lending — revolving credit, term loans, commercial cards, letters of credit on CitiDirect. The missing layer: pre-qualification intelligence that scores every business before it applies.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      LumiqAI applies credit intelligence across CCB's digital platform — pre-scoring businesses, matching products, and generating compliance documentation, while Citi's Transformation reaches "two-thirds at or near target state."
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      Built for Citi's controls. Integrated with CitiDirect. Aligned with Stylus Workspaces. Ready for the $7.75T trade finance supercycle.
                    </p>
                  </div>

                  {/* Hero Metric Badges */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">+15-25% application conversion lift</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                      <Shield className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">Built for ECOA/FCRA/CRA controls</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                      <DollarSign className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">Up to $10M per digital credit application</span>
                    </div>
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
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hero Stats Strip */}
        <section className="py-12 px-4 sm:px-6 bg-primary/5 border-y border-primary/20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-primary">$10M</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Per digital credit application</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-primary">Outstanding</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">CRA rating, 2nd consecutive</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-primary">$7.75T</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Global capex supercycle</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Context — Recent Citi Moves */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <h2 className="text-2xl font-heading font-bold mb-8 text-foreground">Recent Citi Strategic Context</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-5">
                    <div className="text-xs font-semibold text-primary mb-2">FEB 2026</div>
                    <h3 className="font-semibold text-sm mb-1">Sakana AI Investment</h3>
                    <p className="text-xs text-muted-foreground">Citi's first-ever strategic AI investment. David Griffiths: "AI is infrastructure, not experiment."</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-5">
                    <div className="text-xs font-semibold text-primary mb-2">DEC 2025</div>
                    <h3 className="font-semibold text-sm mb-1">OCC Consent Order Removed</h3>
                    <p className="text-xs text-muted-foreground">Regulators validate Citi's transformation progress. Model governance infrastructure recognized.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-5">
                    <div className="text-xs font-semibold text-primary mb-2">NOV 2025</div>
                    <h3 className="font-semibold text-sm mb-1">Citi Token Services Expansion</h3>
                    <p className="text-xs text-muted-foreground">Euro integration, 24/7 multi-currency liquidity. Real-time cross-border payment rails.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-5">
                    <div className="text-xs font-semibold text-primary mb-2">OCT 2025</div>
                    <h3 className="font-semibold text-sm mb-1">Jane Fraser — Board Chair</h3>
                    <p className="text-xs text-muted-foreground">Leadership stability confirmed. Transformation mandate continues with full board alignment.</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Citi Transformation Blueprint Timeline */}
        <section className="py-20 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">THE BLUEPRINT</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  The Citi Transformation Blueprint
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Three inflection points that created the opportunity for credit intelligence.
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
                          <p className="text-muted-foreground">Jane Fraser launches Citi Transformation — simplifying the organization, modernizing infrastructure, and setting the stage for AI-first operations.</p>
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
                          <h3 className="font-bold text-lg text-foreground mb-2">CCB Digital Credit Application</h3>
                          <p className="text-muted-foreground">CCB launches Digital Credit Application on CitiDirect — revolving credit, term loans, commercial cards, LOC. Up to $10M per application with electronic signatures.</p>
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
                    Sources: CCB Digitizes Lending (Jun 25, 2025), Jane Fraser Board Chair (Oct 22, 2025)
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SMB / Market Stats */}
        <section className="py-12 px-4 sm:px-6 bg-primary/5 border-y border-primary/20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-primary">Up to $10M</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">CCB digital credit applications each</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-primary">$7.75T</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Global capex supercycle by 2030</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-primary">$145.9B</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">CRA-allocated activity</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5-Thread Business Case */}
        <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">THE 5-THREAD BUSINESS CASE</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  How LumiqAI Serves Each of Citi's 5 Strategic Priorities
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Citi is executing a 5-front transformation. LumiqAI is the credit intelligence layer that connects all five.
                </p>
                <div className="h-px w-24 bg-primary mx-auto mt-6" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3">
                {[
                  {
                    icon: Brain,
                    thread: "AI-First",
                    initiative: "Stylus Workspaces / Sakana",
                    lumiqRole: "Credit signals for AI workflows",
                    impact: "Structured JSON intelligence consumed natively by Stylus agentic AI",
                    source: "Stylus Workspaces (Sep 2025), Sakana AI (Feb 2026)"
                  },
                  {
                    icon: CreditCard,
                    thread: "Digital Lending",
                    initiative: "CCB / CitiDirect",
                    lumiqRole: "Pre-qualify before apply",
                    impact: "+15-25% application conversion lift across revolving credit, term loans, commercial cards, LOC",
                    source: "CCB Digitizes Lending (Jun 2025)"
                  },
                  {
                    icon: Globe,
                    thread: "Cross-Border",
                    initiative: "Token Services / Coinbase",
                    lumiqRole: "Cross-border eligibility scoring",
                    impact: "Credit assessment aligned with 24/7 multi-currency liquidity across 94 markets",
                    source: "Token Services Euro (Nov 2025)"
                  },
                  {
                    icon: BarChart3,
                    thread: "Trade Finance",
                    initiative: "$7.75T Supercycle",
                    lumiqRole: "Supply chain credit scoring",
                    impact: "Trade finance credit assessment at scale for the global capex supercycle",
                    source: "Supply Chain Report (Feb 2026)"
                  },
                  {
                    icon: Building2,
                    thread: "Community Impact",
                    initiative: "$60B Housing / CRA",
                    lumiqRole: "SPCP zones + CRA analytics",
                    impact: "CRA-compliant community lending analytics aligned with $145.9B allocated activity",
                    source: "CRA Outstanding (2025)"
                  }
                ].map((item, index) => (
                  <motion.div key={index} {...fadeInUp} transition={{ delay: index * 0.1 }}>
                    <Card className="h-full border border-primary/20 shadow-sm hover:shadow-md transition-all hover:border-primary/40">
                      <CardContent className="p-5 space-y-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-primary uppercase tracking-wide">{item.thread}</div>
                          <h3 className="font-bold text-sm text-foreground mt-1">{item.initiative}</h3>
                        </div>
                        <div className="h-px w-full bg-primary/10" />
                        <div>
                          <p className="text-xs font-semibold text-foreground mb-1">LumiqAI Role:</p>
                          <p className="text-xs text-primary font-medium">{item.lumiqRole}</p>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.impact}</p>
                        <p className="text-[10px] text-muted-foreground/60 italic">{item.source}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 1 - Executive Diagnosis */}
        <section className="py-20 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">01 — EXECUTIVE DIAGNOSIS</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  Executive Diagnosis
                </h2>
                <div className="h-px w-24 bg-primary mx-auto" />
              </div>

              <motion.div {...fadeInUp} className="mb-12 text-center max-w-4xl mx-auto">
                <p className="text-xl text-foreground leading-relaxed mb-6">
                  Citi is now the <span className="font-bold text-primary">only top-4 U.S. bank</span> with neither a consumer nor a business credit-intelligence layer inside its digital platforms. This absence blocks Citi from capturing early credit intent — the most valuable inflection point in the funnel.
                </p>
                <p className="text-xl font-semibold text-destructive">
                  Competitors convert before Citi even appears.
                </p>
                <p className="text-lg text-muted-foreground mt-4">
                  This has become a structural vulnerability affecting consumer cards, commercial lending, digital engagement, and long-term retention — while CCB's new Digital Credit Application platform creates the perfect integration point.
                </p>
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

        {/* Section 2 - Competitive Consequence */}
        <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">02 — COMPETITIVE CONSEQUENCE</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  How Citi Loses the Customer Before the Application Begins
                </h2>
                <div className="h-px w-24 bg-primary mx-auto" />
              </div>

              <motion.div {...fadeInUp} className="mb-12 text-center max-w-4xl mx-auto">
                <p className="text-xl text-foreground leading-relaxed mb-4">
                  Citi's customers must leave Citi's ecosystem to check their credit score. The moment they do, Chase, AmEx, Capital One, Apple Card, and fintech lenders intercept them with prequalification offers.
                </p>
                <p className="text-xl font-bold text-foreground">
                  This creates silent funnel amputation: Citi never sees the demand signal.
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
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-0 w-16 h-16 items-center justify-center z-10">
                      <div className="w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-primary-foreground font-bold text-sm">1</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
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
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-0 w-16 h-16 items-center justify-center z-10">
                      <div className="w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-primary-foreground font-bold text-sm">2</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
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
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-0 w-16 h-16 items-center justify-center z-10">
                      <div className="w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-primary-foreground font-bold text-sm">3</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
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
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-0 w-16 h-16 items-center justify-center z-10">
                      <div className="w-16 h-16 rounded-full bg-background border-4 border-foreground flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                          <span className="text-background font-bold text-sm">4</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
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

        {/* Section 3 - Revenue Leakage */}
        <section className="py-20 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">03 — REVENUE LEAKAGE & ECONOMIC IMPACT</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  $900M-$1.6B Lost Annually
                </h2>
                <div className="h-px w-24 bg-primary mx-auto" />
              </div>

              <motion.div {...fadeInUp} className="mb-8 text-center max-w-3xl mx-auto">
                <p className="text-lg text-muted-foreground">
                  Based on benchmarking against Chase Credit Journey, Capital One CreditWise, and Wells Fargo Close-Up — and applying Citi's TAM:
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8">
                <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="flex justify-center md:justify-start">
                  <Card className="h-full bg-card border border-border shadow-sm w-full max-w-md md:max-w-none">
                    <CardContent className="p-4 sm:p-6 md:p-8">
                      <div className="text-xs sm:text-sm font-bold text-foreground tracking-wider mb-3 sm:mb-4 uppercase text-center md:text-left">LEAKAGE TODAY</div>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 py-2 sm:py-3 border-b border-border">
                          <span className="text-xs sm:text-sm md:text-base text-foreground text-center sm:text-left">Consumer</span>
                          <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground text-center sm:text-right">$600M-$900M/year</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 py-2 sm:py-3 border-b border-border">
                          <span className="text-xs sm:text-sm md:text-base text-foreground text-center sm:text-left">Commercial / SMB</span>
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
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 py-2 sm:py-3">
                          <span className="text-xs sm:text-sm md:text-base font-semibold text-foreground text-center sm:text-left">Build Cost Avoided</span>
                          <span className="text-base sm:text-lg md:text-xl font-bold text-foreground text-center sm:text-right">$40M-$70M saved</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div {...fadeInUp} className="text-center">
                <p className="text-sm text-muted-foreground italic">
                  Sources: JPMC filings, Capital One annual reports, Experian 2024 Credit Trends, Wells Fargo digital engagement data, Citi 10-K TAM.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 4 - Root Cause Analysis */}
        <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">04 — ROOT CAUSE ANALYSIS</div>
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
                    <p className="text-primary-foreground text-lg">
                      <span className="font-bold">This is not a feature gap.</span>{" "}
                      <span className="text-primary-foreground/80">This is an infrastructure gap — and CCB's Digital Credit Application is the integration point.</span>
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 5 - Solution Overview */}
        <section className="py-20 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">05 — THE SOLUTION</div>
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
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 6 - Economic Impact Model */}
        <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">06 — ECONOMIC IMPACT MODEL</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  What Citi Gains
                </h2>
                <div className="h-px w-24 bg-primary mx-auto" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Consumer Impact */}
                <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="flex justify-center md:justify-start">
                  <Card className="h-full border-2 border-primary shadow-sm w-full max-w-md md:max-w-none">
                    <CardContent className="p-6 sm:p-8">
                      <h3 className="text-xl font-bold text-primary mb-6 text-center md:text-left">Consumer Impact</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="text-center sm:text-left">
                          <div className="text-2xl sm:text-3xl font-bold text-foreground">+12-24%</div>
                          <div className="text-sm text-muted-foreground">Approval uplift</div>
                        </div>
                        <div className="text-center sm:text-left">
                          <div className="text-2xl sm:text-3xl font-bold text-foreground">-25-40%</div>
                          <div className="text-sm text-muted-foreground">Manual reviews</div>
                        </div>
                        <div className="text-center sm:text-left">
                          <div className="text-2xl sm:text-3xl font-bold text-foreground">2x-3x</div>
                          <div className="text-sm text-muted-foreground">Engagement</div>
                        </div>
                        <div className="text-center sm:text-left">
                          <div className="text-2xl sm:text-3xl font-bold text-foreground">+5-10%</div>
                          <div className="text-sm text-muted-foreground">CAC-free card conversions</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Commercial Impact */}
                <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex justify-center md:justify-start">
                  <Card className="h-full border-2 border-primary shadow-sm w-full max-w-md md:max-w-none">
                    <CardContent className="p-6 sm:p-8">
                      <h3 className="text-xl font-bold text-primary mb-6 text-center md:text-left">Commercial Impact</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="text-center sm:text-left">
                          <div className="text-2xl sm:text-3xl font-bold text-foreground">+15-25%</div>
                          <div className="text-sm text-muted-foreground">Application conversion lift</div>
                        </div>
                        <div className="text-center sm:text-left">
                          <div className="text-2xl sm:text-3xl font-bold text-foreground">83ms</div>
                          <div className="text-sm text-muted-foreground">Pre-qualification on CitiDirect</div>
                        </div>
                        <div className="text-center sm:text-left">
                          <div className="text-2xl sm:text-3xl font-bold text-foreground">$10M</div>
                          <div className="text-sm text-muted-foreground">Per digital credit application</div>
                        </div>
                        <div className="text-center sm:text-left">
                          <div className="text-2xl sm:text-3xl font-bold text-primary">+$300M-$700M</div>
                          <div className="text-sm text-muted-foreground">Revenue recovery</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 7 - Why Now */}
        <section className="py-20 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">07 — WHY NOW</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  Why Citi Must Act Now — The 5-Front Convergence
                </h2>
                <div className="h-px w-24 bg-primary mx-auto" />
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {/* Left Column - Urgency Factors */}
                <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                  <Card className="h-full border border-border shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-primary" />
                        The Urgency
                      </h3>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Brain className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-foreground font-medium">Stylus Workspaces is rolling out to thousands — it needs credit signals to consume.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CreditCard className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-foreground font-medium">CCB's Digital Credit Application is live on CitiDirect — the integration point exists now.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <TrendingUp className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-foreground font-medium">$7.75T capex supercycle creates unprecedented trade finance credit demand.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Clock className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-foreground font-medium">Competitors deepen their funnels while Citi's transformation creates the window.</p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Right Column - What This Means */}
                <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                  <Card className="h-full border border-border shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5" />
                        What This Means for Citi in 2026
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">Credit intelligence as a native Stylus Workspaces module</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">Pre-qualification on CitiDirect's Digital Credit Application</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">Cross-border eligibility scoring aligned with Token Services</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">CRA-compliant community lending with Outstanding rating maintained</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">The only dual consumer + commercial credit intelligence ecosystem in America</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Timeline - Full Width */}
              <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
                <Card className="bg-card border border-border shadow-lg overflow-hidden">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">Window of Opportunity</h3>
                      <p className="text-muted-foreground">Q1-Q2 2026 — While Transformation programs converge</p>
                    </div>
                    <div className="flex items-center justify-between mb-4 text-xs sm:text-sm">
                      <span className="font-bold text-foreground">Q1 2026</span>
                      <span className="font-bold text-foreground">Q2 2026</span>
                      <span className="font-bold text-foreground">Q3 2026</span>
                    </div>
                    <div className="relative h-6 bg-muted rounded-full overflow-hidden">
                      <div className="absolute left-0 right-0 h-full bg-gradient-to-r from-primary via-primary-light to-primary-dark rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-center">
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-foreground mb-1">Pilot Kickoff</div>
                        <div className="text-xs text-muted-foreground">CitiDirect integration begins</div>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-foreground mb-1">Risk Review</div>
                        <div className="text-xs text-muted-foreground">Compliance + Stylus alignment</div>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-foreground mb-1">Go Live</div>
                        <div className="text-xs text-muted-foreground">Full CCB deployment decision</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 8 - Pilot Framework */}
        <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">08 — PILOT FRAMEWORK</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  90-Day Credit Intelligence Pilot
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  $600K pilot investment. Measured against pre-agreed KPIs.
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

              {/* Pilot Timeline */}
              <motion.div {...fadeInUp} className="mt-8">
                <Card className="bg-card border border-border shadow-sm">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <h4 className="text-base sm:text-lg font-bold text-foreground mb-4 sm:mb-6 text-center">Pilot Timeline</h4>

                    {/* Mobile: Vertical Timeline */}
                    <div className="sm:hidden space-y-6">
                      {[
                        { weeks: "0-2", label: "Weeks", desc: "Connect credit signals (FICO, Intelliscore, FSR). Validate against CCB underwriting. Configure CitiDirect integration." },
                        { weeks: "3-8", label: "Weeks", desc: "Deploy across CCB digital lending. Track conversion, cross-sell accuracy, portfolio health. A/B test pre-qualification vs. manual." },
                        { weeks: "9-12", label: "Weeks", desc: "Executive review with KPI results. Scale decision. Full CCB integration roadmap including Stylus and cross-border." }
                      ].map((item, index) => (
                        <div key={index} className="relative">
                          {index < 2 && (
                            <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-primary/20" />
                          )}
                          <div className="flex items-start gap-4">
                            <div className="h-10 w-10 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center flex-shrink-0 relative z-10">
                              <span className="text-xs text-primary font-bold">{item.weeks}</span>
                            </div>
                            <div className="flex-1 pt-1">
                              <p className="text-xs font-semibold text-foreground mb-1">{item.label}</p>
                              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Desktop: Horizontal Timeline */}
                    <div className="hidden sm:flex flex-row justify-between items-start md:items-center gap-4">
                      <div className="text-center flex-1">
                        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                          <span className="text-xs sm:text-sm text-primary font-bold">0-2</span>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Weeks</p>
                        <p className="text-xs text-muted-foreground/80">Connect signals, validate against CCB underwriting</p>
                      </div>
                      <div className="hidden sm:block h-px w-8 sm:w-16 bg-primary/30" />
                      <div className="text-center flex-1">
                        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                          <span className="text-xs sm:text-sm text-primary font-bold">3-8</span>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Weeks</p>
                        <p className="text-xs text-muted-foreground/80">Deploy on CitiDirect, A/B test pre-qualification</p>
                      </div>
                      <div className="hidden sm:block h-px w-8 sm:w-16 bg-primary/30" />
                      <div className="text-center flex-1">
                        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                          <span className="text-xs sm:text-sm text-primary font-bold">9-12</span>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Weeks</p>
                        <p className="text-xs text-muted-foreground/80">Executive review, scale decision, Stylus roadmap</p>
                      </div>
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
                      Measured against pre-agreed baselines. 90 days of validated results.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 9 - Strategic Positioning */}
        <section className="py-20 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">09 — STRATEGIC POSITIONING</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  Why Citi Wins: The First Dual-Layer Credit Intelligence Bank
                </h2>
                <div className="h-px w-24 bg-primary mx-auto" />
              </div>

              <motion.div {...fadeInUp} className="mb-12 text-center max-w-3xl mx-auto">
                <p className="text-lg text-foreground mb-6">
                  Chase built consumer. Capital One built consumer. Wells Fargo built consumer. AmEx built consumer. Apple built consumer.
                </p>
                <p className="text-xl font-bold text-destructive mb-4">
                  No one has built commercial.
                </p>
                <p className="text-xl font-bold text-primary">
                  Citi has first-mover advantage to own the only dual consumer + commercial credit intelligence ecosystem in America — powered by CitiDirect, aligned with Stylus Workspaces, and ready for the $7.75T supercycle.
                </p>
              </motion.div>

              {/* Competitor Logos */}
              <motion.div {...fadeInUp} className="mb-12">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
                  {[
                    { name: "Chase", logo: "/Case Study/WHy citi wins/chase.svg" },
                    { name: "Capital One", logo: "/Case Study/WHy citi wins/Capital_One_logo.svg" },
                    { name: "Wells Fargo", logo: "/Case Study/WHy citi wins/wells-fargo-1.svg" },
                    { name: "AmEx", logo: "/Case Study/WHy citi wins/amex-3.svg" },
                    { name: "Apple", logo: "/Case Study/WHy citi wins/Apple_Card.svg" },
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-20 h-12 rounded-xl bg-card border border-border flex items-center justify-center p-2 mb-2">
                        <img src={item.logo} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                      <span className="text-xs text-muted-foreground">{item.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Competitor Comparison */}
              <motion.div {...fadeInUp}>
                <Card className="border-2 border-primary overflow-hidden shadow-sm">
                  <CardContent className="p-0">
                    <div className="w-full overflow-x-auto">
                      <table className="w-full min-w-[320px]">
                      <thead className="bg-primary">
                        <tr>
                          <th className="text-left p-2 sm:p-4 text-xs sm:text-sm text-primary-foreground font-semibold">Bank</th>
                          <th className="text-center p-2 sm:p-4 text-xs sm:text-sm text-primary-foreground font-semibold">Consumer</th>
                          <th className="text-center p-2 sm:p-4 text-xs sm:text-sm text-primary-foreground font-semibold">Commercial</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { bank: "Chase", product: "Credit Journey", logo: "/Case Study/WHy citi wins/chase.svg", consumer: true, commercial: false },
                          { bank: "Capital One", product: "CreditWise", logo: "/Case Study/WHy citi wins/Capital_One_logo.svg", consumer: true, commercial: false },
                          { bank: "Wells Fargo", product: "Close-Up", logo: "/Case Study/WHy citi wins/wells-fargo-1.svg", consumer: true, commercial: false },
                          { bank: "AmEx", product: "MyCredit Guide", logo: "/Case Study/WHy citi wins/amex-3.svg", consumer: true, commercial: false },
                          { bank: "Apple", product: "Apple Card", logo: "/Case Study/WHy citi wins/Apple_Card.svg", consumer: true, commercial: false },
                        ].map((row, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-background-secondary" : "bg-background"}>
                            <td className="p-2 sm:p-4">
                              <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-8 h-6 sm:w-12 sm:h-8 flex items-center justify-center flex-shrink-0">
                                  <img
                                    src={row.logo}
                                    alt={row.bank}
                                    className="h-4 sm:h-6 w-auto object-contain"
                                  />
                                </div>
                                <div>
                                  <span className="text-xs sm:text-sm font-medium text-foreground">{row.bank}</span>
                                  <span className="text-[10px] sm:text-xs text-muted-foreground block">{row.product}</span>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 sm:p-4 text-center">
                              {row.consumer ? (
                                <CheckCircle2 className="h-4 w-4 sm:h-6 sm:w-6 text-success mx-auto" />
                              ) : (
                                <XCircle className="h-4 w-4 sm:h-6 sm:w-6 text-muted-foreground mx-auto" />
                              )}
                            </td>
                            <td className="p-2 sm:p-4 text-center">
                              {row.commercial ? (
                                <CheckCircle2 className="h-4 w-4 sm:h-6 sm:w-6 text-success mx-auto" />
                              ) : (
                                <XCircle className="h-4 w-4 sm:h-6 sm:w-6 text-muted-foreground mx-auto" />
                              )}
                            </td>
                          </tr>
                        ))}
                        {/* Citi row - showing the gap */}
                        <tr className="bg-destructive/5 border-t border-destructive/20">
                          <td className="p-2 sm:p-4 text-xs sm:text-sm font-medium text-destructive">Citi (Today)</td>
                          <td className="p-2 sm:p-4 text-center">
                            <XCircle className="h-4 w-4 sm:h-6 sm:w-6 text-destructive mx-auto" />
                          </td>
                          <td className="p-2 sm:p-4 text-center">
                            <XCircle className="h-4 w-4 sm:h-6 sm:w-6 text-destructive mx-auto" />
                          </td>
                        </tr>
                        {/* Citi + LumiqAI row */}
                        <tr className="bg-primary/10 border-t-2 border-primary">
                          <td className="p-2 sm:p-4 text-xs sm:text-sm font-bold text-primary">Citi + LumiqAI</td>
                          <td className="p-2 sm:p-4 text-center">
                            <CheckCircle2 className="h-4 w-4 sm:h-6 sm:w-6 text-primary mx-auto" />
                          </td>
                          <td className="p-2 sm:p-4 text-center">
                            <CheckCircle2 className="h-4 w-4 sm:h-6 sm:w-6 text-primary mx-auto" />
                          </td>
                        </tr>
                      </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
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
                  <li>CCB Digitizes Lending on CitiDirect (Jun 25, 2025)</li>
                  <li>Jane Fraser Elected Board Chair (Oct 22, 2025)</li>
                  <li>Stylus Workspaces — Agentic AI Platform (Sep 22, 2025)</li>
                  <li>Sakana AI Investment (Feb 24, 2026)</li>
                  <li>Citi Token Services Euro Expansion (Nov 2025)</li>
                  <li>Supply Chain Finance Report — $7.75T Supercycle (Feb 20, 2026)</li>
                  <li>CRA Outstanding Rating — $145.9B Allocated Activity (2025)</li>
                  <li>OCC Consent Order Removal (Dec 2025)</li>
                  <li>Chase Credit Journey filings (2017-2023)</li>
                  <li>Capital One CreditWise adoption reports</li>
                  <li>Wells Fargo Business Credit Close-Up engagement metrics</li>
                  <li>Citi 10-K (consumer and commercial TAM)</li>
                  <li>Experian State of Credit 2023-2024</li>
                  <li>CFPB Open Banking analysis 2023-2024</li>
                </ol>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-primary via-primary to-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div {...fadeInUp}>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                  Ready to Close Citi's Credit Intelligence Gap?
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  Schedule a pilot review to see how LumiqAI deploys consumer + commercial credit intelligence across CitiDirect in 90 days.
                </p>
                <Button
                  size="lg"
                  className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-bold px-8 py-6 text-lg"
                  asChild
                >
                  <Link to="/pilot#pilot-form">
                    Book Pilot Review
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
