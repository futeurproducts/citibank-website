import { ArrowRight, TrendingUp } from 'lucide-react';

const rows = [
  {
    metric: 'Pre-Qualification Time',
    before: '15 business days',
    after: '83 milliseconds',
    improvement: '99.99% faster',
  },
  {
    metric: 'Applications Scored / Day',
    before: 'Manual queue (limited)',
    after: 'Real-time (unlimited)',
    improvement: '∞',
  },
  {
    metric: 'Application Conversion',
    before: 'Baseline',
    after: '+15–25% lift',
    improvement: 'Measured vs control',
  },
  {
    metric: 'Cross-Sell Accuracy',
    before: '< 40% (estimated)',
    after: '70%+',
    improvement: '+75% improvement',
  },
  {
    metric: 'Audit Trail Coverage',
    before: 'Fragmented',
    after: '100% logged',
    improvement: 'SR 11-7 compliant',
  },
  {
    metric: 'Criticized Credit Detection',
    before: 'Quarterly review',
    after: 'Real-time early warning',
    improvement: 'From 10-K: up 14% YoY',
  },
];

export function BeforeAfterTable() {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gradient-to-r from-slate-50 via-slate-100 to-slate-50 border-b border-slate-200">
            <th className="text-left px-6 py-4 font-bold text-slate-800 w-1/4">Metric</th>
            <th className="text-center px-6 py-4 font-bold text-red-700 bg-red-50/50 w-1/3">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                Without LumiqAI
              </div>
            </th>
            <th className="text-center px-3 py-4 w-16"></th>
            <th className="text-center px-6 py-4 font-bold text-emerald-700 bg-emerald-50/50 w-1/3">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                With LumiqAI
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-slate-100 last:border-0 transition-all duration-200 hover:bg-slate-50/50 group"
            >
              <td className="px-6 py-4 font-semibold text-slate-700">{row.metric}</td>
              <td className="px-6 py-4 text-center bg-red-50/30 group-hover:bg-red-50/50 transition-colors duration-200">
                <span className="text-red-700 font-medium">{row.before}</span>
              </td>
              <td className="px-3 py-4 text-center">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full shadow-sm group-hover:shadow-md transition-all duration-200">
                  <ArrowRight size={14} className="text-white" />
                </div>
              </td>
              <td className="px-6 py-4 text-center bg-emerald-50/30 group-hover:bg-emerald-50/50 transition-colors duration-200">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-emerald-800 font-bold">{row.after}</span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                    <TrendingUp size={10} />
                    {row.improvement}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
