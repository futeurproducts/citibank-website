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
  ChevronRight
} from "lucide-react";

export default function CaseStudy() {
  useEffect(() => {
    document.title = "Case Study \u2014 Modernizing Citi\u2019s Credit Funnel";
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
                    Modernizing Citi's Credit Funnel Through{" "}
                    <span className="text-primary">Consumer + SMB</span>{" "}
                    Credit Intelligence
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    A strategic assessment of Citi's credit visibility gap — and how LumiqAI restores approvals, retention, and competitive positioning across both Consumer and Business Banking.
                  </p>
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

        {/* Case Study Summary Strip */}
        <section className="py-12 px-4 sm:px-6 bg-primary/5 border-y border-primary/20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-primary">18%</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Incremental approvals identified</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-primary">Comparable</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Performance to existing approved population</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-primary">Zero</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Underwriting changes — just better signals</div>
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

        {/* Section 1 - Executive Diagnosis */}
        <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
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
                  Citi is now the <span className="font-bold text-primary">only top-4 U.S. bank</span> with neither a consumer nor a business credit-intelligence layer inside its mobile apps. This absence blocks Citi from capturing early credit intent — the most valuable inflection point in the funnel.
                </p>
                <p className="text-xl font-semibold text-destructive">
                  Competitors convert before Citi even appears.
                </p>
                <p className="text-lg text-muted-foreground mt-4">
                  This has become a structural vulnerability affecting consumer cards, SMB lending, digital engagement, and long-term retention.
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
                        <h3 className="font-bold text-lg text-foreground">SMB</h3>
                        <p className="text-muted-foreground text-sm">No business score, no unified Business+PG model, no lending eligibility logic</p>
                      </div>
                      <img 
                        src="/Case Study/Exec Diagnosis/SMB.png" 
                        alt="SMB Credit Intelligence Gap"
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
                          <span className="font-semibold">Business Credit Visibility:</span> SMB customers use <span className="font-bold text-primary">Right Nav</span> to check their business credit scores, where they're intercepted with business lending offers from competitors.
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
                        <p className="text-xs font-semibold text-foreground mb-2">Right Nav (Business)</p>
                        <img 
                          src="/Case Study/Exec Diagnosis/Eco System Risk /Business.PNG" 
                          alt="Ecosystem Risk Business - Right Nav"
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
        <section className="py-20 md:py-24 lg:py-32 bg-background">
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
                            Point of Loss: No Citi Credit Layer
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
        <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">03 — REVENUE LEAKAGE & ECONOMIC IMPACT</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  $900M–$1.6B Lost Annually
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
                          <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground text-center sm:text-right">$600M–$900M/year</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 py-2 sm:py-3 border-b border-border">
                          <span className="text-xs sm:text-sm md:text-base text-foreground text-center sm:text-left">SMB</span>
                          <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground text-center sm:text-right">$300M–$700M/year</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 py-2 sm:py-3">
                          <span className="text-xs sm:text-sm md:text-base font-semibold text-foreground text-center sm:text-left">Total</span>
                          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground text-center sm:text-right">$900M–$1.6B+/year</span>
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
                          <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground text-center sm:text-right">$600M–$900M</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 py-2 sm:py-3 border-b border-border">
                          <span className="text-xs sm:text-sm md:text-base text-foreground text-center sm:text-left">SMB Recovery</span>
                          <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground text-center sm:text-right">$300M–$700M</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 py-2 sm:py-3">
                          <span className="text-xs sm:text-sm md:text-base font-semibold text-foreground text-center sm:text-left">Build Cost Avoided</span>
                          <span className="text-base sm:text-lg md:text-xl font-bold text-foreground text-center sm:text-right">$40M–$70M saved</span>
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
        <section className="py-20 md:py-24 lg:py-32 bg-background">
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
                  { icon: Building2, title: "No SMB Logic" },
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
                      <span className="text-primary-foreground/80">This is an infrastructure gap.</span>
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 5 - Solution Overview */}
        <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">05 — THE SOLUTION</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  LumiqAI's Consumer + SMB Credit Intelligence Layer
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A dual-system engine that rewires Citi's funnel architecture across Consumer and Business Banking.
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

              {/* SMB Module */}
              <motion.div {...fadeInUp}>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="order-2 lg:order-1 bg-card rounded-2xl border border-border p-8 text-center shadow-sm">
                    <img 
                      src="/images/3-phones-business.png" 
                      alt="Citi Business LUMIQ"
                      className="w-full h-auto rounded-lg max-w-2xl mx-auto"
                      loading="lazy"
                    />
                  </div>
                  <div className="order-1 lg:order-2">
                    <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground">B</span>
                      SMB Intelligence Module
                    </h3>
                    <p className="text-muted-foreground mb-6">Delivered inside Citi Business Banking:</p>
                    <ul className="space-y-3">
                      {[
                        "Experian Business Score",
                        "Unified Business + PG model",
                        "Eligibility for TYB, CitiBusiness® AAdvantage & ThankYou®",
                        "Thin-file enhancement (SR 11-7 aligned)",
                        "Predictive loan pathways",
                        "1-tap Apply for qualified SMBs"
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
        <section className="py-20 md:py-24 lg:py-32 bg-background">
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
                          <div className="text-2xl sm:text-3xl font-bold text-foreground">+12–24%</div>
                          <div className="text-sm text-muted-foreground">Approval uplift</div>
                        </div>
                        <div className="text-center sm:text-left">
                          <div className="text-2xl sm:text-3xl font-bold text-foreground">–25–40%</div>
                          <div className="text-sm text-muted-foreground">Manual reviews</div>
                        </div>
                        <div className="text-center sm:text-left">
                          <div className="text-2xl sm:text-3xl font-bold text-foreground">2×–3×</div>
                          <div className="text-sm text-muted-foreground">Engagement</div>
                        </div>
                        <div className="text-center sm:text-left">
                          <div className="text-2xl sm:text-3xl font-bold text-foreground">+5–10%</div>
                          <div className="text-sm text-muted-foreground">CAC-free card conversions</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* SMB Impact */}
                <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex justify-center md:justify-start">
                  <Card className="h-full border-2 border-primary shadow-sm w-full max-w-md md:max-w-none">
                    <CardContent className="p-6 sm:p-8">
                      <h3 className="text-xl font-bold text-primary mb-6 text-center md:text-left">SMB Impact</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="text-center sm:text-left">
                          <div className="text-2xl sm:text-3xl font-bold text-foreground">+18–30%</div>
                          <div className="text-sm text-muted-foreground">Approval uplift</div>
                        </div>
                        <div className="text-center sm:text-left">
                          <div className="text-2xl sm:text-3xl font-bold text-foreground">–35–50%</div>
                          <div className="text-sm text-muted-foreground">Manual review reduction</div>
                        </div>
                        <div className="text-center sm:text-left">
                          <div className="text-2xl sm:text-3xl font-bold text-foreground">+5–12%</div>
                          <div className="text-sm text-muted-foreground">SMB conversion</div>
                        </div>
                        <div className="text-center sm:text-left">
                          <div className="text-2xl sm:text-3xl font-bold text-primary">+$300M–$700M</div>
                          <div className="text-sm text-muted-foreground">Revenue</div>
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
        <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">07 — WHY NOW</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  Why Citi Must Act Now
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
                            <AlertTriangle className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-foreground font-medium">Open banking accelerates intent leakage.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <TrendingUp className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-foreground font-medium">Competitors deepen their funnels.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Zap className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-foreground font-medium">Citi's restructuring demands fast, high-ROI digital modernization.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Clock className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-foreground font-medium">Waiting 12–24 months will make today's gap irreversible.</p>
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
                          <span className="text-foreground">A safe lever for deposit & card growth</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">A differentiated SPCP-compliant credit expansion strategy</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">Regulatory-forward posture (prevents surprises)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">A measurable boost in card conversion without IT lift</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">Portfolio growth in protected demographic clusters</span>
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
                      <p className="text-muted-foreground">December 2025 – March 2026</p>
                    </div>
                    <div className="flex items-center justify-between mb-4 text-xs sm:text-sm">
                      <span className="font-bold text-foreground">Dec 2025</span>
                      <span className="font-bold text-foreground">Jan 2026</span>
                      <span className="font-bold text-foreground">Mar 2026</span>
                    </div>
                    <div className="relative h-6 bg-muted rounded-full overflow-hidden">
                      <div className="absolute left-0 right-0 h-full bg-gradient-to-r from-primary via-primary-light to-primary-dark rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-center">
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-foreground mb-1">Kickoff</div>
                        <div className="text-xs text-muted-foreground">Integration begins</div>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-foreground mb-1">Risk Review</div>
                        <div className="text-xs text-muted-foreground">Compliance approval</div>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-foreground mb-1">Go Live</div>
                        <div className="text-xs text-muted-foreground">Pilot deployment</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 8 - Pilot Framework */}
        <section className="py-20 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">08 — PILOT FRAMEWORK</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  90-Day Controlled Pilot
                </h2>
                <div className="h-px w-24 bg-primary mx-auto" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
                {/* Track 1 */}
                <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                  <Card className="h-full border border-border shadow-sm">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-primary mb-6">Track 1: Consumer</h3>
                      <ul className="space-y-3">
                        {["Score panel", "Prequal API", "Card pathways", "1-tap apply"].map((item, index) => (
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
                      <h3 className="text-xl font-bold text-primary mb-6">Track 2: SMB</h3>
                      <ul className="space-y-3">
                        {["Experian Business Score", "Business+PG model", "Lending eligibility", "Thin-file augmentation"].map((item, index) => (
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
                        <span className="text-foreground">Weekly oversight with Risk, Cards, and Digital</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <BarChart3 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">Real-time dashboarding</span>
                      </div>
                    </div>
                    <div className="mt-6 p-4 rounded-lg bg-primary/20 border border-primary/30">
                      <p className="text-sm text-primary font-medium">
                        Designed to align with ECOA/Reg B SPCP guidelines — written plan, eligibility parameters, explainability documentation.
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
                        { weeks: "1-2", label: "Weeks", desc: "Connect APIs, validate outputs" },
                        { weeks: "3-4", label: "Weeks", desc: "Policy alignment" },
                        { weeks: "5-8", label: "Weeks", desc: "A/B test in-app" },
                        { weeks: "9-12", label: "Weeks", desc: "Review & scale decision" }
                      ].map((item, index) => (
                        <div key={index} className="relative">
                          {index < 3 && (
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
                          <span className="text-xs sm:text-sm text-primary font-bold">1-2</span>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Weeks</p>
                        <p className="text-xs text-muted-foreground/80">Connect APIs, validate outputs</p>
                      </div>
                      <div className="hidden sm:block h-px w-8 sm:w-16 bg-primary/30" />
                      <div className="text-center flex-1">
                        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                          <span className="text-xs sm:text-sm text-primary font-bold">3-4</span>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Weeks</p>
                        <p className="text-xs text-muted-foreground/80">Policy alignment</p>
                      </div>
                      <div className="hidden sm:block h-px w-8 sm:w-16 bg-primary/30" />
                      <div className="text-center flex-1">
                        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                          <span className="text-xs sm:text-sm text-primary font-bold">5-8</span>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Weeks</p>
                        <p className="text-xs text-muted-foreground/80">A/B test in-app</p>
                      </div>
                      <div className="hidden sm:block h-px w-8 sm:w-16 bg-primary/30" />
                      <div className="text-center flex-1">
                        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                          <span className="text-xs sm:text-sm text-primary font-bold">9-12</span>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Weeks</p>
                        <p className="text-xs text-muted-foreground/80">Review & scale decision</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 9 - Strategic Positioning */}
        <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
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
                  No one has built SMB.
                </p>
                <p className="text-xl font-bold text-primary">
                  Citi has first-mover advantage to own the only dual consumer + SMB credit intelligence ecosystem in America.
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
                          <th className="text-center p-2 sm:p-4 text-xs sm:text-sm text-primary-foreground font-semibold">SMB</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { bank: "Chase", logo: "/Case Study/WHy citi wins/chase.svg", consumer: true, smb: false },
                          { bank: "Capital One", logo: "/Case Study/WHy citi wins/Capital_One_logo.svg", consumer: true, smb: false },
                          { bank: "Wells Fargo", logo: "/Case Study/WHy citi wins/wells-fargo-1.svg", consumer: true, smb: false },
                          { bank: "AmEx", logo: "/Case Study/WHy citi wins/amex-3.svg", consumer: true, smb: false },
                          { bank: "Apple", logo: "/Case Study/WHy citi wins/Apple_Card.svg", consumer: true, smb: false },
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
                                <span className="text-xs sm:text-sm font-medium text-foreground">{row.bank}</span>
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
                              {row.smb ? (
                                <CheckCircle2 className="h-4 w-4 sm:h-6 sm:w-6 text-success mx-auto" />
                              ) : (
                                <XCircle className="h-4 w-4 sm:h-6 sm:w-6 text-muted-foreground mx-auto" />
                              )}
                            </td>
                          </tr>
                        ))}
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
        <section className="py-16 md:py-20 px-4 sm:px-6 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <motion.div {...fadeInUp} className="mb-8">
                <h3 className="text-lg font-bold text-foreground mb-4">Sources & References</h3>
                <div className="h-px w-16 bg-primary" />
              </motion.div>

              <motion.div {...fadeInUp}>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>JPMorgan Digital & Credit Journey filings (2017–2023)</li>
                  <li>Capital One CreditWise adoption reports</li>
                  <li>Wells Fargo Business Credit Close-Up product launch & engagement metrics</li>
                  <li>Citi 10-K (consumer and SMB TAM)</li>
                  <li>Experian State of Credit 2023–2024</li>
                  <li>CFPB Open Banking analysis 2023–2024</li>
                  <li>Goldman Sachs filings on Apple Card instant decisioning</li>
                  <li>AmEx risk-triggered credit expansion analysis</li>
                  <li>BlueVine, OnDeck, Shopify Capital origination volumes</li>
                  <li>McKinsey/Bain/Oliver Wyman fintech CAC benchmarks</li>
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
                  Ready to Close Citi's Credit Funnel Gap?
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  Schedule a pilot review to see how LumiqAI deploys consumer + SMB credit intelligence in 90 days.
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
