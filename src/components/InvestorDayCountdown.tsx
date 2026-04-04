import { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';

export function InvestorDayCountdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    function calculate() {
      const investorDay = new Date('2026-05-07T09:00:00-04:00');
      const now = new Date();
      const diff = investorDay.getTime() - now.getTime();
      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    }
    calculate();
    setMounted(true);
    const interval = setInterval(calculate, 60000);
    return () => clearInterval(interval);
  }, []);

  if (days <= 0) return null;

  return (
    <div
      className={`
        relative inline-flex items-center gap-3 px-5 py-3 rounded-2xl
        bg-white/70 backdrop-blur-sm
        border border-blue-200/60
        shadow-[0_0_0_1px_rgba(59,130,246,0.08),0_2px_8px_-2px_rgba(59,130,246,0.12)]
        transition-all duration-300 ease-out
        hover:shadow-[0_0_0_1px_rgba(59,130,246,0.12),0_4px_16px_-4px_rgba(59,130,246,0.18)]
        hover:-translate-y-0.5
        ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}
      `}
    >
      {/* Subtle gradient border overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      {/* Pulsing indicator */}
      <div className="relative flex-shrink-0">
        <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20" />
        <span className="relative block w-2.5 h-2.5 rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />
      </div>

      {/* Day count — bold and prominent */}
      <div className="flex items-baseline gap-1.5">
        <span className="text-2xl font-bold tracking-tight text-slate-800 font-display tabular-nums">
          {days}
        </span>
        <span className="text-sm font-medium text-slate-500">
          {days === 1 ? 'day' : 'days'}
        </span>
        <span className="text-slate-300 mx-0.5">:</span>
        <span className="text-lg font-semibold text-slate-700 tabular-nums">
          {hours}
        </span>
        <span className="text-xs font-medium text-slate-400">hrs</span>
      </div>

      {/* Separator */}
      <div className="w-px h-6 bg-slate-200" />

      {/* Event details */}
      <div className="flex items-center gap-2">
        <Calendar className="w-4 h-4 text-blue-500 flex-shrink-0" />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-slate-700 leading-tight">
            Citi Investor Day
          </span>
          <span className="text-xs text-slate-400 leading-tight">
            May 7, 2026
          </span>
        </div>
      </div>
    </div>
  );
}
