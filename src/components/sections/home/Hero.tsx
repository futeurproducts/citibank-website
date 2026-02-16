import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28 lg:pt-32 bg-gradient-to-b from-primary/10 to-background">
      <div className="container mx-auto px-6">
        <div className="space-y-8 text-center max-w-[1600px] mx-auto">
          <div className="space-y-4">
            {/* Heading */}
            <h1 className="mx-auto max-w-5xl text-5xl md:text-7xl lg:text-8xl font-heading leading-tight tracking-tight text-foreground">
              Citi is the only top-4 bank{" "}
              <span className="text-primary">without</span> a built-in credit intelligence layer.
            </h1>

            {/* Description */}
            <p className="mx-auto max-w-3xl text-lg font-body text-foreground/70">
              Unlock 15–20% more approvals from declined applications — without elevating risk.
              Built to align with Reg B (ECOA) and SPCP frameworks.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/how-it-works">
              <Button size="lg" variant="default" className="gap-2 px-8 py-6 text-lg font-semibold">
                See how it works in 90 seconds
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/pilot#pilot-form">
              <Button size="lg" variant="outline" className="gap-2 px-8 py-6 text-lg font-semibold">
                Explore pilot for Q1 2026
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
          </div>
        </div>
      </div>
      
      {/* Strategic Gap Content - Left Text Block Only */}
      <div className="container mx-auto px-6 mt-16 md:mt-24">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Strategic Gap Body Text */}
            <div className="space-y-4 text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-5">
              <p className="font-medium text-foreground">
                Citi customers cannot:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>View their real credit score</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Prequalify instantly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>See predictive card or loan pathways</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Activate offers inside the Citi App</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Build or strengthen thin credit files</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Recover from declines with guided steps</span>
                </li>
              </ul>
              <p className="text-primary font-semibold pt-3">
                This single missing capability breaks Citi's funnel.
              </p>
              <p className="text-sm">
                Competitors intercept intent before Citi even sees the demand signal — using Citi's own customers' open-banking data.
              </p>
              <p className="text-foreground font-medium pt-2">
                LUMIQ AI can close this gap with a turnkey Credit Journey™ that integrates within 90 days.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

