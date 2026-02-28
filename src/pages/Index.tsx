import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Shield, Zap, TrendingUp, Database, Lock, GitBranch, CloudCog, FileCheck, Users, ArrowRight, BarChart3, Info, Download, Briefcase, UserCheck, Target, LineChart as LineChartIcon, AlertTriangle, Upload, ImageIcon, DollarSign, Clock } from "lucide-react";
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
    document.title = "LUMIQ AI \u00d7 Citi \u2014 Cross-Border Credit Intelligence";
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

      <BankComparison />
      <StrategicBridge />

      {/* Citi Dual-Engine Hero Section */}
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
                    <div className="text-muted-foreground"><span className="text-secondary font-semibold">+18–25%</span> consumer approvals</div>
                    <div className="text-muted-foreground"><span className="text-secondary font-semibold">30–50%</span> more organic apps</div>
                    <div className="text-muted-foreground"><span className="text-secondary font-semibold">$300M–$500M</span> recovered revenue</div>
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
                    <div className="text-muted-foreground"><span className="text-primary font-semibold">+20–30%</span> SMB approvals</div>
                    <div className="text-muted-foreground"><span className="text-primary font-semibold">25–40%</span> fewer manual reviews</div>
                    <div className="text-muted-foreground"><span className="text-primary font-semibold">$300M–$700M</span> incremental revenue</div>
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

      {/* Section 4: THE COMPETITIVE COST */}
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
                        <span className="text-muted-foreground ml-2">CreditWise → funnel dominance</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-20 h-12 rounded-xl bg-card border border-border flex items-center justify-center flex-shrink-0 p-2">
                        <img src="/The Compet Cost/wells-fargo.svg" alt="Wells Fargo" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <span className="text-foreground font-semibold">Wells Fargo:</span>
                        <span className="text-muted-foreground ml-2">Close-Up → SMB activation</span>
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
                      <span className="text-2xl sm:text-2xl font-bold text-primary">$600M–$900M</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-0 border-b border-border pb-4">
                      <span className="text-muted-foreground font-medium">Business:</span>
                      <span className="text-2xl sm:text-2xl font-bold text-primary">$300M–$700M</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-0 pt-2">
                      <span className="text-foreground font-bold text-lg">Total:</span>
                      <span className="text-3xl sm:text-3xl font-bold text-primary">$900M–$1.6B lost annually</span>
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

      {/* Section 5: THE IMPACT - WHAT CITI GAINS */}
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
                      <span className="text-foreground"><span className="font-semibold text-success">+12–24%</span> approval lift</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <span className="text-foreground"><span className="font-semibold text-success">+25–40%</span> fewer manual reviews</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <span className="text-foreground"><span className="font-semibold text-success">2–3×</span> engagement</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <span className="text-foreground"><span className="font-semibold text-success">+5–10%</span> card conversions</span>
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
                      <span className="text-foreground"><span className="font-semibold text-success">+18–30%</span> approval lift</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <span className="text-foreground"><span className="font-semibold text-success">+35–50%</span> fewer manual reviews</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <span className="text-foreground"><span className="font-semibold text-success">+5–12%</span> SMB conversions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <span className="text-foreground"><span className="font-semibold text-success">+$300M–$700M</span> uplift</span>
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
                      <span className="text-foreground"><span className="font-semibold text-primary">+$900M–$1.6B</span> annual uplift</span>
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
                      <span className="text-foreground">Save <span className="font-semibold text-secondary">$40M–$70M</span> in build cost</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <span className="text-foreground">Save <span className="font-semibold text-secondary">18–24 months</span> of internal development</span>
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
              <div className="text-4xl font-bold text-primary mb-2">15→0 Days</div>
              <div className="text-sm font-semibold text-foreground mb-2">Digital Credit Application</div>
              <p className="text-sm text-muted-foreground">Current 15-day approval cycle reduced to same-day with AI-powered multi-bureau orchestration across domestic and international bureaus.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
              Install the Credit Intelligence Layer in 90 Days
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Non-disruptive integration. Measurable results. Built on proven principles.
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

