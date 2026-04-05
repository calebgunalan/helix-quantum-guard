export default function Slide02Abstract() {
  return (
    <section data-auto-animate data-transition="slide">
      <h2>Abstract</h2>
      <div style={{ display: 'flex', gap: '32px', marginTop: '24px' }}>
        {/* Main abstract card */}
        <div className="pres-card pres-card-teal" style={{ flex: '0 0 63%' }}>
          <p style={{ fontSize: '0.78em', lineHeight: 1.8, color: '#cbd5e1' }}>
            HelixID is a blockchain-based, quantum-resistant Identity and Access Management (IAM) system
            designed for multi-institutional healthcare environments. The system addresses two converging
            threats: the inadequacy of centralized identity infrastructure in high-stakes medical data
            environments, and the impending vulnerability of classical cryptographic algorithms to quantum
            computing attacks. HelixID implements NIST-standardized post-quantum cryptographic algorithms —
            CRYSTALS-Dilithium3 (FIPS 204) for digital signatures and CRYSTALS-Kyber768 (FIPS 203) for key
            encapsulation — within a permissioned blockchain architecture to deliver tamper-proof identity
            lifecycle management, smart contract-enforced role-based access control, decentralized identity
            (DID) anchoring, and a cryptographically immutable audit trail. The system supports four actor
            roles — Patient, Hospital Staff, Department Head, and IT Administrator — and implements a
            complete IAM feature set including credential delegation, break-glass emergency access,
            zero-knowledge proof-based credential presentation, and session management with post-quantum
            key establishment.
          </p>
        </div>

        {/* Keywords sidebar */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {['Post-Quantum Cryptography', 'Decentralized Identity (W3C DID)', 'Permissioned Blockchain (Hyperledger Fabric)', 'Smart Contract RBAC'].map((kw) => (
            <span key={kw} className="pres-badge" style={{ justifyContent: 'center', fontSize: '0.68em' }}>{kw}</span>
          ))}

          <div className="pres-card" style={{ marginTop: '16px', padding: '16px', fontSize: '0.72em' }}>
            <p style={{ color: '#64748b', marginBottom: '4px', fontWeight: 600 }}>Domain</p>
            <p style={{ color: '#cbd5e1', marginBottom: '12px' }}>Healthcare IAM</p>
            <p style={{ color: '#64748b', marginBottom: '4px', fontWeight: 600 }}>Standards</p>
            <p style={{ color: '#cbd5e1' }}>NIST FIPS 203, 204 | W3C DID Core</p>
          </div>
        </div>
      </div>

      <aside className="notes">
        This abstract summarizes the entire project scope. Note the emphasis on NIST-standardized algorithms —
        this isn't experimental cryptography, these are production-ready standards finalized in 2024.
      </aside>
    </section>
  );
}
