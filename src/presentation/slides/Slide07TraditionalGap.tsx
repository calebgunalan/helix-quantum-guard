const rows = [
  ['Centralized identity database (single point of failure)', 'Decentralized Identity on blockchain (no central database)'],
  ['Classical RSA/ECC encryption (quantum-vulnerable)', 'CRYSTALS-Dilithium3 + Kyber768 (NIST FIPS 204/203)'],
  ['Database audit logs (mutable, deletable by admins)', 'Immutable blockchain ledger (cryptographically tamper-proof)'],
  ['Access policies in config files (no accountability trail)', 'Smart contract policies deployed on-chain (full governance log)'],
  ['Credentials stored in central directory (LDAP/AD)', 'Credentials as on-chain DID Documents (self-sovereign identity)'],
];

export default function Slide07TraditionalGap() {
  return (
    <section data-transition="slide">
      <h2>What Traditional IAM Gets Wrong</h2>
      <table className="comparison-table" style={{ marginTop: '28px' }}>
        <thead>
          <tr>
            <th style={{ color: '#dc2626', width: '48%' }}>Traditional IAM</th>
            <th style={{ width: '4%' }} />
            <th style={{ color: '#00d4ff', width: '48%' }}>What HelixID Does</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([old, helix], i) => (
            <tr key={i} className="fragment">
              <td style={{ fontSize: '0.76em', color: '#94a3b8' }}>{old}</td>
              <td style={{ color: '#00d4ff', textAlign: 'center' }}>→</td>
              <td style={{ fontSize: '0.76em', color: '#cbd5e1' }}>{helix}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <aside className="notes">
        Each row represents a fundamental architectural decision. Advance one row at a time and narrate each comparison.
        The key insight: HelixID doesn't patch traditional IAM — it replaces its foundation.
      </aside>
    </section>
  );
}
