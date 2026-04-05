import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Database,
  Globe,
  BarChart3,
  Shield,
  Cpu,
  Users,
  Scale,
  ExternalLink,
  TrendingUp,
  Lightbulb,
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";

const teamMembers = [
  {
    initials: "SK",
    name: "Sean K.",
    role: "CEO & Founder",
    description:
      "10+ years in enterprise fintech and credit infrastructure. Built lending platforms processing $2B+ in annual originations.",
  },
  {
    initials: "EL",
    name: "Engineering Leadership",
    role: "Platform Architecture",
    description:
      "Former bank technology team leads. Built real-time scoring systems at scale across regulated financial institutions.",
  },
  {
    initials: "RC",
    name: "Risk & Compliance",
    role: "Regulatory Frameworks",
    description:
      "Regulatory experience across OCC, FRB, FDIC frameworks. SR 11-7 model risk management and ECOA/CRA compliance.",
  },
];

function About() {
  useEffect(() => {
    document.title =
      "LUMIQ AI — The Team Behind 83ms Credit Decisions";
  }, []);

  return (
    <PageLayout>
      {/* SECTION 1 — Hero */}
      <HeroBackground>
        <div className="flex flex-col items-start max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white text-xs sm:text-sm font-medium mb-5 sm:mb-6"
          >
            <Shield className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={2.5} />
            About LUMIQ AI
          </motion.div>

          <h1 className="font-heading text-[32px] sm:text-[40px] md:text-[44px] lg:text-[52px] xl:text-[68px] 2xl:text-[76px] font-bold mb-6 sm:mb-8 leading-[1.1] text-white">
            The Team Behind 83ms Credit Decisions
          </h1>

          <p className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-white/95 mb-4 sm:mb-5 leading-relaxed font-semibold max-w-2xl">
            We built the credit intelligence layer that top-4 banks need but
            haven't built internally. Enterprise-grade. Regulator-ready.
            Deployable in 90 days.
          </p>

          <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg text-white/80 mb-8 sm:mb-12 leading-relaxed max-w-2xl">
            FuteurCredX builds LumiqAI — an enterprise credit intelligence API
            that delivers 7 risk signals in 83ms through 4-bureau orchestration.
            We serve banks modernizing commercial lending with real-time
            pre-qualification, cross-border eligibility scoring, and
            CRA-compliant analytics.
          </p>
        </div>
      </HeroBackground>

      {/* SECTION 2 — Why We Exist */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-[36px] md:text-[48px] font-bold mb-4 text-foreground">
              Why We Exist
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Commercial banks are digitizing lending. Applications are online.
              Signatures are electronic. But the credit decision itself still
              takes days or weeks. We built LumiqAI to make that decision happen
              in 83 milliseconds.
            </p>
          </motion.div>

          {/* Three Blocks */}
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border-l-4 border-l-primary">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <Cpu
                      className="w-7 h-7 text-primary"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    What We Build
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Enterprise credit intelligence APIs. 4-bureau orchestration
                    delivering 7 structured outputs per query. Built to SR 11-7
                    model risk management standards. Every score explainable,
                    every decision auditable.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full border-l-4 border-l-secondary">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-6">
                    <Users
                      className="w-7 h-7 text-secondary"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Who We Serve
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Top-4 commercial banks processing $10M+ applications.
                    CRA/ECOA-compliant decisioning for domestic portfolios.
                    Cross-border eligibility scoring across 94 markets and
                    multiple currencies.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full border-l-4 border-l-primary">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <Scale
                      className="w-7 h-7 text-primary"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    How We're Different
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Your rules, your thresholds, your risk appetite — scored in
                    83ms. Not a black-box model. Not a generic score. A
                    configurable credit intelligence engine that operates within
                    your existing risk framework.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* SECTION 3 — Cost Comparison Statement (replaces self-quote) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8 sm:p-10">
                <p className="text-lg sm:text-xl text-foreground leading-relaxed text-center font-medium">
                  The average enterprise bank spends 18-24 months and $40M-$70M
                  building credit intelligence internally. LumiqAI deploys in 90
                  days for $600K.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — Our Team */}
      <section className="py-16 md:py-24 bg-background-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-[36px] md:text-[48px] font-bold mb-4 text-foreground">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Founded by enterprise credit infrastructure veterans with
              experience across top-4 banks and regulated fintechs.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-primary">
                          {member.initials}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-foreground leading-tight">
                          {member.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — What We Deliver */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-[36px] md:text-[48px] font-bold mb-4 text-foreground">
              What We Deliver
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Three capabilities. Measurable outcomes. Deployed within your
              existing infrastructure.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                    <Database
                      className="w-6 h-6 text-primary"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Digital Pre-Qualification
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Pre-score every commercial credit application before
                    submission. Owner FICO, business credit, and behavioral
                    signals unified in a single API call.
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    83ms scoring. Up to $10M per application.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-5">
                    <Globe
                      className="w-6 h-6 text-secondary"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Cross-Border Intelligence
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Portfolio monitoring, cross-sell signals, and eligibility
                    scoring aligned with multi-currency clearing networks. Early
                    warning for exposure concentration.
                  </p>
                  <p className="text-sm font-semibold text-secondary">
                    94 markets. Multi-currency. Early warning.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                    <BarChart3
                      className="w-6 h-6 text-primary"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    CRA & Community Analytics
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    SPCP-compliant zone mapping. CRA-supportive credit
                    intelligence for community lending decisions.
                    Branch-level impact measurement.
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    SPCP zone mapping. Branch-level dashboards.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Platform & Resources */}
      <section className="py-16 md:py-24 bg-background-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-[36px] md:text-[48px] font-bold mb-4 text-foreground">
              Platform & Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade infrastructure backed by comprehensive technical
              documentation and integration support.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full flex flex-col">
                <CardContent className="p-6 sm:p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    LUMIQ AI Enterprise Platform
                  </h3>
                  <div className="space-y-4 flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Enterprise-grade credit intelligence designed for digital
                      commercial lending platforms. RESTful API integration,
                      structured JSON outputs, and CRA-compliant decisioning.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <TrendingUp
                          className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                          strokeWidth={2.5}
                        />
                        <p className="text-sm text-muted-foreground">
                          83ms pre-qualification for digital credit applications
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp
                          className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                          strokeWidth={2.5}
                        />
                        <p className="text-sm text-muted-foreground">
                          Cross-border eligibility scoring across 94 markets
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp
                          className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                          strokeWidth={2.5}
                        />
                        <p className="text-sm text-muted-foreground">
                          Structured JSON signals for agentic AI platform
                          integration
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp
                          className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                          strokeWidth={2.5}
                        />
                        <p className="text-sm text-muted-foreground">
                          CRA-compliant audit trails and explainability
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-6" asChild>
                    <a
                      href="https://docs.futeurcredx.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Explore API Documentation
                      <ArrowRight
                        className="ml-2 w-4 h-4"
                        strokeWidth={2.5}
                      />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardContent className="p-6 sm:p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Documentation Hub
                  </h3>
                  <div className="space-y-4 flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Technical documentation and integration resources for
                      engineering teams implementing LumiqAI within enterprise
                      banking infrastructure.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <Lightbulb
                          className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                          strokeWidth={2.5}
                        />
                        <p className="text-sm text-muted-foreground">
                          Complete API reference with endpoint specifications
                          and authentication guides
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Lightbulb
                          className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                          strokeWidth={2.5}
                        />
                        <p className="text-sm text-muted-foreground">
                          Integration patterns and JSON signal schemas for
                          agentic AI platforms
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Lightbulb
                          className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                          strokeWidth={2.5}
                        />
                        <p className="text-sm text-muted-foreground">
                          BCBS 239 data lineage architecture and compliance
                          protocols
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Lightbulb
                          className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                          strokeWidth={2.5}
                        />
                        <p className="text-sm text-muted-foreground">
                          Sandbox environment access and sample code libraries
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-6" asChild>
                    <a
                      href="https://docs.futeurcredx.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Documentation
                      <ExternalLink
                        className="ml-2 w-4 h-4"
                        strokeWidth={2.5}
                      />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — Bottom CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-[40px] md:text-[56px] font-bold mb-6 text-white leading-[1.15]">
              Ready to see it in action?
            </h2>
            <p className="text-xl text-white/95 mb-10 leading-relaxed">
              $600K pilot. 90 days. 7 KPIs measured against your baselines.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pilot"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-semibold text-base hover:bg-white/90 transition-colors shadow-lg"
              >
                Start the 90-Day Pilot
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://citi.demo.futeurcredx.com/integration-preview?bank=citi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold text-base hover:bg-white/10 transition-colors"
              >
                Try the Live Demo
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </PageLayout>
  );
}

export default About;
