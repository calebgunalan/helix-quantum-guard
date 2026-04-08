import { HELIX_ID_DEMO_URL, GITHUB_URL } from '../constants';

export default function Slide30Closing() {
  return (
    <section data-auto-animate data-transition="fade" className="slide-title-full" style={{ background: '#163A21' }}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: '1.2em', color: '#FFFFFF', maxWidth: '700px', margin: '0 auto', lineHeight: 1.5, fontWeight: 500 }}>
          The records encrypted today will still exist in 2040.
        </p>
        <p style={{ fontSize: '1.2em', color: '#B8DDA0', maxWidth: '700px', margin: '16px auto 0', lineHeight: 1.5 }}>
          The question is not <em>whether</em> to protect them from quantum attacks.<br />
          The question is whether you start <strong style={{ color: '#C0392B' }}>before</strong> or <strong style={{ color: '#C0392B' }}>after</strong> the breach.
        </p>

        <p style={{ fontSize: '1em', color: '#92D660', marginTop: '40px', fontWeight: 600 }}>HelixID answers that question.</p>

        <h1 data-id="helix-wordmark" style={{ fontSize: '3em', fontWeight: 900, color: '#92D660', letterSpacing: '-0.04em', marginTop: '32px', textAlign: 'center' }}>
          HelixID
        </h1>

        <div style={{ marginTop: '40px', fontSize: '0.7em', color: '#B8DDA0' }}>
          <p>Live Demo: <span className="mono" style={{ color: '#92D660' }}>{HELIX_ID_DEMO_URL}</span></p>
          <p>Documentation: <span className="mono" style={{ color: '#B8DDA0' }}>{GITHUB_URL}</span></p>
        </div>
      </div>

      {/* Footer bar */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 34, background: '#7DB85A', display: 'flex', alignItems: 'center', padding: '0 20px', gap: 8 }}>
        <span style={{ fontSize: '14px' }}>🌿</span>
        <span style={{ fontSize: '13px', fontWeight: 700, color: '#163A21' }}>HelixID — Securing Healthcare Identity for the Quantum Era</span>
      </div>

      <aside className="notes">End on the strongest possible note.</aside>
    </section>
  );
}
