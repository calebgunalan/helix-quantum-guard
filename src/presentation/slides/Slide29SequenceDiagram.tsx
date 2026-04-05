const lifelines = ['User', 'Browser', 'CryptoEngine', 'AuthManager', 'BlockchainStore'];
const lx = [60, 180, 320, 460, 620];

const messages: { from: number; to: number; label: string; y: number; ret?: boolean; color?: string }[] = [
  { from: 0, to: 1, label: 'Click Login as Dr. Okafor', y: 60 },
  { from: 1, to: 2, label: 'generateKyberKeyPair()', y: 80, color: '#7c3aed' },
  { from: 2, to: 1, label: '{ clientPubKey, clientPrivKey }', y: 95, ret: true },
  { from: 1, to: 3, label: 'initiateHandshake(clientPubKey)', y: 115, color: '#00d4ff' },
  { from: 3, to: 2, label: 'kyberEncapsulate(serverPubKey)', y: 130, color: '#7c3aed' },
  { from: 2, to: 3, label: '{ ciphertext, sharedSecret }', y: 145, ret: true },
  { from: 3, to: 1, label: 'ciphertext', y: 160, ret: true },
  { from: 1, to: 2, label: 'kyberDecapsulate(privKey, cipher)', y: 180, color: '#7c3aed' },
  { from: 2, to: 1, label: 'sharedSecret', y: 195, ret: true },
  { from: 3, to: 1, label: 'MFA challenge nonce', y: 225, color: '#f59e0b' },
  { from: 1, to: 2, label: 'signData(userPrivKey, nonce)', y: 245, color: '#7c3aed' },
  { from: 2, to: 1, label: 'dilithiumSignature', y: 260, ret: true },
  { from: 1, to: 3, label: 'verifyMFA(pubKey, nonce, sig)', y: 280, color: '#00d4ff' },
  { from: 3, to: 2, label: 'verifySignature()', y: 295, color: '#7c3aed' },
  { from: 2, to: 3, label: 'true ✓', y: 310, ret: true, color: '#16a34a' },
  { from: 3, to: 4, label: 'addTransaction(MFA_VERIFIED)', y: 330, color: '#7c3aed' },
  { from: 3, to: 1, label: 'sessionToken = sha3Hash(secret+ts)', y: 355, ret: true, color: '#16a34a' },
  { from: 1, to: 4, label: 'addTransaction(LOGIN_SUCCESS)', y: 375, color: '#7c3aed' },
  { from: 1, to: 0, label: 'Dashboard loaded — Session: 30:00', y: 400, ret: true, color: '#16a34a' },
];

export default function Slide29SequenceDiagram() {
  return (
    <section data-auto-animate data-transition="slide" className="slide-dense-content">
      <h2 style={{ fontSize: '0.95em' }}>UML Sequence Diagram — Quantum-Safe Authentication</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '6px' }}>
        <svg viewBox="0 0 740 440" style={{ width: '98%', maxHeight: '70vh' }}>
          {/* Lifeline boxes */}
          {lifelines.map((name, i) => (
            <g key={name}>
              <rect x={lx[i] - 35} y="10" width="70" height="22" rx="3" fill="rgba(0,212,255,0.1)" stroke="#00d4ff" strokeWidth="0.8" />
              <text x={lx[i]} y="25" textAnchor="middle" fill="#00d4ff" fontSize="7" fontWeight="bold">{name}</text>
              {/* Lifeline dashed */}
              <line x1={lx[i]} y1="32" x2={lx[i]} y2="430" stroke="#334155" strokeWidth="0.6" strokeDasharray="4,3" />
            </g>
          ))}

          {/* Note: shared secret established */}
          <rect x="140" y="205" width="360" height="16" rx="3" fill="rgba(0,212,255,0.06)" stroke="#00d4ff" strokeWidth="0.4" />
          <text x="320" y="216" textAnchor="middle" fill="#00d4ff" fontSize="5.5" fontStyle="italic">Shared secret established — Quantum-safe channel open</text>

          {/* Messages */}
          {messages.map((m, i) => {
            const x1 = lx[m.from];
            const x2 = lx[m.to];
            const color = m.color || '#94a3b8';
            return (
              <g key={i}>
                <line x1={x1} y1={m.y} x2={x2} y2={m.y} stroke={color} strokeWidth="0.7" strokeDasharray={m.ret ? '3,2' : 'none'}
                  markerEnd={`url(#seqArrow)`} />
                <text x={(x1 + x2) / 2} y={m.y - 3} textAnchor="middle" fill={color} fontSize="4.5" fontFamily="monospace">{m.label}</text>
              </g>
            );
          })}

          {/* Note: auto-mine */}
          <rect x="540" y="385" width="160" height="14" rx="2" fill="rgba(124,58,237,0.08)" stroke="#7c3aed" strokeWidth="0.3" />
          <text x="620" y="395" textAnchor="middle" fill="#7c3aed" fontSize="5" fontStyle="italic">Auto-mine fires every 8 seconds</text>

          <defs>
            <marker id="seqArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
            </marker>
          </defs>
        </svg>
      </div>
      <aside className="notes">Full UML sequence showing Kyber handshake → Dilithium MFA → Session establishment with all blockchain recording.</aside>
    </section>
  );
}
