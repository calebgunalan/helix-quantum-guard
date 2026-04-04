export default function Slide25FlowDiagram() {
  return (
    <section data-transition="slide" className="slide-dense-content">
      <h2 style={{ fontSize: '1em' }}>System Flow Diagram — End-to-End IAM Workflow</h2>
      <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
        <svg viewBox="0 0 800 520" style={{ width: '90%', maxHeight: '68vh' }}>
          {/* Definitions */}
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
            </marker>
            <marker id="arrowRed" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626" />
            </marker>
            <marker id="arrowGreen" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#16a34a" />
            </marker>
          </defs>

          {/* Start */}
          <circle cx="400" cy="18" r="8" fill="#00d4ff" />
          <line x1="400" y1="26" x2="400" y2="42" stroke="#94a3b8" markerEnd="url(#arrow)" />

          {/* Auth flow - teal boxes */}
          <rect x="290" y="44" width="220" height="28" rx="4" fill="rgba(0,212,255,0.1)" stroke="#00d4ff" strokeWidth="0.8" />
          <text x="400" y="62" textAnchor="middle" fill="#00d4ff" fontSize="9" fontFamily="monospace">Kyber Key Encapsulation Handshake</text>
          <line x1="400" y1="72" x2="400" y2="88" stroke="#94a3b8" markerEnd="url(#arrow)" />

          <rect x="290" y="90" width="220" height="28" rx="4" fill="rgba(0,212,255,0.1)" stroke="#00d4ff" strokeWidth="0.8" />
          <text x="400" y="108" textAnchor="middle" fill="#00d4ff" fontSize="9" fontFamily="monospace">Dilithium MFA Challenge-Response</text>
          <line x1="400" y1="118" x2="400" y2="138" stroke="#94a3b8" markerEnd="url(#arrow)" />

          {/* Decision diamond 1 */}
          <polygon points="400,140 445,162 400,184 355,162" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" strokeWidth="0.8" />
          <text x="400" y="166" textAnchor="middle" fill="#f59e0b" fontSize="7">Signature Valid?</text>

          {/* NO path */}
          <line x1="445" y1="162" x2="540" y2="162" stroke="#dc2626" markerEnd="url(#arrowRed)" />
          <rect x="542" y="148" width="140" height="28" rx="4" fill="rgba(220,38,38,0.1)" stroke="#dc2626" strokeWidth="0.8" />
          <text x="612" y="166" textAnchor="middle" fill="#dc2626" fontSize="8">LOGIN_FAILED → Deny</text>

          {/* YES path */}
          <line x1="400" y1="184" x2="400" y2="200" stroke="#16a34a" markerEnd="url(#arrowGreen)" />

          {/* Blockchain recording - violet */}
          <rect x="280" y="202" width="240" height="28" rx="4" fill="rgba(124,58,237,0.1)" stroke="#7c3aed" strokeWidth="0.8" />
          <text x="400" y="220" textAnchor="middle" fill="#7c3aed" fontSize="8">Log LOGIN_SUCCESS + MFA_VERIFIED to Blockchain</text>
          <line x1="400" y1="230" x2="400" y2="248" stroke="#94a3b8" markerEnd="url(#arrow)" />

          {/* Load DID */}
          <rect x="300" y="250" width="200" height="28" rx="4" fill="rgba(0,212,255,0.1)" stroke="#00d4ff" strokeWidth="0.8" />
          <text x="400" y="268" textAnchor="middle" fill="#00d4ff" fontSize="8">Load User DID from Blockchain</text>
          <line x1="400" y1="278" x2="400" y2="296" stroke="#94a3b8" markerEnd="url(#arrow)" />

          {/* Decision diamond 2 */}
          <polygon points="400,298 450,318 400,338 350,318" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" strokeWidth="0.8" />
          <text x="400" y="322" textAnchor="middle" fill="#f59e0b" fontSize="7">Credential ACTIVE?</text>
          <line x1="450" y1="318" x2="540" y2="318" stroke="#dc2626" markerEnd="url(#arrowRed)" />
          <text x="570" y="322" textAnchor="middle" fill="#dc2626" fontSize="7">NO → Revoked</text>
          <line x1="400" y1="338" x2="400" y2="354" stroke="#16a34a" markerEnd="url(#arrowGreen)" />

          {/* Smart Contract */}
          <rect x="280" y="356" width="240" height="28" rx="4" fill="rgba(0,212,255,0.1)" stroke="#00d4ff" strokeWidth="0.8" />
          <text x="400" y="374" textAnchor="middle" fill="#00d4ff" fontSize="8">Smart Contract evaluate() — RBAC Check</text>
          <line x1="400" y1="384" x2="400" y2="402" stroke="#94a3b8" markerEnd="url(#arrow)" />

          {/* Decision diamond 3 */}
          <polygon points="400,404 450,424 400,444 350,424" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" strokeWidth="0.8" />
          <text x="400" y="428" textAnchor="middle" fill="#f59e0b" fontSize="7">Policy Match?</text>

          {/* Emergency path */}
          <line x1="350" y1="424" x2="180" y2="424" stroke="#dc2626" />
          <polygon points="180,408 225,424 180,440 135,424" fill="rgba(220,38,38,0.1)" stroke="#dc2626" strokeWidth="0.8" />
          <text x="180" y="428" textAnchor="middle" fill="#dc2626" fontSize="6">Emergency?</text>
          <line x1="180" y1="440" x2="180" y2="470" stroke="#16a34a" markerEnd="url(#arrowGreen)" />
          <text x="180" y="484" textAnchor="middle" fill="#16a34a" fontSize="7">EMERGENCY_ACCESS</text>

          {/* YES match */}
          <line x1="400" y1="444" x2="400" y2="462" stroke="#16a34a" markerEnd="url(#arrowGreen)" />
          <rect x="290" y="464" width="220" height="28" rx="4" fill="rgba(22,163,74,0.1)" stroke="#16a34a" strokeWidth="0.8" />
          <text x="400" y="482" textAnchor="middle" fill="#16a34a" fontSize="8">ACCESS_GRANTED → Mine Block</text>

          {/* End */}
          <line x1="400" y1="492" x2="400" y2="506" stroke="#94a3b8" markerEnd="url(#arrow)" />
          <circle cx="400" cy="514" r="7" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
          <circle cx="400" cy="514" r="4" fill="#94a3b8" />
        </svg>
      </div>
      <p style={{ fontSize: '0.55em', color: '#64748b', textAlign: 'center', marginTop: '4px' }}>
        Every diamond decision point generates a blockchain transaction. No decision happens off the ledger.
      </p>
      <aside className="notes">Complete end-to-end flow from login to resource access with all decision points recorded on-chain.</aside>
    </section>
  );
}
