const rows = [
  ['Centralized identity database (single point of failure)', 'Decentralized Identity on blockchain (no central database)'],
  ['Classical RSA/ECC encryption (quantum-vulnerable)', 'CRYSTALS-Dilithium3 + Kyber768 (NIST FIPS 204/203)'],
  ['Database audit logs (mutable, deletable by admins)', 'Immutable blockchain ledger (cryptographically tamper-proof)'],
  ['Access policies in config files (no accountability trail)', 'Smart contract policies deployed on-chain (full governance log)'],
  ['Credentials stored in central directory (LDAP/AD)', 'Credentials as on-chain DID Documents (self-sovereign identity)'],
];

export default function Slide07TraditionalGap() {
  return (
    <section data-auto-animate data-transition="fade">
      <div className="pres-title-bar"><h2>What Traditional IAM Gets Wrong</h2></div>
      <table className="comparison-table" style={{ marginTop: '12px' }}>
        <thead>
          <tr>
            <th style={{ color: '#FFFFFF', width: '48%', background: '#C0392B' }}>Traditional IAM</th>
            <th style={{ width: '4%', background: '#2C5F2D' }} />
            <th style={{ color: '#FFFFFF', width: '48%', background: '#2C5F2D' }}>What HelixID Does</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([old, helix], i) => (
            <tr key={i} className="fragment">
              <td style={{ fontSize: '0.76em', color: '#3A5C3A' }}>{old}</td>
              <td style={{ color: '#7DB85A', textAlign: 'center', fontWeight: 700 }}>→</td>
              <td style={{ fontSize: '0.76em', color: '#1A2E1A' }}>{helix}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <aside className="notes">
        Each row represents a fundamental architectural decision.
      </aside>
    </section>
  );
}
