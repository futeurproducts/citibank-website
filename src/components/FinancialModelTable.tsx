const rows = [
  { metric: 'Reach (CCB Segments)', base: '60%', optimistic: '70%', tenK: '5 reportable segments' },
  { metric: 'Avg. Pre-Qual Conversion Lift', base: '+10%', optimistic: '+25%', tenK: 'vs 15-day baseline' },
  { metric: 'Lending Revenue Uplift', base: '$16.7M', optimistic: '$79.4M', tenK: '$383B funded loans' },
  { metric: 'Operational Savings', base: '$2.6M', optimistic: '$9.2M', tenK: '$3.3B transformation cost' },
  { metric: 'Cross-Sell & Fee Income', base: '$3.8M', optimistic: '$14.3M', tenK: 'TTS $14.53B revenue' },
  { metric: 'Total Year-1 Impact', base: '$19.3M', optimistic: '$102.9M', tenK: 'vs $9.7B loss baseline', bold: true },
  { metric: 'ROI on $600K Pilot', base: '32x', optimistic: '172x', tenK: '', bold: true },
];

export function FinancialModelTable() {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl bg-white border border-slate-200/80 shadow-[var(--shadow-border)] overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-slate-100">
        <h3 className="text-2xl font-bold text-slate-800 font-display text-center">
          Year-1 Financial Impact Model
        </h3>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50/80">
              <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Metric
              </th>
              <th className="text-center px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Base Case
              </th>
              <th className="text-center px-6 py-4 text-xs font-semibold text-blue-600 uppercase tracking-wider">
                Optimistic
              </th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                10-K Anchor
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const isHighlighted = row.bold;
              const isLast = i === rows.length - 1;
              return (
                <tr
                  key={i}
                  className={`
                    ${!isLast ? 'border-b' : ''}
                    ${isHighlighted
                      ? 'bg-gradient-to-r from-blue-50/80 via-blue-50/60 to-blue-50/30 border-blue-100'
                      : i % 2 === 0
                        ? 'bg-white border-slate-100/80'
                        : 'bg-slate-50/40 border-slate-100/80'
                    }
                    transition-colors duration-150
                    hover:bg-blue-50/30
                  `}
                >
                  <td className={`px-6 py-4 ${isHighlighted ? 'font-bold text-slate-800' : 'text-slate-700'}`}>
                    {row.metric}
                  </td>
                  <td className={`px-6 py-4 text-center tabular-nums ${isHighlighted ? 'font-bold text-slate-800' : 'text-slate-600'}`}>
                    {row.base}
                  </td>
                  <td className={`px-6 py-4 text-center tabular-nums ${isHighlighted ? 'font-bold text-blue-700 text-lg' : 'text-blue-600 font-medium'}`}>
                    {row.optimistic}
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-400">
                    {row.tenK}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-6 py-3 bg-slate-50/50 border-t border-slate-100">
        <p className="text-xs text-slate-400 text-center">
          All 10-K anchors from Citi 2025 Annual Report (SEC filing). Projections are modeled estimates.
        </p>
      </div>
    </div>
  );
}
