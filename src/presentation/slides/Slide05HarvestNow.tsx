export default function Slide05HarvestNow() {
  return (
    <section data-transition="slide">
      <h2>The Attack That Is Already Happening</h2>

      {/* Timeline visualization */}
      <div style={{ margin: '40px 0', position: 'relative' }}>
        <div className="timeline-line" style={{ margin: '0 20px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', maxWidth: '280px' }}>
            <span className="pres-badge" style={{ marginBottom: '12px' }}>TODAY — 2026</span>
            <p style={{ fontSize: '0.72em', color: '#94a3b8', marginTop: '12px' }}>
              Adversary steals encrypted hospital records <strong style={{ color: '#dc2626' }}>RIGHT NOW</strong>
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '0.7em', color: '#f59e0b', fontWeight: 600 }}>
              ← The "Harvest Now, Decrypt Later" Window →
            </span>
          </div>
          <div style={{ textAlign: 'center', maxWidth: '280px' }}>
            <span className="pres-badge" style={{ background: 'rgba(220,38,38,0.1)', color: '#dc2626', borderColor: 'rgba(220,38,38,0.2)', marginBottom: '12px' }}>
              2031+
            </span>
            <p style={{ fontSize: '0.72em', color: '#94a3b8', marginTop: '12px' }}>
              Quantum computer decrypts <strong style={{ color: '#dc2626' }}>all stolen records</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Callout */}
      <div className="fragment pres-card pres-card-danger" style={{ marginTop: '40px' }}>
        <p style={{ fontSize: '0.82em', color: '#e2e8f0', lineHeight: 1.7 }}>
          Patient medical records are legally retained for 50+ years. A record encrypted with RSA today
          is readable to a quantum-equipped adversary before that retention period ends.
          <strong style={{ color: '#dc2626' }}> This is not a future problem. It is a present vulnerability.</strong>
        </p>
      </div>

      <aside className="notes">
        The harvest-now-decrypt-later attack is documented by ENISA and NIST. State-level adversaries
        are already stockpiling encrypted data. The 50-year retention requirement for medical records
        makes healthcare the most exposed sector.
      </aside>
    </section>
  );
}
