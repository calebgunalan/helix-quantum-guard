import { PRESENTER_NAME, INSTITUTION_NAME, PRESENTATION_DATE } from '../constants';
import ParticleCanvas from '../components/ParticleCanvas';

const title = 'HelixID';

export default function Slide01Title() {
  return (
    <section data-auto-animate data-transition="fade" className="slide-title-full">
      {/* Particle constellation background */}
      <ParticleCanvas />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 data-id="helix-wordmark" className="letter-reveal" style={{ fontSize: '4em', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '0.2em' }}>
          {title.split('').map((ch, i) => (
            <span key={i} style={{ animationDelay: `${0.3 + i * 0.12}s`, color: i < 5 ? '#00d4ff' : '#e2e8f0' }}>
              {ch}
            </span>
          ))}
        </h1>
        <p style={{ fontSize: '1.1em', color: '#94a3b8', maxWidth: '700px', margin: '0 auto', lineHeight: 1.5 }}>
          Blockchain-based Quantum-Resistant Identity and Access Management for Healthcare
        </p>

        <div style={{ marginTop: '80px', fontSize: '0.75em', color: '#64748b' }}>
        <p style={{ whiteSpace: 'pre-line' }}>
          {PRESENTER_NAME} · {INSTITUTION_NAME}{'\n\n'}
          Guided by · Dr. P. Deepalakshmi
        </p>
          <p>{PRESENTATION_DATE}</p>
        </div>

        <div style={{ marginTop: '40px' }}>
          <span className="pres-badge" data-id="badge-dilithium" style={{ fontSize: '0.6em' }}>
            Built with CRYSTALS-Dilithium3 · Kyber768 · SHA3-256
          </span>
        </div>
      </div>

      <aside className="notes">
        Welcome to the HelixID presentation. This system addresses two converging threats in healthcare:
        centralized identity infrastructure failures and the coming quantum computing threat to classical cryptography.
        Let's begin by understanding why this matters now.
      </aside>
    </section>
  );
}
