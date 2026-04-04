export default function Slide38PerformanceMetrics() {
  return (
    <section>
      {/* Sub-slide A: Benchmarks */}
      <section data-transition="slide" className="slide-dense-content">
        <h2 style={{ fontSize: '1em' }}>Cryptographic Operation Performance</h2>
        <div style={{ marginTop: '12px' }}>
          {[
            { op: 'Dilithium3 Key Generation', ms: 180, color: '#7c3aed', max: 200 },
            { op: 'Block Mining (difficulty: 1)', ms: 85, color: '#00d4ff', max: 200 },
            { op: 'Kyber768 Key Generation', ms: 45, color: '#16a34a', max: 200 },
            { op: 'Dilithium Sign', ms: 12, color: '#7c3aed', max: 200 },
            { op: 'Dilithium Verify', ms: 8, color: '#f59e0b', max: 200 },
            { op: 'Kyber Encapsulate', ms: 6, color: '#16a34a', max: 200 },
            { op: 'Kyber Decapsulate', ms: 5, color: '#16a34a', max: 200 },
            { op: 'Merkle Root (10 TX)', ms: 1.2, color: '#00d4ff', max: 200 },
            { op: 'SHA3-256 Hash', ms: 0.3, color: '#64748b', max: 200 },
          ].map((b) => (
            <div key={b.op} className="fragment" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <span style={{ fontSize: '0.52em', color: '#94a3b8', width: '180px', textAlign: 'right', flexShrink: 0 }}>{b.op}</span>
              <div style={{ flex: 1, height: '14px', background: 'rgba(30,41,59,0.5)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: `${Math.max((b.ms / b.max) * 100, 1.5)}%`, height: '100%', background: b.color, borderRadius: '3px', transition: 'width 0.5s' }} />
              </div>
              <span className="mono" style={{ fontSize: '0.52em', color: b.color, width: '50px', flexShrink: 0 }}>{b.ms}ms</span>
            </div>
          ))}
        </div>
        <div className="pres-card" style={{ marginTop: '14px', padding: '10px 14px' }}>
          <p style={{ fontSize: '0.55em', color: '#94a3b8', marginBottom: 0, lineHeight: 1.5 }}>
            <strong style={{ color: '#cbd5e1' }}>Comparison:</strong> RSA-2048 sign: ~3ms, verify: ~0.1ms.
            Dilithium carries ~4x overhead for signing — acceptable in IAM contexts where staff authenticate dozens of times daily, not millions.
          </p>
        </div>
        <aside className="notes">All benchmarks measured on standard 2023 laptop, Chrome browser. Dilithium overhead is manageable for IAM frequency.</aside>
      </section>

      {/* Sub-slide B: Security Properties */}
      <section data-transition="slide" className="slide-dense-content">
        <h2 style={{ fontSize: '1em' }}>Security Analysis — What HelixID Guarantees</h2>
        <div className="slide-scroll-container" style={{ marginTop: '12px' }}>
          <table className="comparison-table" style={{ fontSize: '0.55em' }}>
            <thead>
              <tr><th style={{ width: '20%' }}>Security Property</th><th style={{ width: '45%' }}>How HelixID Achieves It</th><th style={{ width: '35%' }}>Verification</th></tr>
            </thead>
            <tbody>
              {[
                ['Quantum Resistance', 'Dilithium3 + Kyber768 — no known quantum advantage over classical attacks', 'NIST FIPS 203/204 standardization'],
                ['Tamper Evidence', 'SHA3-256 chaining — any modification invalidates all subsequent block hashes', 'Live tamper demo — validator detects in real time'],
                ['Non-repudiation', 'Every action signed with actor\'s Dilithium private key; public key on-chain in DID Document', 'verifySignature() returns false for forged tx'],
                ['Access Accountability', 'Every grant/deny generates on-chain tx with smart contract rule ID, DID, resource, timestamp', 'Every audit row has real TX hash traceable to a block'],
                ['Identity Integrity', 'DIDs derived from actual crypto public keys. Claiming DID requires private key possession', 'did:helix:[sha3hash(pubkey)] is deterministic'],
                ['Session Security', 'Session tokens from Kyber shared secret — unpredictable without key encapsulation participation', 'sessionToken = sha3Hash(sharedSecret + timestamp)'],
              ].map(([prop, how, verify]) => (
                <tr key={prop}>
                  <td style={{ color: '#00d4ff', fontWeight: 600 }}>{prop}</td>
                  <td style={{ color: '#94a3b8' }}>{how}</td>
                  <td style={{ color: '#cbd5e1' }}>{verify}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <aside className="notes">Six security properties, each with concrete implementation and verifiable evidence.</aside>
      </section>
    </section>
  );
}
