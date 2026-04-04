import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, ResponsiveContainer, Tooltip
} from 'recharts';

const data = [
  { metric: 'Credit Visibility', legacy: 15, lumiq: 92 },
  { metric: 'Application Efficiency', legacy: 25, lumiq: 88 },
  { metric: 'Underwriting Speed', legacy: 10, lumiq: 95 },
  { metric: 'Risk Intelligence', legacy: 30, lumiq: 85 },
  { metric: 'Cross-Border Scoring', legacy: 20, lumiq: 90 },
];

interface TooltipPayloadItem {
  name: string;
  value: number;
  color: string;
}

function CustomTooltip({ active, payload, label }: {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-slate-200/80 shadow-lg px-4 py-3 min-w-[180px]">
      <p className="text-xs font-semibold text-slate-800 mb-2 uppercase tracking-wider">{label}</p>
      <div className="space-y-1.5">
        {payload.map((item: TooltipPayloadItem, i: number) => (
          <div key={i} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs text-slate-500">{item.name}</span>
            </div>
            <span className="text-sm font-bold text-slate-800 tabular-nums">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PerformanceRadar() {
  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl bg-white border border-slate-200/80 shadow-[var(--shadow-border)] p-6 md:p-8">
      {/* Header */}
      <div className="text-center mb-2">
        <h3 className="text-2xl font-bold text-slate-800 font-display">
          Performance Shift: Legacy vs. LumiqAI
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          Capability scores across five critical dimensions of commercial lending intelligence
        </p>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
          <PolarGrid stroke="#e2e8f0" strokeWidth={0.8} />
          <PolarAngleAxis
            dataKey="metric"
            tick={{ fontSize: 11, fill: '#475569', fontWeight: 500 }}
            tickLine={false}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{ fontSize: 9, fill: '#94a3b8' }}
            axisLine={false}
          />
          <defs>
            <linearGradient id="radarLegacyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#94a3b8" stopOpacity={0.25} />
              <stop offset="100%" stopColor="#94a3b8" stopOpacity={0.05} />
            </linearGradient>
            <linearGradient id="radarLumiqGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <Radar
            name="Legacy"
            dataKey="legacy"
            stroke="#94a3b8"
            fill="url(#radarLegacyGrad)"
            strokeWidth={2}
            dot={{ r: 3, fill: '#94a3b8', strokeWidth: 0 }}
            animationDuration={1200}
            animationEasing="ease-out"
          />
          <Radar
            name="LumiqAI"
            dataKey="lumiq"
            stroke="#3b82f6"
            fill="url(#radarLumiqGrad)"
            strokeWidth={2.5}
            dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }}
            animationDuration={1400}
            animationEasing="ease-out"
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>

      {/* Custom Legend */}
      <div className="flex items-center justify-center gap-8 mt-2">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-slate-400 opacity-60" />
          <span className="text-xs font-medium text-slate-500">Legacy (No Credit Intelligence)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-500" />
          <span className="text-xs font-medium text-slate-700">With LumiqAI</span>
        </div>
      </div>
    </div>
  );
}
