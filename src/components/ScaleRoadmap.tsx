const stages = [
  {
    stage: 'Stage 1',
    label: 'CCB Pilot',
    timeline: '90 days',
    investment: '$600K',
    scope: 'North America CCB — digital lending pre-qualification',
    color: 'from-blue-600 to-blue-700',
    borderColor: 'border-blue-600',
  },
  {
    stage: 'Stage 2',
    label: 'CCB Global',
    timeline: 'Year 1',
    investment: 'Platform License',
    scope: 'Revolving credit (+$70-110M), term loans (+$60-90M), cards & LOC (+$80-120M)',
    color: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    stage: 'Stage 3',
    label: 'USPB Consumer',
    timeline: 'Year 2',
    investment: 'Enterprise Agreement',
    scope: '$164B card portfolio — even 1% NCO improvement = ~$97M annual savings',
    color: 'from-blue-400 to-blue-500',
    borderColor: 'border-blue-400',
  },
];

export function ScaleRoadmap() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-2">
          From Pilot to Platform
        </h3>
        <p className="text-slate-600 font-medium">
          Measured scale across Citi's $1.1T portfolio
        </p>
      </div>

      <div className="relative">
        {/* Connecting line background */}
        <div className="absolute left-10 top-12 bottom-12 w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600 rounded-full opacity-60"></div>

        {stages.map((s, i) => (
          <div key={i} className="relative flex items-stretch gap-6 mb-8 last:mb-0">
            {/* Stage circle */}
            <div className="flex flex-col items-center relative z-10">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                {i + 1}
              </div>
            </div>

            {/* Stage content card */}
            <div className={`flex-1 bg-white rounded-2xl border-l-4 ${s.borderColor} shadow-sm hover:shadow-md transition-all duration-200 p-6 hover:translate-y-[-2px]`}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-sm font-bold text-blue-600 uppercase tracking-wide">{s.stage}</span>
                    <span className="text-xl font-bold text-slate-800">{s.label}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:items-end">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full border border-blue-200">
                    💰 {s.investment}
                  </span>
                  <span className="text-xs text-slate-500 mt-1 font-medium">
                    {s.timeline}
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">{s.scope}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-6 mt-8 border border-slate-200">
        <p className="text-sm text-slate-700 text-center font-semibold">
          <span className="inline-flex items-center gap-2">
            📊 10-K validated:
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold">$923B corporate</span>
            +
            <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold">$164B consumer</span>
            = total addressable portfolio
          </span>
        </p>
      </div>
    </div>
  );
}
