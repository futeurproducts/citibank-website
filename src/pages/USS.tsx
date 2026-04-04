import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, DollarSign, Shield, Zap, ArrowRight, BarChart3, Target, Briefcase, Globe, Building2, CreditCard } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

function MetricCard({ value, label, icon: Icon, delay = 0 }: { value: string; label: string; icon: any; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center p-8 rounded-2xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(51,204,255,0.15)]"
    >
      <Icon className="w-12 h-12 text-primary mb-4" />
      <div className="text-4xl font-bold text-primary mb-2">{value}</div>
      <div className="text-sm text-muted-foreground text-center">{label}</div>
    </motion.div>
  );
}

function ComparisonRow({ infrastructure, intelligence, delay = 0 }: { infrastructure: string; intelligence: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="grid md:grid-cols-2 gap-6 mb-6"
    >
      <div className="p-6 rounded-xl bg-card/30 border border-border/30">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
          <p className="text-foreground">{infrastructure}</p>
        </div>
      </div>
      <div className="p-6 rounded-xl bg-primary/5 border border-primary/30">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
          <p className="text-foreground font-medium">{intelligence}</p>
        </div>
      </div>
    </motion.div>
  );
}

function USS() {
  useEffect(() => {
    document.title = "LUMIQ AI \u2014 Credit Intelligence Architecture";
  }, []);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
            >
              <Shield className="w-4 h-4" />
              Unique Salient Similarities (USS)
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Proven in Citi's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                AI transformation.
              </span>
              {" "}Engineered for credit intelligence.
            </h1>

            <p className="text-xl text-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Citi's Stylus Workspaces, Token Services, and CitiDirect are transforming how commercial banking operates. LumiqAI applies the same agentic AI architecture to credit intelligence — the layer that connects all five transformation fronts.
            </p>

            {/* Hero Pills */}
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-foreground">
                <Zap className="w-4 h-4 text-primary" />
                Stylus Workspaces: agentic AI for thousands
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-foreground">
                <CreditCard className="w-4 h-4 text-primary" />
                CitiDirect: up to $10M per application
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-foreground">
                <Shield className="w-4 h-4 text-primary" />
                100% audit trail + CRA Outstanding compliance
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pilot">
                <Button size="lg" className="group">
                  Start Your Pilot
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button size="lg" variant="outline">
                  See the Platform
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Citi AI Transformation: The Proof Point */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Citi's AI Transformation: The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Proof Point
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Citi's five transformation fronts have generated industry-leading results — now they need a unified credit intelligence layer
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <MetricCard
              value="Outstanding"
              label="CRA Rating (2nd Consecutive)"
              icon={Shield}
              delay={0}
            />
            <MetricCard
              value="$7.75T"
              label="Capex Supercycle by 2030"
              icon={TrendingUp}
              delay={0.1}
            />
            <MetricCard
              value="$60B"
              label="Housing Blueprint Commitment"
              icon={Building2}
              delay={0.2}
            />
            <MetricCard
              value="$145.9B"
              label="CRA-Allocated Activity"
              icon={DollarSign}
              delay={0.3}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">94</div>
                    <div className="text-sm text-muted-foreground">Markets with Token Services</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">83ms</div>
                    <div className="text-sm text-muted-foreground">Credit Decision Speed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">5</div>
                    <div className="text-sm text-muted-foreground">Transformation Fronts Converging</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* The Credit Intelligence Gap */}
      <section className="py-24 relative bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Five Transformation Fronts.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                No Unified Credit Layer.
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each of Citi's strategic threads generates credit decisions — but none share a unified intelligence engine
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">The Infrastructure Reality</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Stylus Workspaces</p>
                    <p className="text-sm text-muted-foreground">Agentic AI deployed — but no credit decisioning module</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">CitiDirect Digital Lending</p>
                    <p className="text-sm text-muted-foreground">Applications up to $10M accepted — but no pre-qualification layer</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Token Services</p>
                    <p className="text-sm text-muted-foreground">Cross-border payments flowing — but no credit eligibility scoring</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 backdrop-blur border-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl">The LumiqAI Solution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">One API</p>
                    <p className="text-sm text-muted-foreground">Unified credit intelligence across all five transformation fronts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">83ms Decisions</p>
                    <p className="text-sm text-muted-foreground">Pre-qualification before CitiDirect submission</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">CRA Outstanding Compliance</p>
                    <p className="text-sm text-muted-foreground">SPCP-eligible zone mapping and community analytics built in</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison: AI Infrastructure -> Credit Intelligence */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Same{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Agentic Architecture
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Citi's AI infrastructure powers operations and connectivity. LumiqAI extends that same architecture to credit intelligence.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto mb-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 rounded-xl bg-card/30 border border-border/30">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Citi's AI/Digital Infrastructure</h3>
                <p className="text-muted-foreground">Transformation Already Deployed</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-primary/5 border border-primary/30">
                <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">LumiqAI Credit Intelligence</h3>
                <p className="text-muted-foreground">The Missing Layer</p>
              </div>
            </div>

            <ComparisonRow
              infrastructure="Stylus Workspaces processes complex multi-stage workflows with agentic AI"
              intelligence="LumiqAI adds credit decisioning as a native module within Stylus"
              delay={0}
            />
            <ComparisonRow
              infrastructure="CitiDirect accepts digital credit applications up to $10M"
              intelligence="LumiqAI pre-qualifies businesses before submission — 83ms decisions"
              delay={0.1}
            />
            <ComparisonRow
              infrastructure="Token Services processes billions in 24/7 multi-currency payments"
              intelligence="LumiqAI scores cross-border credit eligibility alongside payments"
              delay={0.2}
            />
            <ComparisonRow
              infrastructure="Trade finance clients face $7.75T capex supercycle opportunity"
              intelligence="LumiqAI assesses supply chain credit needs at scale"
              delay={0.3}
            />
            <ComparisonRow
              infrastructure="CRA Outstanding rating + $60B housing commitment"
              intelligence="LumiqAI maps SPCP-eligible zones and generates community analytics"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Projected Business Impact */}
      <section className="py-24 relative bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Credit Intelligence{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Opportunity
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              When Citi's AI infrastructure meets unified credit intelligence, every transformation front accelerates
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:shadow-[0_0_40px_rgba(51,204,255,0.15)] transition-all">
              <CardHeader>
                <Target className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-3xl font-bold text-primary">83ms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-semibold mb-2">CitiDirect Pre-Qualification</p>
                <p className="text-sm text-muted-foreground">Instant credit decisioning before application submission</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:shadow-[0_0_40px_rgba(51,204,255,0.15)] transition-all">
              <CardHeader>
                <Globe className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-3xl font-bold text-primary">94</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-semibold mb-2">Cross-Border Markets</p>
                <p className="text-sm text-muted-foreground">Credit eligibility scoring aligned with Token Services coverage</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:shadow-[0_0_40px_rgba(51,204,255,0.15)] transition-all">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-3xl font-bold text-primary">100%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-semibold mb-2">Audit Trail + CRA Compliance</p>
                <p className="text-sm text-muted-foreground">Maintaining Outstanding rating with built-in community analytics</p>
              </CardContent>
            </Card>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-primary/5 backdrop-blur border-primary/30">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Built for Citi's Transformation Architecture</h3>
                    <p className="text-muted-foreground">
                      Same agentic AI principles. Same enterprise-grade compliance. Same API-first architecture. Now applied to the credit intelligence layer that connects Stylus Workspaces, CitiDirect, Token Services, trade finance, and CRA compliance into one unified decisioning engine.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6 text-center pt-6 border-t border-border/30">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Audit-Trail Coverage</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">$600K</div>
                    <div className="text-sm text-muted-foreground">90-Day Pilot</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">2 weeks</div>
                    <div className="text-sm text-muted-foreground">Integration Timeline</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Card className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background border-primary/30 overflow-hidden">
              <CardContent className="p-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  The infrastructure is built.{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Now add credit intelligence.
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Start a 90-day pilot with pre-agreed success criteria and see how LumiqAI connects all five of Citi's transformation fronts through unified credit decisioning.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/pilot#pilot-form">
                    <Button size="lg" className="group text-lg px-8 py-6">
                      Book a 20-Minute Pilot Review
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/demo">
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                      See Platform Demo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}

export default USS;
