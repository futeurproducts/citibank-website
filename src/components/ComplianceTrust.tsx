import { useEffect, useRef, useState } from 'react';
import { Shield, FileCheck, Lock, Globe, AlertTriangle, Server } from 'lucide-react';

interface TrustItem {
  icon: React.ElementType;
  title: string;
  status: 'active' | 'in-progress' | 'ready';
  statusLabel: string;
  detail: string;
  context: string;
}

const trustItems: TrustItem[] = [
  {
    icon: FileCheck,
    title: 'SR 11-7 Model Risk',
    status: 'active',
    statusLabel: 'Compliant',
    detail: 'Full model documentation, challenger models, ongoing performance monitoring, conceptual soundness review.',
    context: 'Required by OCC/FRB for all credit decisioning models at systemically important banks.',
  },
  {
    icon: Shield,
    title: 'SOC 2 Type II',
    status: 'in-progress',
    statusLabel: 'Audit In Progress',
    detail: 'Trust services criteria: security, availability, processing integrity. Completion targeted before pilot deployment.',
    context: 'We are transparent about this. SOC 2 is in progress — not complete. We will not claim otherwise.',
  },
  {
    icon: Lock,
    title: 'Encryption & Data Residency',
    status: 'active',
    statusLabel: 'Production-Grade',
    detail: 'AES-256 at rest, mTLS in transit. Customer-managed keys supported. Data stays in your VPC if required.',
    context: 'Zero borrower data touches our infrastructure in sandbox mode. Production deploys behind your firewall.',
  },
  {
    icon: Globe,
    title: 'Reg B / ECOA Compliance',
    status: 'active',
    statusLabel: 'Built-In',
    detail: 'Adverse action reason codes generated for every declined pre-qualification. Fully explainable scoring logic.',
    context: 'Every output includes audit-ready adverse action codes. No black-box decisions.',
  },
  {
    icon: AlertTriangle,
    title: 'CECL / IFRS 9 Alignment',
    status: 'ready',
    statusLabel: 'Framework Ready',
    detail: 'Expected credit loss modeling inputs. Portfolio risk signals feed directly into CECL reserve calculations.',
    context: 'Citi currently has 50% CECL automation coverage. LumiqAI signals are structured for direct CECL integration.',
  },
  {
    icon: Server,
    title: 'Basel III/IV Output Floor',
    status: 'ready',
    statusLabel: 'Framework Ready',
    detail: 'Risk-weighted asset calculations aligned with Basel IV output floor requirements for credit risk.',
    context: 'Addresses the regulatory gap the FRB flagged with $61M in penalties for data quality deficiencies.',
  },
];

function StatusBadge({ status, label }: { status: TrustItem['status']; label: string }) {
  const styles = {
    active: 'bg-blue-50 text-blue-700 border-blue-200',
    'in-progress': 'bg-amber-50 text-amber-700 border-amber-200',
    ready: 'bg-slate-50 text-slate-600 border-slate-200',
  };

  const dotStyles = {
    active: 'bg-blue-500',
    'in-progress': 'bg-amber-500 animate-pulse',
    ready: 'bg-slate-400',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${styles[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dotStyles[status]}`} />
      {label}
    </span>
  );
}

function TrustCard({ item, index, visible }: { item: TrustItem; index: number; visible: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white p-5 transition-all duration-500
                  hover:shadow-lg hover:shadow-slate-100 hover:border-slate-300 hover:-translate-y-0.5
                  cursor-pointer ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start justify-between mb-3">
        <div className={`p-2 rounded-lg ${
          item.status === 'active' ? 'bg-blue-50' :
          item.status === 'in-progress' ? 'bg-amber-50' : 'bg-slate-50'
        }`}>
          <item.icon size={18} className={
            item.status === 'active' ? 'text-blue-600' :
            item.status === 'in-progress' ? 'text-amber-600' : 'text-slate-500'
          } />
        </div>
        <StatusBadge status={item.status} label={item.statusLabel} />
      </div>

      <h4 className="text-base font-bold text-slate-900 mb-2">{item.title}</h4>
      <p className="text-sm text-slate-500 leading-relaxed">{item.detail}</p>

      <div className={`overflow-hidden transition-all duration-300 ${
        expanded ? 'max-h-24 opacity-100 mt-3 pt-3 border-t border-slate-100' : 'max-h-0 opacity-0'
      }`}>
        <p className="text-xs text-slate-400 leading-relaxed italic">{item.context}</p>
      </div>

      <div className="mt-3 text-xs text-slate-300">
        {expanded ? 'Click to collapse' : 'Click for context'}
      </div>
    </div>
  );
}

export function ComplianceTrust() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                         bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold
                         mb-5 uppercase tracking-wider">
            <Shield size={13} />
            Governance & Compliance
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Built for bank-grade scrutiny.{' '}
            <span className="text-slate-400">Not marketing theater.</span>
          </h2>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Every claim below is verifiable. Where something is in progress, we say so.
            Click any card for regulatory context.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {trustItems.map((item, i) => (
            <TrustCard key={item.title} item={item} index={i} visible={visible} />
          ))}
        </div>

        <div className={`mt-10 text-center transition-all duration-700 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            We are an early-stage vendor with production-grade compliance infrastructure.
            SOC 2 Type II is in progress. We will provide the completion date and full report
            before any production data enters our system.
          </p>
        </div>
      </div>
    </section>
  );
}
