import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Lending Revenue Uplift', value: 79.4, color: '#3b82f6' },
  { name: 'Operational Savings', value: 9.2, color: '#10b981' },
  { name: 'Cross-Sell & Fee Income', value: 14.3, color: '#8b5cf6' },
];

const TOTAL = data.reduce((sum, d) => sum + d.value, 0);

interface TooltipPayloadItem {
  name: string;
  value: number;
  payload: { color: string };
}

function CustomTooltip({ active, payload }: {
  active?: boolean;
  payload?: TooltipPayloadItem[];
}) {
  if (!active || !payload?.length) return null;
  const item = payload[0];
  const pct = ((item.value / TOTAL) * 100).toFixed(0);
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-slate-200/80 shadow-lg px-4 py-3">
      <div className="flex items-center gap-2 mb-1">
        <span
          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
          style={{ backgroundColor: item.payload.color }}
        />
        <span className="text-xs font-semibold text-slate-800">{item.name}</span>
      </div>
      <div className="flex items-baseline gap-2 pl-[18px]">
        <span className="text-lg font-bold text-slate-800 tabular-nums">${item.value}M</span>
        <span className="text-xs text-slate-400 font-medium">{pct}% of total</span>
      </div>
    </div>
  );
}

function renderCustomLabel({ cx, cy, midAngle, outerRadius, value }: {
  cx: number;
  cy: number;
  midAngle: number;
  outerRadius: number;
  value: number;
}) {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 24;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="#475569"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize={13}
      fontWeight={600}
    >
      ${value}M
    </text>
  );
}

export function RevenueComposition() {
  return (
    <div className="w-full max-w-lg mx-auto rounded-2xl bg-white border border-slate-200/80 shadow-[var(--shadow-border)] p-6 md:p-8">
      {/* Header */}
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-slate-800 font-display">
          Year-1 Revenue Composition
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          Optimistic scenario — full CCB deployment
        </p>
      </div>

      {/* Chart with centered total */}
      <div className="relative">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <defs>
              <filter id="donutShadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#000" floodOpacity="0.06" />
              </filter>
            </defs>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={72}
              outerRadius={112}
              paddingAngle={3}
              dataKey="value"
              label={renderCustomLabel}
              stroke="none"
              animationDuration={1200}
              animationEasing="ease-out"
              filter="url(#donutShadow)"
            >
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>

        {/* Center total overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center -mt-1">
            <p className="text-3xl font-bold text-slate-800 tabular-nums font-display">
              ${TOTAL.toFixed(1)}M
            </p>
            <p className="text-xs text-slate-400 font-medium mt-0.5">
              Year-1 Total
            </p>
          </div>
        </div>
      </div>

      {/* Custom Legend */}
      <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-slate-100">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-slate-600">{item.name}</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-sm font-bold text-slate-800 tabular-nums">${item.value}M</span>
              <span className="text-xs text-slate-400 tabular-nums">
                {((item.value / TOTAL) * 100).toFixed(0)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
