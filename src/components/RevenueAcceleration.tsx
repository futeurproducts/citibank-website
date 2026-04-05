import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, ReferenceLine
} from 'recharts';

const data = [
  { month: 'M1', base: 0.4, optimistic: 0.8 },
  { month: 'M2', base: 0.9, optimistic: 2.1 },
  { month: 'M3', base: 1.8, optimistic: 5.2 },
  { month: 'M4', base: 3.2, optimistic: 10.4 },
  { month: 'M5', base: 5.0, optimistic: 18.0 },
  { month: 'M6', base: 7.2, optimistic: 28.5 },
  { month: 'M7', base: 9.1, optimistic: 40.2 },
  { month: 'M8', base: 11.0, optimistic: 52.8 },
  { month: 'M9', base: 13.2, optimistic: 65.0 },
  { month: 'M10', base: 15.0, optimistic: 76.4 },
  { month: 'M11', base: 17.1, optimistic: 89.2 },
  { month: 'M12', base: 19.3, optimistic: 102.9 },
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
    <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-slate-200/80 shadow-lg px-4 py-3 min-w-[160px]">
      <p className="text-xs font-semibold text-slate-800 mb-2 uppercase tracking-wider">Month {label?.replace('M', '')}</p>
      <div className="space-y-1.5">
        {payload.map((item: TooltipPayloadItem, i: number) => (
          <div key={i} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs text-slate-500">{item.name}</span>
            </div>
            <span className="text-sm font-bold text-slate-800 tabular-nums">${item.value.toFixed(1)}M</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RevenueAcceleration() {
  return (
    <div className="w-full rounded-2xl bg-white border border-slate-200/80 shadow-[var(--shadow-border)] p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-6 gap-2">
        <div>
          <h3 className="text-2xl font-bold text-slate-800 font-display">
            Revenue Acceleration Timeline
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Cumulative Year-1 revenue impact ($ millions)
          </p>
        </div>
        {/* Endpoint badges */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-100">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-xs font-semibold text-blue-700">$102.9M</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-slate-400" />
            <span className="text-xs font-semibold text-slate-600">$19.3M</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={360}>
        <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="areaOptimistic" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.02} />
            </linearGradient>
            <linearGradient id="areaBase" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#94a3b8" stopOpacity={0.12} />
              <stop offset="95%" stopColor="#94a3b8" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#f1f5f9"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: '#64748b' }}
            tickLine={false}
            axisLine={{ stroke: '#e2e8f0' }}
          />
          <YAxis
            tick={{ fontSize: 12, fill: '#94a3b8' }}
            tickFormatter={(v) => `$${v}M`}
            tickLine={false}
            axisLine={false}
            width={55}
          />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine
            x="M3"
            stroke="#f59e0b"
            strokeDasharray="6 3"
            strokeWidth={1.5}
            label={{
              value: 'Pilot Complete',
              fontSize: 11,
              fill: '#d97706',
              fontWeight: 600,
              position: 'insideTopRight',
            }}
          />
          <Area
            type="monotone"
            dataKey="optimistic"
            stroke="#3b82f6"
            strokeWidth={2.5}
            fill="url(#areaOptimistic)"
            dot={{ r: 3, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }}
            activeDot={{ r: 5, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }}
            name="Optimistic"
            animationDuration={1500}
            animationEasing="ease-out"
          />
          <Area
            type="monotone"
            dataKey="base"
            stroke="#94a3b8"
            strokeWidth={2}
            strokeDasharray="6 3"
            fill="url(#areaBase)"
            dot={{ r: 2.5, fill: '#94a3b8', strokeWidth: 2, stroke: '#fff' }}
            activeDot={{ r: 4, fill: '#94a3b8', strokeWidth: 2, stroke: '#fff' }}
            name="Base Case"
            animationDuration={1500}
            animationEasing="ease-out"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
