import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, animate, useInView } from "framer-motion";
import {
  Target,
  MessageSquare,
  Zap,
  Layers,
  Globe,
  Ship,
  Heart,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const outputs = [
  {
    id: 1,
    icon: Target,
    title: "Digital Lending Intelligence",
    desc: "Pre-score every business before CitiDirect submission.",
  },
  {
    id: 2,
    icon: MessageSquare,
    title: "RM Copilot (Stylus)",
    desc: "AI briefing per relationship manager.",
  },
  {
    id: 3,
    icon: Zap,
    title: "CitiDirect Acceleration",
    desc: "83ms full pipeline. Zero re-keying.",
  },
  {
    id: 4,
    icon: Layers,
    title: "Multi-Product Pre-Qual",
    desc: "Scoring across full product shelf.",
  },
  {
    id: 5,
    icon: Globe,
    title: "Cross-Border Radar",
    desc: "94-market portfolio monitoring.",
  },
  {
    id: 6,
    icon: Ship,
    title: "Trade Finance Intelligence",
    desc: "$7.75T supercycle scoring.",
  },
  {
    id: 7,
    icon: Heart,
    title: "CRA Toolkit",
    desc: "SPCP zone mapping + community analytics.",
  },
] as const;

// ---------------------------------------------------------------------------
// Animated counter (used in panel 05)
// ---------------------------------------------------------------------------

function AnimatedCounter({
  to,
  duration = 1.8,
}: {
  to: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || !ref.current) return;
    animate(0, to, {
      duration,
      onUpdate(v) {
        if (ref.current) ref.current.textContent = String(Math.round(v));
      },
    });
  }, [to, duration, isInView]);

  return <span ref={ref}>0</span>;
}

// ---------------------------------------------------------------------------
// SVG Score Gauge (panel 01)
// ---------------------------------------------------------------------------

function ScoreGauge({ score, max }: { score: number; max: number }) {
  const radius = 54;
  const stroke = 8;
  const circumference = 2 * Math.PI * radius;
  const pct = score / max;

  return (
    <div className="flex flex-col items-center">
      <svg width="140" height="140" viewBox="0 0 140 140" className="mb-3">
        {/* Track */}
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth={stroke}
        />
        {/* Progress */}
        <motion.circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke="#3b82f6"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference * (1 - pct) }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          transform="rotate(-90 70 70)"
        />
        {/* Label */}
        <text
          x="70"
          y="66"
          textAnchor="middle"
          className="fill-slate-900 text-2xl font-bold"
          fontSize="28"
          fontWeight="700"
        >
          {score}
        </text>
        <text
          x="70"
          y="86"
          textAnchor="middle"
          className="fill-slate-400 text-xs"
          fontSize="12"
        >
          / {max}
        </text>
      </svg>
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1 mb-4">
        <CheckCircle2 className="w-3.5 h-3.5" /> High Confidence
      </span>
      <div className="flex items-center gap-3">
        {["Experian", "FICO", "LexisNexis", "D&B"].map((src) => (
          <span
            key={src}
            className="text-[10px] font-medium text-slate-500 bg-white border border-slate-200 rounded-md px-2 py-1"
          >
            {src}
          </span>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Panel visualizations
// ---------------------------------------------------------------------------

function Panel01() {
  return (
    <div className="flex flex-col items-center py-2">
      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
        Composite Credit Score
      </h4>
      <ScoreGauge score={742} max={850} />
    </div>
  );
}

function Panel02() {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
        RM Briefing Card
      </h4>
      <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-slate-800">
            Apex Manufacturing
          </span>
          <span className="text-xs font-mono font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-md px-2 py-0.5">
            Score: 742
          </span>
        </div>
        <div className="space-y-2 text-sm text-slate-600">
          <div>
            <span className="font-semibold text-slate-700">Signals:</span>{" "}
            Treasury cross-sell, FX hedging opportunity
          </div>
          <div>
            <span className="font-semibold text-slate-700">Risk:</span>{" "}
            <span className="text-emerald-600 font-medium">None flagged</span>
          </div>
          <div>
            <span className="font-semibold text-slate-700">Action:</span>{" "}
            <span className="text-blue-600 font-medium">
              Approve for revolving credit
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Panel03() {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setTriggered(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="space-y-5">
      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
        Latency Comparison
      </h4>
      {/* Manual bar */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-slate-700">Manual Review</span>
          <span className="font-mono text-xs text-red-500 font-semibold">
            15 days
          </span>
        </div>
        <div className="h-5 w-full bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-red-400 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: triggered ? "100%" : "0%" }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </div>
      </div>
      {/* LumiqAI bar */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-slate-700">LumiqAI</span>
          <span className="font-mono text-xs text-blue-600 font-semibold">
            83ms
          </span>
        </div>
        <div className="h-5 w-full bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: triggered ? "0.55%" : "0%" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          />
        </div>
      </div>
      <p className="text-xs text-slate-400 text-center mt-2">
        180,000x faster decision pipeline
      </p>
    </div>
  );
}

function Panel04() {
  const products = [
    { name: "Revolving Credit", confidence: "High", color: "emerald" },
    { name: "Term Loan", confidence: "High", color: "emerald" },
    { name: "Commercial Card", confidence: "Medium", color: "amber" },
    { name: "Letter of Credit", confidence: "Low", color: "slate" },
  ] as const;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
        Product Eligibility Matrix
      </h4>
      {products.map((p, idx) => {
        const badgeClasses = {
          emerald:
            "bg-emerald-50 text-emerald-700 border-emerald-200",
          amber:
            "bg-amber-50 text-amber-700 border-amber-200",
          slate: "bg-slate-50 text-slate-600 border-slate-200",
        };
        return (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.12 }}
            className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-4 py-3"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-slate-700">
                {p.name}
              </span>
            </div>
            <span
              className={`text-xs font-semibold border rounded-full px-2.5 py-0.5 ${badgeClasses[p.color]}`}
            >
              {p.confidence}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

function Panel05() {
  const corridors = ["US \u2192 UK", "US \u2192 Singapore", "LatAm \u2192 ASEAN"];

  return (
    <div className="space-y-5 text-center">
      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
        Portfolio Monitoring
      </h4>
      <div className="text-4xl font-bold text-slate-800">
        <AnimatedCounter to={94} /> <span className="text-lg font-medium text-slate-400">markets</span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {corridors.map((c, idx) => (
          <motion.span
            key={c}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + idx * 0.15 }}
            className="inline-flex items-center gap-1 text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-3.5 py-1.5"
          >
            {c}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function Panel06() {
  const nodes = [
    { label: "Exporter", risk: "A+" },
    { label: "Shipping", risk: "B" },
    { label: "Importer", risk: "A" },
  ];

  return (
    <div className="space-y-5">
      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
        $7.75T Supercycle
      </h4>
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {nodes.map((n, idx) => (
          <motion.div
            key={n.label}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.3, duration: 0.4 }}
          >
            <div className="relative flex flex-col items-center">
              <div className="w-20 h-20 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center">
                <span className="text-xs font-medium text-slate-600">
                  {n.label}
                </span>
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 rounded px-1.5 mt-1">
                  {n.risk}
                </span>
              </div>
            </div>
            {idx < nodes.length - 1 && (
              <ArrowRight className="w-5 h-5 text-slate-300 shrink-0" />
            )}
          </motion.div>
        ))}
      </div>
      <p className="text-xs text-slate-400 text-center">
        Trade corridor risk scoring: LatAm-to-ASEAN
      </p>
    </div>
  );
}

function Panel07() {
  const items = [
    {
      label: "CRA Eligible",
      value: "Yes",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      label: "SPCP Zone",
      value: "Active",
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
  ];

  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
        Community Impact
      </h4>
      <div className="flex flex-wrap items-center gap-2 mb-2">
        {items.map((it) => (
          <span
            key={it.label}
            className={`text-xs font-semibold border rounded-full px-3 py-1 ${it.color}`}
          >
            {it.label}: {it.value}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white border border-slate-200 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-slate-800">94%</div>
          <div className="text-xs text-slate-500">Branch Coverage</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-slate-800">Mapped</div>
          <div className="text-xs text-slate-500">LMI Census Tracts</div>
        </div>
      </div>
    </div>
  );
}

const panels: Record<number, () => JSX.Element> = {
  1: Panel01,
  2: Panel02,
  3: Panel03,
  4: Panel04,
  5: Panel05,
  6: Panel06,
  7: Panel07,
};

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function SevenOutputsExplorer() {
  const [selected, setSelected] = useState(1);

  // Mobile accordion state: which ids are open
  const [openIds, setOpenIds] = useState<Set<number>>(new Set([1]));

  const toggleAccordion = (id: number) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section id="seven-outputs" className="py-20 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-[1400px] mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="text-blue-500 text-xs font-semibold uppercase tracking-wide mb-4">
              SEVEN OUTPUTS, ONE API CALL
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-slate-900">
              Seven Intelligence Outputs
            </h2>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">
              Not seven products. Seven outputs from a single API call — each
              one built for the decisions Citi's commercial bankers make through
              CitiDirect every day.
            </p>
          </div>

          {/* ---- DESKTOP: tabbed explorer ---- */}
          <div className="hidden lg:grid lg:grid-cols-[2fr_3fr] gap-8 items-start">
            {/* Left: output list */}
            <div className="space-y-1">
              {outputs.map((o) => {
                const Icon = o.icon;
                const isActive = selected === o.id;
                return (
                  <button
                    key={o.id}
                    onClick={() => setSelected(o.id)}
                    className={`relative w-full text-left flex items-center gap-3 px-4 py-3.5 rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "bg-blue-50/50"
                        : "hover:bg-slate-50"
                    }`}
                  >
                    {/* Animated blue left border */}
                    {isActive && (
                      <motion.div
                        layoutId="output-indicator"
                        className="absolute left-0 top-2 bottom-2 w-0.5 bg-blue-500 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                    <span
                      className={`text-xs font-bold tabular-nums w-6 ${
                        isActive ? "text-blue-500" : "text-slate-300"
                      }`}
                    >
                      {String(o.id).padStart(2, "0")}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isActive
                          ? "bg-blue-100 text-blue-600"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div
                        className={`text-sm font-semibold truncate ${
                          isActive ? "text-slate-900" : "text-slate-600"
                        }`}
                      >
                        {o.title}
                      </div>
                      <div className="text-xs text-slate-400 truncate">
                        {o.desc}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: detail panel */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 min-h-[380px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="w-full"
                >
                  {(() => {
                    const PanelComponent = panels[selected];
                    return PanelComponent ? <PanelComponent /> : null;
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ---- MOBILE: accordion ---- */}
          <div className="lg:hidden space-y-2">
            {outputs.map((o) => {
              const Icon = o.icon;
              const isOpen = openIds.has(o.id);
              const PanelComponent = panels[o.id];
              return (
                <div
                  key={o.id}
                  className="border border-slate-200 rounded-xl overflow-hidden bg-white"
                >
                  <button
                    onClick={() => toggleAccordion(o.id)}
                    className="w-full flex items-center gap-3 px-4 py-3.5 text-left"
                  >
                    <span className="text-xs font-bold tabular-nums text-slate-300 w-6">
                      {String(o.id).padStart(2, "0")}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-slate-800 truncate">
                        {o.title}
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-slate-400"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-5 pt-1">
                          <p className="text-xs text-slate-400 mb-4">
                            {o.desc}
                          </p>
                          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            {PanelComponent ? <PanelComponent /> : null}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
