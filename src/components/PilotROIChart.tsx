import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Cell, LabelList
} from 'recharts';

const data = [
  { lift: '+5%', revenue: 8.4, roi: '14x', color: '#cbd5e1' },
  { lift: '+10%', revenue: 19.3, roi: '32x', color: '#93c5fd' },
  { lift: '+15%', revenue: 47.2, roi: '79x', color: '#3b82f6' },
  { lift: '+25%', revenue: 102.9, roi: '172x', color: '#1d4ed8' },
];

interface TooltipPayloadItem {
  payload: {
    lift: string;
    revenue: number;
    roi: string;
  };
}

function CustomTooltip({ active, payload }: {
  active?: boolean;
  payload?: TooltipPayloadItem[];
}) {
  if (!active || !payload?.length) return null;
  const item = payload[0].payload;
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-slate-200/80 shadow-lg px-4 py-3 min-w-[180px]">
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
        {item.lift} Conversion Lift
      </p>
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-xl font-bold text-slate-800 tabular-nums">${item.revenue}M</span>
        <span className="text-xs text-slate-400">Year-1 revenue</span>
      </div>
      <div className="flex items-center gap-1.5 mt-1.5 pt-1.5 border-t border-slate-100">
        <span className="text-sm font-bold text-blue-600">{item.roi}</span>
        <span className="text-xs text-slate-400">return on $600K pilot</span>
      </div>
    </div>
  );
}

export function PilotROIChart() {
  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl bg-white border border-slate-200/80 shadow-[var(--shadow-border)] p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-2">
        <div>
          <h3 className="text-2xl font-bold text-slate-800 font-display">
            Pilot ROI at Different Conversion Lifts
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Year-1 revenue impact per $600K pilot investment
          </p>
        </div>
        {/* Highlight badge */}
        <div className="flex-shrink-0 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-100">
          <span className="text-xs font-semibold text-blue-700">Up to 172x ROI</span>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ left: 10, right: 70, top: 5, bottom: 5 }}
        >
          <defs>
            <linearGradient id="barGrad0" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="barGrad1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#bfdbfe" />
              <stop offset="100%" stopColor="#93c5fd" />
            </linearGradient>
            <linearGradient id="barGrad2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="barGrad3" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            horizontal={false}
            stroke="#f1f5f9"
          />
          <XAxis
            type="number"
            tick={{ fontSize: 12, fill: '#94a3b8' }}
            tickFormatter={(v) => `$${v}M`}
            tickLine={false}
            axisLine={{ stroke: '#e2e8f0' }}
          />
          <YAxis
            type="category"
            dataKey="lift"
            tick={{ fontSize: 14, fontWeight: 600, fill: '#334155' }}
            width={60}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: 'rgba(59, 130, 246, 0.04)', radius: 6 }}
          />
          <Bar
            dataKey="revenue"
            radius={[0, 8, 8, 0]}
            barSize={38}
            animationDuration={1200}
            animationEasing="ease-out"
          >
            {data.map((_entry, i) => (
              <Cell key={i} fill={`url(#barGrad${i})`} />
            ))}
            <LabelList
              dataKey="roi"
              position="right"
              style={{ fontSize: 13, fontWeight: 700, fill: '#1e293b' }}
              formatter={(v: string) => `${v} ROI`}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Footnote */}
      <p className="text-xs text-slate-400 text-center mt-4 pt-4 border-t border-slate-100">
        Based on Citi 2025 10-K: $923B corporate credit exposure, $164B consumer card portfolio
      </p>
    </div>
  );
}
