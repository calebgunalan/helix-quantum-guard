const layers = [
  {
    label: 'LAYER 1 — CRYPTOGRAPHIC FOUNDATION',
    color: '#7c3aed',
    modules: [
      { num: 1, name: 'Cryptographic Engine', file: 'crypto.ts' },
      { num: 2, name: 'Blockchain Engine', file: 'blockchain.ts' },
      { num: 3, name: 'Smart Contract Policy Engine', file: 'contracts.ts' },
    ],
  },
  {
    label: 'LAYER 2 — IDENTITY AND SESSION',
    color: '#00d4ff',
    modules: [
      { num: 4, name: 'DID Management Module', file: 'did.ts' },
      { num: 5, name: 'Authentication & Session', file: 'authStore.ts' },
    ],
  },
  {
    label: 'LAYER 3 — APPLICATION',
    color: '#16a34a',
    modules: [
      { num: 6, name: 'Patient Portal', file: 'Patient.tsx' },
      { num: 7, name: 'Staff & Moderator Dashboard', file: 'Staff.tsx / Moderator.tsx' },
      { num: 8, name: 'Admin & Governance', file: 'Admin.tsx' },
    ],
  },
];

export default function Slide21ModulesOverview() {
  return (
    <section data-transition="slide">
      <h2 style={{ fontSize: '1.1em' }}>List of Modules</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
        {layers.map((layer) => (
          <div key={layer.label} className="fragment">
            <p style={{ fontSize: '0.6em', color: layer.color, fontWeight: 700, letterSpacing: '1px', marginBottom: '8px' }}>{layer.label}</p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {layer.modules.map((m) => (
                <div key={m.num} className="pres-card" style={{ flex: 1, padding: '14px', borderLeft: `3px solid ${layer.color}` }}>
                  <span style={{ fontSize: '0.6em', color: layer.color, fontWeight: 700 }}>Module {m.num}</span>
                  <h4 style={{ fontSize: '0.72em', color: '#e2e8f0', margin: '4px 0' }}>{m.name}</h4>
                  <p className="mono" style={{ fontSize: '0.5em', color: '#64748b', marginBottom: 0 }}>{m.file}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Arrows between layers */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '12px' }}>
        {['Layer 1 → Layer 2', 'Layer 2 → Layer 3'].map((a) => (
          <span key={a} style={{ fontSize: '0.55em', color: '#64748b' }}>{a}</span>
        ))}
      </div>
      <aside className="notes">Eight modules across three architectural layers. Each module maps to a specific source file.</aside>
    </section>
  );
}
