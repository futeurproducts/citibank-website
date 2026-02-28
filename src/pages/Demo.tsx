import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Brain, 
  Smartphone, 
  BarChart3, 
  Shield, 
  ChevronDown, 
  ChevronUp,
  ArrowRight,
  CheckCircle2,
  Users,
  Building2,
  Zap,
  Eye,
  Target,
  RefreshCw,
  Globe,
  TrendingUp,
  XCircle,
  Play,
  FileCheck,
  CreditCard
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

// Competitor comparison data
const competitorData = [
  { bank: "Chase", consumer: "Credit Journey", business: false, prequal: true, pathways: true },
  { bank: "Capital One", consumer: "CreditWise", business: false, prequal: true, pathways: true },
  { bank: "Wells Fargo", consumer: "Close Up", business: false, prequal: true, pathways: true },
  { bank: "AmEx", consumer: "Internal scoring", business: "Business logic only", prequal: true, pathways: true },
  { bank: "Citi (today)", consumer: false, business: false, prequal: false, pathways: false }
];

const consumerFeatures = [
  { title: "Real-Time Credit Score View", description: "Displays up-to-date VantageScore inside CitiDirect for commercial lending decisions." },
  { title: "AI Eligibility Engine (CCB-Aligned)", description: "Runs CCB's underwriting criteria. Evaluates Score, Utilization, Cash Flow, Risk Tier, and Lifecycle Segment across revolving credit, term loans, and commercial cards." },
  { title: "Confidence Bands", description: "High / Moderate / Low approval likelihood for each commercial product." },
  { title: "Predictive Pathways", description: "Shows steps required to move into 'Approved' range for digital credit applications." },
  { title: "1-Tap Apply", description: "Flows directly into CitiDirect's Digital Credit Application — up to $10M per application." }
];

const businessFeatures = [
  { title: "Real-Time Business Credit Score", description: "Integrated business credit visibility for commercial clients across CCB's portfolio." },
  { title: "Blended Owner FICO + Business Attributes", description: "Combined scoring model for accurate eligibility across revolving credit, term loans, commercial cards, and letters of credit." },
  { title: "AI Prequalification", description: "Digital credit pre-qualification mapped to CCB's full commercial product shelf — up to $10M per application." },
  { title: "Cross-Border Eligibility", description: "Eligibility scoring aligned with Citi Token Services across 94 markets and 300 clearing networks." },
  { title: "Decline-Recovery Guidance", description: "Explains exactly how to improve approval odds using CCB's underwriting standards." }
];

const strategicPoints = [
  { title: "Shows the Credit Intelligence Gap", description: "Citi's Stylus Workspaces, CitiDirect, and Token Services are all live — but none have a unified credit intelligence layer. This demo shows what that layer looks like." },
  { title: "Shows Digital Lending Pre-Qualification", description: "83ms pre-qualification before a business submits a Digital Credit Application on CitiDirect. Revolving credit, term loans, commercial cards, LOC — all scored in real time." },
  { title: "Demonstrates 90-Day Deployment", description: "No major rebuilds. No multi-year roadmaps. No large teams. Just CitiDirect integration + risk review + go-live." },
  { title: "Shows Built-In Compliance", description: "SR 11-7, Fair Lending, Model Governance, CRA, Full audit logs, Soft-pull only, No new underwriting rules. Built for ECOA, OCC, CRA, and MRM workflows." }
];

const faqs = [
  {
    question: "What will I see in the demo?",
    answer: "A fully functional credit intelligence module showing digital credit pre-qualification across CCB's commercial portfolio. You'll see real-time scoring, AI eligibility for revolving credit, term loans, commercial cards, and letters of credit — plus cross-border eligibility scoring."
  },
  {
    question: "Is this built on Citi's actual criteria?",
    answer: "Yes. The eligibility engine uses CCB's underwriting standards. No external modeling — only Citi's own logic, automated and delivered as structured JSON signals."
  },
  {
    question: "How does LUMIQ AI integrate with CitiDirect and Stylus Workspaces?",
    answer: "LumiqAI plugs directly into CitiDirect's Digital Credit Application platform. Structured JSON signals are also designed for native consumption by Stylus Workspaces, Citi's proprietary agentic AI platform — credit pre-qualification, risk flags, product matching, and adverse action codes delivered as structured data."
  },
  {
    question: "How quickly can this be deployed?",
    answer: "90 days. CitiDirect integration + risk review + go-live. No major rebuilds, no multi-year roadmaps, no large teams required."
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left group"
      >
        <span className="text-sm font-medium text-gray-900 group-hover:text-[#003B70] transition-colors">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="h-4 w-4 text-gray-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-4 w-4 text-gray-400 flex-shrink-0" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-4 text-gray-600 text-sm leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

export default function Demo() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003B70] via-[#002850] to-[#001830]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(51,204,255,0.15),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-[#33CCFF]/20 text-[#33CCFF] border-[#33CCFF]/30 px-4 py-2">
              CITI COMMERCIAL BANK DEMO
            </Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
              See the Credit Intelligence Layer{" "}
              <span className="text-[#33CCFF]">in Action</span>
            </h1>
            
            <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              A fully functional credit intelligence module that plugs directly into CitiDirect's commercial banking experience — digital credit pre-qualification across CCB's commercial portfolio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#33CCFF] hover:bg-[#29b8e8] text-[#003B70] font-semibold"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 h-4 w-4" />
                Watch the Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Request Technical Spec
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1 - What This Demo Shows */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-10">
            <div className="text-xs font-bold text-[#003B70] tracking-wider mb-2">01 — WHAT THIS DEMO SHOWS</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Dual Credit Intelligence Layers
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Digital Lending Layer */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="h-full bg-white border-0 shadow-lg overflow-hidden">
                <div className="p-4 bg-[#33CCFF]/10 border-b border-[#33CCFF]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#33CCFF] flex items-center justify-center">
                      <Users className="h-4 w-4 text-[#003B70]" />
                    </div>
                    <h3 className="font-bold text-[#003B70]">Digital Lending Intelligence Layer</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {[
                      "Real-time credit scoring inside CitiDirect",
                      "CCB-aligned prequalification for revolving credit, term loans, commercial cards, and LOC",
                      "Eligibility Confidence Bands using CCB's underwriting standards",
                      "Predictive approval pathways for digital credit applications",
                      "Instant Apply flow into CitiDirect's Digital Credit Application — up to $10M",
                      "Decline-recovery guidance based on CCB underwriting rules"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-[#33CCFF] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Cross-Border & Commercial Layer */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="h-full bg-white border-0 shadow-lg overflow-hidden">
                <div className="p-4 bg-[#F5A623]/10 border-b border-[#F5A623]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#F5A623] flex items-center justify-center">
                      <Building2 className="h-4 w-4 text-[#003B70]" />
                    </div>
                    <h3 className="font-bold text-[#003B70]">Cross-Border & Commercial Intelligence Layer</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {[
                      "Real-time Business Credit Score across CCB's commercial portfolio",
                      "Combined Owner FICO + Business attributes for commercial lending",
                      "Cross-border eligibility scoring across 94 markets via Token Services alignment",
                      "Trade finance credit assessment for the $7.75T supercycle",
                      "CRA-compliant community lending analytics",
                      "Structured JSON signals for native Stylus Workspaces consumption"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-[#F5A623] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="mt-8">
            <Card className="bg-[#003B70] border-0">
              <CardContent className="p-6 text-center">
                <p className="text-white text-lg">
                  <span className="font-bold">Citi becomes the first major bank</span>{" "}
                  <span className="text-white/80">with digital lending + cross-border credit intelligence natively embedded in its commercial banking platform.</span>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 2 & 3 - Consumer & Business Demo Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Consumer Demo */}
            <motion.div {...fadeInUp}>
              <div className="text-xs font-bold text-[#003B70] tracking-wider mb-2">03 — DIGITAL LENDING DEMO</div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">What the Digital Lending Demo Shows</h3>
              
              <div className="rounded-xl bg-gradient-to-br from-[#003B70]/10 to-[#33CCFF]/5 border border-[#003B70]/20 flex items-center justify-center mb-6 p-4">
                <img src="/images/3-phone-consumer.png" alt="CitiDirect Digital Lending Intelligence Mockup" className="w-full h-auto rounded-lg" />
              </div>
              
              <div className="space-y-4">
                {consumerFeatures.map((feature, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#33CCFF] flex items-center justify-center flex-shrink-0 text-xs font-bold text-[#003B70]">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                      <p className="text-xs text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Business Demo */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="text-xs font-bold text-[#003B70] tracking-wider mb-2">04 — CROSS-BORDER & COMMERCIAL DEMO</div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">What the Cross-Border Demo Shows</h3>
              
              <div className="rounded-xl bg-gradient-to-br from-[#F5A623]/10 to-[#F5A623]/5 border border-[#F5A623]/20 flex items-center justify-center mb-6 p-4">
                <img src="/images/3-phones-business.png" alt="Citi Cross-Border Commercial Intelligence Mockup" className="w-full h-auto rounded-lg" />
              </div>
              
              <div className="space-y-4">
                {businessFeatures.map((feature, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#F5A623] flex items-center justify-center flex-shrink-0 text-xs font-bold text-[#003B70]">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                      <p className="text-xs text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5 - Strategic Power */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-10">
            <div className="text-xs font-bold text-[#003B70] tracking-wider mb-2">05 — STRATEGIC POWER</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Why This Demo Changes Everything
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {strategicPoints.map((point, idx) => (
              <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.1 }}>
                <Card className="h-full bg-white border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#003B70] flex items-center justify-center flex-shrink-0 text-sm font-bold text-[#33CCFF]">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">{point.title}</h3>
                        <p className="text-sm text-gray-600">{point.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 - Demo Data Story (Impact) */}
      <section className="py-16 bg-gradient-to-b from-[#0B0F14] to-[#131920]">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-10 text-center">
            <div className="text-xs font-bold text-[#33CCFF] tracking-wider mb-2">06 — THE DEMO DATA STORY</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Each screen is built to show revenue lift, not just UX.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Consumer Impact */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="h-full bg-[#111821] border-[#33CCFF]/30">
                <CardContent className="p-6">
                  <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-[#33CCFF]" />
                    Digital Lending Impact
                  </h3>
                  <div className="space-y-3">
                    {[
                      { metric: "+15–25%", label: "Application conversion lift" },
                      { metric: "+25–40%", label: "Fewer manual reviews" },
                      { metric: "83ms", label: "Pre-qualification speed" },
                      { metric: "$10M", label: "Per digital credit application" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 border-b border-[#1E2833] last:border-0">
                        <span className="text-xs text-gray-400">{item.label}</span>
                        <span className="text-sm font-bold text-[#33CCFF]">{item.metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Business Impact */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="h-full bg-[#111821] border-[#F5A623]/30">
                <CardContent className="p-6">
                  <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-[#F5A623]" />
                    Cross-Border & Trade Finance Impact
                  </h3>
                  <div className="space-y-3">
                    {[
                      { metric: "94", label: "Markets with cross-border scoring" },
                      { metric: "$7.75T", label: "Capex supercycle opportunity" },
                      { metric: "+18%", label: "AI adoption in trade finance" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 border-b border-[#1E2833] last:border-0">
                        <span className="text-xs text-gray-400">{item.label}</span>
                        <span className="text-sm font-bold text-[#F5A623]">{item.metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Total Impact */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <Card className="h-full bg-gradient-to-br from-green-500/20 to-green-500/5 border-green-500/30">
                <CardContent className="p-6">
                  <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-400" />
                    Total Annual Impact
                  </h3>
                  <div className="text-center py-4">
                    <p className="text-4xl font-bold text-green-400 mb-2">$900M–$1.6B</p>
                    <p className="text-sm text-gray-400">per year</p>
                    <p className="text-xs text-gray-500 mt-4">Based on CCB digital lending volume + cross-border payment throughput + CRA-allocated activity</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 7 - Global View */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-10">
            <div className="text-xs font-bold text-[#003B70] tracking-wider mb-2">07 — GLOBAL VIEW</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              This demo is not U.S.-locked.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div {...fadeInUp}>
              <p className="text-gray-600 mb-6">Citi can deploy this:</p>
              <ul className="space-y-3">
                {[
                  "In APAC with CIBIL/CRIF rules",
                  "In EMEA with Equifax/Experian mapping",
                  "In LATAM with bureau-level adaptation",
                  "Across global card and lending portfolios"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-[#003B70] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-lg font-semibold text-[#003B70]">
                This becomes Citi's global credit intelligence layer.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="bg-[#003B70] border-0">
                <CardContent className="p-8 text-center">
                  <Globe className="h-16 w-16 text-[#33CCFF] mx-auto mb-4" />
                  <p className="text-white text-lg font-bold mb-2">160+ Markets</p>
                  <p className="text-white/70 text-sm">
                    A global credit intelligence platform, not a single-market feature.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div {...fadeInUp} className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900">Common Questions</h2>
            </motion.div>

            <Card className="bg-white border-0 shadow-md">
              <CardContent className="p-6">
                {faqs.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 8 - CTA */}
      <section id="booking" className="py-16 bg-gradient-to-br from-[#003B70] via-[#002850] to-[#001830]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Watch the Demo
              </h2>
              <p className="text-white/70 mb-6">
                See the credit intelligence layer built for CitiDirect's Digital Credit Application platform, aligned with Stylus Workspaces, and ready for CCB's commercial lending portfolio.
              </p>
              <p className="text-lg text-[#33CCFF] font-semibold">
                Citi has never had — until now.
              </p>
            </motion.div>

            <motion.div {...fadeInUp}>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-8">
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <Input 
                      placeholder="Full name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-11"
                    />
                    <Input 
                      placeholder="Title" 
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-11"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <Input 
                      placeholder="Company" 
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-11"
                    />
                    <Input 
                      type="email" 
                      placeholder="Work email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-11"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg"
                      className="flex-1 bg-[#33CCFF] hover:bg-[#29b8e8] text-[#003B70] font-semibold"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Schedule Demo
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="flex-1 border-white/30 text-white hover:bg-white/10"
                    >
                      Request Technical Spec
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
