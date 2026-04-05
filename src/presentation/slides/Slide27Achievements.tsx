const achievements = [
  { icon: '⚛', title: 'First Post-Quantum IAM for Healthcare', desc: 'Implementation of NIST FIPS 203/204 in a complete IAM workflow, applied to the highest-stakes data environment.' },
  { icon: '⛓', title: 'Genuinely Functional Blockchain', desc: 'Real SHA3-256 chained hashes, real Merkle trees, and chain validation that detects actual tampering — not a visual simulation.' },
  { icon: '🪪', title: 'W3C-Compliant Decentralized Identity', desc: 'DID Documents computed from real cryptographic public keys, following W3C DID Core specification structure.' },
  { icon: '📋', title: 'On-Chain Smart Contract RBAC', desc: 'Every access decision is evaluated by a policy engine and recorded as a blockchain transaction — zero decisions happen outside the ledger.' },
  { icon: '🔬', title: 'Interactive Tamper Demonstration', desc: 'Live cryptographic proof of blockchain immutability that a reviewer can verify themselves in real time.' },
  { icon: '🔑', title: 'Complete IAM Feature Coverage', desc: 'Authentication, credential lifecycle, delegation, emergency access, ZKP presentation, consent management — every IAM concern addressed.' },
];

export default function Slide27Achievements() {
  return (
    <section data-auto-animate data-transition="slide">
      <h2>What This Project Delivers</h2>
      <div className="grid-2x3" style={{ marginTop: '24px', gap: '16px' }}>
        {achievements.map((a) => (
          <div key={a.title} className="fragment pres-card" style={{ padding: '20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '1.6em', flexShrink: 0 }}>{a.icon}</span>
            <div>
              <h4 style={{ fontSize: '0.78em', color: '#00d4ff', marginBottom: '6px', fontWeight: 600 }}>{a.title}</h4>
              <p style={{ fontSize: '0.62em', color: '#94a3b8', lineHeight: 1.5, marginBottom: 0 }}>{a.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <aside className="notes">
        Six achievements, each representing a distinct technical contribution. Reveal one at a time to let each one land.
      </aside>
    </section>
  );
}
