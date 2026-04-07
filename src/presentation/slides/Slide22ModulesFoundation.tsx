import TiltCard from '../components/TiltCard';

const modules = [
  {
    num: 1, name: 'Cryptographic Engine', file: 'crypto.ts', color: '#7c3aed',
    funcs: [
      'generateDilithiumKeyPair() — real CRYSTALS-Dilithium3 key pairs (ml_dsa65)',
      'signData() / verifySignature() — real Dilithium signing & verification',
      'generateKyberKeyPair() — CRYSTALS-Kyber768 for session establishment',
      'kyberEncapsulate() / kyberDecapsulate() — quantum-safe key exchange',
      'sha3Hash() — SHA3-256 hash of any input',
    ],
    standards: 'NIST FIPS 202, 203, 204',
  },
  {
    num: 2, name: 'Blockchain Engine', file: 'blockchain.ts', color: '#00d4ff',
    funcs: [
      'computeBlockHash() — SHA3-256 of block content',
      'computeMerkleRoot() — real binary Merkle tree',
      'addTransaction() → mineBlock() — sign, pool, and mine',
      'validateChain() — recomputes every hash, detects tampering',
      'getMerkleProof() — sibling hash path for inclusion proof',
    ],
    standards: 'Auto-mines every 8s. Real SHA3-256 chaining.',
  },
  {
    num: 3, name: 'Smart Contract Policy Engine', file: 'contracts.ts', color: '#16a34a',
    funcs: [
      'evaluate(accessRequest) — checks credentials, delegations, RBAC rules',
      'deployPolicy() — SHA3-256 contractAddress, POLICY_DEPLOYED tx',
      'checkDelegations() — verifies signed delegation coverage',
    ],
    standards: 'Every evaluate() creates ACCESS_GRANTED/DENIED blockchain tx.',
  },
];

export default function Slide22ModulesFoundation() {
  return (
    <section data-auto-animate data-transition="slide" className="slide-dense-content">
      <h2 style={{ fontSize: '1em' }}>Modules 1–3: Cryptographic and Blockchain Foundation</h2>
      <div className="slide-scroll-inner" style={{ display: 'flex', gap: '14px', marginTop: '16px' }}>
        {modules.map((m) => (
          <TiltCard key={m.num} className="fragment" maxTilt={6} style={{ flex: 1 }}>
            <div className="pres-card" style={{ padding: '14px', borderTop: `3px solid ${m.color}`, height: '100%' }}>
              <p style={{ fontSize: '0.55em', color: m.color, fontWeight: 700, marginBottom: '2px' }}>Module {m.num}</p>
              <h4 style={{ fontSize: '0.68em', color: '#e2e8f0', marginBottom: '4px' }}>{m.name}</h4>
              <p className="mono" style={{ fontSize: '0.48em', color: '#64748b', marginBottom: '10px' }}>{m.file}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {m.funcs.map((f) => (
                  <li key={f} style={{ fontSize: '0.48em', color: '#94a3b8', lineHeight: 1.5, marginBottom: '4px', paddingLeft: '10px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: m.color }}>›</span>{f}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.45em', color: '#64748b', marginTop: '8px', marginBottom: 0, fontStyle: 'italic' }}>{m.standards}</p>
            </div>
          </TiltCard>
        ))}
      </div>
      <aside className="notes">Foundation layer: crypto primitives, blockchain data structure, and smart contract policy engine.</aside>
    </section>
  );
}
