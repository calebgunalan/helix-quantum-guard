export default function Slide25RealVsSimulated() {
  return (
    <section data-auto-animate data-transition="slide">
      <h2>Technical Transparency — What Is Real</h2>
      <div className="grid-2" style={{ marginTop: '28px', gap: '24px' }}>
        <div className="pres-card pres-card-teal" style={{ padding: '24px' }}>
          <h4 style={{ fontSize: '0.82em', color: '#00d4ff', marginBottom: '16px' }}>🔐 Cryptographically Real in the Demo</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              'SHA3-256 computation of all block hashes, transaction hashes, and Merkle roots',
              'CRYSTALS-Dilithium3 key pair generation (ml-dsa65)',
              'Dilithium signing and signature verification on every transaction',
              'CRYSTALS-Kyber768 key encapsulation and decapsulation',
              'Decentralized Identifier (DID) computation from public key hashes',
              'Blockchain chain validation detecting real hash mismatches',
              'Merkle tree construction with sibling proof paths',
            ].map((item) => (
              <li key={item} style={{ fontSize: '0.68em', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '8px', paddingLeft: '16px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: '#16a34a' }}>✓</span>{item}
              </li>
            ))}
          </ul>
        </div>

        <div className="pres-card" style={{ padding: '24px', borderLeft: '3px solid #64748b' }}>
          <h4 style={{ fontSize: '0.82em', color: '#94a3b8', marginBottom: '16px' }}>⚙ Infrastructure Simulated for Demo</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              'Distributed blockchain network (single in-browser node)',
              'EVM smart contract execution (JavaScript policy engine)',
              'Groth16 zk-SNARK proof computation (structural simulation)',
              'PBFT consensus voting (no actual network nodes)',
              'Multi-hospital DID resolution',
            ].map((item) => (
              <li key={item} style={{ fontSize: '0.68em', color: '#94a3b8', lineHeight: 1.5, marginBottom: '8px', paddingLeft: '16px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: '#64748b' }}>○</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="fragment" style={{ fontSize: '0.72em', color: '#94a3b8', fontStyle: 'italic', marginTop: '24px', lineHeight: 1.7 }}>
        The quantum-resistance of this system, the tamper-evidence of the audit trail, and the cryptographic validity of every identity —
        these properties come entirely from the Real column. The Simulated column represents infrastructure concerns handled by
        Hyperledger Fabric in a production deployment. The security guarantees are identical in both cases.
      </p>

      <aside className="notes">
        This slide builds reviewer trust. By being explicit about what's real and what's simulated,
        you demonstrate engineering maturity. Emphasize that the security guarantees come from the Real column.
      </aside>
    </section>
  );
}
