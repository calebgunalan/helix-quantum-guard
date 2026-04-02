const layers = [
  {
    name: 'Cryptographic Primitives Layer',
    color: '#7c3aed',
    items: [
      'CRYSTALS-Dilithium3 (NIST FIPS 204) — Digital Signatures',
      'CRYSTALS-Kyber768 (NIST FIPS 203) — Key Encapsulation',
      'SHA3-256 (@noble/hashes) — Hashing and Block Integrity',
      'Groth16 zk-SNARKs (snarkjs) — Zero-Knowledge Proofs',
      'Library: noble-post-quantum (open source, audited)',
    ],
  },
  {
    name: 'Blockchain Infrastructure Layer',
    color: '#00d4ff',
    items: [
      'Hyperledger Fabric 2.5 (Production) — Permissioned Blockchain',
      'In-Browser Blockchain Engine (Demo) — JavaScript, Zustand',
      'PBFT Consensus (Production) — Byzantine Fault Tolerant',
      'Block Structure: SHA3-256 Hashed, Merkle-rooted, Dilithium-signed',
    ],
  },
  {
    name: 'Identity and Policy Layer',
    color: '#3b82f6',
    items: [
      'W3C DID Core Specification — Decentralized Identifiers',
      'Smart Contract Policy Engine — JS (Demo) / Chaincode (Production)',
      'RBAC Policy Rules — On-chain deployment',
      'Credential Lifecycle Manager — Issue, Renew, Revoke, Delegate',
    ],
  },
  {
    name: 'Application Layer',
    color: '#64748b',
    items: [
      'React 18 + TypeScript — Frontend Framework',
      'Tailwind CSS + Shadcn/UI — Component Library',
      'Zustand — Global State Management',
      'Recharts + Framer Motion — Visualization and Animation',
      'Reveal.js — Presentation Framework',
    ],
  },
];

export default function Slide11TechStack() {
  return (
    <section data-transition="slide">
      <h2>Technology Stack</h2>
      <div style={{ display: 'flex', gap: '24px', marginTop: '20px' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column-reverse', gap: '12px' }}>
          {layers.map((layer, i) => (
            <div key={layer.name} className="fragment pres-card" style={{ borderLeft: `3px solid ${layer.color}`, padding: '16px 20px' }}>
              <h4 style={{ fontSize: '0.78em', color: layer.color, marginBottom: '8px', fontWeight: 600 }}>{layer.name}</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {layer.items.map((item) => (
                  <span key={item} style={{ fontSize: '0.58em', color: '#94a3b8', background: 'rgba(255,255,255,0.03)', padding: '3px 8px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ width: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontSize: '0.6em', color: '#64748b', letterSpacing: '2px' }}>
            Production → Demo
          </div>
        </div>
      </div>

      <aside className="notes">
        Build the stack from bottom to top. The cryptographic layer is the foundation — everything above depends on it.
        Note the vertical label showing that each layer has both production and demo implementations.
      </aside>
    </section>
  );
}
