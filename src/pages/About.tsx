import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Target, Shield, TrendingUp, Users, Lightbulb, ArrowRight, Database, Brain, BarChart3 } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";

function About() {
  useEffect(() => {
    document.title = "About FuteurCredX \u2014 Enterprise Credit Intelligence";
  }, []);

  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroBackground>
        <div className="flex flex-col items-start max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white text-xs sm:text-sm font-medium mb-5 sm:mb-6"
          >
            <Shield className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={2.5} />
            FuteurCredX / LUMIQ AI
          </motion.div>

          <h1 className="font-heading text-[32px] sm:text-[40px] md:text-[44px] lg:text-[52px] xl:text-[68px] 2xl:text-[76px] font-bold mb-6 sm:mb-8 leading-[1.1] text-white">
            About FuteurCredX
          </h1>

          <p className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-white/95 mb-4 sm:mb-5 leading-relaxed font-semibold max-w-2xl">
            Building the future of credit intelligence—enterprise-grade AI that empowers financial institutions and consumers to make better credit decisions.
          </p>

          <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg text-white/80 mb-8 sm:mb-12 leading-relaxed max-w-2xl">
            From consumer credit education to business credit infrastructure, we deliver measurable outcomes through explainable AI and regulatory-aligned decisioning.
          </p>
        </div>
      </HeroBackground>

      {/* Who We Are */}
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
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              FuteurCredX is an enterprise AI company specializing in credit intelligence, risk scoring, and financial product optimization for banks, lenders, and consumers.
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
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-primary" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Mission-Driven</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Democratize credit intelligence and enable fair, transparent, and data-driven lending decisions at scale.
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
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-6">
                    <Users className="w-7 h-7 text-secondary" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Dual Audience</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Serving both financial institutions (banks, credit unions, lenders) and consumers seeking credit transparency and optimization.
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
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <Shield className="w-7 h-7 text-primary" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Compliance-First</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Built with SOC 2, FCRA, ECOA, and GLBA alignment from day one. Audit-ready infrastructure designed for enterprise risk and compliance teams.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
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
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We build AI-powered credit intelligence platforms that transform how institutions underwrite, monitor, and grow their portfolios.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Database className="w-7 h-7 text-primary" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">Credit Data Unification</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        Consolidate owner FICO, business credit scores (FICO SBSS, Experian FSR), internal banking data, and behavioral signals into a single unified view with full data lineage.
                      </p>
                      <p className="text-sm text-muted-foreground italic">
                        Real-time ingestion with explainable scoring models aligned to institutional policy overlays.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Brain className="w-7 h-7 text-secondary" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">AI-Powered Risk Decisioning</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        Pre-qualification engines, early warning detection, and product recommendation models that reduce manual underwriting by 35% while improving approval accuracy by 18-20%.
                      </p>
                      <p className="text-sm text-muted-foreground italic">
                        Explainable AI with full audit trails for compliance, adverse action reporting, and model governance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-7 h-7 text-primary" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">Portfolio Intelligence Dashboards</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        Executive, risk, and banker dashboards showing qualified segments, pre-qualification funnels, industry risk heatmaps, conversion lift tracking, and loss pattern monitoring.
                      </p>
                      <p className="text-sm text-muted-foreground italic">
                        Proactive alerts and segmentation tools enable data-driven portfolio optimization.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise Products */}
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
              Our Enterprise Product & Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              LUMIQ AI for institutions—backed by comprehensive technical documentation and integration support.
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
                <CardHeader>
                  <CardTitle className="text-2xl">LUMIQ AI for Institutions</CardTitle>
                </CardHeader>
                <CardContent className="p-6 sm:p-8 pt-0 flex flex-col flex-1">
                  <div className="space-y-4 flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Enterprise-grade credit intelligence for banks, credit unions, and lenders. Integrates directly into existing underwriting systems via RESTful API.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-sm text-muted-foreground">
                          Unified business credit view (owner FICO + business scores)
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-sm text-muted-foreground">
                          Pre-qualification and product recommendation engines
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-sm text-muted-foreground">
                          Portfolio health monitoring with early warning detection
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-sm text-muted-foreground">
                          Compliance-ready audit trails and explainability
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-6" asChild>
                    <a href="https://institutions.futeurcredx.com" target="_blank" rel="noopener noreferrer">
                      Visit Institutions Portal
                      <ExternalLink className="ml-2 w-4 h-4" strokeWidth={2.5} />
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
                <CardHeader>
                  <CardTitle className="text-2xl">FuteurCredX Documentation Hub</CardTitle>
                </CardHeader>
                <CardContent className="p-6 sm:p-8 pt-0 flex flex-col flex-1">
                  <div className="space-y-4 flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Comprehensive technical documentation and integration resources for developers, engineers, and technical teams implementing FuteurCredX solutions.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-sm text-muted-foreground">
                          Complete API reference documentation with endpoint specifications and authentication guides
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Lightbulb className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-sm text-muted-foreground">
                          Step-by-step integration tutorials and implementation best practices
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Lightbulb className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-sm text-muted-foreground">
                          Technical architecture diagrams, data flow specifications, and security protocols
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Lightbulb className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-sm text-muted-foreground">
                          Sample code libraries, SDKs, and sandbox environment access for testing
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-6" asChild>
                    <a href="https://docs.futeurcredx.com" target="_blank" rel="noopener noreferrer">
                      View Documentation
                      <ExternalLink className="ml-2 w-4 h-4" strokeWidth={2.5} />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Built This */}
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
              Why We Built This
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The credit industry is broken. Information asymmetry hurts consumers and institutions alike.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="font-bold text-xl mb-3 text-foreground">For Consumers</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    71% of consumers don't understand how their credit score is calculated. 1 in 5 have errors on their credit reports. Access to credit education and transparency shouldn't be a luxury—it should be a fundamental right.
                  </p>
                  <p className="text-muted-foreground text-sm italic">
                    We saw consumers struggling to navigate credit systems designed to keep them in the dark. FuteurCredX changes that.
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
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="font-bold text-xl mb-3 text-foreground">For Institutions</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Banks and lenders are losing qualified customers to fintech disruptors who offer faster decisions and transparent experiences. Manual underwriting is slow, expensive, and error-prone. Risk teams lack real-time portfolio visibility.
                  </p>
                  <p className="text-muted-foreground text-sm italic">
                    We saw institutions stuck with legacy systems that couldn't adapt to modern expectations. LUMIQ AI bridges that gap.
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
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="font-bold text-xl mb-3 text-foreground">The Outcome</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    By combining consumer-grade transparency with enterprise-grade compliance, we're creating a new standard for credit intelligence. Consumers get control. Institutions get velocity and risk visibility. Everyone wins.
                  </p>
                  <p className="text-muted-foreground text-sm italic">
                    This isn't incremental improvement—it's systemic transformation of how credit decisions are made.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Citi */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">For Citi</span>
            </div>
            <h2 className="font-heading text-[36px] md:text-[48px] font-bold mb-6 text-foreground">
              Why This Matters for Citi
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Citi serves <strong className="text-foreground">450,000+ middle-market businesses</strong> across{" "}
                <strong className="text-foreground">160+ countries</strong> — a global footprint no other top-4 US bank can match.
                Yet these businesses have no unified credit intelligence layer inside the Citi ecosystem.
              </p>
              <p>
                LumiqAI provides the missing connection: domestic credit scoring fused with cross-border trade finance intelligence,
                all delivered through Citi's existing digital channels. The result is faster credit decisions, higher product cross-sell,
                and a competitive moat that leverages Citi's $14.53B Treasury & Trade Solutions infrastructure.
              </p>
              <p>
                With Citi's investment in agentic AI through{" "}
                <strong className="text-foreground">Citi Stylus Workspaces</strong> and the{" "}
                <strong className="text-foreground">Sakana AI partnership</strong>, the timing has never been better
                for an AI-powered credit intelligence layer that serves both Consumer and Business banking.
              </p>
            </div>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link to="/pilot#pilot-form">
                  Explore the Pilot
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Links & Resources */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-[36px] md:text-[48px] font-bold mb-4 text-foreground">
              Explore FuteurCredX
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Visit our platform to see how we're transforming credit intelligence for institutions and consumers.
            </p>
            
            <Button size="lg" className="text-lg px-10 py-7 h-auto" asChild>
              <a href="https://www.futeurcredx.com/" target="_blank" rel="noopener noreferrer">
                Visit FuteurCredX
                <ExternalLink className="ml-2 w-5 h-5" strokeWidth={2.5} />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Transform Credit Intelligence?
            </h2>
            <p className="text-xl text-white/95 mb-10 leading-relaxed">
              Whether you're a financial institution looking to modernize underwriting or exploring enterprise credit solutions, we'd love to connect.
            </p>
            
            <Button size="lg" className="bg-white hover:bg-white/90 text-primary font-bold text-xl px-12 py-8 h-auto shadow-xl" asChild>
              <Link to="/pilot#pilot-form">
                Get in Touch
                <ArrowRight className="ml-3 w-6 h-6" strokeWidth={2.5} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}

export default About;
