import TiltCard from '../components/TiltCard';

const quadrants = [
  {
    title: '🔐 Cryptographic Libraries',
    color: '#7c3aed',
    items: [
      { name: 'noble-post-quantum', ver: 'v0.6+', purpose: 'CRYSTALS-Dilithium3 & Kyber768 (FIPS 203/204)', license: 'MIT' },
      { name: '@noble/hashes', ver: 'v1.4+', purpose: 'SHA3-256 for all block & transaction hashes', license: 'MIT' },
      { name: 'snarkjs', ver: 'v0.7+', purpose: 'Groth16 zk-SNARK proof generation', license: 'GPL-3.0' },
    ],
  },
  {
    title: '⚛ Frontend Application Stack',
    color: '#00d4ff',
    items: [
      { name: 'React', ver: 'v18.x', purpose: 'UI component framework', license: 'MIT' },
      { name: 'TypeScript', ver: 'v5.x', purpose: 'Type-safe JavaScript', license: 'Apache 2.0' },
      { name: 'Tailwind CSS', ver: 'v3.x', purpose: 'Utility-first styling', license: 'MIT' },
      { name: 'Zustand', ver: 'v4.x', purpose: 'Global state management', license: 'MIT' },
      { name: 'Reveal.js', ver: 'v5.x', purpose: 'Presentation framework', license: 'MIT' },
    ],
  },
  {
    title: '⛓ Blockchain Infrastructure',
    color: '#16a34a',
    items: [
      { name: 'Hyperledger Fabric', ver: 'v2.5', purpose: 'Permissioned blockchain network', license: 'Apache 2.0' },
      { name: 'Docker', ver: 'v24+', purpose: 'Fabric peer containerization', license: 'Apache 2.0' },
      { name: 'CouchDB', ver: 'v3.x', purpose: 'World state database', license: 'Apache 2.0' },
      { name: 'Go', ver: 'v1.21+', purpose: 'Chaincode development', license: 'BSD' },
    ],
  },
  {
    title: '🛠 Dev & Deployment Tools',
    color: '#f59e0b',
    items: [
      { name: 'Node.js', ver: 'v20 LTS', purpose: 'JavaScript runtime', license: 'MIT' },
      { name: 'Vite', ver: 'v5.x', purpose: 'Frontend build tool', license: 'MIT' },
      { name: 'ESLint + Prettier', ver: 'Latest', purpose: 'Code quality', license: 'MIT' },
      { name: 'Git', ver: 'v2.x', purpose: 'Version control', license: 'GPL-2.0' },
    ],
  },
];

export default function Slide20SoftwareReq() {
  return (
    <section data-auto-animate data-transition="slide" className="slide-dense-content">
      <h2 style={{ fontSize: '1em', marginBottom: 'clamp(0.3rem, 0.6vh, 0.6rem)' }}>Software Requirements</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 'clamp(0.4rem, 0.8vh, 0.8rem)', flex: 1, minHeight: 0 }}>
        {quadrants.map((q) => (
          <TiltCard key={q.title} maxTilt={6}>
            <div className="pres-card" style={{ padding: 'clamp(0.5rem, 1vh, 1rem)', borderTop: `2px solid ${q.color}`, height: '100%', overflow: 'hidden' }}>
              <h4 style={{ fontSize: 'clamp(0.6rem, 1.2vw, 0.9rem)', color: q.color, marginBottom: 'clamp(0.2rem, 0.4vh, 0.5rem)', fontWeight: 700 }}>{q.title}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                {q.items.map((it) => (
                  <div key={it.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: 'clamp(0.42rem, 0.85vw, 0.65rem)' }}>
                    <span style={{ color: '#cbd5e1', fontWeight: 500 }}>{it.name} <span style={{ color: '#64748b' }}>{it.ver}</span></span>
                    <span style={{ color: '#64748b', fontSize: '0.9em', textAlign: 'right', maxWidth: '55%' }}>{it.purpose}</span>
                  </div>
                ))}
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
      <aside className="notes">Four-quadrant software overview covering crypto, frontend, blockchain infra, and dev tools.</aside>
    </section>
  );
}
