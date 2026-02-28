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
  AlertTriangle,
  Zap,
  Users,
  Building2,
  Target,
  Eye,
  CreditCard,
  RefreshCw,
  Globe,
  Lock,
  Database,
  FileCheck,
  BarChart3,
  Clock,
  Server,
  Key,
  Layers,
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
    document.title = "Start Pilot \u2014 $150K, 90 Days, Measurable Results";
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
              CITI PILOT PROGRAM
            </Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-primary-foreground leading-tight">
              Install the Credit Intelligence Layer in{" "}
              <span className="text-primary-foreground/90">90 Days</span>
            </h1>
            
            <p className="text-base md:text-lg text-primary-foreground/80 mb-4 max-w-3xl mx-auto">
              Close Citi's structural gap. Capture revenue currently leaking to Chase, Capital One, AmEx, and Apple.
            </p>
            
            <p className="text-sm text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Deploy a fully governed, risk-aligned, Citi-logic credit intelligence layer directly inside the Citi App. 
              This pilot is designed to produce <span className="text-primary-foreground font-medium">measurable revenue uplift within the first 60–90 days</span> of deployment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold rounded-full shadow-lg px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base"
                onClick={() => document.getElementById('pilot-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Citi Pilot
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-2 border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground hover:text-primary-foreground rounded-full font-semibold shadow-md transition-all px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base"
                asChild
              >
                <a href="/Citi Model Governance Framework.pdf" download="Citi Model Governance Framework.pdf">
                  Download Model Governance Framework
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
                Citi is the only top-4 U.S. bank without consumer or business credit intelligence inside its mobile app.
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Competitors now capture Citi's customers at the moment of credit intent—before Citi even sees the demand signal. 
                This pilot delivers instant structural correction with minimal lift from Citi teams.
              </p>
              <div className="h-px w-24 bg-primary mx-auto mt-6" />
            </div>

            <motion.div {...fadeInUp}>
              <Card className="bg-card border border-border shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">The Pilot Instantly Enables Citi Customers To:</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { icon: Eye, text: "View real credit scores inside the app" },
                      { icon: Target, text: "Receive Citi-based prequalification" },
                      { icon: BarChart3, text: "Get product eligibility confidence bands" },
                      { icon: TrendingUp, text: "See predictive approval pathways" },
                      { icon: CreditCard, text: "Apply with 1-tap inside the app" },
                      { icon: RefreshCw, text: "Receive decline-recovery logic tied to Citi's rules" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                        <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 rounded-lg bg-foreground/5 border border-foreground/20">
                    <p className="text-sm text-foreground font-medium">
                      This pilot prevents further revenue leakage and positions Citi to reclaim lost ground — fast.
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
                Because Citi currently has no in-app credit intelligence layer.
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                This shows the precise capability competitors already use to intercept Citi customers.
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
                    This shows Citi jumping from <span className="font-bold">"No capability"</span> → <span className="font-bold">"Industry leader"</span> in a single integrated deployment.
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
                Dual-Platform Credit Intelligence
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Consumer + Business journeys deployed simultaneously.</p>
              <div className="h-px w-24 bg-primary mx-auto mt-6" />
            </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Consumer Scope */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="h-full bg-card border border-border overflow-hidden">
                <div className="p-4 bg-primary/10 border-b border-primary/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Users className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Consumer Pilot Scope</h3>
                      <p className="text-xs text-primary">~75k–150k Citi Consumer customers</p>
                    </div>
                  </div>
                </div>
                
                {/* Consumer 3-Screen Mockup */}
                <div className="p-6 bg-background-secondary border-b border-border">
                  <img 
                    src="/images/3-phone-consumer.png" 
                    alt="Citi Consumer 3-Screen Mockup"
                    className="w-full h-auto rounded-lg max-w-2xl mx-auto"
                  />
                </div>
                
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-4 font-semibold">Capabilities included:</p>
                  <ul className="space-y-2">
                    {[
                      "Real-time credit score surfacing",
                      "Citi-aligned prequalification: Custom Cash, Double Cash, Strata Premier, Rewards+",
                      "Eligibility Confidence Bands",
                      "Predictive card pathways",
                      "Instant Apply",
                      "Reason Codes + Recovery Guidance"
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

            {/* Business Scope */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="h-full bg-card border border-border overflow-hidden">
                <div className="p-4 bg-primary/10 border-b border-primary/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Building2 className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Business Pilot Scope</h3>
                      <p className="text-xs text-primary">~25k–50k SMB customers</p>
                    </div>
                  </div>
                </div>
                
                {/* Business 3-Screen Mockup */}
                <div className="p-6 bg-background-secondary border-b border-border">
                  <img 
                    src="/images/3-phones-business.png" 
                    alt="Citi Business 3-Screen Mockup"
                    className="w-full h-auto rounded-lg max-w-2xl mx-auto"
                  />
                </div>
                
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-4 font-semibold">Capabilities included:</p>
                  <ul className="space-y-2">
                    {[
                      "Business Credit Score + Owner FICO blended view",
                      "Forecasted eligibility: CitiBusiness AAdvantage, Costco Business Card",
                      "SMB Revenue + Spend Pattern Modeling",
                      "Combined PG / Business attribute scoring",
                      "Apply Now (Business Flow)"
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
                  <span className="font-bold">Citi becomes the only major bank</span>{" "}
                  <span className="text-primary-foreground/80">with a dual-platform credit intelligence layer for both Consumer + SMB.</span>
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
                            <p className="text-xs sm:text-sm text-primary font-medium">Weeks 1–3</p>
                          </div>
                        </div>
                        <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base text-center lg:text-left">Alignment & Integration</h4>
                        <ul className="space-y-2">
                          {[
                            "Load Citi's product eligibility criteria",
                            "Map bureau + cash-flow data to Citi rules",
                            "SSO + API integration",
                            "Security review & architecture approval",
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
                            <p className="text-xs sm:text-sm text-primary font-medium">Weeks 4–7</p>
                          </div>
                        </div>
                        <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base text-center lg:text-left">Experience Layer & AI Eligibility</h4>
                        <ul className="space-y-2">
                          {[
                            "Build consumer & SMB journeys in-app",
                            "Enable eligibility engine using Citi's published criteria",
                            "Deploy confidence bands based on Citi thresholds",
                            "Build decline-recovery flows"
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
                            <p className="text-xs sm:text-sm text-primary font-medium">Weeks 8–12</p>
                          </div>
                        </div>
                        <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base text-center lg:text-left">Controlled Live Pilot</h4>
                        <ul className="space-y-2">
                          {[
                            "Go-live for limited consumer + SMB cohorts",
                            "Capture uplift data",
                            "Weekly performance dashboards",
                            "Pilot evaluation report for executive leadership"
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
              <Card className="bg-primary border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <p className="text-primary-foreground">
                    <span className="font-bold">Zero changes to Citi's risk appetite.</span>{" "}
                    <span className="text-primary-foreground/80">Maximum control remains inside the bank.</span>
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
                      <Users className="h-5 w-5 text-primary" />
                      Consumer KPIs
                    </h3>
                    <div className="space-y-3">
                      {[
                        { metric: "+12–24%", label: "Approval lift" },
                        { metric: "+2–3×", label: "App engagement increase" },
                        { metric: "5–10%", label: "Conversion uplift" },
                        { metric: "25–40%", label: "Manual review reduction" }
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
                      Business KPIs
                    </h3>
                    <div className="space-y-3">
                      {[
                        { metric: "+18–30%", label: "SMB approval lift" },
                        { metric: "35–50%", label: "Fewer manual reviews" },
                        { metric: "5–12%", label: "SMB product conversion uplift" }
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
                      Financial Impact (Pilot Window)
                    </h3>
                    <div className="space-y-3">
                      {[
                        { metric: "$30M–$45M", label: "Incremental approvals" },
                        { metric: "~$10M", label: "Cost savings" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                          <span className="text-sm text-muted-foreground">{item.label}</span>
                          <span className="text-sm font-bold text-foreground">{item.metric}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <p className="text-xs text-foreground font-medium">
                        By Day 90, Citi will see quantifiable revenue impact.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 8 - Global Expansion */}
      <section className="py-20 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">08 — GLOBAL EXPANSION PATH</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                A Platform Move, Not a Single Feature
              </h2>
              <div className="h-px w-24 bg-primary mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div {...fadeInUp}>
                <p className="text-lg text-muted-foreground mb-6">
                  After U.S. deployment, LumiqAI becomes Citi's global eligibility engine, with market-specific logic:
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
                Install Citi's Missing Credit Intelligence Layer
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Launch a controlled pilot in 90 days. Begin capturing revenue Citi is losing today.
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
