import { motion, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield, TrendingUp, CheckCircle2, Target, DollarSign, Zap, ArrowRight, Globe
} from "lucide-react";
import { ImpactChatWidget } from "@/components/ImpactChatWidget";
import { Footer } from "@/components/Footer";
import { ArchitectureFlow } from "@/components/ArchitectureFlow";
import { SevenOutputsExplorer } from "@/components/SevenOutputsExplorer";
import { BeforeAfterTable } from "@/components/BeforeAfterTable";
import { InfrastructureComparison } from "@/components/InfrastructureComparison";
import { ComplianceTrust } from "@/components/ComplianceTrust";
import { CapabilityCards } from "@/components/CapabilityCards";
import { SignalFlowPipeline } from "@/components/SignalFlowPipeline";
import { UnderTheHood } from "@/components/UnderTheHood";

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
                <div className="text-center mb-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">Integration Architecture</span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">How Data Flows Through LumiqAI</h2>
                  <p className="text-base text-muted-foreground text-center max-w-2xl mx-auto">
                    One API call. Four bureau sources orchestrated in parallel. Seven structured outputs in 83 milliseconds.
                  </p>
                </div>

                {/* Animated Architecture Flow Diagram */}
                <ArchitectureFlow />
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 — SEVEN INTELLIGENCE OUTPUTS */}
        <SevenOutputsExplorer />

        {/* SECTION 4 — CAPABILITY CARDS + SIGNAL PIPELINE */}
        <section className="py-16 md:py-24 bg-background-secondary">
          <CapabilityCards />
          <div className="mt-12">
            <SignalFlowPipeline />
          </div>
        </section>

        {/* SECTION 5 — UNDER THE HOOD (interactive tabbed component) */}
        <UnderTheHood />

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

        {/* SECTION 7 — SECURITY & GOVERNANCE (ComplianceTrust is self-contained) */}
        <section id="security" className="py-20 md:py-24 lg:py-32 bg-background-secondary">
          <ComplianceTrust />

          {/* BCBS 239 Link */}
          <div className="container mx-auto px-6 mt-6">
            <div className="max-w-[1400px] mx-auto p-6 md:p-8 rounded-xl bg-primary/5 border border-primary/20 text-center">
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
