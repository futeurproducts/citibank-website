import { Shield, FileCheck, Lock, Eye, Database, CheckCircle } from 'lucide-react';

const badges = [
  { icon: Shield, label: 'SR 11-7 Aligned', status: 'active' as const },
  { icon: FileCheck, label: 'ECOA / Reg B', status: 'active' as const },
  { icon: Lock, label: 'FCRA Compliant', status: 'active' as const },
  { icon: Eye, label: 'SOC 2 Type II', status: 'in-progress' as const, note: 'Target Q3 2026' },
  { icon: Database, label: 'BCBS 239 Lineage', status: 'active' as const },
  { icon: CheckCircle, label: '100% Audit Trail', status: 'active' as const },
];

export function ComplianceBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {badges.map((badge) => (
        <div
          key={badge.label}
          className={`
            group relative flex flex-col items-center gap-3 p-5 rounded-2xl border-2 text-center
            transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default
            ${badge.status === 'in-progress'
              ? 'border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100'
              : 'border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100'
            }
          `}
        >
          {/* Icon with glow effect */}
          <div className={`
            relative flex items-center justify-center w-12 h-12 rounded-xl shadow-sm
            ${badge.status === 'in-progress'
              ? 'bg-gradient-to-br from-amber-100 to-orange-100'
              : 'bg-gradient-to-br from-emerald-100 to-green-100'
            }
          `}>
            <badge.icon
              size={24}
              className={`
                ${badge.status === 'in-progress' ? 'text-amber-700' : 'text-emerald-700'}
                group-hover:scale-110 transition-transform duration-300
              `}
            />

            {/* Status indicator */}
            <div className={`
              absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white shadow-sm
              ${badge.status === 'in-progress'
                ? 'bg-amber-500'
                : 'bg-emerald-500'
              }
            `}>
              {badge.status === 'in-progress' && (
                <div className="absolute inset-0 bg-amber-500 rounded-full animate-pulse opacity-75"></div>
              )}
            </div>
          </div>

          {/* Label */}
          <div className="space-y-1">
            <span className="text-xs font-bold leading-tight text-slate-800 block">
              {badge.label}
            </span>

            {badge.note && (
              <span className="inline-flex items-center px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-semibold rounded-full">
                {badge.note}
              </span>
            )}
          </div>

          {/* Status badge */}
          <div className={`
            absolute top-3 right-3 w-2 h-2 rounded-full
            ${badge.status === 'in-progress' ? 'bg-amber-500' : 'bg-emerald-500'}
            shadow-sm
          `}></div>
        </div>
      ))}
    </div>
  );
}
