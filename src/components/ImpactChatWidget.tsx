import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, TrendingUp, DollarSign, Zap, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ImpactChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Widget is always visible, but can be toggled
    setIsVisible(true);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {!isOpen ? (
            // Collapsed state - Chat bubble
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://citi.demo.futeurcredx.com/demo/citi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground rounded-full px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm">See 83ms Demo &rarr;</div>
                  <div className="text-xs opacity-90">Live credit scoring</div>
                </div>
              </a>
            </motion.div>
          ) : (
            // Expanded state - Full impact summary
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-card border border-border rounded-2xl shadow-2xl w-[90vw] max-w-md max-h-[80vh] overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="bg-primary text-primary-foreground px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">LumiqAI Demo</h3>
                    <p className="text-xs opacity-90">What Citi Gains</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto p-6 space-y-4">
                {/* Consumer Lift */}
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-foreground/10 border border-foreground/20 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-foreground" />
                      </div>
                      <h4 className="font-bold text-foreground">Consumer Lift</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                        <span><span className="font-bold text-foreground">+12–24%</span> approval lift</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                        <span><span className="font-bold text-foreground">+25–40%</span> fewer manual reviews</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                        <span><span className="font-bold text-foreground">2–3×</span> engagement</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                        <span><span className="font-bold text-foreground">+5–10%</span> card conversions</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Business Lift */}
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-foreground/10 border border-foreground/20 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-foreground" />
                      </div>
                      <h4 className="font-bold text-foreground">Business Lift</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                        <span><span className="font-bold text-foreground">+18–30%</span> approval lift</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                        <span><span className="font-bold text-foreground">+35–50%</span> fewer manual reviews</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                        <span><span className="font-bold text-foreground">+5–12%</span> SMB conversions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                        <span><span className="font-bold text-foreground">+$300M–$700M</span> uplift</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Total Financial Impact */}
                <Card className="border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-foreground/10 border border-foreground/20 flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-foreground" />
                      </div>
                      <h4 className="font-bold text-foreground">Total Financial Impact</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                        <span><span className="font-bold text-foreground">+$900M–$1.6B</span> annual uplift</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                        <span><span className="font-bold text-foreground">Zero CAC</span></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                        <span>First-mover advantage in credit intelligence</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Development Savings */}
                <Card className="border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-foreground/10 border border-foreground/20 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-foreground" />
                      </div>
                      <h4 className="font-bold text-foreground">Development Savings</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                        <span>Save <span className="font-bold text-foreground">$40M–$70M</span> in build cost</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                        <span>Save <span className="font-bold text-foreground">18–24 months</span> of internal development</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                        <span>LumiqAI deploys in <span className="font-bold text-foreground">90 days</span></span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

