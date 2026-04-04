const actors = [
  {
    name: 'Patient', x: 30, color: '#16a34a',
    cases: ['View DID Identity Card', 'Manage Health Record Consent', 'Generate ZKP Credential Proof', 'View Record Access History'],
  },
  {
    name: 'Hospital Staff', x: 30, color: '#00d4ff',
    cases: ['Login with Quantum-Safe MFA', 'Request Resource Access', 'Delegate Credentials', 'Invoke Break-Glass Emergency', 'View My Blockchain Activity'],
  },
  {
    name: 'Dept. Head / Moderator', x: 570, color: '#f59e0b',
    cases: ['Approve / Deny Access Requests', 'View Department Audit Trail', 'View Smart Contract Policies', 'Monitor Identity Status'],
  },
  {
    name: 'IT Admin', x: 570, color: '#dc2626',
    cases: ['Onboard New Staff', 'Revoke User Identity', 'Explore Blockchain', 'Deploy Access Policy', 'Trigger Key Rotation', 'View Analytics'],
  },
];

const shared = [
  { name: '<<include>> Dilithium Signature Verification', y: 240 },
  { name: '<<include>> Create Blockchain Transaction', y: 260 },
  { name: '<<extend>> Re-auth on Session Expiry', y: 280 },
];

export default function Slide27UseCaseDiagram() {
  return (
    <section data-transition="slide" className="slide-dense-content">
      <h2 style={{ fontSize: '1em' }}>UML Use Case Diagram</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
        <svg viewBox="0 0 720 420" style={{ width: '95%', maxHeight: '68vh' }}>
          {/* System boundary */}
          <rect x="130" y="15" width="460" height="380" rx="8" fill="none" stroke="rgba(0,212,255,0.3)" strokeWidth="1" strokeDasharray="6,3" />
          <text x="360" y="35" textAnchor="middle" fill="#00d4ff" fontSize="9" fontWeight="bold">HelixID System</text>

          {/* Left actors */}
          {[actors[0], actors[1]].map((a, idx) => {
            const baseY = idx === 0 ? 60 : 210;
            return (
              <g key={a.name}>
                {/* Stick figure */}
                <circle cx={60} cy={baseY} r="8" fill="none" stroke={a.color} strokeWidth="1" />
                <line x1="60" y1={baseY + 8} x2="60" y2={baseY + 28} stroke={a.color} />
                <line x1="48" y1={baseY + 16} x2="72" y2={baseY + 16} stroke={a.color} />
                <line x1="60" y1={baseY + 28} x2="50" y2={baseY + 38} stroke={a.color} />
                <line x1="60" y1={baseY + 28} x2="70" y2={baseY + 38} stroke={a.color} />
                <text x="60" y={baseY + 50} textAnchor="middle" fill={a.color} fontSize="6" fontWeight="bold">{a.name}</text>
                {a.cases.map((c, i) => (
                  <g key={c}>
                    <ellipse cx={240} cy={baseY + i * 24 - 10} rx="90" ry="9" fill="rgba(15,23,42,0.8)" stroke={a.color} strokeWidth="0.6" />
                    <text x={240} y={baseY + i * 24 - 7} textAnchor="middle" fill="#cbd5e1" fontSize="5.5">{c}</text>
                    <line x1="80" y1={baseY + 15} x2="150" y2={baseY + i * 24 - 10} stroke={a.color} strokeWidth="0.3" opacity="0.4" />
                  </g>
                ))}
              </g>
            );
          })}

          {/* Right actors */}
          {[actors[2], actors[3]].map((a, idx) => {
            const baseY = idx === 0 ? 60 : 220;
            return (
              <g key={a.name}>
                <circle cx={660} cy={baseY} r="8" fill="none" stroke={a.color} strokeWidth="1" />
                <line x1="660" y1={baseY + 8} x2="660" y2={baseY + 28} stroke={a.color} />
                <line x1="648" y1={baseY + 16} x2="672" y2={baseY + 16} stroke={a.color} />
                <line x1="660" y1={baseY + 28} x2="650" y2={baseY + 38} stroke={a.color} />
                <line x1="660" y1={baseY + 28} x2="670" y2={baseY + 38} stroke={a.color} />
                <text x="660" y={baseY + 50} textAnchor="middle" fill={a.color} fontSize="6" fontWeight="bold">{a.name}</text>
                {a.cases.map((c, i) => (
                  <g key={c}>
                    <ellipse cx={480} cy={baseY + i * 22 - 10} rx="85" ry="9" fill="rgba(15,23,42,0.8)" stroke={a.color} strokeWidth="0.6" />
                    <text x={480} y={baseY + i * 22 - 7} textAnchor="middle" fill="#cbd5e1" fontSize="5.5">{c}</text>
                    <line x1="640" y1={baseY + 15} x2="565" y2={baseY + i * 22 - 10} stroke={a.color} strokeWidth="0.3" opacity="0.4" />
                  </g>
                ))}
              </g>
            );
          })}

          {/* Shared use cases */}
          {shared.map((s) => (
            <g key={s.name}>
              <ellipse cx={360} cy={s.y + 80} rx="120" ry="8" fill="rgba(124,58,237,0.1)" stroke="#7c3aed" strokeWidth="0.6" strokeDasharray="3,2" />
              <text x={360} y={s.y + 83} textAnchor="middle" fill="#7c3aed" fontSize="5">{s.name}</text>
            </g>
          ))}
        </svg>
      </div>
      <aside className="notes">Four actors, ~21 use cases, three shared include/extend relationships.</aside>
    </section>
  );
}
