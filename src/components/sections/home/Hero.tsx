import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Zap, DollarSign, FileSignature, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28 lg:pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
      <div className="container mx-auto px-6">
        <div className="space-y-8 text-center max-w-[1600px] mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-primary">
              Powering Citi's AI-First Commercial Lending Transformation
            </span>
          </motion.div>

          <div className="space-y-4">
            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto max-w-5xl text-5xl md:text-7xl lg:text-8xl font-heading leading-tight tracking-tight text-foreground"
            >
              Credit Intelligence for{" "}
              <span className="text-primary">Citi's Digital Commercial Bank</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-3xl text-lg font-body text-foreground/70"
            >
              From digital credit applications on CitiDirect to cross-border eligibility scoring
              to CRA-compliant community lending — seven intelligence outputs from one API call,
              powering every decision across CCB's digital lending platform.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mx-auto max-w-3xl text-sm font-body text-foreground/50"
            >
              Sources: CCB Digitizes Lending (Jun 2025), Outstanding CRA Rating (May 2025)
            </motion.p>
          </div>

          {/* Metrics Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
          >
            {[
              { icon: Zap, label: "83ms Scoring Response Time" },
              { icon: DollarSign, label: "Up to $10M Per Digital Credit Application" },
              { icon: FileSignature, label: "End-to-End Digital Signatures on CitiDirect" },
              { icon: Building2, label: "$145.9B CRA-Allocated Lending Activity" },
            ].map((pill, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-card border border-border text-sm text-muted-foreground"
              >
                <pill.icon className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{pill.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://citi.demo.futeurcredx.com/integration-preview?bank=citi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="default" className="gap-2 px-8 py-6 text-lg font-semibold">
                Explore the Credit Intelligence Engine
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <Link to="/model-governance-framework">
              <Button size="lg" variant="outline" className="gap-2 px-8 py-6 text-lg font-semibold">
                View the 90-Day Pilot Framework
              </Button>
            </Link>
            <a
              href="https://sandbox.futeurcredx.com/demo/citi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="gap-2 px-8 py-6 text-lg font-semibold border-primary/40 text-primary hover:bg-primary/10">
                Try Live Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
