export default function Slide04Stakes() {
  return (
    <section data-auto-animate data-transition="slide">
      <div className="section-number">01</div>
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '80%' }}>
        <h3 style={{ fontSize: '0.85em', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '40px' }}>
          The Threat Landscape
        </h3>

        <p className="stat-callout" style={{ marginBottom: '16px' }}>
          "By 2031, RSA-2048 encryption — protecting 90% of today's digital infrastructure — will be breakable by quantum computers."
        </p>
        <p className="source">— NIST Post-Quantum Cryptography Project, 2024</p>

        <div className="grid-3 fragment" style={{ marginTop: '60px' }}>
          {[
            { icon: '🏥', label: 'Hospital Records' },
            { icon: '⚖', label: 'Legal Documents' },
            { icon: '💳', label: 'Financial Data' },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '2em' }}>{item.icon}</span>
              <p style={{ fontSize: '0.8em', color: '#94a3b8', marginTop: '8px' }}>{item.label}</p>
            </div>
          ))}
        </div>
        <p className="fragment" style={{ fontSize: '0.8em', color: '#64748b', textAlign: 'center', marginTop: '16px' }}>
          All protected by classical encryption. All vulnerable to the coming quantum threat.
        </p>
      </div>

      <aside className="notes">
        This statistic is from NIST's own timeline projections. The three categories shown represent
        the most sensitive data classes that currently rely entirely on RSA or ECC encryption.
      </aside>
    </section>
  );
}
