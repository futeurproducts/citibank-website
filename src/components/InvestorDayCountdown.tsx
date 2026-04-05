import { useEffect, useState } from 'react';
import { CalendarClock, ArrowRight, TrendingUp, Users, Presentation } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

export function InvestorDayCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const investorDay = new Date('2026-05-07T09:00:00-04:00');

    const update = () => {
      const now = new Date();
      const diff = investorDay.getTime() - now.getTime();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      });
    };

    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted || timeLeft.days <= 0) return null;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative rounded-2xl border border-blue-100 bg-gradient-to-br
                      from-blue-50/80 via-white to-slate-50 p-6 md:p-8
                      shadow-sm overflow-hidden">

        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-100/40
                        rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />

        <div className="relative">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full
                         bg-blue-600 text-white text-xs font-semibold mb-5">
            <CalendarClock size={13} />
            DECISION WINDOW
          </div>

          {/* Two-column layout: Context left, Countdown right */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">

            {/* Left: Strategic context */}
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 leading-tight">
                Citi presents transformation progress to the board on May 7.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Investor Day is when Jane Fraser shows analysts what the $12.5B technology
                investment delivered. A 90-day pilot starting now produces measurable results
                — conversion lift, scoring accuracy, compliance validation — ready for that presentation.
              </p>

              {/* What pilot results give them */}
              <div className="space-y-2">
                <div className="flex items-start gap-2.5">
                  <TrendingUp size={15} className="text-blue-600 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">Conversion data</span> — measurable lending lift to present to analysts
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Users size={15} className="text-blue-600 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">AI deployment proof</span> — credit intelligence live on CitiDirect alongside Stylus
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Presentation size={15} className="text-blue-600 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">Board-ready metrics</span> — 7 KPIs benchmarked against pre-agreed baselines
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Countdown + CTA */}
            <div className="shrink-0 flex flex-col items-center">
              {/* Countdown digits */}
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl md:text-6xl font-bold text-slate-900 tabular-nums tracking-tight">
                  {timeLeft.days}
                </span>
                <span className="text-sm font-medium text-slate-400 mb-1">days</span>
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-2xl font-bold text-slate-500 tabular-nums">
                  {timeLeft.hours}
                </span>
                <span className="text-xs text-slate-400">hrs</span>
                <span className="text-slate-300 mx-1">:</span>
                <span className="text-2xl font-bold text-slate-500 tabular-nums">
                  {timeLeft.minutes}
                </span>
                <span className="text-xs text-slate-400">min</span>
              </div>

              <p className="text-xs text-slate-400 mb-4 text-center">
                until Investor Day
              </p>

              {/* Urgency bar */}
              <div className="w-full max-w-[180px] mb-5">
                <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                  <span>Today</span>
                  <span>May 7</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600
                               transition-all duration-1000"
                    style={{ width: `${Math.max(5, 100 - (timeLeft.days / 90) * 100)}%` }}
                  />
                </div>
              </div>

              {/* CTA */}
              <a
                href="/pilot"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                           bg-slate-900 text-white text-sm font-semibold
                           hover:bg-slate-800 transition-colors shadow-md
                           shadow-slate-900/15"
              >
                Start the pilot
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
