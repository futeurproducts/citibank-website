export function ApiResponsePreview() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="rounded-2xl border-2 border-slate-700 bg-slate-950 overflow-hidden shadow-2xl ring-1 ring-blue-500/20">
        <div className="flex items-center gap-3 px-5 py-3.5 bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700">
          <div className="flex gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-sm ring-1 ring-red-400/50" />
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 shadow-sm ring-1 ring-yellow-400/50" />
            <div className="w-3.5 h-3.5 rounded-full bg-green-500 shadow-sm ring-1 ring-green-400/50" />
          </div>
          <span className="text-xs text-slate-400 ml-3 font-mono font-medium">
            POST /v1/score — 83ms
          </span>
          <span className="ml-auto text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-mono font-bold shadow-lg">
            200 OK
          </span>
        </div>
        <div className="relative">
          {/* Line numbers */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-slate-900/50 border-r border-slate-700/50 flex flex-col text-xs text-slate-500 font-mono pt-4">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i + 1} className="px-2 py-0.5 text-right leading-relaxed">
                {i + 1}
              </div>
            ))}
          </div>
          <pre className="pl-14 pr-4 py-4 text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed">
{`{
  "request_id": "ctx_8f3a9b2c",
  "latency_ms": 83,
  "outputs": {
    `}<span className="text-cyan-400 font-semibold">"prequal_score"</span>{`: `}<span className="text-emerald-400 font-bold">742</span>{`,
    `}<span className="text-cyan-400 font-semibold">"product_eligibility"</span>{`: [
      `}<span className="text-amber-300 font-medium">"revolving_credit"</span>{`, `}<span className="text-amber-300 font-medium">"term_loan"</span>{`,
      `}<span className="text-amber-300 font-medium">"commercial_card"</span>{`, `}<span className="text-amber-300 font-medium">"letter_of_credit"</span>{`
    ],
    `}<span className="text-cyan-400 font-semibold">"confidence_band"</span>{`: `}<span className="text-amber-300 font-medium">"high"</span>{`,
    `}<span className="text-cyan-400 font-semibold">"cross_sell_signals"</span>{`: [`}<span className="text-amber-300 font-medium">"treasury"</span>{`, `}<span className="text-amber-300 font-medium">"fx_hedging"</span>{`],
    `}<span className="text-cyan-400 font-semibold">"adverse_action_codes"</span>{`: [],
    `}<span className="text-cyan-400 font-semibold">"cra_zone_eligible"</span>{`: `}<span className="text-emerald-400 font-bold">true</span>{`,
    `}<span className="text-cyan-400 font-semibold">"portfolio_risk_flag"</span>{`: `}<span className="text-amber-300 font-medium">"none"</span>{`
  },
  "audit": {
    `}<span className="text-cyan-400 font-semibold">"model_version"</span>{`: `}<span className="text-amber-300 font-medium">"v2.4.1"</span>{`,
    `}<span className="text-cyan-400 font-semibold">"bureaus"</span>{`: [`}<span className="text-amber-300 font-medium">"experian"</span>{`, `}<span className="text-amber-300 font-medium">"fico"</span>{`, `}<span className="text-amber-300 font-medium">"lexisnexis"</span>{`, `}<span className="text-amber-300 font-medium">"dnb"</span>{`],
    `}<span className="text-cyan-400 font-semibold">"sr_11_7"</span>{`: `}<span className="text-emerald-400 font-bold">true</span>{`
  }
}`}
          </pre>
        </div>
      </div>
      <p className="text-xs text-slate-600 text-center mt-4 font-medium tracking-wide">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
          7 structured intelligence outputs
        </span>
        <span className="mx-3 text-slate-400">·</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
          4-bureau orchestration
        </span>
        <span className="mx-3 text-slate-400">·</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
          Full audit trail
        </span>
      </p>
    </div>
  );
}
