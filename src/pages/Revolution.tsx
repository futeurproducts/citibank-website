import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Target, Scale, TrendingUp, Shield, Brain, ChevronRight, Globe, CreditCard, Building2, Zap, CheckCircle2, XCircle } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

export default function Revolution() {
  useEffect(() => {
    document.title = "The Digital Lending Intelligence Blueprint — LumiqAI for Citi";
    document.body.style.background = "hsl(var(--background))";
  }, []);

  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">The Digital Lending Intelligence Blueprint</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
              From Transformation Programs to{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Credit Intelligence Engine</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The AI infrastructure that powers Stylus Workspaces and CitiDirect — now connected to credit intelligence that scores businesses in 83ms across revolving credit, term loans, commercial cards, and letters of credit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE PROVEN MODEL */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 md:p-12 bg-gradient-to-br from-card/70 to-card/30 backdrop-blur-xl border border-border/50 mb-8 hover:border-border transition-all"
            style={{ boxShadow: 'var(--shadow-glow)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-6 w-6 text-primary" />
              <h2 className="font-display text-3xl font-bold">I. The Proven Model</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
                  Citi's AI-First Transformation
                </h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Stylus Workspaces</strong> with agentic AI deployed to thousands of employees across operations and technology.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Sakana AI</strong> — Citi's first strategic AI investment in Japan, signaling commitment to frontier AI research.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">AI Innovation Award</strong> for "Elevating Client Service" and <strong className="text-foreground">Celent Model Bank Award</strong> for "Transforming Client Connectivity."
                  </p>
                  <p className="text-primary font-semibold leading-relaxed mt-4">
                    The AI infrastructure is built. The credit intelligence layer is the missing piece.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Brain className="h-5 w-5 text-secondary" />
                  LumiqAI's Credit Intelligence Layer
                </h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Takes Citi's AI infrastructure and connects it to commercial lending decisioning:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CreditCard className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-foreground">Digital credit pre-qualification</strong> on CitiDirect</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <Globe className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-foreground">Cross-border eligibility</strong> aligned with Token Services</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <TrendingUp className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-foreground">Trade finance scoring</strong> for the $7.75T supercycle</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <Building2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-foreground">CRA-compliant community lending</strong> analytics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <ScoreCard
              number="1"
              title="Digital Lending Intelligence"
              description="Pre-score businesses on CitiDirect before they apply. Territory analysis across CCB's commercial footprint."
              icon={<Scale className="h-5 w-5" />}
            />
            <ScoreCard
              number="2"
              title="CitiDirect Pre-Qualification"
              description="83ms scoring pipeline. Revolving credit, term loans, commercial cards, LOC — up to $10M per digital application."
              icon={<Zap className="h-5 w-5" />}
            />
            <ScoreCard
              number="3"
              title="Cross-Border Portfolio Engine"
              description="Portfolio monitoring across 94 markets. Cross-sell signals aligned with Token Services. Trade finance credit assessment."
              icon={<Globe className="h-5 w-5" />}
            />
          </div>

          {/* WHY NOW */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 md:p-12 bg-gradient-to-br from-card/70 to-card/30 backdrop-blur-xl border border-border/50 mb-8"
            style={{ boxShadow: 'var(--shadow-glow)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-success" />
              <h2 className="font-display text-3xl font-bold">II. The Strategic Moment — Citi's 5-Front Transformation</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-primary">
                  Strategic Timing
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Jane Fraser: <em>"Two-thirds of Transformation programs at or near target state."</em>
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Citi is converging five strategic threads simultaneously: <strong className="text-foreground">AI infrastructure</strong> (Stylus/Sakana), <strong className="text-foreground">digital commercial lending</strong> (CCB/CitiDirect), <strong className="text-foreground">cross-border payments</strong> (Token Services), <strong className="text-foreground">trade finance</strong> ($7.75T supercycle), and <strong className="text-foreground">community impact</strong> ($60B housing + CRA Outstanding).
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Each thread generates credit decisions. None of them have a unified credit intelligence layer. <strong className="text-primary">That's LumiqAI.</strong>
                </p>
              </div>

              {/* Without/With Comparison */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="rounded-2xl p-6 bg-destructive/5 border border-destructive/20">
                  <h4 className="font-semibold mb-4 text-destructive flex items-center gap-2">
                    <XCircle className="h-5 w-5" />
                    Without Credit Intelligence
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                      Manual credit review across CCB
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                      Siloed decisioning across CCB, Token Services, and trade finance
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                      No unified pre-qualification
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                      CRA compliance tracked separately
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl p-6 bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold mb-4 text-primary flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    With LumiqAI
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      83ms pre-qualification on CitiDirect
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      Cross-border eligibility scoring
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      Trade finance credit assessment
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      CRA-compliant community lending analytics
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      All from one API
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <Sparkles className="h-7 w-7 text-primary mx-auto mb-4" />

              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                The Credit Intelligence Layer for Citi's Transformation
              </h3>
              <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8">
                Give <span className="text-primary font-semibold">Citi's commercial clients</span> the credit intelligence that connects all five transformation fronts —
                pre-qualifying businesses on CitiDirect, scoring cross-border eligibility, and enabling CRA-compliant community lending.
                <br/><br/>
                All powered by the same <span className="text-secondary font-semibold">agentic AI architecture that drives Stylus Workspaces</span>.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/impact">
                  <motion.button
                    className="inline-flex items-center gap-2 rounded-xl px-8 py-4 font-semibold bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg"
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(51, 204, 255, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    See Financial Impact <ChevronRight className="h-4 w-4" />
                  </motion.button>
                </Link>
                <a href="https://sandbox.futeurcredx.com/demo/citi" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    className="inline-flex items-center gap-2 rounded-xl px-8 py-4 font-semibold border-2 border-border bg-card/50 backdrop-blur-sm text-foreground hover:border-primary/50 hover:bg-card transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Try Interactive Demo
                  </motion.button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} FuteurCredX &middot; For internal evaluation by Citibank
          </p>
        </div>
      </section>
    </PageLayout>
  );
}

function ScoreCard({ number, title, description, icon }: { number: string; title: string; description: string; icon: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2 }}
      className="rounded-3xl p-6 bg-gradient-to-br from-card/70 to-card/30 backdrop-blur-xl border border-border/50 relative overflow-hidden group"
      style={{ boxShadow: 'var(--shadow-glow)' }}
    >
      <div className="absolute top-0 right-0 text-8xl font-bold opacity-5 text-primary font-display">
        {number}
      </div>
      <div className="relative z-10">
        <div className="mb-4 text-primary">
          {icon}
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
