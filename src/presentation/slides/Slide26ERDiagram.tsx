const entities = [
  { name: 'USER', x: 280, y: 20, w: 160, attrs: ['userDID (PK)', 'name', 'role', 'department', 'dilithiumPubKey', 'credentialStatus'] },
  { name: 'DID_DOCUMENT', x: 500, y: 20, w: 160, attrs: ['did (PK)', 'publicKey', 'encapKey', 'credentialHash', 'issuedAtBlock', 'status'] },
  { name: 'BLOCK', x: 560, y: 200, w: 140, attrs: ['blockIndex (PK)', 'timestamp', 'previousHash', 'hash', 'merkleRoot', 'nonce'] },
  { name: 'TRANSACTION', x: 560, y: 370, w: 150, attrs: ['txHash (PK)', 'type', 'fromDID', 'signature', 'blockIndex (FK)', 'payload'] },
  { name: 'SMART_CONTRACT', x: 40, y: 200, w: 160, attrs: ['contractAddr (PK)', 'deployedAtBlock', 'deployedByDID', 'version', 'active'] },
  { name: 'POLICY_RULE', x: 40, y: 370, w: 150, attrs: ['ruleId (PK)', 'contractAddr (FK)', 'role', 'resource', 'accessLevel'] },
  { name: 'SESSION', x: 240, y: 400, w: 130, attrs: ['sessionToken (PK)', 'userDID (FK)', 'kyberCipher', 'expiresAt'] },
  { name: 'DELEGATION', x: 400, y: 400, w: 140, attrs: ['delegationId (PK)', 'delegatorDID', 'delegateeDID', 'signature'] },
];

function EntityBox({ e }: { e: typeof entities[number] }) {
  return (
    <g>
      <rect x={e.x} y={e.y} width={e.w} height={16} rx="2" fill="rgba(0,212,255,0.15)" stroke="#00d4ff" strokeWidth="0.8" />
      <text x={e.x + e.w / 2} y={e.y + 12} textAnchor="middle" fill="#00d4ff" fontSize="7" fontWeight="bold">{e.name}</text>
      <rect x={e.x} y={e.y + 16} width={e.w} height={e.attrs.length * 13 + 4} rx="0" fill="rgba(15,23,42,0.8)" stroke="rgba(0,212,255,0.2)" strokeWidth="0.5" />
      {e.attrs.map((a, i) => (
        <text key={a} x={e.x + 6} y={e.y + 30 + i * 13} fill={a.includes('PK') ? '#f59e0b' : a.includes('FK') ? '#7c3aed' : '#94a3b8'} fontSize="6" fontFamily="monospace">
          {a}
        </text>
      ))}
    </g>
  );
}

const rels: [number, number, number, number][] = [
  [440, 50, 500, 50],     // USER → DID_DOCUMENT
  [360, 100, 360, 400],   // USER → SESSION (approximate)
  [360, 100, 580, 200],   // USER → BLOCK path
  [630, 330, 630, 370],   // BLOCK → TRANSACTION
  [200, 310, 120, 370],   // SMART_CONTRACT → POLICY_RULE
];

export default function Slide26ERDiagram() {
  return (
    <section data-transition="slide" className="slide-dense-content">
      <h2 style={{ fontSize: '1em' }}>ER Diagram — Data Entities and Relationships</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
        <svg viewBox="0 0 760 500" style={{ width: '95%', maxHeight: '68vh' }}>
          {entities.map((e) => <EntityBox key={e.name} e={e} />)}

          {/* Relationship lines */}
          <line x1="440" y1="50" x2="500" y2="50" stroke="rgba(0,212,255,0.4)" strokeWidth="1" />
          <text x="470" y="45" fill="#64748b" fontSize="5" textAnchor="middle">1:1</text>

          <line x1="630" y1="310" x2="630" y2="370" stroke="rgba(0,212,255,0.4)" strokeWidth="1" />
          <text x="645" y="345" fill="#64748b" fontSize="5">1:N</text>

          <line x1="120" y1="305" x2="120" y2="370" stroke="rgba(0,212,255,0.4)" strokeWidth="1" />
          <text x="135" y="345" fill="#64748b" fontSize="5">1:N</text>

          <line x1="360" y1="100" x2="300" y2="400" stroke="rgba(0,212,255,0.2)" strokeWidth="0.7" strokeDasharray="3,3" />
          <text x="315" y="260" fill="#64748b" fontSize="5">1:N</text>

          <line x1="380" y1="100" x2="470" y2="400" stroke="rgba(0,212,255,0.2)" strokeWidth="0.7" strokeDasharray="3,3" />
          <text x="440" y="260" fill="#64748b" fontSize="5">1:N</text>

          <line x1="400" y1="100" x2="600" y2="370" stroke="rgba(0,212,255,0.2)" strokeWidth="0.7" strokeDasharray="3,3" />
          <text x="510" y="230" fill="#64748b" fontSize="5">1:N</text>

          {/* Legend */}
          <text x="20" y="490" fill="#f59e0b" fontSize="6">● PK = Primary Key</text>
          <text x="150" y="490" fill="#7c3aed" fontSize="6">● FK = Foreign Key</text>
          <text x="280" y="490" fill="#64748b" fontSize="6">Crow's foot: 1:N relationships</text>
        </svg>
      </div>
      <aside className="notes">Nine entities with relationships. USER and DID_DOCUMENT have 1:1. Most others are 1:N through blockchain transactions.</aside>
    </section>
  );
}
