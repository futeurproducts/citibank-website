import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// ─── Pipeline Stage Data ──────────────────────────────────────────────────────

const stages = [
  {
    id: "ingest",
    label: "CitiDirect",
    sublabel: "Digital Credit Application",
    latency: null,
    color: "#64748b",
  },
  {
    id: "engine",
    label: "LumiqAI API",
    sublabel: "83ms Decisioning",
    latency: "p50: 47ms",
    color: "#2563eb",
  },
  {
    id: "output",
    label: "Structured JSON",
    sublabel: "7 Intelligence Outputs",
    latency: "p95: 83ms",
    color: "#2563eb",
  },
  {
    id: "stylus",
    label: "Stylus Workspaces",
    sublabel: "Agentic AI Platform",
    latency: "p99: 127ms",
    color: "#7c3aed",
  },
  {
    id: "action",
    label: "RM Action",
    sublabel: "Informed Decision",
    latency: null,
    color: "#059669",
  },
];

// ─── Animated Particle ────────────────────────────────────────────────────────

function DataParticle({
  startX,
  endX,
  y,
  delay,
  color,
}: {
  startX: number;
  endX: number;
  y: number;
  delay: number;
  color: string;
}) {
  return (
    <motion.circle
      cx={startX}
      cy={y}
      r={4}
      fill={color}
      initial={{ cx: startX, opacity: 0 }}
      animate={{
        cx: [startX, endX],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 1.5,
        delay,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut",
      }}
    />
  );
}

// ─── Connection Line ──────────────────────────────────────────────────────────

function ConnectionLine({
  x1,
  x2,
  y,
  isActive,
}: {
  x1: number;
  x2: number;
  y: number;
  isActive: boolean;
}) {
  return (
    <>
      <line
        x1={x1}
        y1={y}
        x2={x2}
        y2={y}
        stroke="#e2e8f0"
        strokeWidth={2}
        strokeDasharray="6 4"
      />
      {isActive && (
        <motion.line
          x1={x1}
          y1={y}
          x2={x2}
          y2={y}
          stroke="#2563eb"
          strokeWidth={2}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      )}
    </>
  );
}

// ─── Main Pipeline Component ──────────────────────────────────────────────────

export function SignalFlowPipeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeStage, setActiveStage] = useState<number>(-1);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Animate stages sequentially when in view
  useEffect(() => {
    if (!isInView) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    stages.forEach((_, idx) => {
      timers.push(
        setTimeout(() => {
          setActiveStage(idx);
          if (idx === stages.length - 1) {
            timers.push(
              setTimeout(() => setAnimationComplete(true), 600)
            );
          }
        }, idx * 500)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  // SVG layout calculations
  const stageWidth = 160;
  const stageGap = 60;
  const totalWidth = stages.length * stageWidth + (stages.length - 1) * stageGap;
  const svgHeight = 140;
  const centerY = 50;

  const getStageX = useCallback(
    (idx: number) => idx * (stageWidth + stageGap) + stageWidth / 2,
    []
  );

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6" ref={containerRef}>
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-violet-50 border border-violet-100 text-violet-600 text-xs font-semibold uppercase tracking-wider mb-4">
            Signal Flow
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            End-to-End Signal Pipeline
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            From application intake to RM-ready intelligence in under 100ms.
          </p>
        </div>

        {/* SVG Pipeline Visualization */}
        <div className="overflow-x-auto pb-4">
          <svg
            viewBox={`0 0 ${totalWidth} ${svgHeight}`}
            className="w-full min-w-[800px] h-auto"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Connection lines */}
            {stages.slice(0, -1).map((_, idx) => (
              <ConnectionLine
                key={`conn-${idx}`}
                x1={getStageX(idx) + stageWidth / 2 - 10}
                x2={getStageX(idx + 1) - stageWidth / 2 + 10}
                y={centerY}
                isActive={activeStage >= idx + 1}
              />
            ))}

            {/* Animated particles */}
            {animationComplete &&
              stages.slice(0, -1).map((_, idx) => (
                <DataParticle
                  key={`particle-${idx}`}
                  startX={getStageX(idx) + stageWidth / 2 - 10}
                  endX={getStageX(idx + 1) - stageWidth / 2 + 10}
                  y={centerY}
                  delay={idx * 0.4}
                  color={stages[idx + 1].color}
                />
              ))}

            {/* Stage nodes */}
            {stages.map((stage, idx) => {
              const x = getStageX(idx);
              const isReached = activeStage >= idx;

              return (
                <g key={stage.id}>
                  {/* Stage box */}
                  <motion.rect
                    x={x - stageWidth / 2}
                    y={centerY - 30}
                    width={stageWidth}
                    height={60}
                    rx={12}
                    fill={isReached ? "white" : "#f8fafc"}
                    stroke={isReached ? stage.color : "#e2e8f0"}
                    strokeWidth={isReached ? 2 : 1}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ duration: 0.4, delay: idx * 0.15 }}
                  />

                  {/* Stage label */}
                  <motion.text
                    x={x}
                    y={centerY - 5}
                    textAnchor="middle"
                    className="text-sm font-bold"
                    fill={isReached ? stage.color : "#94a3b8"}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.15 + 0.2 }}
                  >
                    {stage.label}
                  </motion.text>

                  {/* Sublabel */}
                  <motion.text
                    x={x}
                    y={centerY + 14}
                    textAnchor="middle"
                    className="text-[10px]"
                    fill="#94a3b8"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.15 + 0.3 }}
                  >
                    {stage.sublabel}
                  </motion.text>

                  {/* Latency annotation */}
                  {stage.latency && (
                    <motion.text
                      x={x}
                      y={centerY + 50}
                      textAnchor="middle"
                      className="text-[10px] font-mono"
                      fill={stage.color}
                      fillOpacity={0.6}
                      initial={{ opacity: 0 }}
                      animate={
                        isReached ? { opacity: 1 } : { opacity: 0 }
                      }
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      {stage.latency}
                    </motion.text>
                  )}

                  {/* Active pulse */}
                  <AnimatePresence>
                    {isReached && activeStage === idx && !animationComplete && (
                      <motion.circle
                        cx={x}
                        cy={centerY}
                        r={40}
                        fill="none"
                        stroke={stage.color}
                        strokeWidth={1}
                        initial={{ opacity: 0.6, scale: 0.8 }}
                        animate={{ opacity: 0, scale: 1.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                      />
                    )}
                  </AnimatePresence>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Bottom latency summary */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={animationComplete ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-6 mt-6"
        >
          {[
            { label: "Total Pipeline", value: "<100ms", color: "text-blue-600" },
            { label: "Outputs", value: "7 signals", color: "text-violet-600" },
            { label: "Availability", value: "99.95%", color: "text-emerald-600" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`text-lg font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
