import { useEffect, useRef, useState } from 'react';
import { ArrowRight, TrendingUp, DollarSign, Clock, Target } from 'lucide-react';

function AnimatedCounter({ end, prefix = '', suffix = '', duration = 2000, decimals = 0, started = false }: { end: number; prefix?: string; suffix?: string; duration?: number; decimals?: number; started?: boolean }) {
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
      if (progress < 1) { frame = requestAnimationFrame(animate); }
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, started]);
  return <span>{prefix}{decimals > 0 ? count.toFixed(decimals) : Math.round(count).toLocaleString()}{suffix}</span>;
}

function ProgressBar({ percentage, color, started, delay = 0 }: { percentage: number; color: string; started: boolean; delay?: number }) {
  const [width, setWidth] = useState(0);
  useEffect(() => { if (!started) return; const t = setTimeout(() => setWidth(percentage), delay); return () => clearTimeout(t); }, [started, percentage, delay]);
  return (
    <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
      <div className={`h-full rounded-full transition-all duration-[1500ms] ease-out ${color}`} style={{ width: `${width}%` }} />
    </div>
  );
}

function ROIScenario({ lift, revenue, roi, label, isHighlighted, started }: { lift: string; revenue: number; roi: string; label: string; isHighlighted?: boolean; started: boolean; delay: number }) {
  return (
    <div className={`relative rounded-xl border p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-default ${isHighlighted ? 'border-blue-300 bg-gradient-to-br from-blue-50 to-white shadow-md shadow-blue-100/50' : 'border-slate-200 bg-white hover:border-slate-300'}`}>
      {isHighlighted && <div className="absolute -top-2.5 left-4 px-2 py-0.5 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">Base Case</div>}
      <div className="text-xs text-slate-400 font-medium mb-1">{label}</div>
      <div className="text-2xl font-bold text-slate-900 mb-0.5">
        {started ? <AnimatedCounter end={revenue} prefix="$" suffix="M" decimals={1} duration={1800} started={started} /> : '$0.0M'}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-500">{lift} conversion lift</span>
        <span className={`text-xs font-bold ${isHighlighted ? 'text-blue-600' : 'text-slate-600'}`}>{roi} ROI</span>
      </div>
    </div>
  );
}

export function PilotInvestment() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } }, { threshold: 0.15 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-50/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-6 uppercase tracking-wider">
            <Target size={13} />
            Pilot Investment
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              {started ? <AnimatedCounter end={600} prefix="$" suffix="K" duration={1500} started={started} /> : '$0K'}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 font-medium mb-2">90 days to prove it. Measured against your KPIs.</p>
          <p className="text-base text-slate-400 max-w-xl mx-auto">Pre-agreed baselines. Pre-agreed success criteria. No ambiguity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          <div className="rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:border-slate-300 hover:-translate-y-0.5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-50"><DollarSign size={18} className="text-blue-600" /></div>
              <span className="text-sm font-semibold text-slate-700">vs. Technology Budget</span>
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">{started ? <AnimatedCounter end={0.005} suffix="%" decimals={3} duration={2000} started={started} /> : '0.000%'}</div>
            <p className="text-sm text-slate-500 mb-3">of Citi's $12.5B annual technology investment</p>
            <ProgressBar percentage={0.5} color="bg-blue-500" started={started} delay={300} />
            <p className="text-xs text-slate-400 mt-2">$600K out of $12,500,000,000</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:border-slate-300 hover:-translate-y-0.5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-amber-50"><TrendingUp size={18} className="text-amber-600" /></div>
              <span className="text-sm font-semibold text-slate-700">vs. Card Credit Losses</span>
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">{started ? <AnimatedCounter end={0.006} suffix="%" decimals={3} duration={2000} started={started} /> : '0.000%'}</div>
            <p className="text-sm text-slate-500 mb-3">of $9.7B in annual card credit losses</p>
            <ProgressBar percentage={0.6} color="bg-amber-500" started={started} delay={500} />
            <p className="text-xs text-slate-400 mt-2">Even a 1% reduction = $97M saved</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:border-slate-300 hover:-translate-y-0.5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-50"><Clock size={18} className="text-green-600" /></div>
              <span className="text-sm font-semibold text-slate-700">vs. Current Cycle</span>
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">15 days → 83ms</div>
            <p className="text-sm text-slate-500 mb-3">Credit decision time reduction</p>
            <ProgressBar percentage={99.9} color="bg-green-500" started={started} delay={700} />
            <p className="text-xs text-slate-400 mt-2">99.99% faster pre-qualification</p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-lg font-bold text-slate-900 text-center mb-2">What $600K returns at different conversion lifts</h3>
          <p className="text-sm text-slate-400 text-center mb-6">Based on Citi 10-K: $923B corporate credit exposure, $164B consumer card portfolio</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ROIScenario lift="+5%" revenue={8.4} roi="14x" label="Conservative" started={started} delay={200} />
            <ROIScenario lift="+10%" revenue={19.3} roi="32x" label="Base Case" isHighlighted started={started} delay={400} />
            <ROIScenario lift="+15%" revenue={47.2} roi="79x" label="Strong Adoption" started={started} delay={600} />
            <ROIScenario lift="+25%" revenue={102.9} roi="172x" label="Full Deployment" started={started} delay={800} />
          </div>
        </div>

        <div className={`text-center transition-all duration-700 ${started ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1200ms' }}>
          <a href="/pilot" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white font-semibold text-base hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 hover:shadow-slate-900/30 hover:-translate-y-0.5">
            Start the 90-Day Pilot
            <ArrowRight size={18} />
          </a>
          <p className="text-xs text-slate-400 mt-4">15-minute technical review. Pre-agreed KPIs. No procurement friction at this price point.</p>
        </div>
      </div>
    </section>
  );
}
