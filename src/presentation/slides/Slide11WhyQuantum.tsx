export default function Slide11WhyQuantum() {
  return (
    <section data-transition="slide">
      <h2 style={{ fontSize: '1.15em' }}>Why Quantum Resistance — And Why Now</h2>
      <div style={{ display: 'flex', gap: '28px', marginTop: '20px' }}>
        {/* Left: Stakes */}
        <div style={{ flex: 1 }}>
          <p className="stat-callout" style={{ fontSize: '0.78em', marginBottom: '12px' }}>
            "By 2031, RSA-2048 — protecting 90% of today's infrastructure — will be breakable by quantum computers."
          </p>
          <p className="source" style={{ fontSize: '0.55em' }}>— NIST Post-Quantum Cryptography Project, 2024</p>
          <div className="grid-3 fragment" style={{ marginTop: '20px', gap: '10px' }}>
            {[
              { icon: '🏥', label: 'Hospital Records' },
              { icon: '⚖', label: 'Legal Documents' },
              { icon: '💳', label: 'Financial Data' },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '1.4em' }}>{item.icon}</span>
                <p style={{ fontSize: '0.6em', color: '#94a3b8', marginTop: '4px' }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Harvest Now */}
        <div style={{ flex: 1 }}>
          <h4 style={{ fontSize: '0.78em', color: '#dc2626', marginBottom: '12px' }}>The Attack Already Happening</h4>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ textAlign: 'center' }}>
              <span className="pres-badge" style={{ fontSize: '0.6em' }}>TODAY — 2026</span>
              <p style={{ fontSize: '0.58em', color: '#94a3b8', marginTop: '6px' }}>Adversary steals encrypted records <strong style={{ color: '#dc2626' }}>NOW</strong></p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '0.55em', color: '#f59e0b', fontWeight: 600 }}>← Harvest Now, Decrypt Later →</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span className="pres-badge" style={{ fontSize: '0.6em', background: 'rgba(220,38,38,0.1)', color: '#dc2626', borderColor: 'rgba(220,38,38,0.2)' }}>2031+</span>
              <p style={{ fontSize: '0.58em', color: '#94a3b8', marginTop: '6px' }}>Quantum computer decrypts <strong style={{ color: '#dc2626' }}>all stolen records</strong></p>
            </div>
          </div>
          <div className="fragment pres-card pres-card-danger" style={{ padding: '10px 14px' }}>
            <p style={{ fontSize: '0.6em', color: '#e2e8f0', lineHeight: 1.5, marginBottom: 0 }}>
              Patient records are retained for 50+ years. Encrypted with RSA today = readable by a quantum adversary before retention ends.
              <strong style={{ color: '#dc2626' }}> This is not a future problem.</strong>
            </p>
          </div>
        </div>
      </div>
      <aside className="notes">Merged Stakes + Harvest Now Decrypt Later. The quantum threat is real and already in motion.</aside>
    </section>
  );
}
