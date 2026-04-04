export function ArchitectureFlow() {
  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
        <svg viewBox="0 0 900 320" className="w-full drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
          {/* Drop Shadow Filters */}
          <defs>
            <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.1"/>
            </filter>
            <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.9"/>
            </linearGradient>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.4"/>
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.4"/>
            </linearGradient>
          </defs>

          {/* CitiDirect Box */}
          <rect x="20" y="100" width="180" height="100" rx="16" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" filter="url(#dropShadow)"/>
          <text x="110" y="135" textAnchor="middle" className="text-sm" fill="#1e293b" fontWeight="700" fontSize="16">CitiDirect</text>
          <text x="110" y="155" textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="500">Digital Credit</text>
          <text x="110" y="170" textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="500">Application</text>

          {/* Animated Flow Arrow 1 */}
          <line x1="200" y1="150" x2="280" y2="150" stroke="url(#flowGradient)" strokeWidth="3" strokeDasharray="5,5" markerEnd="url(#arrow)">
            <animate attributeName="stroke-dashoffset" values="10;0" dur="2s" repeatCount="indefinite"/>
          </line>
          <text x="240" y="135" textAnchor="middle" fill="#3b82f6" fontSize="11" fontWeight="600">REST API</text>

          {/* LumiqAI Box with Glow */}
          <rect x="280" y="80" width="220" height="140" rx="16" fill="url(#blueGlow)" stroke="#1d4ed8" strokeWidth="3" filter="url(#glowEffect)"/>
          <rect x="285" y="85" width="210" height="130" rx="12" fill="#ffffff" fillOpacity="0.95"/>
          <text x="390" y="115" textAnchor="middle" fill="#1d4ed8" fontWeight="800" fontSize="18">LumiqAI API</text>
          <text x="390" y="137" textAnchor="middle" fill="#3b82f6" fontSize="14" fontWeight="700">83ms p95</text>
          <rect x="305" y="150" width="170" height="50" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5"/>
          <text x="390" y="170" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="600">4-Bureau Orchestration</text>
          <text x="390" y="184" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="500">Experian · FICO · LexisNexis · D&B</text>

          {/* Animated Flow Arrow 2 */}
          <line x1="500" y1="150" x2="580" y2="150" stroke="url(#flowGradient)" strokeWidth="3" strokeDasharray="5,5" markerEnd="url(#arrow)">
            <animate attributeName="stroke-dashoffset" values="10;0" dur="2s" repeatCount="indefinite"/>
          </line>
          <text x="540" y="135" textAnchor="middle" fill="#3b82f6" fontSize="11" fontWeight="600">JSON</text>

          {/* 7 Outputs Box */}
          <rect x="580" y="60" width="160" height="80" rx="16" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2" filter="url(#dropShadow)"/>
          <text x="660" y="90" textAnchor="middle" fill="#166534" fontWeight="700" fontSize="15">7 Outputs</text>
          <text x="660" y="109" textAnchor="middle" fill="#22c55e" fontSize="12" fontWeight="600">Structured Signals</text>

          {/* Decision Box */}
          <rect x="580" y="170" width="160" height="80" rx="16" fill="#fefce8" stroke="#f59e0b" strokeWidth="2" filter="url(#dropShadow)"/>
          <text x="660" y="200" textAnchor="middle" fill="#92400e" fontWeight="700" fontSize="15">Decision + Audit</text>
          <text x="660" y="219" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="600">SR 11-7 Compliant</text>

          {/* Enhanced Output Arrows */}
          <line x1="740" y1="100" x2="800" y2="100" stroke="#3b82f6" strokeWidth="2.5" markerEnd="url(#arrowBlue)"/>
          <text x="820" y="92" fill="#1e293b" fontSize="11" fontWeight="600">Stylus / RM</text>
          <text x="820" y="105" fill="#64748b" fontSize="11" fontWeight="500">Workspaces</text>

          <line x1="740" y1="210" x2="800" y2="210" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrowOrange)"/>
          <text x="820" y="202" fill="#1e293b" fontSize="11" fontWeight="600">Compliance</text>
          <text x="820" y="215" fill="#64748b" fontSize="11" fontWeight="500">& Audit Trail</text>

          {/* Enhanced Arrow markers */}
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"/>
          </marker>
          <marker id="arrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"/>
          </marker>
          <marker id="arrowOrange" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b"/>
          </marker>
        </svg>
      </div>
    </div>
  );
}
