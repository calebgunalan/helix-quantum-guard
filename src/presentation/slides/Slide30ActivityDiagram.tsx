const lanes = [
  { name: 'Hospital Staff', color: '#00d4ff', x: 0 },
  { name: 'Smart Contract Engine', color: '#7c3aed', x: 185 },
  { name: 'Department Head', color: '#f59e0b', x: 370 },
  { name: 'Blockchain Ledger', color: '#16a34a', x: 555 },
];

export default function Slide30ActivityDiagram() {
  return (
    <section data-transition="slide" className="slide-dense-content">
      <h2 style={{ fontSize: '0.95em' }}>UML Activity Diagram — Access Request Workflow</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '6px' }}>
        <svg viewBox="0 0 740 480" style={{ width: '98%', maxHeight: '70vh' }}>
          {/* Swim lane headers */}
          {lanes.map((l) => (
            <g key={l.name}>
              <rect x={l.x} y="0" width="180" height="24" rx="3" fill={l.color + '18'} stroke={l.color} strokeWidth="0.8" />
              <text x={l.x + 90} y="16" textAnchor="middle" fill={l.color} fontSize="7" fontWeight="bold">{l.name}</text>
              {/* Lane divider */}
              <line x1={l.x + 180} y1="0" x2={l.x + 180} y2="480" stroke={l.color} strokeWidth="0.3" opacity="0.2" />
            </g>
          ))}

          {/* Start */}
          <circle cx="90" cy="44" r="6" fill="#00d4ff" />
          <line x1="90" y1="50" x2="90" y2="62" stroke="#94a3b8" strokeWidth="0.7" />

          {/* Staff: Fill form */}
          <rect x="20" y="64" width="140" height="22" rx="10" fill="rgba(0,212,255,0.08)" stroke="#00d4ff" strokeWidth="0.6" />
          <text x="90" y="79" textAnchor="middle" fill="#cbd5e1" fontSize="6">Fill Access Request Form</text>
          <line x1="90" y1="86" x2="90" y2="98" stroke="#94a3b8" strokeWidth="0.7" />

          {/* Staff: Sign */}
          <rect x="20" y="100" width="140" height="22" rx="10" fill="rgba(0,212,255,0.08)" stroke="#00d4ff" strokeWidth="0.6" />
          <text x="90" y="115" textAnchor="middle" fill="#cbd5e1" fontSize="6">Sign with Dilithium Key</text>
          <line x1="160" y1="111" x2="205" y2="145" stroke="#94a3b8" strokeWidth="0.7" />

          {/* Smart Contract: Verify */}
          <rect x="205" y="134" width="140" height="22" rx="10" fill="rgba(124,58,237,0.08)" stroke="#7c3aed" strokeWidth="0.6" />
          <text x="275" y="149" textAnchor="middle" fill="#cbd5e1" fontSize="6">Verify Dilithium Signature</text>
          <line x1="275" y1="156" x2="275" y2="172" stroke="#94a3b8" strokeWidth="0.7" />

          {/* Decision: Sig valid? */}
          <polygon points="275,174 305,192 275,210 245,192" fill="rgba(245,158,11,0.08)" stroke="#f59e0b" strokeWidth="0.6" />
          <text x="275" y="195" textAnchor="middle" fill="#f59e0b" fontSize="5.5">Valid?</text>

          <line x1="275" y1="210" x2="275" y2="228" stroke="#16a34a" strokeWidth="0.7" />

          {/* Check credential */}
          <rect x="205" y="230" width="140" height="22" rx="10" fill="rgba(124,58,237,0.08)" stroke="#7c3aed" strokeWidth="0.6" />
          <text x="275" y="245" textAnchor="middle" fill="#cbd5e1" fontSize="6">Evaluate RBAC Rules</text>
          <line x1="275" y1="252" x2="275" y2="268" stroke="#94a3b8" strokeWidth="0.7" />

          {/* Decision: In scope? */}
          <polygon points="275,270 305,288 275,306 245,288" fill="rgba(245,158,11,0.08)" stroke="#f59e0b" strokeWidth="0.6" />
          <text x="275" y="291" textAnchor="middle" fill="#f59e0b" fontSize="5">In Scope?</text>

          {/* NO → Forward to Dept Head */}
          <line x1="305" y1="288" x2="390" y2="288" stroke="#f59e0b" strokeWidth="0.7" />

          {/* Dept Head: Review */}
          <rect x="390" y="277" width="140" height="22" rx="10" fill="rgba(245,158,11,0.08)" stroke="#f59e0b" strokeWidth="0.6" />
          <text x="460" y="292" textAnchor="middle" fill="#cbd5e1" fontSize="6">Review & Decide</text>
          <line x1="460" y1="299" x2="460" y2="316" stroke="#94a3b8" strokeWidth="0.7" />

          {/* Decision: Approve? */}
          <polygon points="460,318 490,336 460,354 430,336" fill="rgba(245,158,11,0.08)" stroke="#f59e0b" strokeWidth="0.6" />
          <text x="460" y="339" textAnchor="middle" fill="#f59e0b" fontSize="5">Approve?</text>

          {/* Approve path */}
          <line x1="460" y1="354" x2="460" y2="372" stroke="#16a34a" strokeWidth="0.7" />
          <rect x="390" y="374" width="140" height="22" rx="10" fill="rgba(245,158,11,0.08)" stroke="#f59e0b" strokeWidth="0.6" />
          <text x="460" y="389" textAnchor="middle" fill="#cbd5e1" fontSize="6">Sign Approval (Dilithium)</text>
          <line x1="530" y1="385" x2="575" y2="385" stroke="#16a34a" strokeWidth="0.7" />

          {/* Blockchain: Record */}
          <rect x="575" y="374" width="140" height="22" rx="10" fill="rgba(22,163,74,0.08)" stroke="#16a34a" strokeWidth="0.6" />
          <text x="645" y="389" textAnchor="middle" fill="#cbd5e1" fontSize="6">ACCESS_GRANTED tx</text>
          <line x1="645" y1="396" x2="645" y2="414" stroke="#16a34a" strokeWidth="0.7" />

          <rect x="575" y="416" width="140" height="22" rx="10" fill="rgba(22,163,74,0.08)" stroke="#16a34a" strokeWidth="0.6" />
          <text x="645" y="431" textAnchor="middle" fill="#cbd5e1" fontSize="6">Mine Block + Merkle Root</text>

          {/* Auto-approve path */}
          <line x1="275" y1="306" x2="275" y2="324" stroke="#16a34a" strokeWidth="0.7" />
          <text x="275" y="320" fill="#16a34a" fontSize="5" textAnchor="middle">YES</text>
          <line x1="275" y1="324" x2="575" y2="385" stroke="#16a34a" strokeWidth="0.5" strokeDasharray="3,2" />

          {/* End */}
          <circle cx="645" cy="456" r="6" fill="none" stroke="#94a3b8" strokeWidth="1.2" />
          <circle cx="645" cy="456" r="3.5" fill="#94a3b8" />
          <line x1="645" y1="438" x2="645" y2="450" stroke="#94a3b8" strokeWidth="0.7" />
        </svg>
      </div>
      <aside className="notes">Four swim lanes showing the complete access request workflow with Dilithium signing at every decision point.</aside>
    </section>
  );
}
