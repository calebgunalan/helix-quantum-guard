const rows = [
  { prop: 'Quantum-Resistant Auth', ad: '✗', prior: '✗', demo: '✓ Kyber768', prod: '✓' },
  { prop: 'Quantum-Resistant Signing', ad: '✗', prior: '✗ ECDSA', demo: '✓ Dilithium3', prod: '✓' },
  { prop: 'Immutable Audit Trail', ad: '✗ DB editable', prior: '✓', demo: '✓', prod: '✓' },
  { prop: 'Decentralized Identity', ad: '✗ LDAP', prior: '△', demo: '✓ DID on-chain', prod: '✓' },
  { prop: 'Smart Contract RBAC', ad: '✗', prior: '△', demo: '✓', prod: '✓' },
  { prop: 'Patient Consent On-Chain', ad: '✗', prior: '✗', demo: '✓', prod: '✓' },
  { prop: 'ZKP Credential Proof', ad: '✗', prior: '✗', demo: '△ simulated', prod: '✓' },
  { prop: 'Break-Glass + Accountability', ad: '△ backdoor', prior: '✗', demo: '✓', prod: '✓' },
  { prop: 'Credential Delegation', ad: '△', prior: '✗', demo: '✓', prod: '✓' },
  { prop: 'Cross-Institution Portability', ad: '✗', prior: '△', demo: '✓ DID', prod: '✓' },
  { prop: 'HIPAA-Compatible', ad: '✓', prior: '△', demo: '△ single node', prod: '✓' },
  { prop: 'Harvest-Now-Decrypt-Later Safe', ad: '✗', prior: '✗', demo: '✓', prod: '✓' },
];

function StatusCell({ val }: { val: string }) {
  const color = val.startsWith('✓') ? '#16a34a' : val.startsWith('✗') ? '#dc2626' : '#f59e0b';
  return <td style={{ color, fontSize: '0.5em' }}>{val}</td>;
}

export default function Slide39ComparativeAnalysis() {
  return (
    <section data-auto-animate data-transition="slide" className="slide-dense-content">
      <h2 style={{ fontSize: '1em' }}>Comparative Analysis with Existing Systems</h2>
      <div className="slide-scroll-container" style={{ marginTop: '10px' }}>
        <table className="comparison-table" style={{ fontSize: '0.5em' }}>
          <thead>
            <tr>
              <th style={{ width: '22%' }}>IAM Property</th>
              <th style={{ width: '16%', color: '#dc2626' }}>Active Directory</th>
              <th style={{ width: '20%', color: '#f59e0b' }}>Prior Blockchain IAM</th>
              <th style={{ width: '22%', color: '#00d4ff' }}>HelixID (Demo)</th>
              <th style={{ width: '20%', color: '#16a34a' }}>HelixID (Production)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.prop}>
                <td style={{ color: '#cbd5e1', fontWeight: 500 }}>{r.prop}</td>
                <StatusCell val={r.ad} />
                <StatusCell val={r.prior} />
                <StatusCell val={r.demo} />
                <StatusCell val={r.prod} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="fragment" style={{ fontSize: '0.6em', color: '#94a3b8', marginTop: '10px', lineHeight: 1.5 }}>
        HelixID is the only system addressing <strong style={{ color: '#00d4ff' }}>both</strong> blockchain-based audit/decentralization
        <strong style={{ color: '#00d4ff' }}> AND</strong> post-quantum cryptographic vulnerability in a unified architecture.
      </p>
      <aside className="notes">12-property comparison across 4 systems. HelixID is the only one solving both halves of the problem.</aside>
    </section>
  );
}
