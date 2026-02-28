import { motion, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Database, Shield, Rocket, Lock, Users, TrendingUp, BarChart3, CheckCircle2, 
  FileText, Target, DollarSign, Zap, ArrowRight, Smartphone, Building2, 
  CreditCard, AlertCircle, Globe, RefreshCw, Bell, LineChart, Clock,
  ChevronRight, Info, MessageSquareText, X
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ImpactChatWidget } from "@/components/ImpactChatWidget";
import { Footer } from "@/components/Footer";

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
    document.title = "How It Works \u2014 Credit Intelligence in 90 Days";
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

        {/* SECTION 1 — OVERVIEW (Hero) */}
        <section id="overview" className="relative overflow-hidden pt-8 md:pt-12 lg:pt-16 pb-20 md:pb-24 lg:pb-32 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Text Content - Left Side */}
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
                    CITI — HOW IT WORKS
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-foreground leading-tight">
                    LumiqAI installs Citi's missing credit intelligence layer
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-foreground/80 mb-4 leading-relaxed">
                    For both <span className="text-primary font-semibold">Consumer</span> and <span className="text-primary font-semibold">Business</span> — directly inside the Citi App.
                  </p>
                  
                  <p className="text-lg text-muted-foreground mb-2 leading-relaxed">
                    Convert creditworthy applicants Citi currently declines — using income evidence, spending patterns, and payment discipline.
                  </p>
                  <p className="text-lg text-foreground font-medium mb-6 leading-relaxed">
                    SPCP-compliant. Your rules. Controlled risk.
                  </p>

                  <Card className="bg-card border border-border shadow-sm mb-6">
                    <CardContent className="p-6 md:p-8">
                      <p className="text-foreground text-lg">
                        <span className="text-primary font-bold">Outcome:</span> A Citi customer sees the right product, at the right moment, 
                        with a Citi-aligned approval likelihood — and can apply instantly.
                      </p>
                    </CardContent>
                  </Card>

                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg"
                    asChild
                  >
                    <Link to="/pilot">
                      Start Citi Pilot
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
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
                      src="/How it works/How It Works Hero.png"
                      alt="How It Works"
                      className="w-full h-auto"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — HOW CITI USERS EXPERIENCE THE SYSTEM */}
        <section id="user-experience" className="py-20 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
                  USER EXPERIENCE
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  How Citi Users Experience the System
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Seamless credit intelligence integrated directly into the Citi App experience
                </p>
              </div>

              {/* Step 1 & 2 */}
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8">
                <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-lg font-bold text-primary-foreground">1</span>
                      </div>
                      <h3 className="text-xl font-heading font-bold">Credit Data Syncs</h3>
                      <Badge variant="outline" className="text-xs border-success/50 text-success">Soft Pull</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      User securely syncs their profile. LumiqAI pulls bureau data, cash-flow intelligence, and credit attributes.
                    </p>
                    <p className="text-xs text-muted-foreground/80 italic">No impact to credit score</p>
                  </CardContent>
                </Card>

                <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-lg font-bold text-primary-foreground">2</span>
                      </div>
                      <h3 className="text-xl font-heading font-bold">Citi Eligibility Framework Loads</h3>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      The system loads Citi's actual eligibility criteria for each product — including minimum score ranges, 
                      utilization expectations, payment history standards, income/DTI norms, inquiry recency, credit age, 
                      and Citi's product-specific rules.
                    </p>
                    <a href="https://www.citi.com/credit-cards/understanding-credit-cards/what-credit-card-do-i-qualify-for" 
                       target="_blank" rel="noopener noreferrer"
                       className="text-xs text-primary hover:underline flex items-center gap-1">
                      <Info className="w-3 h-3" /> View Citi qualification criteria
                    </a>
                  </CardContent>
                </Card>
              </div>

              {/* Step 3 - Highlighted */}
              <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/30 shadow-lg">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-xl font-bold text-primary-foreground">3</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-foreground">AI Eligibility Engine Runs</h3>
                      <p className="text-sm text-primary font-medium">Core decisioning layer</p>
                    </div>
                  </div>
                  
                  <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                    <p className="text-lg text-foreground font-medium leading-relaxed">
                      "System evaluates <span className="text-primary font-bold">Score</span>, <span className="text-primary font-bold">Cash Flow</span>, <span className="text-primary font-bold">Utilization</span>, <span className="text-primary font-bold">Spend Profile</span>, <span className="text-primary font-bold">Risk Tier</span>, and <span className="text-primary font-bold">Lifecycle Stage</span> using Citi's published eligibility and creditworthiness guidelines."
                    </p>
                  </div>
                  
                  <div className="mt-6 flex items-center gap-4 flex-wrap">
                    <Badge className="bg-primary/10 text-primary border-primary/30">
                      <Shield className="w-3 h-3 mr-1" /> Citi Stays in Control
                    </Badge>
                    <a href="https://www.citi.com/credit-cards/understanding-credit-cards/how-to-apply-for-a-credit-card" 
                       target="_blank" rel="noopener noreferrer"
                       className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors">
                      <Info className="w-4 h-4" /> View Citi creditworthiness framework
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 — WHAT THE USER SEES */}
        <section id="what-users-see" className="py-20 md:py-24 lg:py-32 bg-background-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
                  USER INTERFACE
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  What the User Sees
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Dual-view credit intelligence for Consumer and Business users
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                {/* Consumer Column */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold">For Consumers</h3>
                  </div>
                  
                  <div className="mb-6 overflow-hidden">
                    <div className="grid grid-cols-2 gap-4">
                      <img
                        src="/How it works/what users see/consumer/1.png"
                        alt="Consumer View 1"
                        className="w-full h-auto"
                      />
                      <img
                        src="/How it works/what users see/consumer/2.png"
                        alt="Consumer View 2"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">LumiqAI Surfaces:</p>
                    {[
                      "Prequalified Citi Cards (Double Cash, Custom Cash, Strata Premier, Rewards+)",
                      "Approval Confidence Bands (Very Likely, Likely, Borderline)",
                      "Utilization, Payment History & Inquiry factors",
                      "1-Tap Apply inside the Citi App"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Column */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold">For Business Owners</h3>
                  </div>
                  
                  <div className="mb-6 overflow-hidden">
                    <div className="grid grid-cols-2 gap-4">
                      <img
                        src="/21.png"
                        alt="Business View 1"
                        className="w-full h-auto"
                      />
                      <img
                        src="/How it works/what users see/business/2.png"
                        alt="Business View 2"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-secondary mb-3 uppercase tracking-wide">LumiqAI Surfaces:</p>
                    {[
                      "Prequalified Citi Business Cards (CitiBusiness AAdvantage, Costco Business)",
                      "Business Credit Strength + Owner FICO synced together",
                      "Eligibility Confidence Bands based on combined metrics",
                      "Business underwriting rules auto-mapped"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4 — WHAT THE ENGINE DOES UNDER THE HOOD */}
        <section id="engine" className="py-20 md:py-24 lg:py-32 bg-background-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-7xl mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
                  UNDER THE HOOD
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  What the Engine Does Under the Hood
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Citi-aligned AI decisioning with full explainability
                </p>
              </div>

              {/* Timeline UI */}
              <div className="relative max-w-6xl mx-auto">
                {/* Timeline Line */}
                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

                {/* Timeline Items */}
                <div className="space-y-12">
                  {/* Step 1: Prequalification */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start"
                  >
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-0 w-16 h-16 items-center justify-center z-10">
                      <div className="w-16 h-16 rounded-full bg-background border-4 border-foreground flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                          <span className="text-white font-bold text-sm">1</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="md:ml-24 flex-1">
                      <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-all">
                        <CardContent className="p-6 md:p-8 text-center">
                          <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center md:hidden">
                              <Target className="w-6 h-6 text-foreground" />
                            </div>
                            <h3 className="text-xl font-heading font-bold">1. Prequalification</h3>
                          </div>
                          <p className="text-muted-foreground mb-4 leading-relaxed max-w-2xl mx-auto">
                            Soft-pull evaluation mapped to Citi's own pre-qual criteria.
                          </p>
                          {/* Consumer Mockup */}
                          <div className="mb-4 max-w-xs mx-auto">
                            <img
                              src="/How it works/what users see/consumer/1.png"
                              alt="Consumer Prequalification View"
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                          <a href="https://www.citi.com/credit-cards/understanding-credit-cards/what-credit-card-do-i-qualify-for" 
                             target="_blank" rel="noopener noreferrer"
                             className="text-xs text-primary hover:underline flex items-center justify-center gap-1">
                            Reference: Citi qualification criteria →
                          </a>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>

                  {/* Step 2: Eligibility Confidence Bands */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start"
                  >
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-0 w-16 h-16 items-center justify-center z-10">
                      <div className="w-16 h-16 rounded-full bg-background border-4 border-foreground flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                          <span className="text-white font-bold text-sm">2</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="md:ml-24 flex-1">
                      <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-all">
                        <CardContent className="p-6 md:p-8 text-center">
                          <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center md:hidden">
                              <BarChart3 className="w-6 h-6 text-foreground" />
                            </div>
                            <h3 className="text-xl font-heading font-bold">2. Eligibility Confidence Bands</h3>
                          </div>
                          <p className="text-muted-foreground mb-3 leading-relaxed max-w-2xl mx-auto">
                            AI assigns a Citi-policy-aligned confidence score:
                          </p>
                          <div className="flex flex-wrap gap-2 mb-3 justify-center">
                            <Badge className="bg-foreground/10 text-foreground border-foreground/30">Very Likely</Badge>
                            <Badge className="bg-foreground/10 text-foreground border-foreground/30">Likely</Badge>
                            <Badge className="bg-foreground/10 text-foreground border-foreground/30">Borderline</Badge>
                            <Badge className="bg-foreground/10 text-foreground border-foreground/30">High Decline Risk</Badge>
                          </div>
                          {/* Business Mockup */}
                          <div className="mb-3 max-w-xs mx-auto">
                            <img
                              src="/21.png"
                              alt="Business Eligibility View"
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                          <p className="text-xs text-muted-foreground/80 italic max-w-2xl mx-auto">
                            No new rules introduced — mirrors what Citi underwriters already evaluate.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>

                  {/* Step 3: Multi-Product Mapping */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start"
                  >
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-0 w-16 h-16 items-center justify-center z-10">
                      <div className="w-16 h-16 rounded-full bg-background border-4 border-foreground flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                          <span className="text-white font-bold text-sm">3</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="md:ml-24 flex-1">
                      <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-all">
                        <CardContent className="p-6 md:p-8 text-center">
                          <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center md:hidden">
                              <CreditCard className="w-6 h-6 text-foreground" />
                            </div>
                            <h3 className="text-xl font-heading font-bold">3. Multi-Product Mapping</h3>
                          </div>
                          <p className="text-muted-foreground mb-3 leading-relaxed max-w-2xl mx-auto">
                            Engine tests user attributes against every Citi card's rules:
                          </p>
                          {/* Consumer Mockup showing multiple products */}
                          <div className="mb-3 max-w-xs mx-auto">
                            <img
                              src="/How it works/what users see/consumer/2.png"
                              alt="Multi-Product Mapping View"
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground max-w-md mx-auto">
                            <span>• Score thresholds</span>
                            <span>• Credit age</span>
                            <span>• Inquiry recency</span>
                            <span>• Payment history</span>
                            <span>• Utilization windows</span>
                            <span>• Income/DTI</span>
                            <span className="col-span-2">• 48-month bonus cycle considerations</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>

                  {/* Step 4: Decline-Recovery Logic */}
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
                          <span className="text-white font-bold text-sm">4</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="md:ml-24 flex-1">
                      <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-all">
                        <CardContent className="p-6 md:p-8 text-center">
                          <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center md:hidden">
                              <RefreshCw className="w-6 h-6 text-foreground" />
                            </div>
                            <h3 className="text-xl font-heading font-bold">4. Decline-Recovery Logic</h3>
                          </div>
                          <p className="text-muted-foreground mb-3 leading-relaxed max-w-2xl mx-auto">
                            If a user cannot be approved today, LumiqAI automatically generates:
                          </p>
                          {/* Business Mockup showing recovery flow */}
                          <div className="mb-3 max-w-xs mx-auto">
                            <img
                              src="/How it works/what users see/business/2.png"
                              alt="Decline Recovery View"
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                          <ul className="space-y-2 text-sm text-muted-foreground max-w-md mx-auto">
                            <li className="flex items-center justify-center gap-2">
                              <ChevronRight className="w-4 h-4 text-foreground shrink-0" />
                              <span>Reason Codes based on Citi criteria</span>
                            </li>
                            <li className="flex items-center justify-center gap-2">
                              <ChevronRight className="w-4 h-4 text-foreground shrink-0" />
                              <span>Steps to Achieve Approval</span>
                            </li>
                            <li className="flex items-center justify-center gap-2">
                              <ChevronRight className="w-4 h-4 text-foreground shrink-0" />
                              <span>Smart Re-Apply when conditions improve</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Compliance Alignment Statement */}
              <div className="mt-10 p-6 md:p-8 rounded-xl bg-primary/5 border border-primary/20 text-center">
                <h4 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Compliance Alignment</h4>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Designed with ECOA (Reg B) SPCP guidance in mind — credit extension without disparate impact, supported by explainability artifacts.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 5 — IMPACT ON CITI'S ECOSYSTEM */}
        <section id="impact" className="py-20 md:py-24 lg:py-32 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
                  IMPACT
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  Impact on Citi's Ecosystem
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  ROI that delivers measurable impact from day one
                </p>
              </div>

              {/* What Citi Gains */}
              <div className="mb-12">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-8 text-center">What Citi Gains</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6">
                  {[
                    { value: "+12–24%", label: "Approval Lift (Consumer)", icon: TrendingUp },
                    { value: "+18–30%", label: "Approval Lift (Business)", icon: Building2 },
                    { value: "–25–40%", label: "Manual Reviews Reduction", icon: FileText },
                    { value: "2–3×", label: "App Engagement Lift", icon: Smartphone },
                    { value: "+5–12%", label: "New Product Conversion", icon: Target },
                    { value: "$900M–$1.6B", label: "Annual Recaptured Revenue", icon: DollarSign },
                    { value: "Zero", label: "Customer Acquisition Cost", icon: Users },
                    { value: "Dual-Layer", label: "Consumer + SMB Intelligence", icon: Zap }
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
              <div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-8 text-center">What Citi Saves</h3>
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                  <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-all">
                    <CardContent className="p-8 text-center">
                      <div className="text-4xl font-bold text-foreground mb-2">$40M–$70M</div>
                      <p className="text-muted-foreground">Development cost avoided</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-all">
                    <CardContent className="p-8 text-center">
                      <div className="text-4xl font-bold text-foreground mb-2">18–24 mo</div>
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
            </motion.div>
          </div>
        </section>

        {/* SECTION 6 — SECURITY & GOVERNANCE */}
        <section id="security" className="py-20 md:py-24 lg:py-32 bg-background-secondary">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
                  SECURITY & GOVERNANCE
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  Security & Governance
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Citi-grade compliance and enterprise security
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {[
                  { icon: Shield, title: "Citi's Own Logic", desc: "Uses Citi's existing underwriting rules — not external rules" },
                  { icon: Lock, title: "Zero Risk Interference", desc: "Zero interference with risk appetite" },
                  { icon: FileText, title: "Full Audit Trail", desc: "Complete audit trail + explainability logs" },
                  { icon: CheckCircle2, title: "SOC2 Compliant", desc: "SOC2 + ISO27001 compliant" },
                  { icon: CreditCard, title: "PCI DSS", desc: "PCI DSS compliant data handling" },
                  { icon: Database, title: "Flexible Deployment", desc: "On-prem or VPC deployment options" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-center sm:justify-start">
                    <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-all w-full max-w-sm sm:max-w-none">
                      <CardContent className="p-5 sm:p-6 md:p-8">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 mx-auto sm:mx-0">
                          <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </div>
                        <h3 className="text-base sm:text-lg font-heading font-bold mb-2 text-center sm:text-left">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-center sm:text-left">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Minimal Integration Box */}
              <div className="mt-10 p-6 md:p-8 rounded-xl bg-primary/5 border border-primary/20 text-center">
                <h4 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Minimal Integration Required</h4>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Pilot requires offline data extracts only — no core system modifications, no UI changes, no integration with underwriting engines.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 7 — GLOBAL SCALABILITY */}
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
                  Built for Citi's worldwide footprint
                </p>
              </div>

              <Card className="bg-card border border-border shadow-sm">
                <CardContent className="p-8 md:p-10">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {[
                      { icon: Globe, label: "Scales to 160+ markets" },
                      { icon: Database, label: "Works with credit bureau heterogeneity" },
                      { icon: LineChart, label: "Merges global + local card eligibility logic" },
                      { icon: Users, label: "Supports multilingual UX" },
                      { icon: Zap, label: "Deploys as modular eligibility microservice" },
                      { icon: Shield, label: "Regional compliance adaptability" }
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

        {/* Global Reach */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Cross-Border Credit Intelligence
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Built for the only top-4 bank with a 160-country global network.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="rounded-2xl border border-border/50 p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Multi-Jurisdiction KYB</h3>
                <p className="text-sm text-muted-foreground">
                  Verify business credit across domestic and international bureaus. Automated compliance checks for businesses operating in 2+ countries.
                </p>
              </div>
              <div className="rounded-2xl border border-border/50 p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Trade Finance Scoring</h3>
                <p className="text-sm text-muted-foreground">
                  AI-powered import/export risk assessment. Credit intelligence for the $7.75 trillion global trade market, with 64% AI adoption rate.
                </p>
              </div>
              <div className="rounded-2xl border border-border/50 p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">TTS Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Credit decisioning that connects to Citi's $14.53B Treasury & Trade Solutions platform. Cross-sell treasury services alongside credit products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8 — CALL TO ACTION */}
        <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div {...fadeInUp} className="max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
                GET STARTED TODAY
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                Install Citi's missing credit intelligence layer in 90 days.
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
                Consumer + Business. Dual-layer. First-mover advantage.
              </p>
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 sm:px-10 py-5 sm:py-7 text-lg sm:text-xl shadow-lg"
                asChild
              >
                <Link to="/pilot">
                  Start Citi Pilot
                  <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
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
              Start Citi Pilot
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
