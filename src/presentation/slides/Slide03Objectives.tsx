const objectives = [
  { num: '01', title: 'Quantum-Resistant Authentication', desc: 'Design and implement an authentication protocol using CRYSTALS-Kyber768 key encapsulation and Dilithium3 challenge-response that remains secure against both classical and quantum adversaries.' },
  { num: '02', title: 'Immutable Identity Audit Trail', desc: 'Build a blockchain-based ledger where every identity event is recorded as a cryptographically signed, SHA3-256 hashed transaction that is verifiable and tamper-evident by any network participant.' },
  { num: '03', title: 'Decentralized Identity Anchoring', desc: 'Implement W3C DID-compliant identity documents registered on-chain, eliminating reliance on centralized identity directories and enabling cross-institutional identity portability.' },
  { num: '04', title: 'Smart Contract Policy Enforcement', desc: 'Replace administrator-controlled access configuration with on-chain policy rules evaluated by a deterministic smart contract engine, creating governance accountability for every policy change.' },
  { num: '05', title: 'Privacy-Preserving Credential Verification', desc: 'Enable zero-knowledge proof-based credential presentation so that identity verification across institutions does not require personal data transmission.' },
  { num: '06', title: 'Complete IAM Feature Parity', desc: 'Achieve full coverage of enterprise IAM requirements including credential lifecycle, delegation, emergency access, MFA, session management, and consent control — all within the post-quantum, blockchain-secured architecture.' },
];

export default function Slide03Objectives() {
  return (
    <section data-auto-animate data-transition="slide">
      <h2>Project Objectives</h2>
      <div className="grid-2" style={{ marginTop: '20px' }}>
        {objectives.map((obj) => (
          <div key={obj.num} className="fragment pres-card" style={{ padding: '20px', display: 'flex', gap: '16px' }}>
            <span style={{ fontSize: '1.8em', fontWeight: 900, color: 'rgba(0,212,255,0.15)', lineHeight: 1, flexShrink: 0 }}>
              {obj.num}
            </span>
            <div>
              <h4 style={{ fontSize: '0.85em', color: '#00d4ff', marginBottom: '6px', fontWeight: 600 }}>{obj.title}</h4>
              <p style={{ fontSize: '0.68em', color: '#94a3b8', lineHeight: 1.6, marginBottom: 0 }}>{obj.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <aside className="notes">
        These six objectives map directly to the six architectural components of HelixID.
        Each one addresses a specific failure mode of traditional IAM. Walk through them one at a time.
      </aside>
    </section>
  );
}
