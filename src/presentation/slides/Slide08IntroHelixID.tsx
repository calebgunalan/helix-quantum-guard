export default function Slide08IntroHelixID() {
  return (
    <section data-auto-animate data-transition="fade" className="slide-title-full" style={{ background: '#FAFDF6' }}>
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h3 style={{ fontSize: '0.85em', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '40px', color: '#7DB85A' }}>
          The Solution
        </h3>

        <h1 style={{ fontSize: '3.5em', fontWeight: 900, color: '#2C5F2D', letterSpacing: '-0.04em', marginBottom: '16px', textAlign: 'center' }}>
          HelixID
        </h1>
        <p style={{ fontSize: '0.9em', color: '#3A5C3A', maxWidth: '650px', lineHeight: 1.6 }}>
          Post-Quantum Cryptographic Identity Management —<br />
          Built on Blockchain. Built for Healthcare. Built for the Future.
        </p>

        <div className="grid-2" style={{ marginTop: '60px', maxWidth: '580px', gap: '16px' }}>
          {[
            { icon: '🔐', label: 'NIST Post-Quantum Cryptography' },
            { icon: '⛓', label: 'Immutable Blockchain Audit Trail' },
            { icon: '🪪', label: 'Decentralized Identity (W3C DID)' },
            { icon: '📋', label: 'Smart Contract Access Control' },
          ].map((f) => (
            <span key={f.label} className="pres-badge" style={{ fontSize: '0.65em', justifyContent: 'center', padding: '10px 16px' }}>
              {f.icon} {f.label}
            </span>
          ))}
        </div>
      </div>

      <aside className="notes">
        Transition point — we've established the problem, now we introduce the solution.
      </aside>
    </section>
  );
}
