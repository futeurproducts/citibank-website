import { Building2, Zap, Globe, TrendingUp, MapPin } from 'lucide-react';

const rows = [
  {
    icon: Building2,
    citiHas: 'Stylus Workspaces processes multi-stage AI workflows',
    lumiqAdds: 'Credit decisioning as a native Stylus module (JSON)',
  },
  {
    icon: Zap,
    citiHas: 'CitiDirect accepts $10M digital credit applications',
    lumiqAdds: 'Pre-qualifies every applicant in 83ms before submission',
  },
  {
    icon: Globe,
    citiHas: 'Token Services: 24/7 multi-currency across 94 markets',
    lumiqAdds: 'Scores cross-border credit eligibility per transaction',
  },
  {
    icon: TrendingUp,
    citiHas: 'Trade finance infrastructure for $7.75T supercycle',
    lumiqAdds: 'AI-powered supply chain counterparty scoring',
  },
  {
    icon: MapPin,
    citiHas: 'CRA Outstanding + $60B housing commitment',
    lumiqAdds: 'SPCP zone mapping + branch-level impact analytics',
  },
];

export function InfrastructureComparison() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 px-8 py-6 border-b border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 text-center">
            Infrastructure + Intelligence
          </h3>
          <p className="text-sm text-slate-600 text-center mt-1">
            The platform exists. The credit intelligence layer is the final piece.
          </p>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left px-6 py-4 bg-slate-50 font-bold text-slate-700 w-1/2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-slate-500 rounded-full"></div>
                  What Citi Has Built
                </div>
              </th>
              <th className="text-left px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-100 font-bold text-blue-800 w-1/2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full shadow-sm"></div>
                  What LumiqAI Adds
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="border-b border-slate-100 last:border-0 transition-all duration-200 hover:bg-slate-50/30 group"
              >
                <td className="px-6 py-5 bg-slate-50/50 group-hover:bg-slate-50 transition-colors duration-200">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors duration-200">
                      <row.icon size={16} className="text-slate-600" />
                    </div>
                    <span className="text-slate-700 font-medium leading-relaxed">{row.citiHas}</span>
                  </div>
                </td>
                <td className="px-6 py-5 bg-gradient-to-r from-blue-50/30 to-blue-50/50 group-hover:from-blue-50/60 group-hover:to-blue-50/80 transition-colors duration-200">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-200 shadow-sm">
                      <row.icon size={16} className="text-blue-600" />
                    </div>
                    <span className="text-blue-900 font-semibold leading-relaxed">{row.lumiqAdds}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-slate-600 text-center mt-6 font-medium bg-gradient-to-r from-slate-700 to-blue-700 bg-clip-text text-transparent">
        The infrastructure is built. The credit intelligence layer is missing.
      </p>
    </div>
  );
}
