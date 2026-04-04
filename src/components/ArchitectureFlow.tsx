import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";

// ─── Data ───────────────────────────────────────────────────────────────────────

const bureaus = ["Experian", "FICO", "LexisNexis", "D&B"] as const;

const statPills = [
  { label: "83ms", detail: "p95 latency" },
  { label: "4", detail: "bureaus in parallel" },
  { label: "7", detail: "structured outputs" },
  { label: "SR 11-7", detail: "audit trail" },
] as const;

interface NodeConfig {
  id: string;
  title: string;
  subtitle: string;
  tooltip: string;
  colorClass: string;
  glowClass?: string;
}

const nodeConfigs: Record<string, NodeConfig> = {
  citi: {
    id: "citi",
    title: "CitiDirect",
    subtitle: "Digital Credit App",
    tooltip: "Digital Credit Application portal for Citi's SMB clients — submits borrower data to LumiqAI via REST.",
    colorClass: "bg-white/5 border-white/20 hover:border-white/40",
  },
  lumiq: {
    id: "lumiq",
    title: "LumiqAI API",
    subtitle: "4-Bureau Orchestration",
    tooltip: "Orchestrates parallel bureau pulls, model scoring, and policy execution in a single 83ms API call.",
    colorClass: "bg-blue-500/10 border-blue-400/40 hover:border-blue-400/60",
    glowClass: "shadow-[0_0_60px_-12px_rgba(59,130,246,0.5)]",
  },
  outputs: {
    id: "outputs",
    title: "7 Outputs",
    subtitle: "Structured Signals",
    tooltip: "Credit score, risk flags, product match, adverse action, CRA compliance, trade finance eligibility, cross-border risk — all in one response.",
    colorClass: "bg-emerald-500/10 border-emerald-400/40 hover:border-emerald-400/60",
  },
  decision: {
    id: "decision",
    title: "Decision + Audit",
    subtitle: "SR 11-7 Compliant",
    tooltip: "Full explainability with ECOA reason codes, model governance metadata, and OCC/Fed exam-ready audit trails.",
    colorClass: "bg-amber-500/10 border-amber-400/40 hover:border-amber-400/60",
  },
  stylus: {
    id: "stylus",
    title: "Stylus / RM",
    subtitle: "Workspaces",
    tooltip: "RM AI copilot with structured JSON signal intake — decisions surface in banker workflows within seconds.",
    colorClass: "bg-white/5 border-white/20 hover:border-white/40",
  },
  compliance: {
    id: "compliance",
    title: "Compliance",
    subtitle: "Audit Trail",
    tooltip: "OCC/Fed exam-ready audit trail with full model documentation, version history, and decision lineage.",
    colorClass: "bg-white/5 border-white/20 hover:border-white/40",
  },
};

// ─── Popover Tooltip ────────────────────────────────────────────────────────────

function Popover({
  children,
  visible,
}: {
  children: React.ReactNode;
  visible: boolean;
}) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 pointer-events-none"
        >
          <div className="relative bg-slate-800 text-white text-xs leading-relaxed rounded-lg px-3.5 py-2.5 shadow-2xl max-w-[250px] text-center">
            {children}
            {/* Arrow pointing down */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-slate-800" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Glass Node ─────────────────────────────────────────────────────────────────

function GlassNode({
  config,
  show,
  delay,
  large,
  children,
}: {
  config: NodeConfig;
  show: boolean;
  delay: number;
  large?: boolean;
  children?: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`relative overflow-visible ${large ? "min-w-[220px] lg:min-w-[260px]" : "min-w-[150px] lg:min-w-[170px]"}`}
      initial={{ opacity: 0, scale: 0.8, y: 16 }}
      animate={show ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{
        delay,
        duration: 0.55,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Popover */}
      <Popover visible={hovered}>{config.tooltip}</Popover>

      {/* Glow (LumiqAI only) */}
      {config.glowClass && (
        <motion.div
          className="absolute -inset-3 rounded-2xl bg-blue-500/20 blur-xl"
          animate={
            show
              ? { opacity: [0.3, 0.55, 0.3], scale: [1, 1.04, 1] }
              : { opacity: 0 }
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      )}

      {/* Card */}
      <div
        className={[
          "relative rounded-xl border backdrop-blur-xl cursor-default transition-all duration-300",
          config.colorClass,
          config.glowClass ?? "",
          large ? "px-6 py-5 lg:px-8 lg:py-6" : "px-4 py-3 lg:px-5 lg:py-4",
        ].join(" ")}
      >
        <p
          className={`font-bold text-white/95 ${large ? "text-base lg:text-lg" : "text-sm"}`}
        >
          {config.title}
        </p>
        <p
          className={`text-white/50 mt-0.5 ${large ? "text-xs" : "text-[11px]"}`}
        >
          {config.subtitle}
        </p>
        {children}
      </div>
    </motion.div>
  );
}

// ─── Bureau Pill (inside center node) ───────────────────────────────────────────

function BureauPill({
  name,
  show,
  delay,
}: {
  name: string;
  show: boolean;
  delay: number;
}) {
  return (
    <motion.span
      className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-blue-400/15 border border-blue-400/25 text-[10px] font-medium text-blue-300"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={
        show
          ? {
              opacity: 1,
              scale: [1, 1.06, 1],
            }
          : {}
      }
      transition={{
        delay,
        duration: 1.5,
        scale: {
          delay: delay + 0.5,
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      }}
    >
      {name}
    </motion.span>
  );
}

// ─── Latency Pill ───────────────────────────────────────────────────────────────

function LatencyPill({ show }: { show: boolean }) {
  return (
    <motion.span
      className="inline-block mt-2 px-3 py-0.5 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-400/20 border border-blue-400/30 text-[11px] font-bold text-blue-300"
      animate={
        show
          ? {
              boxShadow: [
                "0 0 0 0 rgba(59,130,246,0)",
                "0 0 12px 3px rgba(59,130,246,0.25)",
                "0 0 0 0 rgba(59,130,246,0)",
              ],
            }
          : {}
      }
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      83ms p95
    </motion.span>
  );
}

// ─── Animated SVG Connection ────────────────────────────────────────────────────

function ConnectionLine({
  show,
  delay,
  label,
  color = "blue",
}: {
  show: boolean;
  delay: number;
  label?: string;
  color?: "blue" | "emerald" | "amber" | "white";
}) {
  const strokeColors = {
    blue: "rgba(96,165,250,0.3)",
    emerald: "rgba(52,211,153,0.3)",
    amber: "rgba(251,191,36,0.3)",
    white: "rgba(255,255,255,0.15)",
  };
  const dotColors = {
    blue: "#60a5fa",
    emerald: "#34d399",
    amber: "#fbbf24",
    white: "rgba(255,255,255,0.6)",
  };
  const labelColors = {
    blue: "text-blue-400/70",
    emerald: "text-emerald-400/70",
    amber: "text-amber-400/70",
    white: "text-white/40",
  };

  return (
    <div className="hidden md:flex flex-col items-center justify-center w-20 lg:w-28 relative overflow-visible">
      {/* Label */}
      {label && (
        <motion.span
          className={`text-[10px] font-medium mb-1.5 whitespace-nowrap ${labelColors[color]}`}
          initial={{ opacity: 0 }}
          animate={show ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.2, duration: 0.3 }}
        >
          {label}
        </motion.span>
      )}

      {/* SVG line with animated dashes */}
      <div className="w-full h-[2px] relative">
        <motion.svg
          className="w-full h-full overflow-visible"
          viewBox="0 0 100 2"
          preserveAspectRatio="none"
          initial={{ opacity: 0 }}
          animate={show ? { opacity: 1 } : {}}
          transition={{ delay, duration: 0.4 }}
        >
          <line
            x1="0"
            y1="1"
            x2="100"
            y2="1"
            stroke={strokeColors[color]}
            strokeWidth="1.5"
            strokeDasharray="4 3"
            className="animate-[flowDash_1.5s_linear_infinite]"
          />
          {/* Arrowhead */}
          <polygon
            points="96,0 100,1 96,2"
            fill={strokeColors[color]}
          />
        </motion.svg>

        {/* Flowing dots */}
        {show &&
          [0, 0.7, 1.4].map((dotDelay, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: dotColors[color],
                boxShadow: `0 0 6px 2px ${dotColors[color]}40`,
              }}
              initial={{ left: "0%", opacity: 0 }}
              animate={{
                left: ["0%", "100%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: dotDelay,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
      </div>
    </div>
  );
}

// ─── Mobile Vertical Connection ─────────────────────────────────────────────────

function MobileConnection({
  show,
  delay,
  label,
}: {
  show: boolean;
  delay: number;
  label?: string;
}) {
  return (
    <div className="flex md:hidden flex-col items-center py-2 relative overflow-visible">
      {label && (
        <motion.span
          className="text-[10px] font-medium text-blue-400/60 mb-1"
          initial={{ opacity: 0 }}
          animate={show ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.1, duration: 0.3 }}
        >
          {label}
        </motion.span>
      )}
      <motion.div
        className="w-[1px] h-6 bg-blue-400/20 relative"
        initial={{ scaleY: 0 }}
        animate={show ? { scaleY: 1 } : {}}
        transition={{ delay, duration: 0.3, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
      >
        {show && (
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-400"
            style={{ boxShadow: "0 0 6px 2px rgba(96,165,250,0.4)" }}
            initial={{ top: "0%", opacity: 0 }}
            animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
        )}
      </motion.div>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────────

export function ArchitectureFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  const renderCenterNode = useCallback(
    (compact?: boolean) => (
      <GlassNode
        config={nodeConfigs.lumiq}
        show={isInView}
        delay={0.5}
        large={!compact}
      >
        {/* Latency pill */}
        <div className="text-center">
          <LatencyPill show={isInView} />
        </div>

        {/* Bureau 2x2 grid */}
        <div className="grid grid-cols-2 gap-1.5 mt-3">
          {bureaus.map((b, i) => (
            <BureauPill
              key={b}
              name={b}
              show={isInView}
              delay={0.7 + i * 0.1}
            />
          ))}
        </div>
      </GlassNode>
    ),
    [isInView]
  );

  return (
    <div
      ref={containerRef}
      className="w-full relative -mx-4 sm:-mx-6 md:mx-0 px-4 sm:px-6 md:px-0"
    >
      {/* Dark section wrapper */}
      <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 overflow-visible py-10 md:py-14 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 rounded-2xl opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* ─── Desktop Layout ─────────────────────────────────────── */}
          <div className="hidden md:block">
            {/* Row 1: CitiDirect -> LumiqAI -> 7 Outputs -> Stylus/RM */}
            <div className="flex items-center justify-center">
              <GlassNode
                config={nodeConfigs.citi}
                show={isInView}
                delay={0}
              />

              <ConnectionLine
                show={isInView}
                delay={0.25}
                label="~5ms"
                color="blue"
              />

              {renderCenterNode()}

              <ConnectionLine
                show={isInView}
                delay={0.9}
                label="JSON"
                color="blue"
              />

              {/* Right column: Outputs + Decision stacked */}
              <div className="flex flex-col gap-3">
                <GlassNode
                  config={nodeConfigs.outputs}
                  show={isInView}
                  delay={1.1}
                />
                <GlassNode
                  config={nodeConfigs.decision}
                  show={isInView}
                  delay={1.15}
                />
              </div>

              {/* Right arrows */}
              <div className="flex flex-col gap-3 items-center">
                <ConnectionLine
                  show={isInView}
                  delay={1.3}
                  label="instant"
                  color="emerald"
                />
                <ConnectionLine
                  show={isInView}
                  delay={1.35}
                  color="amber"
                />
              </div>

              {/* Destinations stacked */}
              <div className="flex flex-col gap-3">
                <GlassNode
                  config={nodeConfigs.stylus}
                  show={isInView}
                  delay={1.45}
                />
                <GlassNode
                  config={nodeConfigs.compliance}
                  show={isInView}
                  delay={1.5}
                />
              </div>
            </div>
          </div>

          {/* ─── Mobile Layout ──────────────────────────────────────── */}
          <div className="md:hidden flex flex-col items-center">
            <GlassNode
              config={nodeConfigs.citi}
              show={isInView}
              delay={0}
            />

            <MobileConnection show={isInView} delay={0.25} label="~5ms" />

            <div className="w-full max-w-[280px]">
              {renderCenterNode(true)}
            </div>

            <MobileConnection show={isInView} delay={0.9} label="JSON" />

            <GlassNode
              config={nodeConfigs.outputs}
              show={isInView}
              delay={1.1}
            />

            <MobileConnection show={isInView} delay={1.25} label="instant" />

            <div className="flex gap-3 w-full max-w-[300px]">
              <div className="flex-1">
                <GlassNode
                  config={nodeConfigs.stylus}
                  show={isInView}
                  delay={1.35}
                />
              </div>
              <div className="flex-1">
                <GlassNode
                  config={nodeConfigs.decision}
                  show={isInView}
                  delay={1.4}
                />
              </div>
            </div>

            <MobileConnection show={isInView} delay={1.5} />

            <GlassNode
              config={nodeConfigs.compliance}
              show={isInView}
              delay={1.55}
            />
          </div>

          {/* ─── Stat Pills ─────────────────────────────────────────── */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mt-10 flex-wrap">
            {statPills.map((s, i) => (
              <motion.div
                key={s.label}
                className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.6 + i * 0.1, duration: 0.35 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-xs md:text-sm text-white/70">
                  <strong className="text-white/90">{s.label}</strong>{" "}
                  {s.detail}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS animation for flowing dashes */}
      <style>{`
        @keyframes flowDash {
          0% { stroke-dashoffset: 7; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}
