export default function Slide12Architecture() {
  return (
    <section data-auto-animate data-transition="slide">
      <h2>Architecture at a Glance</h2>

      <svg viewBox="0 0 900 420" style={{ width: '100%', maxHeight: '420px', marginTop: '16px' }}>
        {/* Top Layer — Identity */}
        <g className="fragment" data-fragment-index="0">
          <text x="450" y="20" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="600" letterSpacing="2">IDENTITY LAYER</text>
          {[
            { x: 120, label: 'Patient DID' },
            { x: 320, label: 'Staff DID' },
            { x: 520, label: 'Moderator DID' },
            { x: 720, label: 'Admin DID' },
          ].map((n) => (
            <g key={n.label}>
              <rect x={n.x - 55} y="32" width="110" height="38" rx="8" fill="rgba(0,212,255,0.08)" stroke="rgba(0,212,255,0.3)" strokeWidth="1" />
              <text x={n.x} y="56" textAnchor="middle" fill="#e2e8f0" fontSize="11">{n.label}</text>
            </g>
          ))}
        </g>

        {/* Arrows down */}
        <g className="fragment" data-fragment-index="1" opacity="0.4">
          {[120, 320, 520, 720].map((x) => (
            <line key={x} x1={x} y1="72" x2={450} y2="120" stroke="#00d4ff" strokeWidth="0.8" strokeDasharray="4,3" />
          ))}
        </g>

        {/* Middle Layer — Security */}
        <g className="fragment" data-fragment-index="1">
          <text x="450" y="115" textAnchor="middle" fill="#00d4ff" fontSize="11" fontWeight="600" letterSpacing="2">SECURITY LAYER</text>
          {[
            { x: 170, label: 'Kyber768 Auth', sub: 'Key Encapsulation', dataId: 'arch-node-kyber' },
            { x: 450, label: 'Dilithium Verification', sub: 'Identity Proof', dataId: 'arch-node-dilithium' },
            { x: 730, label: 'Smart Contract RBAC', sub: 'Policy Evaluation', dataId: 'arch-node-rbac' },
          ].map((n) => (
            <g key={n.label} data-id={n.dataId}>
              <rect x={n.x - 100} y="128" width="200" height="50" rx="8" fill="rgba(0,212,255,0.12)" stroke="#00d4ff" strokeWidth="1" />
              <text x={n.x} y="150" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="600">{n.label}</text>
              <text x={n.x} y="168" textAnchor="middle" fill="#64748b" fontSize="9">{n.sub}</text>
            </g>
          ))}
          {/* Arrows between security boxes */}
          <line x1="270" y1="153" x2="350" y2="153" stroke="#00d4ff" strokeWidth="1" markerEnd="url(#arrowhead)" />
          <line x1="550" y1="153" x2="630" y2="153" stroke="#00d4ff" strokeWidth="1" markerEnd="url(#arrowhead)" />
        </g>

        {/* Bottom Layer — Infrastructure */}
        <g className="fragment" data-fragment-index="2">
          <line x1="450" y1="180" x2="450" y2="230" stroke="#00d4ff" strokeWidth="0.8" strokeDasharray="4,3" opacity="0.4" />
          <text x="450" y="240" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="600" letterSpacing="2">INFRASTRUCTURE LAYER</text>
          <rect x="180" y="252" width="280" height="50" rx="8" fill="rgba(124,58,237,0.08)" stroke="rgba(124,58,237,0.3)" strokeWidth="1" data-id="arch-node-blockchain" />
          <text x="320" y="274" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="600">Permissioned Blockchain Ledger</text>
          <text x="320" y="292" textAnchor="middle" fill="#64748b" fontSize="9">Hyperledger Fabric / In-Browser Engine</text>

          <line x1="460" y1="277" x2="540" y2="277" stroke="#7c3aed" strokeWidth="1" markerEnd="url(#arrowhead2)" />

          <rect x="540" y="252" width="180" height="50" rx="8" fill="rgba(124,58,237,0.08)" stroke="rgba(124,58,237,0.3)" strokeWidth="1" />
          <text x="630" y="274" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="600">EHR Resources</text>
          <text x="630" y="292" textAnchor="middle" fill="#64748b" fontSize="9">Hospital Data Systems</text>
        </g>

        {/* Note */}
        <g className="fragment" data-fragment-index="3">
          <text x="450" y="340" textAnchor="middle" fill="#64748b" fontSize="10" fontStyle="italic">
            Every arrow represents a cryptographically signed, blockchain-recorded event.
          </text>
        </g>

        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#00d4ff" /></marker>
          <marker id="arrowhead2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#7c3aed" /></marker>
        </defs>
      </svg>

      <aside className="notes">
        Walk through each layer: Identity → Security → Infrastructure. Emphasize that the security layer is the novel contribution — 
        this is where post-quantum algorithms replace classical ones.
      </aside>
    </section>
  );
}
