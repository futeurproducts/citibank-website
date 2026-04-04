import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  AlertCircle,
  Target,
  FileText,
  ChevronRight,
} from "lucide-react";

const capabilities = [
  {
    id: "pre-qual",
    icon: Zap,
    title: "Credit Pre-Qualification",
    subtitle: "83ms scoring engine",
    description:
      "Revolving credit, term loans, commercial cards, and LOC — scored before the applicant hits submit.",
    metrics: [
      { label: "p50 Latency", value: "47ms" },
      { label: "p95 Latency", value: "83ms" },
      { label: "p99 Latency", value: "127ms" },
      { label: "Products Scored", value: "4" },
    ],
    tenKRef: "2024 10-K: CCB processed $4.2B in digital credit applications",
    color: "blue" as const,
  },
  {
    id: "risk-flags",
    icon: AlertCircle,
    title: "Risk Flags",
    subtitle: "Early warning signals",
    description:
      "Portfolio concentration alerts, cross-border risk indicators, and sector exposure monitoring.",
    metrics: [
      { label: "Risk Dimensions", value: "12" },
      { label: "Markets Covered", value: "94" },
      { label: "Alert Types", value: "7" },
      { label: "Update Cycle", value: "Real-time" },
    ],
    tenKRef:
      "2024 10-K: Citi monitors credit risk across 94 markets and jurisdictions",
    color: "amber" as const,
  },
  {
    id: "product-match",
    icon: Target,
    title: "Product Matching",
    subtitle: "Multi-product eligibility",
    description:
      "AI scores eligibility across CCB's full product shelf — up to $10M per application.",
    metrics: [
      { label: "Max Application", value: "$10M" },
      { label: "Product Types", value: "4" },
      { label: "Cross-Sell Accuracy", value: "70%+" },
      { label: "Match Precision", value: "94%" },
    ],
    tenKRef:
      "2024 10-K: CCB revenue $6.2B — cross-sell drives wallet share growth",
    color: "emerald" as const,
  },
  {
    id: "adverse-action",
    icon: FileText,
    title: "Adverse Action Codes",
    subtitle: "ECOA-compliant decisions",
    description:
      "Reason codes, decline recovery paths, SPCP-eligible alternatives, and CRA-zone mapping.",
    metrics: [
      { label: "Reason Code Types", value: "23" },
      { label: "Recovery Paths", value: "6" },
      { label: "SPCP Eligible", value: "Yes" },
      { label: "CRA Aligned", value: "Outstanding" },
    ],
    tenKRef:
      "2024 10-K: $145.9B CRA-allocated activity — Outstanding rating maintained",
    color: "rose" as const,
  },
];

const colorMap = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    iconBg: "bg-blue-100",
    iconText: "text-blue-600",
    accent: "text-blue-600",
    metricBg: "bg-blue-50/80",
    hoverShadow: "hover:shadow-blue-100/50",
    activeBorder: "border-blue-400",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    iconBg: "bg-amber-100",
    iconText: "text-amber-600",
    accent: "text-amber-600",
    metricBg: "bg-amber-50/80",
    hoverShadow: "hover:shadow-amber-100/50",
    activeBorder: "border-amber-400",
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",
    accent: "text-emerald-600",
    metricBg: "bg-emerald-50/80",
    hoverShadow: "hover:shadow-emerald-100/50",
    activeBorder: "border-emerald-400",
  },
  rose: {
    bg: "bg-rose-50",
    border: "border-rose-200",
    iconBg: "bg-rose-100",
    iconText: "text-rose-600",
    accent: "text-rose-600",
    metricBg: "bg-rose-50/80",
    hoverShadow: "hover:shadow-rose-100/50",
    activeBorder: "border-rose-400",
  },
};

export function CapabilityCards() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {capabilities.map((cap, idx) => {
          const colors = colorMap[cap.color];
          const isActive = activeCard === cap.id;
          const Icon = cap.icon;

          return (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => setActiveCard(cap.id)}
              onMouseLeave={() => setActiveCard(null)}
              className={`
                relative rounded-2xl border-2 bg-white p-6 cursor-pointer
                transition-all duration-300 ease-out
                ${isActive ? `${colors.activeBorder} shadow-xl scale-[1.02]` : `border-slate-200 shadow-sm ${colors.hoverShadow}`}
              `}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center mb-4`}
              >
                <Icon className={`w-6 h-6 ${colors.iconText}`} />
              </div>

              {/* Title & subtitle */}
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {cap.title}
              </h3>
              <p className={`text-xs font-semibold ${colors.accent} mb-3`}>
                {cap.subtitle}
              </p>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                {cap.description}
              </p>

              {/* Expanded metrics panel */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {cap.metrics.map((m) => (
                        <div
                          key={m.label}
                          className={`${colors.metricBg} rounded-lg px-3 py-2 text-center`}
                        >
                          <div
                            className={`text-sm font-bold ${colors.accent}`}
                          >
                            {m.value}
                          </div>
                          <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-start gap-1.5 text-[11px] text-slate-400 italic">
                      <ChevronRight className="w-3 h-3 mt-0.5 shrink-0" />
                      <span>{cap.tenKRef}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
