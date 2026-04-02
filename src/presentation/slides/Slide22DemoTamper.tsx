export default function Slide22DemoTamper() {
  return (
    <section data-transition="slide">
      <h2>Demo: Why the Audit Trail Cannot Be Falsified</h2>
      <div className="grid-2" style={{ marginTop: '28px', gap: '28px' }}>
        {/* Before */}
        <div className="fragment pres-card" style={{ padding: '24px', borderTop: '3px solid #16a34a' }}>
          <h4 style={{ fontSize: '0.8em', color: '#16a34a', marginBottom: '16px' }}>Before Tampering</h4>
          <div className="block-card" style={{ border: '1px solid rgba(22,163,74,0.3)' }}>
            <p style={{ color: '#00d4ff', fontWeight: 700, marginBottom: '6px', fontSize: '0.9em' }}>Block #14,841</p>
            <p className="mono" style={{ fontSize: '0.8em' }}>Hash: <span style={{ color: '#16a34a' }}>0x9f3a2c8d...</span></p>
            <p style={{ fontSize: '0.8em', color: '#16a34a', marginTop: '8px', marginBottom: '4px' }}>● VALID</p>
            <p style={{ fontSize: '0.7em', color: '#94a3b8', marginBottom: 0 }}>TX: ACCESS_GRANTED | Dr. Okafor | cardiology_records</p>
          </div>
        </div>

        {/* After */}
        <div className="fragment pres-card" style={{ padding: '24px', borderTop: '3px solid #dc2626' }}>
          <h4 style={{ fontSize: '0.8em', color: '#dc2626', marginBottom: '16px' }}>After Attacker Modifies Record</h4>
          <div className="block-card" style={{ border: '1px solid rgba(220,38,38,0.3)', marginBottom: '12px' }}>
            <p style={{ color: '#00d4ff', fontWeight: 700, marginBottom: '6px', fontSize: '0.9em' }}>Block #14,841</p>
            <p className="mono" style={{ fontSize: '0.8em' }}>Hash: <span style={{ color: '#dc2626' }}>0xf72b9d1a...</span></p>
            <p style={{ fontSize: '0.8em', color: '#dc2626', marginTop: '8px', marginBottom: '4px' }}>✗ TAMPERED — DETECTED</p>
            <p className="mono" style={{ fontSize: '0.65em', color: '#dc2626', marginBottom: 0 }}>Expected: 0x9f3a2c8d... Computed: 0xf72b9d1a...</p>
          </div>
          <div className="block-card" style={{ border: '1px solid rgba(220,38,38,0.3)' }}>
            <p style={{ color: '#00d4ff', fontWeight: 700, marginBottom: '6px', fontSize: '0.9em' }}>Block #14,842</p>
            <p className="mono" style={{ fontSize: '0.8em', color: '#64748b' }}>Prev Hash: 0x9f3a2c8d... ← Points to original</p>
            <p style={{ fontSize: '0.8em', color: '#dc2626', marginTop: '8px', marginBottom: 0 }}>✗ CHAIN BROKEN</p>
          </div>
        </div>
      </div>

      <p className="fragment" style={{ fontSize: '0.72em', color: '#94a3b8', marginTop: '24px', lineHeight: 1.7 }}>
        The chain validation function recomputes every block hash from raw data. Any modification — no matter how small — produces a completely different SHA3-256 hash. In the live demo, this detection happens in real time as you type.
      </p>

      <div className="fragment pres-card pres-card-teal" style={{ marginTop: '16px', padding: '12px 20px' }}>
        <p style={{ fontSize: '0.75em', color: '#00d4ff', marginBottom: 0, fontWeight: 600 }}>
          This is not a simulation of tamper detection. The SHA3-256 hashing is mathematically real in the demo.
        </p>
      </div>

      <aside className="notes">
        This is one of the highest-impact slides. The before/after split makes the tampering visually obvious.
        Emphasize: the hash computation is real — this isn't animation, it's actual cryptography running in the browser.
      </aside>
    </section>
  );
}
