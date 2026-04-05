export default function Slide20DemoAuth() {
  return (
    <section>
      {/* Sub-slide A: Auth flow */}
      <section data-auto-animate data-transition="fade">
        <h2>Demo: Quantum-Safe Login</h2>
        <div style={{ display: 'flex', gap: '32px', marginTop: '24px' }}>
          {/* Flow diagram */}
          <div style={{ flex: '0 0 55%' }}>
            {[
              { step: 'User Clicks Login', detail: '', color: '#64748b' },
              { step: 'Kyber768 Key Encapsulation Handshake', detail: 'Client generates session keypair → Server encapsulates shared secret → Client decapsulates → Shared session key established', color: '#7c3aed' },
              { step: 'Dilithium MFA Challenge-Response', detail: 'Server sends random nonce → Client signs with Dilithium private key → Server verifies against on-chain public key → MFA_VERIFIED transaction mined', color: '#00d4ff' },
              { step: 'Session Token Created', detail: 'SHA3-256(sharedSecret + timestamp) → 30-minute expiry countdown begins', color: '#16a34a' },
            ].map((s, i) => (
              <div key={i} className="fragment" style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '3px', background: s.color, borderRadius: '2px', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '0.78em', color: s.color, marginBottom: '4px' }}>{s.step}</h4>
                  {s.detail && <p style={{ fontSize: '0.62em', color: '#94a3b8', lineHeight: 1.6, marginBottom: 0 }}>{s.detail}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Mock MFA modal */}
          <div style={{ flex: 1 }}>
            <div className="pres-card" style={{ padding: '20px', textAlign: 'center' }}>
              <p style={{ fontSize: '0.72em', color: '#64748b', marginBottom: '12px' }}>MFA Verification Modal</p>
              <div style={{ background: 'rgba(0,212,255,0.05)', borderRadius: '8px', padding: '16px', marginBottom: '12px' }}>
                <p className="mono" style={{ fontSize: '0.6em', marginBottom: '4px' }}>Nonce: 0xa7c3f2...</p>
                <p className="mono" style={{ fontSize: '0.6em', marginBottom: '4px' }}>Signing with Dilithium3...</p>
                <p style={{ fontSize: '0.7em', color: '#16a34a', marginBottom: 0 }}>✓ Signature Verified</p>
              </div>
              <p className="mono" style={{ fontSize: '0.55em', color: '#64748b' }}>TX: 0x9f3a... | Block #14,856</p>
            </div>
          </div>
        </div>
        <aside className="notes">
          Walk through each step of the authentication flow. The key point: every step uses post-quantum algorithms.
          Kyber for the channel, Dilithium for the identity proof.
        </aside>
      </section>

      {/* Sub-slide B: Why quantum-resistant */}
      <section data-auto-animate data-transition="fade">
        <h2>What Makes This Quantum-Resistant</h2>
        <div className="grid-2" style={{ marginTop: '32px', gap: '28px' }}>
          <div className="pres-card pres-card-danger" style={{ padding: '28px' }}>
            <h4 style={{ fontSize: '0.82em', color: '#dc2626', marginBottom: '12px' }}>Classical Approach</h4>
            <p style={{ fontSize: '0.74em', color: '#94a3b8', lineHeight: 1.7, marginBottom: 0 }}>
              TLS 1.3 uses ECDH key exchange (vulnerable to Shor's algorithm on quantum hardware).
              A quantum adversary can intercept the handshake and derive the session key.
            </p>
          </div>
          <div className="pres-card pres-card-teal" style={{ padding: '28px' }}>
            <h4 style={{ fontSize: '0.82em', color: '#00d4ff', marginBottom: '12px' }}>HelixID Approach</h4>
            <p style={{ fontSize: '0.74em', color: '#94a3b8', lineHeight: 1.7, marginBottom: 0 }}>
              Kyber768 key encapsulation is secure against both classical and quantum adversaries (NIST FIPS 203).
              The shared secret cannot be derived even with a quantum computer.
            </p>
          </div>
        </div>
        <aside className="notes">
          The comparison makes the argument: same function (key exchange), fundamentally different security guarantee.
        </aside>
      </section>
    </section>
  );
}
