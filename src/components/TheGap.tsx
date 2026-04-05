import { useEffect, useRef, useState } from 'react';
import { AlertTriangle, TrendingUp, DollarSign, Ban, ArrowRight } from 'lucide-react';

// ── Animated Counter ──────────────────────────────────────────────
function AnimatedCounter({
  end,
  prefix = '',
  suffix = '',
  duration = 2000,
  decimals = 0,
  started = false,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  started?: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    let frame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(eased * end);
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, started]);

  return (
    <span>
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
      {suffix}
    </span>
  );
}

// ── Severity Bar (animated fill) ──────────────────────────────────
function SeverityBar({
  percentage,
  color,
  started,
  delay = 0,
}: {
  percentage: number;
  color: string;
  started: boolean;
  delay?: number;
}) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!started) return;
    const timer = setTimeout(() => setWidth(percentage), delay);
    return () => clearTimeout(timer);
  }, [started, percentage, delay]);

  return (
    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-[1500ms] ease-out ${color}`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

// ── Gap Metric Card ───────────────────────────────────────────────
function GapCard({
  icon: Icon,
  value,
  label,
  detail,
  tenKSource,
  severity,
  severityColor,
  counterProps,
  started,
  delay,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
  detail: string;
  tenKSource: string;
  severity: number;
  severityColor: string;
  counterProps?: {
    end: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
  };
  started: boolean;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative rounded-2xl border border-slate-200 bg-white
                 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50
                 hover:border-slate-300 hover:-translate-y-1 cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-2.5 rounded-xl ${
          severityColor === 'bg-red-500' ? 'bg-red-50' :
          severityColor === 'bg-amber-500' ? 'bg-amber-50' : 'bg-slate-50'
        }`}>
          <Icon size={22} className={
            severityColor === 'bg-red-500' ? 'text-red-600' :
            severityColor === 'bg-amber-500' ? 'text-amber-600' : 'text-slate-600'
          } />
        </div>
        <div className={`w-2.5 h-2.5 rounded-full ${severityColor} ${
          severityColor === 'bg-red-500' ? 'animate-pulse' : ''
        }`} />
      </div>

      <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1 tracking-tight">
        {counterProps ? (
          <AnimatedCounter
            end={counterProps.end}
            prefix={counterProps.prefix}
            suffix={counterProps.suffix}
            decimals={counterProps.decimals}
            duration={2000}
            started={started}
          />
        ) : (
          value
        )}
      </div>

      <p className="text-sm font-semibold text-slate-700 mb-1">{label}</p>

      <div className="mb-3">
        <SeverityBar
          percentage={severity}
          color={severityColor}
          started={started}
          delay={delay}
        />
      </div>

      <p className="text-sm text-slate-500 leading-relaxed">{detail}</p>

      <div className={`mt-3 pt-3 border-t border-slate-100 transition-all duration-300 ${
        hovered ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'
      }`}>
        <p className="text-xs text-slate-400">
          Source: {tenKSource}
        </p>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────
export function TheGap() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px]
                      rounded-full bg-red-50/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                         bg-red-50 border border-red-100 text-red-700 text-xs font-semibold
                         mb-5 uppercase tracking-wider">
            <AlertTriangle size={13} />
            The Gap
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5
                        leading-tight tracking-tight">
            $12.5B in technology.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r
                           from-red-600 to-amber-600">
              Zero credit intelligence
            </span>{' '}
            at underwriting.
          </h2>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            180,000+ employees use AI tools. Digital credit applications process
            up to $10M each. But the credit decision itself has no AI layer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          <GapCard
            icon={TrendingUp}
            value="14%"
            label="Criticized Loan Growth"
            detail="Corporate criticized exposure rose from $27.5B to $31.4B — a $3.9B increase in stressed credits in one year."
            tenKSource="Citi 2025 Annual Report (10-K), Credit Risk section"
            severity={78}
            severityColor="bg-red-500"
            counterProps={{ end: 14, suffix: '% ↑' }}
            started={started}
            delay={100}
          />

          <GapCard
            icon={DollarSign}
            value="$9.7B"
            label="Annual Card Losses"
            detail="Branded Cards: 5.16% loss rate. Retail Services: 7.84%. Both trending upward — losses accelerating, not stabilizing."
            tenKSource="Citi 2025 Annual Report (10-K), USPB segment"
            severity={85}
            severityColor="bg-red-500"
            counterProps={{ end: 9.7, prefix: '$', suffix: 'B', decimals: 1 }}
            started={started}
            delay={250}
          />

          <GapCard
            icon={DollarSign}
            value="$600M"
            label="Reserve Build (1 Year)"
            detail="Corporate ACLL jumped from $3.8B to $4.4B. That's $600M in new reserves because existing models can't predict losses well enough."
            tenKSource="Citi 2025 Annual Report (10-K), ACLL section"
            severity={65}
            severityColor="bg-amber-500"
            counterProps={{ end: 600, prefix: '$', suffix: 'M' }}
            started={started}
            delay={400}
          />

          <GapCard
            icon={Ban}
            value="0"
            label="AI Credit Underwriting"
            detail="Zero disclosed AI-driven credit decisioning across all five reportable segments. Loan underwriting is listed as one of '50+ complex processes' being re-engineered."
            tenKSource="Citi 2025 Annual Report (10-K), full document review"
            severity={100}
            severityColor="bg-red-500"
            counterProps={{ end: 0 }}
            started={started}
            delay={550}
          />
        </div>

        <div className={`text-center mt-14 transition-all duration-700 ${
          started ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <p className="text-xl md:text-2xl font-bold text-slate-900 mb-5">
            LumiqAI closes this gap in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r
                           from-blue-600 to-cyan-600">
              90 days
            </span>.
          </p>
          <a
            href="/pilot"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                       bg-slate-900 text-white font-semibold text-sm
                       hover:bg-slate-800 transition-colors shadow-lg
                       shadow-slate-900/20 hover:shadow-slate-900/30"
          >
            Start the 90-Day Pilot
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
