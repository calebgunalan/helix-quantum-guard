export default function Slide05HarvestNow() {
  return (
    <section data-auto-animate data-transition="fade">
      <div className="pres-title-bar"><h2>The Attack That Is Already Happening</h2></div>

      <div style={{ margin: '24px 0', position: 'relative' }}>
        <div className="timeline-line" style={{ margin: '0 20px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', maxWidth: '280px' }}>
            <span className="pres-badge" style={{ marginBottom: '12px' }}>TODAY — 2026</span>
            <p style={{ fontSize: '0.72em', color: '#3A5C3A', marginTop: '12px' }}>
              Adversary steals encrypted hospital records <strong style={{ color: '#C0392B' }}>RIGHT NOW</strong>
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '0.7em', color: '#C99010', fontWeight: 600 }}>
              ← The "Harvest Now, Decrypt Later" Window →
            </span>
          </div>
          <div style={{ textAlign: 'center', maxWidth: '280px' }}>
            <span className="pres-badge" style={{ background: 'rgba(192,57,43,0.1)', color: '#C0392B', borderColor: 'rgba(192,57,43,0.3)', marginBottom: '12px' }}>
              2031+
            </span>
            <p style={{ fontSize: '0.72em', color: '#3A5C3A', marginTop: '12px' }}>
              Quantum computer decrypts <strong style={{ color: '#C0392B' }}>all stolen records</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="fragment callout danger" style={{ marginTop: '24px' }}>
        <p style={{ fontSize: '0.82em', color: '#1A2E1A', lineHeight: 1.7 }}>
          Patient medical records are legally retained for 50+ years. A record encrypted with RSA today
          is readable to a quantum-equipped adversary before that retention period ends.
          <strong style={{ color: '#C0392B' }}> This is not a future problem. It is a present vulnerability.</strong>
        </p>
      </div>

      <aside className="notes">
        The harvest-now-decrypt-later attack is documented by ENISA and NIST.
      </aside>
    </section>
  );
}
