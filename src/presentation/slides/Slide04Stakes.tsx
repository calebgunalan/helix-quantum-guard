export default function Slide04Stakes() {
  return (
    <section data-auto-animate data-transition="fade">
      <div className="pres-title-bar"><h2>The Threat Landscape</h2></div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p className="stat-callout" style={{ marginBottom: '16px' }}>
          "By 2031, RSA-2048 encryption — protecting 90% of today's digital infrastructure — will be breakable by quantum computers."
        </p>
        <p className="source">— NIST Post-Quantum Cryptography Project, 2024</p>

        <div className="grid-3 fragment" style={{ marginTop: '40px' }}>
          {[
            { icon: '🏥', label: 'Hospital Records' },
            { icon: '⚖', label: 'Legal Documents' },
            { icon: '💳', label: 'Financial Data' },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: 'center' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(125,184,90,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
                <span style={{ fontSize: '1.6em' }}>{item.icon}</span>
              </div>
              <p style={{ fontSize: '0.8em', color: '#3A5C3A', marginTop: '8px' }}>{item.label}</p>
            </div>
          ))}
        </div>
        <p className="fragment" style={{ fontSize: '0.8em', color: '#6B8A6B', textAlign: 'center', marginTop: '16px' }}>
          All protected by classical encryption. All vulnerable to the coming quantum threat.
        </p>
      </div>

      <aside className="notes">
        This statistic is from NIST's own timeline projections.
      </aside>
    </section>
  );
}
