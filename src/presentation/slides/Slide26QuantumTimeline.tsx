export default function Slide26QuantumTimeline() {
  return (
    <section data-transition="slide">
      <h2>Why This Had to Be Built Now</h2>

      {/* Timeline */}
      <div style={{ position: 'relative', marginTop: '40px', padding: '0 20px' }}>
        {/* Green security band */}
        <div style={{ position: 'absolute', top: '-20px', left: '20px', right: '20px', height: '14px', background: 'linear-gradient(to right, rgba(22,163,74,0.2), rgba(22,163,74,0.1))', borderRadius: '4px', border: '1px solid rgba(22,163,74,0.3)' }} />
        <p style={{ position: 'absolute', top: '-18px', right: '30px', fontSize: '0.5em', color: '#16a34a' }}>CRYSTALS-Dilithium3 / Kyber768 — Secure across entire timeline →</p>

        {/* Main timeline line */}
        <div style={{ height: '3px', background: 'linear-gradient(to right, #00d4ff, #64748b, #dc2626)', borderRadius: '2px', marginTop: '20px' }} />

        {/* Timeline markers */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
          {[
            { year: '2024', label: 'NIST finalizes FIPS 203/204', color: '#00d4ff', sub: 'HelixID adopts standards' },
            { year: '2026', label: 'HelixID deployed', color: '#16a34a', sub: '📍 YOU ARE HERE', highlight: true },
            { year: '2027', label: 'IBM: 100K+ qubits', color: '#f59e0b', sub: '' },
            { year: '2030', label: 'Fault-tolerant QC', color: '#f59e0b', sub: 'Google projection' },
            { year: '2031', label: 'RSA-2048 vulnerable', color: '#dc2626', sub: '⚠ Classical encryption fails' },
            { year: '2033', label: 'ECC-256 vulnerable', color: '#dc2626', sub: '⚠' },
          ].map((m) => (
            <div key={m.year} style={{ textAlign: 'center', maxWidth: '120px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: m.color, margin: '0 auto 6px', boxShadow: m.highlight ? `0 0 12px ${m.color}` : 'none' }} />
              <p style={{ fontSize: '0.7em', color: m.color, fontWeight: 700, marginBottom: '2px' }}>{m.year}</p>
              <p style={{ fontSize: '0.55em', color: '#94a3b8', marginBottom: '2px', lineHeight: 1.3 }}>{m.label}</p>
              {m.sub && <p style={{ fontSize: '0.5em', color: m.color, marginBottom: 0, fontWeight: 600 }}>{m.sub}</p>}
            </div>
          ))}
        </div>
      </div>

      <p className="fragment" style={{ fontSize: '0.82em', color: '#cbd5e1', textAlign: 'center', marginTop: '60px', maxWidth: '700px', margin: '60px auto 0' }}>
        Building quantum-resistant IAM in 2031 means 10+ years of records are already compromised.<br />
        <strong style={{ color: '#00d4ff' }}>Building it in 2026 means none are.</strong>
      </p>

      <aside className="notes">
        The green band never ends — that's the visual argument. Classical encryption has a definite failure point,
        but post-quantum algorithms remain secure across the entire projected timeline.
      </aside>
    </section>
  );
}
