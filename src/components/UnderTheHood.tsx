import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Zap, Layers, Globe, FileWarning, Shield } from 'lucide-react';

interface EngineStep {
  id: string;
  number: string;
  icon: React.ElementType;
  title: string;
  shortTitle: string;
  description: string;
  details: string[];
  visual: 'scoring' | 'products' | 'globe' | 'compliance';
}

const steps: EngineStep[] = [
  {
    id: 'prequal', number: '01', icon: Zap,
    title: 'Digital Credit Pre-Qualification', shortTitle: 'Pre-Qual',
    description: '83ms pre-scoring before the business submits a Digital Credit Application on CitiDirect. Fuses Owner FICO + Business score + D&B commercial signals into a single decision.',
    details: ['p50: 47ms · p95: 83ms · p99: 127ms', '10,000 concurrent connections tested', 'Cold cache vs warm cache delta: <15ms', '4-bureau parallel orchestration with conflict resolution'],
    visual: 'scoring',
  },
  {
    id: 'products', number: '02', icon: Layers,
    title: 'Multi-Product Eligibility Scoring', shortTitle: 'Products',
    description: 'AI scores eligibility across CCB\'s full product shelf — up to $10M per application. Returns confidence bands calibrated to your underwriting thresholds.',
    details: ['Revolving Credit — scored against utilization + payment history', 'Term Loans — scored against cash flow + collateral signals', 'Commercial Cards — scored against spend patterns + revenue', 'Letters of Credit — scored against trade history + country risk'],
    visual: 'products',
  },
  {
    id: 'crossborder', number: '03', icon: Globe,
    title: 'Cross-Border & Trade Finance', shortTitle: 'Cross-Border',
    description: 'Credit intelligence across 94 markets, 300 clearing networks. Aligned with Token Services\' 24/7 multi-currency liquidity and the $7.75T trade finance supercycle.',
    details: ['US: Experian, FICO, LexisNexis, D&B', 'UK: Experian UK, Equifax UK', 'APAC: CIBIL, CRIF', 'LatAm: Bureau-specific adapters · LatAm-ASEAN corridors scored'],
    visual: 'globe',
  },
  {
    id: 'compliance', number: '04', icon: FileWarning,
    title: 'Decline-Recovery & CRA Compliance', shortTitle: 'Compliance',
    description: 'If a business cannot be approved today, LumiqAI generates ECOA-compliant adverse action codes and CRA-supportive recovery paths.',
    details: ['"Insufficient business credit history (< 24 months)"', '"Owner FICO below portfolio threshold"', '"Revenue-to-debt ratio exceeds policy limit"', 'SPCP-eligible alternative products + CRA zone mapping'],
    visual: 'compliance',
  },
];

function ScoringVisual() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-40 h-40">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          <circle cx="60" cy="60" r="52" fill="none" stroke="#e2e8f0" strokeWidth="8" strokeLinecap="round" strokeDasharray="270" strokeDashoffset="0" />
          <motion.circle cx="60" cy="60" r="52" fill="none" stroke="url(#scoreGrad)" strokeWidth="8" strokeLinecap="round" strokeDasharray="270" initial={{ strokeDashoffset: 270 }} animate={{ strokeDashoffset: 270 - (742 / 850) * 270 }} transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }} />
          <defs><linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#06b6d4" /></linearGradient></defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span className="text-3xl font-bold text-slate-900" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>742</motion.span>
          <span className="text-xs text-slate-400 font-medium">Pre-Qual Score</span>
        </div>
      </div>
      <div className="flex gap-3">
        {[{ label: 'p50', value: '47ms', w: 32, color: 'bg-green-400' }, { label: 'p95', value: '83ms', w: 56, color: 'bg-blue-500' }, { label: 'p99', value: '127ms', w: 80, color: 'bg-amber-400' }].map((bar) => (
          <div key={bar.label} className="flex flex-col items-center gap-1">
            <motion.div className={`h-2 rounded-full ${bar.color}`} initial={{ width: 0 }} animate={{ width: bar.w }} transition={{ duration: 0.8, delay: 0.5 }} />
            <span className="text-[10px] text-slate-500 font-mono">{bar.label}: {bar.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductsVisual() {
  const products = [
    { name: 'Revolving Credit', confidence: 'high', eligible: true },
    { name: 'Term Loans', confidence: 'high', eligible: true },
    { name: 'Commercial Cards', confidence: 'medium', eligible: true },
    { name: 'Letters of Credit', confidence: 'low', eligible: false },
  ];
  return (
    <div className="space-y-3 w-full max-w-xs">
      {products.map((p, i) => (
        <motion.div key={p.name} className={`flex items-center justify-between px-4 py-3 rounded-xl border ${p.eligible ? 'bg-white border-slate-200' : 'bg-slate-50 border-slate-100'}`} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.12 + 0.2 }}>
          <div className="flex items-center gap-3">
            <motion.div className={`w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold ${p.eligible ? 'bg-blue-500' : 'bg-slate-300'}`} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: i * 0.12 + 0.3 }}>{p.eligible ? '✓' : '—'}</motion.div>
            <span className={`text-sm font-medium ${p.eligible ? 'text-slate-800' : 'text-slate-400'}`}>{p.name}</span>
          </div>
          <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${p.confidence === 'high' ? 'bg-green-50 text-green-600' : p.confidence === 'medium' ? 'bg-amber-50 text-amber-600' : 'bg-slate-100 text-slate-400'}`}>{p.confidence}</span>
        </motion.div>
      ))}
    </div>
  );
}

function GlobeVisual() {
  const regions = [
    { name: 'Americas', markets: 18, color: 'bg-blue-500' },
    { name: 'EMEA', markets: 38, color: 'bg-green-500' },
    { name: 'APAC', markets: 28, color: 'bg-purple-500' },
    { name: 'LatAm', markets: 10, color: 'bg-amber-500' },
  ];
  return (
    <div className="space-y-4 w-full max-w-xs">
      <div className="text-center mb-2">
        <motion.span className="text-4xl font-bold text-slate-900" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>94</motion.span>
        <span className="text-sm text-slate-400 ml-1">markets</span>
      </div>
      {regions.map((r, i) => (
        <motion.div key={r.name} className="flex items-center gap-3" initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 + 0.2 }}>
          <span className="text-xs text-slate-500 w-16 text-right">{r.name}</span>
          <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
            <motion.div className={`h-full rounded-full ${r.color}`} initial={{ width: 0 }} animate={{ width: `${(r.markets / 40) * 100}%` }} transition={{ duration: 0.8, delay: i * 0.1 + 0.3 }} />
          </div>
          <span className="text-xs font-bold text-slate-700 w-6">{r.markets}</span>
        </motion.div>
      ))}
      <div className="flex flex-wrap gap-1.5 pt-2">
        {['US→UK', 'US→SG', 'LatAm→ASEAN', 'EU→APAC'].map((c, i) => (
          <motion.span key={c} className="px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-medium text-slate-500" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.08 + 0.6 }}>{c}</motion.span>
        ))}
      </div>
    </div>
  );
}

function ComplianceVisual() {
  const codes = [
    { code: 'AA-201', reason: 'Insufficient business credit history (< 24 mo)', },
    { code: 'AA-305', reason: 'Owner FICO below portfolio threshold', },
    { code: 'AA-412', reason: 'Revenue-to-debt ratio exceeds policy limit', },
  ];
  const recovery = [
    { label: 'SPCP Eligible', value: '✓ Yes' },
    { label: 'CRA Zone', value: 'LMI-qualified' },
    { label: 'Alt Products', value: 'Secured card, Micro-LOC' },
  ];
  return (
    <div className="space-y-4 w-full max-w-xs">
      <div className="space-y-2">
        <span className="text-[10px] font-semibold text-red-500 uppercase tracking-wider">Adverse Action</span>
        {codes.map((c, i) => (
          <motion.div key={c.code} className="flex items-start gap-2 px-3 py-2 rounded-lg bg-red-50/50 border border-red-100" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 + 0.2 }}>
            <span className="text-[10px] font-mono font-bold text-red-400 mt-0.5 shrink-0">{c.code}</span>
            <span className="text-xs text-red-700">{c.reason}</span>
          </motion.div>
        ))}
      </div>
      <div className="space-y-2 pt-2 border-t border-slate-100">
        <span className="text-[10px] font-semibold text-green-600 uppercase tracking-wider">Recovery Path</span>
        {recovery.map((r, i) => (
          <motion.div key={r.label} className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-green-50/50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.08 + 0.5 }}>
            <span className="text-xs text-slate-500">{r.label}</span>
            <span className="text-xs font-semibold text-green-700">{r.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function StepVisual({ type }: { type: EngineStep['visual'] }) {
  switch (type) {
    case 'scoring': return <ScoringVisual />;
    case 'products': return <ProductsVisual />;
    case 'globe': return <GlobeVisual />;
    case 'compliance': return <ComplianceVisual />;
  }
}

export function UnderTheHood() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <span className="inline-block px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-4">Under the Hood</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">What the engine does in 83 milliseconds</h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">CCB-aligned AI decisioning with full explainability. Click each step to explore.</p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-slate-100 rounded-xl p-1 gap-1">
            {steps.map((step, i) => (
              <button key={step.id} onClick={() => setActiveTab(i)} className={`relative px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${activeTab === i ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}>
                {activeTab === i && <motion.div layoutId="uthActiveTab" className="absolute inset-0 bg-white rounded-lg shadow-sm" transition={{ type: 'spring', stiffness: 300, damping: 25 }} />}
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-blue-500">{step.number}</span>
                  <span className="hidden sm:inline">{step.shortTitle}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-50">{(() => { const Icon = steps[activeTab].icon; return <Icon size={20} className="text-blue-600" />; })()}</div>
                  <h3 className="text-xl font-bold text-slate-900">{steps[activeTab].title}</h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">{steps[activeTab].description}</p>
                <div className="space-y-2">
                  {steps[activeTab].details.map((detail, i) => (
                    <motion.div key={detail} className="flex items-start gap-2 text-sm" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}>
                      <span className="w-1 h-1 rounded-full bg-blue-400 mt-2 shrink-0" />
                      <span className="text-slate-600 font-mono text-xs">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center"><StepVisual type={steps[activeTab].visual} /></div>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div className="mt-6 rounded-xl bg-slate-50 border border-slate-200 px-6 py-4 flex items-center gap-4" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}>
          <Shield size={18} className="text-blue-500 shrink-0" />
          <p className="text-sm text-slate-500"><span className="font-semibold text-slate-700">ECOA (Reg B) + SPCP compliant.</span> Credit extension without disparate impact, supported by explainability artifacts.</p>
        </motion.div>
      </div>
    </section>
  );
}
