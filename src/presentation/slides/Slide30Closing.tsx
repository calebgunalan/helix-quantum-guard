import { HELIX_ID_DEMO_URL, GITHUB_URL } from '../constants';

export default function Slide30Closing() {
  return (
    <section data-transition="fade" className="slide-title-full">
      {/* Reuse network animation from title slide */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0, opacity: 0.1 }}>
        <defs>
          <radialGradient id="nodeGlow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[
          { cx: 150, cy: 200, delay: '0s' }, { cx: 400, cy: 120, delay: '1.5s' },
          { cx: 650, cy: 280, delay: '0.8s' }, { cx: 300, cy: 400, delay: '2.2s' },
          { cx: 550, cy: 180, delay: '3s' }, { cx: 800, cy: 350, delay: '1s' },
        ].map((n, i) => (
          <g key={i} className="network-node" style={{ animationDelay: n.delay }}>
            <circle cx={n.cx} cy={n.cy} r="4" fill="#00d4ff" opacity="0.5" />
            <circle cx={n.cx} cy={n.cy} r="12" fill="url(#nodeGlow2)" />
          </g>
        ))}
        {[[0,1],[1,2],[2,5],[3,0],[4,1],[5,4]].map(([a,b], i) => {
          const ns = [{ cx:150,cy:200},{cx:400,cy:120},{cx:650,cy:280},{cx:300,cy:400},{cx:550,cy:180},{cx:800,cy:350}];
          return <line key={i} x1={ns[a].cx} y1={ns[a].cy} x2={ns[b].cx} y2={ns[b].cy} stroke="#00d4ff" strokeWidth="0.5" opacity="0.12" />;
        })}
      </svg>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: '1.2em', color: '#e2e8f0', maxWidth: '700px', margin: '0 auto', lineHeight: 1.5, fontWeight: 500 }}>
          The records encrypted today will still exist in 2040.
        </p>
        <p style={{ fontSize: '1.2em', color: '#94a3b8', maxWidth: '700px', margin: '16px auto 0', lineHeight: 1.5 }}>
          The question is not <em>whether</em> to protect them from quantum attacks.<br />
          The question is whether you start <strong style={{ color: '#dc2626' }}>before</strong> or <strong style={{ color: '#dc2626' }}>after</strong> the breach.
        </p>

        <p style={{ fontSize: '1em', color: '#00d4ff', marginTop: '40px', fontWeight: 600 }}>HelixID answers that question.</p>

        <h1 style={{ fontSize: '3em', fontWeight: 900, color: '#00d4ff', letterSpacing: '-0.04em', marginTop: '32px', textAlign: 'center' }}>
          HelixID
        </h1>

        <div style={{ marginTop: '40px', fontSize: '0.7em', color: '#64748b' }}>
          <p>Live Demo: <span className="mono" style={{ color: '#00d4ff' }}>{HELIX_ID_DEMO_URL}</span></p>
          <p>Documentation: <span className="mono" style={{ color: '#94a3b8' }}>{GITHUB_URL}</span></p>
        </div>
      </div>

      <aside className="notes">
        End on the strongest possible note. Let the closing statement sit. Don't rush to Q&A.
        The visual callback to the title slide's network animation creates a satisfying loop.
      </aside>
    </section>
  );
}
