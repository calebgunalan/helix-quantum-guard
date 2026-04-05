export default function Slide13PostQuantum() {
  return (
    <section>
      {/* Sub-slide A */}
      <section data-auto-animate data-transition="fade">
        <h2>Why Classical Encryption Fails</h2>
        <div className="grid-2" style={{ marginTop: '28px', gap: '32px' }}>
          <div className="pres-card pres-card-interactive" style={{ textAlign: 'center', padding: '32px', borderTop: '3px solid #dc2626' }}>
            <span style={{ fontSize: '3em' }}>🔓</span>
            <h3 style={{ fontSize: '1em', color: '#dc2626', margin: '16px 0 12px', textAlign: 'center' }}>RSA-2048</h3>
            <p style={{ fontSize: '0.72em', color: '#94a3b8', lineHeight: 1.6 }}>
              Security based on difficulty of integer factorization. Shor's algorithm on a quantum computer solves this in polynomial time.
            </p>
            <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(220,38,38,0.08)', borderRadius: '8px' }}>
              <p className="mono" style={{ fontSize: '0.7em', color: '#dc2626' }}>Classical: O(e^n) → Quantum: O(n³)</p>
            </div>
          </div>
          <div className="pres-card pres-card-interactive" style={{ textAlign: 'center', padding: '32px', borderTop: '3px solid #16a34a' }}>
            <span style={{ fontSize: '3em' }}>🔐</span>
            <h3 data-id="badge-dilithium-name" style={{ fontSize: '1em', color: '#16a34a', margin: '16px 0 12px', textAlign: 'center' }}>CRYSTALS-Dilithium3</h3>
            <p style={{ fontSize: '0.72em', color: '#94a3b8', lineHeight: 1.6 }}>
              Security based on hardness of Module Learning With Errors (MLWE). No known quantum algorithm provides meaningful advantage.
            </p>
            <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(22,163,74,0.08)', borderRadius: '8px' }}>
              <p className="mono" style={{ fontSize: '0.7em', color: '#16a34a' }}>Classical: O(e^n) → Quantum: O(e^n)</p>
            </div>
          </div>
        </div>
        <aside className="notes">
          The key visual: RSA collapses from exponential to polynomial complexity under quantum attack.
          Dilithium stays exponential in both cases. That's the entire argument for post-quantum cryptography.
        </aside>
      </section>

      {/* Sub-slide B */}
      <section data-auto-animate data-transition="fade">
        <h2>Two Algorithms, Two Purposes</h2>
        <div className="grid-2" style={{ marginTop: '28px', gap: '28px' }}>
          <div className="pres-card pres-card-teal pres-card-interactive" data-id="algo-card-dilithium" style={{ padding: '28px' }}>
            <h3 style={{ fontSize: '0.9em', marginBottom: '16px' }}>CRYSTALS-Dilithium3</h3>
            <p style={{ fontSize: '0.65em', color: '#64748b', marginBottom: '4px' }}>NIST FIPS 204</p>
            <p style={{ fontSize: '0.78em', color: '#cbd5e1', marginBottom: '16px' }}>
              <strong>Purpose:</strong> Digital Signatures — proving identity
            </p>
            <p style={{ fontSize: '0.7em', color: '#94a3b8', lineHeight: 1.6 }}>
              Used for: Signing every transaction, MFA challenge-response, credential issuance, policy deployment, access approvals.
            </p>
            <div className="pres-badge" data-id="badge-dilithium" style={{ marginTop: '16px', fontSize: '0.6em' }}>128-bit post-quantum security</div>
          </div>
          <div className="pres-card pres-card-violet pres-card-interactive" data-id="algo-card-kyber" style={{ padding: '28px' }}>
            <h3 style={{ fontSize: '0.9em', marginBottom: '16px' }}>CRYSTALS-Kyber768</h3>
            <p style={{ fontSize: '0.65em', color: '#64748b', marginBottom: '4px' }}>NIST FIPS 203</p>
            <p style={{ fontSize: '0.78em', color: '#cbd5e1', marginBottom: '16px' }}>
              <strong>Purpose:</strong> Key Encapsulation — establishing secure sessions
            </p>
            <p style={{ fontSize: '0.7em', color: '#94a3b8', lineHeight: 1.6 }}>
              Used for: Authentication handshake, session key generation, secure channel establishment.
            </p>
            <div className="pres-badge pres-badge-violet" data-id="badge-kyber" style={{ marginTop: '16px', fontSize: '0.6em' }}>128-bit post-quantum security</div>
          </div>
        </div>
        <p style={{ fontSize: '0.72em', color: '#64748b', textAlign: 'center', marginTop: '24px' }}>
          Standardized by NIST 2024. Recommended for government and healthcare use.
        </p>
        <aside className="notes">
          Dilithium proves who you are. Kyber protects the channel you communicate over. Both are needed for a complete quantum-resistant system.
        </aside>
      </section>
    </section>
  );
}
