import { Check, X } from 'lucide-react';

const banks = [
  { name: 'Chase', consumer: true, consumerLabel: 'Credit Journey', commercial: false },
  { name: 'Capital One', consumer: true, consumerLabel: 'CreditWise', commercial: false },
  { name: 'Wells Fargo', consumer: false, commercial: true, commercialLabel: 'Close-Up' },
  { name: 'Citi (Today)', consumer: false, commercial: false, highlight: 'red' as const },
  { name: 'Citi + LumiqAI', consumer: true, consumerLabel: '✓', commercial: true, commercialLabel: '✓', highlight: 'green' as const },
];

export function CompetitiveMatrix() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
              <th className="text-left px-6 py-4 font-bold text-slate-800">Bank</th>
              <th className="text-center px-6 py-4 font-bold text-slate-800">Consumer Credit Intelligence</th>
              <th className="text-center px-6 py-4 font-bold text-slate-800">Commercial Credit Intelligence</th>
            </tr>
          </thead>
          <tbody>
            {banks.map((bank, index) => (
              <tr
                key={bank.name}
                className={`
                  border-b border-slate-100 last:border-0 transition-all duration-200 hover:bg-slate-50/50
                  ${bank.highlight === 'red' ? 'bg-gradient-to-r from-red-50/70 to-red-50/50 hover:from-red-50 hover:to-red-50/70' :
                    bank.highlight === 'green' ? 'bg-gradient-to-r from-emerald-50/70 to-emerald-50/50 hover:from-emerald-50 hover:to-emerald-50/70 shadow-sm' : ''}
                `}
              >
                <td className={`px-6 py-4 font-semibold ${
                  bank.highlight === 'red' ? 'text-red-800' :
                  bank.highlight === 'green' ? 'text-emerald-800' : 'text-slate-700'
                }`}>
                  {bank.name}
                  {bank.highlight === 'green' && (
                    <div className="inline-block ml-2 w-2 h-2 bg-emerald-500 rounded-full shadow-sm"></div>
                  )}
                </td>
                <td className="px-6 py-4 text-center">
                  {bank.consumer ? (
                    <span className="inline-flex items-center gap-2 text-emerald-700">
                      <div className="flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full">
                        <Check size={14} className="text-emerald-600" />
                      </div>
                      {bank.consumerLabel !== '✓' && (
                        <span className="text-xs font-medium text-slate-600">{bank.consumerLabel}</span>
                      )}
                    </span>
                  ) : (
                    <div className="flex items-center justify-center w-6 h-6 bg-slate-100 rounded-full mx-auto">
                      <X size={14} className="text-slate-400" />
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 text-center">
                  {bank.commercial ? (
                    <span className="inline-flex items-center gap-2 text-emerald-700">
                      <div className="flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full">
                        <Check size={14} className="text-emerald-600" />
                      </div>
                      {bank.commercialLabel !== '✓' && (
                        <span className="text-xs font-medium text-slate-600">{bank.commercialLabel}</span>
                      )}
                    </span>
                  ) : (
                    <div className="flex items-center justify-center w-6 h-6 bg-slate-100 rounded-full mx-auto">
                      <X size={14} className="text-slate-400" />
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm font-bold text-slate-700 text-center mt-6 bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
        First top-4 bank with dual consumer + commercial credit intelligence.
      </p>
    </div>
  );
}
