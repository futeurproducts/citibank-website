import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { InvestorDayCountdown } from "@/components/InvestorDayCountdown";
import { CompetitiveMatrix } from "@/components/CompetitiveMatrix";
import { ComplianceTrust } from "@/components/ComplianceTrust";
import { PilotROIChart } from "@/components/PilotROIChart";
import { ScaleRoadmap } from "@/components/ScaleRoadmap";
import {
  ArrowRight,
  Zap,
  Target,
  BarChart3,
  CheckCircle2,
  Shield,
  FileCheck,
  Server,
  Users,
  Lock,
  CalendarCheck,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function Pilot() {
  const location = useLocation();

  useEffect(() => {
    document.title =
      "LUMIQ AI — $600K. 90 Days. Measured Against Your KPIs.";
  }, []);

  useEffect(() => {
    if (location.hash === "#pilot-form") {
      setTimeout(() => {
        const element = document.getElementById("pilot-form");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <PageLayout>
      {/* ── SECTION 1: HERO ── */}
      <section className="relative py-20 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-primary via-primary to-[hsl(212,100%,16%)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent_50%)]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            {...fadeInUp}
            className="max-w-[1400px] mx-auto text-center"
          >
            <Badge className="mb-6 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 px-4 py-2">
              Credit Intelligence for Citi Commercial Bank
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-primary-foreground leading-tight">
              $600K. 90 Days.{" "}
              <span className="text-primary-foreground/90">
                Measured Against Your KPIs.
              </span>
            </h1>

            <p className="text-base md:text-lg text-primary-foreground/80 mb-6 max-w-3xl mx-auto">
              Deploy credit intelligence across your digital lending platform.
              7 KPIs measured against your baselines.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["83ms scoring", "7 outputs per call", "$10M per application"].map(
                (pill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-sm text-primary-foreground/90 font-medium"
                  >
                    {pill}
                  </span>
                )
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold rounded-full shadow-lg px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base"
                asChild
              >
                <a href="https://institutions.futeurcredx.com/contact">
                  Book 15-Minute Technical Review
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground hover:text-primary-foreground rounded-full font-semibold shadow-md transition-all px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base"
                asChild
              >
                <a href="https://citi.demo.futeurcredx.com/demo/citi">
                  See the 83ms Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <InvestorDayCountdown />
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: WHY NOW ── */}
      <section className="py-16 md:py-20 lg:py-24 bg-background-secondary">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
            <div className="text-center mb-10">
              <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
                01 — WHY NOW
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
                CCB is digitizing lending. The credit intelligence layer is the
                missing piece.
              </h2>
              <div className="h-px w-24 bg-primary mx-auto mt-4" />
            </div>

            <Card className="bg-card border border-border shadow-lg max-w-3xl mx-auto">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {[
                    {
                      icon: Zap,
                      text: "Pre-qualify businesses in 83ms before CitiDirect submission",
                    },
                    {
                      icon: Target,
                      text: "Score eligibility across revolving credit, term loans, cards, and LOC",
                    },
                    {
                      icon: BarChart3,
                      text: "Deliver structured signals to your agentic AI platform",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10"
                    >
                      <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground font-medium">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-lg bg-foreground/5 border border-foreground/20">
                  <p className="text-sm text-foreground">
                    <span className="font-bold">10-K urgency:</span> Criticized
                    corporate loans rose 14%. Card losses: $9.7B. ACLL up $600M.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3: COMPETITIVE TABLE ── */}
      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
            <div className="text-center mb-10">
              <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
                02 — COMPETITIVE LANDSCAPE
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
                Every top-4 bank has consumer credit intelligence. None have
                commercial.
              </h2>
              <div className="h-px w-24 bg-primary mx-auto mt-4" />
            </div>

            <CompetitiveMatrix />
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 4: PILOT SCOPE (3 cards, 3 bullets each) ── */}
      <section className="py-16 md:py-20 lg:py-24 bg-background-secondary">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
            <div className="text-center mb-10">
              <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
                03 — PILOT SCOPE
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
                Three Intelligence Modules
              </h2>
              <div className="h-px w-24 bg-primary mx-auto mt-4" />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Digital Lending Intelligence",
                  bullets: [
                    "Pre-score businesses before CitiDirect submission",
                    "Product-level eligibility across CCB's full shelf",
                    "Structured JSON signals for Stylus Workspaces",
                  ],
                },
                {
                  icon: Target,
                  title: "CitiDirect Pre-Qualification",
                  bullets: [
                    "83ms full scoring pipeline on every application",
                    "Confidence bands calibrated to CCB thresholds",
                    "Zero re-keying — data flows directly",
                  ],
                },
                {
                  icon: BarChart3,
                  title: "Portfolio Intelligence",
                  bullets: [
                    "Cross-sell triggers and early warning signals",
                    "Cross-border eligibility aligned with Token Services",
                    "Portfolio health dashboards for executive review",
                  ],
                },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  {...fadeInUp}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="h-full bg-card border border-border overflow-hidden">
                    <div className="p-4 bg-primary/10 border-b border-primary/20">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <card.icon className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <h3 className="font-bold text-foreground">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <ul className="space-y-2">
                        {card.bullets.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-foreground"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 5: 90-DAY PLAN (with real dates) ── */}
      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
            <div className="text-center mb-10">
              <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
                04 — 90-DAY PLAN
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
                From Kickoff to Scale Decision
              </h2>
              <div className="h-px w-24 bg-primary mx-auto mt-4" />
            </div>

            <div className="relative max-w-[1600px] mx-auto">
              <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-10">
                {[
                  {
                    phase: 1,
                    title: "Connect + Validate",
                    dates: "April 7 -- 18, 2026",
                    items: [
                      "Connect credit signals in secure sandbox",
                      "Validate against CCB underwriting standards",
                      "Security review + architecture approval",
                    ],
                  },
                  {
                    phase: 2,
                    title: "Deploy + Measure",
                    dates: "April 21 -- May 30, 2026",
                    items: [
                      "Deploy across CCB's digital lending platform",
                      "Track 7 KPIs against pre-agreed baselines",
                      "Weekly performance dashboards for leadership",
                    ],
                    milestone: "May 7 -- Investor Day: preliminary metrics available",
                  },
                  {
                    phase: 3,
                    title: "Review + Scale Decision",
                    dates: "June 1 -- 30, 2026",
                    items: [
                      "Executive review with KPI results vs. baselines",
                      "Scale decision: full CCB integration roadmap",
                      "Cross-border expansion planning with Token Services",
                    ],
                  },
                ].map((p) => (
                  <motion.div
                    key={p.phase}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (p.phase - 1) * 0.1 }}
                    className="relative flex flex-col lg:flex-row gap-6 lg:gap-8 items-start"
                  >
                    <div className="hidden lg:flex absolute left-0 w-16 h-16 items-center justify-center z-10">
                      <div className="w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-primary-foreground font-bold text-sm">
                            {p.phase}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:ml-24 flex-1 w-full">
                      <Card className="h-full border border-border bg-card shadow-sm">
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-3">
                            <div className="lg:hidden w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm sm:text-base">
                              {p.phase}
                            </div>
                            <div className="text-center lg:text-left">
                              <h3 className="font-bold text-foreground text-base sm:text-lg">
                                Phase {p.phase}: {p.title}
                              </h3>
                              <p className="text-xs sm:text-sm text-primary font-medium">
                                {p.dates.replace(/--/g, "\u2013")}
                              </p>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {p.items.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-xs sm:text-sm text-foreground"
                              >
                                <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0 mt-0.5" />
                                {item}
                              </li>
                            ))}
                          </ul>
                          {p.milestone && (
                            <div className="mt-4 p-3 rounded-lg bg-amber-50 border border-amber-200 flex items-center gap-2">
                              <CalendarCheck className="h-4 w-4 text-amber-600 flex-shrink-0" />
                              <span className="text-xs sm:text-sm font-semibold text-amber-800">
                                {p.milestone.replace(/--/g, "\u2013")}
                              </span>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 6: RISK CONTROLS (trust grid) ── */}
      <section className="py-16 md:py-20 lg:py-24 bg-background-secondary">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
            <div className="text-center mb-10">
              <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
                05 — RISK CONTROLS
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
                Enterprise Governance Framework
              </h2>
              <div className="h-px w-24 bg-primary mx-auto mt-4" />
            </div>

            <Card className="bg-card border border-border shadow-sm max-w-3xl mx-auto overflow-hidden">
              <div className="divide-y divide-border">
                {[
                  {
                    icon: Target,
                    domain: "Underwriting",
                    detail:
                      "Your rules. Your thresholds. Zero interference.",
                  },
                  {
                    icon: Shield,
                    domain: "Credit Risk",
                    detail:
                      "Soft-pull only. Real-time monitoring. Citi-controlled.",
                  },
                  {
                    icon: Users,
                    domain: "Fair Lending",
                    detail:
                      "No demographic inputs. No proxy inference. Full transparency.",
                  },
                  {
                    icon: FileCheck,
                    domain: "Model Risk",
                    detail:
                      "SR 11-7 aligned. Model inventory. Challenger framework.",
                  },
                  {
                    icon: Server,
                    domain: "Operational",
                    detail:
                      "On-prem/VPC. No PII leaves your environment. Audit-ready.",
                  },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-5 hover:bg-primary/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                      <row.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-bold text-foreground">
                        {row.domain}
                      </span>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {row.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 7: SECURITY — ComplianceTrust ── */}
      <ComplianceTrust />

      {/* ── SECTION 8: SUCCESS METRICS ── */}
      <section className="py-16 md:py-20 lg:py-24 bg-background-secondary">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
            <div className="text-center mb-10">
              <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
                07 — SUCCESS METRICS
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
                What Success Looks Like After 90 Days
              </h2>
              <div className="h-px w-24 bg-primary mx-auto mt-4" />
            </div>

            <Card className="bg-card border border-border shadow-sm max-w-3xl mx-auto mb-10">
              <CardContent className="p-6 sm:p-8">
                <ul className="space-y-3">
                  {[
                    "Application conversion lift measured against your pre-agreed baseline",
                    "Every digital credit application pre-scored in 83ms before submission",
                    "Cross-sell accuracy validated across CCB's product shelf",
                    "Full audit trail for every scoring decision — ready for examiner review",
                    "Board-ready metrics delivered before scale decision",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <PilotROIChart />
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 9: GLOBAL SCALE ── */}
      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
            <div className="text-center mb-10">
              <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
                08 — SCALE PATH
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
                From CCB Pilot to Global Platform
              </h2>
              <div className="h-px w-24 bg-primary mx-auto mt-4" />
            </div>

            <ScaleRoadmap />
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 10: BOTTOM CTA ── */}
      <section
        id="pilot-form"
        className="py-20 md:py-24 lg:py-32 bg-gradient-to-br from-primary via-primary to-[hsl(212,100%,16%)]"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-[1400px] mx-auto">
            <motion.div {...fadeInUp} className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
                $600K. 90 Days. Start Before Investor Day.
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                7 KPIs measured against your baselines. 83ms scoring on every
                digital credit application. Results ready for May 7.
              </p>

              <Button
                size="lg"
                className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold rounded-full shadow-lg px-8 py-6 text-base"
                asChild
              >
                <a href="https://institutions.futeurcredx.com/contact">
                  Book 15-Minute Technical Review
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
