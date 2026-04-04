import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InvestorDayCountdown } from "@/components/InvestorDayCountdown";
import { ApiResponsePreview } from "@/components/ApiResponsePreview";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28 lg:pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-[1400px] mx-auto">
          {/* Left — Copy */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading leading-tight tracking-tight text-slate-900"
            >
              <span className="text-blue-500">Same-Day</span> Credit Decisions for Commercial Lending
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-slate-600 max-w-xl"
            >
              83ms pre-qualification across revolving credit, term loans, commercial cards, and letters of credit. 7 intelligence outputs from one API call.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-start gap-3"
            >
              <Link to="/pilot">
                <Button size="lg" className="gap-2 px-6 py-5 text-base font-semibold bg-blue-500 hover:bg-blue-600">
                  Run the 90-Day Pilot
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a
                href="https://citi.demo.futeurcredx.com/demo/citi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="gap-2 px-6 py-5 text-base font-semibold border-slate-300 text-slate-700 hover:bg-slate-50">
                  See 83ms Scoring Live
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <InvestorDayCountdown />
            </motion.div>
          </div>

          {/* Right — API Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <ApiResponsePreview />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
