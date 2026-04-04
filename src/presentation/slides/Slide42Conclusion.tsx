export default function Slide42Conclusion() {
  return (
    <section data-transition="slide">
      <h2>Conclusion</h2>
      <div className="pres-card pres-card-teal" style={{ marginTop: '20px', padding: '20px 24px', borderLeft: '4px solid rgba(0,212,255,0.4)' }}>
        <p style={{ fontSize: '0.62em', color: '#cbd5e1', lineHeight: 1.8, marginBottom: '14px' }}>
          This project presents HelixID, a blockchain-based quantum-resistant Identity and Access Management system designed for multi-institutional healthcare environments. The system addresses a convergence of two critical threats: the structural inadequacy of centralized IAM architectures in environments requiring absolute audit accountability, and the impending cryptographic vulnerability of classical encryption algorithms to quantum computing attacks.
        </p>
        <p style={{ fontSize: '0.62em', color: '#cbd5e1', lineHeight: 1.8, marginBottom: '14px' }}>
          By adopting NIST FIPS 203 and FIPS 204 post-quantum standards as the native cryptographic foundation of the blockchain layer, the system achieves quantum resistance not as a feature added to an existing design, but as the ground floor upon which the entire system is built. Every transaction is signed with CRYSTALS-Dilithium3. Every session is established with CRYSTALS-Kyber768. Every block hash is computed with SHA3-256.
        </p>
        <p style={{ fontSize: '0.62em', color: '#94a3b8', lineHeight: 1.8, marginBottom: 0 }}>
          The implementation demonstrates technical feasibility in a browser environment using production-grade cryptographic libraries, with a clear boundary between what is cryptographically real and what would be addressed by Hyperledger Fabric infrastructure in production.
        </p>
      </div>
      <div className="fragment" style={{ display: 'flex', gap: '14px', marginTop: '18px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {[
          { icon: '🔐', label: 'NIST PQC Standards Implemented' },
          { icon: '⛓', label: 'Real Blockchain with SHA3-256' },
          { icon: '🪪', label: 'W3C DID Compliant Identity' },
          { icon: '📋', label: 'Complete IAM Feature Coverage' },
        ].map((a) => (
          <div key={a.label} className="pres-badge" style={{ fontSize: '0.6em', display: 'flex', gap: '6px', alignItems: 'center' }}>
            <span>{a.icon}</span> {a.label}
          </div>
        ))}
      </div>
      <aside className="notes">Formal academic conclusion summarizing the dual contribution: quantum-resistant crypto + blockchain audit in a unified architecture.</aside>
    </section>
  );
}
