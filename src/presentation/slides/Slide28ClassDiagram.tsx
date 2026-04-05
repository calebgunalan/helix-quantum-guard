const classes = [
  { name: 'CryptoEngine', x: 20, y: 20, w: 170, color: '#7c3aed',
    attrs: [],
    methods: ['+generateDilithiumKeyPair(): KeyPair', '+signData(key, data): Uint8Array', '+verifySignature(): boolean', '+generateKyberKeyPair(): KeyPair', '+sha3Hash(data): string'] },
  { name: 'Block', x: 220, y: 20, w: 170, color: '#00d4ff',
    attrs: ['-index: number', '-previousHash: string', '-hash: string', '-merkleRoot: string', '-nonce: number'],
    methods: ['+computeHash(): string', '+validate(): boolean'] },
  { name: 'BlockchainStore', x: 420, y: 20, w: 180, color: '#00d4ff',
    attrs: ['-chain: Block[]', '-pendingTx: Transaction[]'],
    methods: ['+addTransaction(): void', '+mineBlock(): Block', '+validateChain(): Result', '+getMerkleProof(): string[]'] },
  { name: 'Transaction', x: 620, y: 20, w: 160, color: '#f59e0b',
    attrs: ['-txHash: string', '-type: IAMEventType', '-fromDID: string', '-signature: string'],
    methods: ['+computeHash(): string', '+sign(key): void'] },
  { name: 'SmartContract', x: 20, y: 240, w: 180, color: '#16a34a',
    attrs: ['-contractAddress: string', '-rules: PolicyRule[]'],
    methods: ['+evaluate(req): Decision', '+deployPolicy(rule): void', '+checkDelegations(): Delegation[]'] },
  { name: 'UserIdentity', x: 230, y: 240, w: 170, color: '#dc2626',
    attrs: ['-did: string', '-role: UserRole', '-dilithiumPubKey: Uint8Array', '-credentialStatus: Status'],
    methods: ['+verifyOnChain(): boolean', '+revokeCredential(): Transaction'] },
  { name: 'Session', x: 430, y: 240, w: 160, color: '#f59e0b',
    attrs: ['-sessionToken: string', '-userDID: string', '-expiresAt: number'],
    methods: ['+isExpired(): boolean', '+invalidate(): Transaction'] },
  { name: 'AuthManager', x: 620, y: 240, w: 170, color: '#7c3aed',
    attrs: [],
    methods: ['+initiateKyberHandshake()', '+verifyDilithiumMFA(): boolean', '+createSession(): Session', '+handleSessionExpiry(): void'] },
];

function ClassBox({ c }: { c: typeof classes[number] }) {
  const attrH = c.attrs.length * 11;
  const methH = c.methods.length * 11;
  const totalH = 18 + attrH + 4 + methH + 6;
  return (
    <g>
      {/* Header */}
      <rect x={c.x} y={c.y} width={c.w} height={18} rx="2" fill={c.color + '22'} stroke={c.color} strokeWidth="0.8" />
      <text x={c.x + c.w / 2} y={c.y + 13} textAnchor="middle" fill={c.color} fontSize="7" fontWeight="bold">{c.name}</text>
      {/* Attrs */}
      <rect x={c.x} y={c.y + 18} width={c.w} height={attrH + 4} fill="rgba(15,23,42,0.9)" stroke={c.color} strokeWidth="0.4" />
      {c.attrs.map((a, i) => (
        <text key={a} x={c.x + 4} y={c.y + 30 + i * 11} fill="#94a3b8" fontSize="5.5" fontFamily="monospace">{a}</text>
      ))}
      {/* Methods */}
      <rect x={c.x} y={c.y + 22 + attrH} width={c.w} height={methH + 6} fill="rgba(15,23,42,0.7)" stroke={c.color} strokeWidth="0.4" />
      {c.methods.map((m, i) => (
        <text key={m} x={c.x + 4} y={c.y + 34 + attrH + i * 11} fill="#cbd5e1" fontSize="5" fontFamily="monospace">{m}</text>
      ))}
    </g>
  );
}

export default function Slide28ClassDiagram() {
  return (
    <section data-auto-animate data-transition="slide" className="slide-dense-content">
      <h2 style={{ fontSize: '1em' }}>UML Class Diagram — Core System Classes</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
        <svg viewBox="0 0 820 460" style={{ width: '98%', maxHeight: '68vh' }}>
          {classes.map((c) => <ClassBox key={c.name} c={c} />)}

          {/* Composition: BlockchainStore *-- Block */}
          <line x1="420" y1="60" x2="390" y2="60" stroke="#00d4ff" strokeWidth="0.8" />
          <polygon points="418,56 426,60 418,64 414,60" fill="#00d4ff" />

          {/* Composition: Block *-- Transaction */}
          <line x1="620" y1="70" x2="600" y2="70" stroke="#f59e0b" strokeWidth="0.8" />

          {/* Dependency: AuthManager --> CryptoEngine */}
          <line x1="620" y1="290" x2="200" y2="80" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="4,2" />
          <text x="400" y="180" fill="#64748b" fontSize="5" textAnchor="middle">«uses»</text>

          {/* AuthManager --> Session */}
          <line x1="620" y1="310" x2="590" y2="300" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="4,2" />

          {/* AuthManager --> UserIdentity */}
          <line x1="620" y1="280" x2="400" y2="280" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="4,2" />
          <text x="510" y="275" fill="#64748b" fontSize="5" textAnchor="middle">«authenticates»</text>

          {/* SmartContract --> Transaction */}
          <line x1="120" y1="240" x2="650" y2="120" stroke="#94a3b8" strokeWidth="0.4" strokeDasharray="4,2" />

          {/* Legend */}
          <text x="20" y="445" fill="#94a3b8" fontSize="6">◆ Composition | ◇ Aggregation | ‐ ‐ → Dependency</text>
        </svg>
      </div>
      <aside className="notes">Eight core classes with UML composition and dependency relationships.</aside>
    </section>
  );
}
