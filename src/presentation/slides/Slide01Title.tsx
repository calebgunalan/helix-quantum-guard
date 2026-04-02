import { PRESENTER_NAME, INSTITUTION_NAME, PRESENTATION_DATE } from '../constants';

const title = 'HelixID';

export default function Slide01Title() {
  return (
    <section data-transition="fade" className="slide-title-full">
      {/* Network background animation */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0, opacity: 0.15 }}>
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Animated nodes */}
        {[
          { cx: 150, cy: 200, delay: '0s' }, { cx: 400, cy: 120, delay: '1.5s' },
          { cx: 650, cy: 280, delay: '0.8s' }, { cx: 300, cy: 400, delay: '2.2s' },
          { cx: 550, cy: 180, delay: '3s' }, { cx: 800, cy: 350, delay: '1s' },
          { cx: 200, cy: 350, delay: '2.5s' }, { cx: 700, cy: 150, delay: '0.5s' },
          { cx: 500, cy: 380, delay: '1.8s' }, { cx: 850, cy: 200, delay: '3.5s' },
        ].map((n, i) => (
          <g key={i} className="network-node" style={{ animationDelay: n.delay }}>
            <circle cx={n.cx} cy={n.cy} r="4" fill="#00d4ff" opacity="0.6" />
            <circle cx={n.cx} cy={n.cy} r="12" fill="url(#nodeGlow)" />
          </g>
        ))}
        {/* Connecting lines */}
        {[
          [0,1],[1,2],[2,5],[3,6],[4,7],[1,4],[3,0],[5,9],[8,4],[6,8],[7,9],
        ].map(([a,b], i) => {
          const nodes = [
            { cx: 150, cy: 200 }, { cx: 400, cy: 120 }, { cx: 650, cy: 280 },
            { cx: 300, cy: 400 }, { cx: 550, cy: 180 }, { cx: 800, cy: 350 },
            { cx: 200, cy: 350 }, { cx: 700, cy: 150 }, { cx: 500, cy: 380 },
            { cx: 850, cy: 200 },
          ];
          return (
            <line key={i} x1={nodes[a].cx} y1={nodes[a].cy} x2={nodes[b].cx} y2={nodes[b].cy}
              stroke="#00d4ff" strokeWidth="0.5" opacity="0.15" />
          );
        })}
      </svg>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="letter-reveal" style={{ fontSize: '4em', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '0.2em' }}>
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
          <p>{PRESENTER_NAME} · {INSTITUTION_NAME}</p>
          <p>{PRESENTATION_DATE}</p>
        </div>

        <div style={{ marginTop: '40px' }}>
          <span className="pres-badge" style={{ fontSize: '0.6em' }}>
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
