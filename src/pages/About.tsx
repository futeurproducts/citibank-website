import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ExternalLink,
  Target,
  Shield,
  TrendingUp,
  Users,
  Lightbulb,
  ArrowRight,
  Database,
  Brain,
  BarChart3,
  Globe,
  Building2,
  Landmark,
  Quote,
  UserCircle,
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";

const citiLeadership = [
  {
    name: "Jane Fraser",
    title: "CEO + Board Chair",
    initiative:
      '"Two-thirds of Transformation programs at or near target state." Simplifying the organization, modernizing infrastructure, and positioning Citi for sustainable growth.',
    source: "Jane Fraser Elected Board Chair (Oct 22, 2025)",
  },
  {
    name: "David Griffiths",
    title: "Chief Technology Officer",
    initiative:
      'Stylus Workspaces -- Citi\'s proprietary agentic AI platform "turbocharging productivity" for thousands of employees. LumiqAI delivers the credit intelligence module Stylus consumes natively.',
    source: "Citi Stylus Workspaces with Agentic AI (Sep 22, 2025)",
  },
  {
    name: "Tasnim Ghiawadwala",
    title: "Head of Citi Commercial Bank (CCB)",
    initiative:
      "Launched Digital Credit Applications on CitiDirect -- revolving credit, term loans, commercial cards, letters of credit, up to $10M per application with end-to-end electronic signatures.",
    source: "CCB Digitizes Lending (Jun 25, 2025)",
  },
  {
    name: "Wyatt Crowell",
    title: "Head of North America CCB",
    initiative:
      'Hired from HSBC to lead NA commercial banking. Focused on "deepening client relationships and innovative solutions" -- territory intelligence and pre-scoring deliver that from day one.',
    source: "Wyatt Crowell Appointed Head of NA CCB (May 14, 2025)",
  },
  {
    name: "Debopama Sen",
    title: "Head of Payments",
    initiative:
      "Citi processes payments across 300 clearing networks in 94 markets. Token Services expanding to Euro/Dublin. Cross-border credit intelligence aligned with 24/7 multi-currency liquidity.",
    source: "Citi + Coinbase Digital Asset Payments (Oct 27, 2025)",
  },
  {
    name: "Adoniro Cestari",
    title: "Global Head of Trade & Working Capital",
    initiative:
      '$7.75T global capex supercycle by 2030. LatAm exports to South Asia/ASEAN up 82%. 18% AI adoption increase among large corporate trade finance clients. LumiqAI scores supply chain credit needs at scale.',
    source: "Citi Supply Chain Financing Report (Feb 20, 2026)",
  },
  {
    name: "Edward Skyler",
    title: "Head of Enterprise Services",
    initiative:
      "2nd consecutive Outstanding CRA rating. $145.9B allocated to retail/CRA activities. $82.9B mortgage lending. $13.5B small business/farm lending. $1.1B community development lending.",
    source: "Citi Outstanding CRA Rating (May 1, 2025)",
  },
];

function About() {
  useEffect(() => {
    document.title =
      "About LUMIQ AI for Citi -- Credit Intelligence for Digital Commercial Lending";
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
            LUMIQ AI for Citi
          </motion.div>

          <h1 className="font-heading text-[32px] sm:text-[40px] md:text-[44px] lg:text-[52px] xl:text-[68px] 2xl:text-[76px] font-bold mb-6 sm:mb-8 leading-[1.1] text-white">
            About LUMIQ AI
          </h1>

          <p className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-white/95 mb-4 sm:mb-5 leading-relaxed font-semibold max-w-2xl">
            The Credit Intelligence Layer for Citi's digital commercial lending
            transformation.
          </p>

          <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg text-white/80 mb-8 sm:mb-12 leading-relaxed max-w-2xl">
            Built by FuteurCredX, LUMIQ AI is an enterprise credit intelligence
            platform powering digital credit pre-qualification, cross-border
            eligibility scoring, and CRA-compliant community lending analytics
            for banks transforming commercial lending.
          </p>
        </div>
      </HeroBackground>

      {/* Problem Statement + Credibility */}
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
              Why LumiqAI Exists
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              LumiqAI exists because banks digitizing commercial lending need
              intelligence across five fronts simultaneously: digital credit
              application pre-scoring (CitiDirect), cross-border eligibility
              (Token Services), trade finance credit assessment ($7.75T
              supercycle), community lending compliance (CRA Outstanding), and
              AI-native signal delivery (Stylus Workspaces).
            </p>
          </motion.div>

          {/* Three Credibility Boxes */}
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
                    <Brain className="w-7 h-7 text-primary" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Stylus Workspaces Needs Credit Signals
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    David Griffiths, Citi CTO, is rolling out agentic AI to
                    thousands of employees through Stylus Workspaces. LumiqAI
                    delivers the credit intelligence module -- structured JSON
                    signals that Stylus consumes natively for commercial lending
                    workflows.
                  </p>
                  <p className="text-xs text-muted-foreground/70 italic">
                    Source: Citi Stylus Workspaces with Agentic AI (Sep 22,
                    2025)
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
                    <Database
                      className="w-7 h-7 text-secondary"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Digital Lending Is Live on CitiDirect
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Tasnim Ghiawadwala's CCB team launched Digital Credit
                    Applications -- revolving credit, term loans, commercial
                    cards, letters of credit, up to $10M per application with
                    end-to-end electronic signatures. LumiqAI adds 83ms
                    pre-qualification before the application is submitted.
                  </p>
                  <p className="text-xs text-muted-foreground/70 italic">
                    Source: CCB Digitizes Lending (Jun 25, 2025)
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
                    <Landmark
                      className="w-7 h-7 text-primary"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Outstanding CRA + $60B Housing Blueprint
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    2nd consecutive Outstanding CRA rating. $145.9B allocated to
                    retail/CRA activities. $60B housing commitment for 250,000
                    units. Jane Fraser: supporting "the homeownership dreams of
                    millions." LumiqAI powers CRA-compliant credit intelligence
                    for every community lending decision.
                  </p>
                  <p className="text-xs text-muted-foreground/70 italic">
                    Sources: CRA Rating (May 2025), $60B Housing Blueprint (Feb
                    2026)
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Blockquote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8 sm:p-10">
                <div className="flex gap-4">
                  <Quote className="w-8 h-8 text-primary/40 flex-shrink-0 mt-1" />
                  <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed italic">
                    "Banks digitizing commercial lending across 94 markets need
                    credit intelligence that moves at the speed of CitiDirect --
                    not 18-month internal build cycles."
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Named Leadership Section */}
      <section className="py-16 md:py-24 bg-background-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Citi Leadership
              </span>
            </div>
            <h2 className="font-heading text-[36px] md:text-[48px] font-bold mb-4 text-foreground">
              Built for the Teams Transforming Citi
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every capability in LumiqAI maps to a named Citi executive and a
              live initiative -- sourced from Citi press releases, May 2025
              through February 2026.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {citiLeadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                        <UserCircle
                          className="w-5 h-5 text-primary"
                          strokeWidth={2}
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-foreground leading-tight">
                          {leader.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {leader.title}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {leader.initiative}
                    </p>
                    <p className="text-xs text-muted-foreground/60 italic">
                      {leader.source}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do -- Citi Capabilities */}
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
              AI-powered credit intelligence built for Citi's digital commercial
              lending platform -- from pre-qualification to portfolio monitoring
              across 94 markets.
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
                      <Database
                        className="w-7 h-7 text-primary"
                        strokeWidth={2.5}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        Digital Credit Pre-Qualification
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        83ms full scoring pipeline. Pre-score every business
                        before they submit a Digital Credit Application on
                        CitiDirect. Revolving credit, term loans, commercial
                        cards, letters of credit -- up to $10M per application.
                        Owner FICO, business credit scores, and behavioral
                        signals unified in a single view.
                      </p>
                      <p className="text-sm text-muted-foreground italic">
                        Complements CitiDirect's electronic signature workflow
                        with instant pre-qualification -- zero re-keying.
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
                      <Globe
                        className="w-7 h-7 text-secondary"
                        strokeWidth={2.5}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        Cross-Border Portfolio Intelligence
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        Monitor your CCB book across 94 markets and 300 clearing
                        networks. Cross-sell signals, early warning, and
                        eligibility scoring aligned with Citi Token Services'
                        24/7 multi-currency liquidity. Trade finance credit
                        assessment for the $7.75T capex supercycle.
                      </p>
                      <p className="text-sm text-muted-foreground italic">
                        Credit governance for cross-border lending decisions --
                        every assessment logged, every signal auditable.
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
                      <BarChart3
                        className="w-7 h-7 text-primary"
                        strokeWidth={2.5}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        CRA & Community Lending Analytics
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        Map CRA-eligible zones across Citi's $145.9B allocated
                        activity. SPCP-compliant scoring for the $60B housing
                        commitment. Branch-level impact dashboards supporting
                        Citi's position as #1 U.S. Affordable Housing Lender for
                        the 15th consecutive year.
                      </p>
                      <p className="text-sm text-muted-foreground italic">
                        Credit-building intelligence for underserved communities
                        -- supporting 250,000 housing units over 5 years.
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
              LUMIQ AI for Citi Commercial Bank -- backed by comprehensive
              technical documentation and integration support.
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
                  <CardTitle className="text-2xl">
                    LUMIQ AI for Citi Commercial Bank
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 sm:p-8 pt-0 flex flex-col flex-1">
                  <div className="space-y-4 flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Enterprise-grade credit intelligence designed for Citi's
                      digital commercial lending platform. Integrates with
                      CitiDirect, aligns with Stylus Workspaces, and supports
                      CRA-compliant decisioning via RESTful API.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <TrendingUp
                          className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                          strokeWidth={2.5}
                        />
                        <p className="text-sm text-muted-foreground">
                          83ms pre-qualification for Digital Credit Applications
                          on CitiDirect
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
                          Structured JSON signals for Stylus Workspaces
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
                      href="https://citi.demo.futeurcredx.com/integration-preview?bank=citi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Explore Citi Demo
                      <ExternalLink
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
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Documentation Hub
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 sm:p-8 pt-0 flex flex-col flex-1">
                  <div className="space-y-4 flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Technical documentation and integration resources for
                      engineering teams implementing LumiqAI within Citi's
                      digital infrastructure -- CitiDirect, Stylus Workspaces,
                      and Token Services alignment.
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
                          Stylus Workspaces integration patterns and JSON signal
                          schemas
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

      {/* Why We Built This -- Citi Transformation Story */}
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
              Why This Matters for Citi
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Citi is executing a 5-front transformation. LumiqAI is the credit
              intelligence layer that connects all five.
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
                  <h3 className="font-bold text-xl mb-3 text-foreground">
                    AI-First Infrastructure
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Citi's Stylus Workspaces is rolling out agentic AI to
                    thousands of employees. The Sakana AI investment brings
                    nature-inspired financial AI models. But AI platforms need
                    structured data. LumiqAI produces the credit intelligence
                    signals -- JSON, not dashboards -- that Stylus Workspaces
                    consumes natively for commercial lending workflows.
                  </p>
                  <p className="text-muted-foreground text-sm italic">
                    We generate the signals. Stylus renders the narrative.
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
                  <h3 className="font-bold text-xl mb-3 text-foreground">
                    Digital Commercial Lending at Scale
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    CitiDirect's Digital Credit Application platform is live --
                    revolving credit, term loans, commercial cards, letters of
                    credit, up to $10M per application. But digital applications
                    without pre-qualification intelligence create friction. 83ms
                    scoring eliminates the gap between application and decision.
                  </p>
                  <p className="text-muted-foreground text-sm italic">
                    Tasnim Ghiawadwala's CCB team built the digital rails.
                    LumiqAI adds the intelligence layer.
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
                  <h3 className="font-bold text-xl mb-3 text-foreground">
                    Community Impact at Institutional Scale
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    2nd consecutive Outstanding CRA rating. $145.9B in
                    retail/CRA activities. $60B housing commitment for 250,000
                    units. $82.9B in mortgage lending. $13.5B in small
                    business/farm lending. Citi is the #1 U.S. Affordable
                    Housing Lender for 15 consecutive years. LumiqAI maps
                    SPCP-eligible zones, generates CRA-supportive analytics, and
                    supports credit-building intelligence for underserved
                    communities.
                  </p>
                  <p className="text-muted-foreground text-sm italic">
                    Jane Fraser: supporting "the homeownership dreams of
                    millions of Americans."
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Citi -- Strategic Alignment */}
      <section className="py-16 md:py-24 bg-background-secondary">
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
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Strategic Alignment
              </span>
            </div>
            <h2 className="font-heading text-[36px] md:text-[48px] font-bold mb-6 text-foreground">
              Five Fronts. One Intelligence Layer.
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Citi is executing a{" "}
                <strong className="text-foreground">
                  5-front transformation
                </strong>
                : AI (Stylus Workspaces / Sakana), digital commercial lending
                (CCB / CitiDirect), cross-border payments (Token Services /
                Coinbase), trade finance ($7.75T supercycle), and community
                impact ($60B housing + CRA Outstanding).
              </p>
              <p>
                LumiqAI is the{" "}
                <strong className="text-foreground">
                  credit intelligence layer
                </strong>{" "}
                that connects all five -- pre-qualifying businesses before they
                enter CitiDirect, scoring cross-border eligibility alongside
                Token Services payments, enabling SPCP-compliant lending for the
                $60B housing commitment, and plugging into Stylus Workspaces as
                the credit AI module.
              </p>
              <p>
                With Jane Fraser's Transformation{" "}
                <strong className="text-foreground">
                  "two-thirds at or near target state"
                </strong>
                , the infrastructure is converging. Digital lending, AI
                platforms, cross-border payments -- all reaching maturity
                simultaneously. The missing piece is credit intelligence that
                works across all five fronts from day one.
              </p>
            </div>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link to="/pilot#pilot-form">
                  Explore the $150K Pilot
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
              Explore LumiqAI
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              See how LumiqAI delivers credit intelligence for Citi's digital
              commercial lending transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-10 py-7 h-auto" asChild>
                <a
                  href="https://citi.demo.futeurcredx.com/integration-preview?bank=citi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Citi Demo
                  <ExternalLink
                    className="ml-2 w-5 h-5"
                    strokeWidth={2.5}
                  />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-7 h-auto"
                asChild
              >
                <a
                  href="https://docs.futeurcredx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Documentation
                  <ExternalLink
                    className="ml-2 w-5 h-5"
                    strokeWidth={2.5}
                  />
                </a>
              </Button>
            </div>
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
              Start a 90-Day Pilot Alongside Citi's Digital Lending Rollout
            </h2>
            <p className="text-xl text-white/95 mb-10 leading-relaxed">
              $150,000 validates credit intelligence across CCB's digital
              lending platform -- less than a single RM's annual compensation.
              Measured against pre-agreed KPIs. Within your risk framework.
            </p>

            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-primary font-bold text-xl px-12 py-8 h-auto shadow-xl"
              asChild
            >
              <Link to="/pilot#pilot-form">
                Start the $150K Pilot
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
