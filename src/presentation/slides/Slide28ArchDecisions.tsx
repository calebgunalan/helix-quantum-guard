const qas = [
  {
    q: 'Why Hyperledger Fabric (permissioned) rather than Ethereum (public)?',
    a: 'Healthcare data requires HIPAA-compliant access control over who can participate as a network node. A public blockchain makes every network participant a potential data accessor. Permissioned blockchain restricts node membership to authorized hospital entities.',
  },
  {
    q: 'Why Dilithium specifically, rather than other post-quantum schemes?',
    a: 'CRYSTALS-Dilithium was selected by NIST after an 8-year evaluation process as the primary standard for digital signatures (FIPS 204, 2024). It offers the best balance of signature size, key size, and performance for high-frequency IAM operations.',
  },
  {
    q: 'Why blockchain for audit rather than a traditional secure database?',
    a: 'A database audit log can be modified by a database administrator. A blockchain audit log requires compromising 67% of all validator nodes simultaneously to alter — a fundamentally different security guarantee for a system where administrator accountability matters.',
  },
];

export default function Slide28ArchDecisions() {
  return (
    <section data-auto-animate data-transition="slide">
      <h2>Why These Specific Technology Choices</h2>
      <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {qas.map((qa, i) => (
          <div key={i} className="fragment" style={{ display: 'flex', gap: '24px' }}>
            <div style={{ flex: '0 0 38%' }}>
              <p style={{ fontSize: '0.78em', color: '#00d4ff', lineHeight: 1.5, fontWeight: 500 }}>{qa.q}</p>
            </div>
            <div style={{ flex: 1, borderLeft: '2px solid rgba(0,212,255,0.15)', paddingLeft: '20px' }}>
              <p style={{ fontSize: '0.72em', color: '#94a3b8', lineHeight: 1.7, marginBottom: 0 }}>{qa.a}</p>
            </div>
          </div>
        ))}
      </div>

      <aside className="notes">
        These are the three most commonly asked questions about the technology stack. Each answer demonstrates
        that the choice was deliberate, not arbitrary.
      </aside>
    </section>
  );
}
