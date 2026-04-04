import { useEffect, useRef, useState } from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, ShieldAlert } from 'lucide-react';

interface StatCardProps {
  value: string;
  label: string;
  sublabel: string;
  source: string;
  accent?: 'red' | 'blue' | 'amber' | 'green';
  icon?: 'trending-up' | 'trending-down' | 'alert' | 'shield';
}

const icons = {
  'trending-up': TrendingUp,
  'trending-down': TrendingDown,
  'alert': AlertTriangle,
  'shield': ShieldAlert,
};

const accentConfig = {
  red: {
    card: 'border-red-100 hover:border-red-200',
    gradient: 'from-red-50/80 via-white to-white',
    value: 'text-red-700',
    icon: 'text-red-300',
    badge: 'bg-red-50 text-red-500',
  },
  blue: {
    card: 'border-blue-100 hover:border-blue-200',
    gradient: 'from-blue-50/80 via-white to-white',
    value: 'text-blue-700',
    icon: 'text-blue-300',
    badge: 'bg-blue-50 text-blue-500',
  },
  amber: {
    card: 'border-amber-100 hover:border-amber-200',
    gradient: 'from-amber-50/80 via-white to-white',
    value: 'text-amber-700',
    icon: 'text-amber-300',
    badge: 'bg-amber-50 text-amber-500',
  },
  green: {
    card: 'border-green-100 hover:border-green-200',
    gradient: 'from-green-50/80 via-white to-white',
    value: 'text-green-700',
    icon: 'text-green-300',
    badge: 'bg-green-50 text-green-500',
  },
};

function AnimatedValue({ value }: { value: string }) {
  const [display, setDisplay] = useState(value);
  const [animating, setAnimating] = useState(false);
  const prevRef = useRef(value);

  useEffect(() => {
    if (prevRef.current !== value) {
      setAnimating(true);
      const timer = setTimeout(() => {
        setDisplay(value);
        setAnimating(false);
        prevRef.current = value;
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [value]);

  // On mount, do a quick fade-in
  const mountRef = useRef(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (!mountRef.current) {
      mountRef.current = true;
      requestAnimationFrame(() => setMounted(true));
    }
  }, []);

  return (
    <span
      className={`inline-block transition-all duration-300 ${
        !mounted ? 'opacity-0 translate-y-1' : animating ? 'opacity-0 -translate-y-1' : 'opacity-100 translate-y-0'
      }`}
    >
      {display}
    </span>
  );
}

function StatCard({ value, label, sublabel, source, accent = 'blue', icon = 'trending-up' }: StatCardProps) {
  const config = accentConfig[accent];
  const IconComp = icons[icon];

  return (
    <div
      className={`
        relative rounded-2xl border bg-gradient-to-br ${config.gradient} ${config.card}
        p-6 overflow-hidden
        shadow-[var(--shadow-border-sm)]
        transition-all duration-200 ease-out
        hover:shadow-[var(--shadow-border)] hover:-translate-y-0.5
      `}
    >
      {/* Background icon */}
      <div className="absolute top-4 right-4">
        <IconComp className={`w-8 h-8 ${config.icon}`} strokeWidth={1.5} />
      </div>

      {/* Value */}
      <p className={`text-3xl md:text-4xl font-bold ${config.value} font-display`}>
        <AnimatedValue value={value} />
      </p>

      {/* Label */}
      <p className="text-base font-semibold text-slate-800 mt-1.5 pr-8">{label}</p>

      {/* Sublabel */}
      <p className="text-sm text-slate-500 mt-1 leading-relaxed">{sublabel}</p>

      {/* Source footnote */}
      <p className="text-[11px] text-slate-400/70 mt-4 pt-3 border-t border-slate-100">
        Source: {source}
      </p>
    </div>
  );
}

// HOMEPAGE "WHY NOW" SECTION — 4 cards in a row
export function TenKStatsHomepage() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        value="$923B"
        label="Corporate Credit Exposure"
        sublabel="Total funded + unfunded across all segments"
        source="Citi 2025 10-K"
        accent="blue"
        icon="trending-up"
      />
      <StatCard
        value="14% ↑"
        label="Criticized Loan Growth"
        sublabel="$27.5B → $31.4B year-over-year"
        source="Citi 2025 10-K"
        accent="red"
        icon="trending-down"
      />
      <StatCard
        value="$9.7B"
        label="Annual Card Credit Losses"
        sublabel="Branded + Retail Services combined NCL"
        source="Citi 2025 10-K"
        accent="red"
        icon="alert"
      />
      <StatCard
        value="0"
        label="AI Credit Underwriting"
        sublabel="Zero disclosed across all five segments"
        source="Citi 2025 10-K"
        accent="amber"
        icon="shield"
      />
    </div>
  );
}

// CASE STUDY "EXECUTIVE DIAGNOSIS" — 3 cards focused on loss trends
export function TenKStatsCaseStudy() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard
        value="$15.4B"
        label="Consumer Credit Reserves"
        sublabel="ACLL — because current models can't predict losses well enough"
        source="Citi 2025 10-K"
        accent="red"
        icon="trending-down"
      />
      <StatCard
        value="5.16%"
        label="Branded Card Loss Rate"
        sublabel="Up from 4.47% — losses accelerating, not stabilizing"
        source="Citi 2025 10-K"
        accent="red"
        icon="alert"
      />
      <StatCard
        value="$600M"
        label="Corporate ACLL Increase"
        sublabel="Reserve build of $3.8B → $4.4B in one year"
        source="Citi 2025 10-K"
        accent="amber"
        icon="trending-down"
      />
    </div>
  );
}
