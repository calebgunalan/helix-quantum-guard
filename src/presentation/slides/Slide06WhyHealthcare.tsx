const columns = [
  { icon: '⏳', title: 'Longest Data Lifespan', text: 'Medical records retained 25–50 years. No other industry creates data with a longer vulnerability window.', color: '#7DB85A' },
  { icon: '🔒', title: 'Most Sensitive Data Category', text: 'Health data is legally the most protected class of personal information globally. A breach carries criminal liability.', color: '#1E7070' },
  { icon: '🔗', title: 'Fragmented Identity Infrastructure', text: "A patient's identity lives in 12 different hospital databases on average. No single hospital knows if records have been accessed elsewhere.", color: '#1A4A7A' },
];

export default function Slide06WhyHealthcare() {
  return (
    <section data-auto-animate data-transition="fade">
      <div className="pres-title-bar"><h2>Healthcare: The Highest-Stakes Target</h2></div>
      <div className="grid-3" style={{ gap: '20px' }}>
        {columns.map((col) => (
          <div key={col.title} className="fragment pres-card" style={{ textAlign: 'center', padding: '24px 20px', borderTop: `3px solid ${col.color}` }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: `${col.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
              <span style={{ fontSize: '1.8em' }}>{col.icon}</span>
            </div>
            <h4 style={{ fontSize: '0.85em', color: '#2C5F2D', margin: '0 0 10px', fontWeight: 600, textAlign: 'center' }}>{col.title}</h4>
            <p style={{ fontSize: '0.72em', color: '#3A5C3A', lineHeight: 1.6, marginBottom: 0 }}>{col.text}</p>
          </div>
        ))}
      </div>
      <p className="fragment" style={{ fontSize: '0.82em', color: '#6B8A6B', marginTop: '28px', textAlign: 'center' }}>
        Traditional IAM was not designed for any of these realities. <strong style={{ color: '#2C5F2D' }}>HelixID was.</strong>
      </p>

      <aside className="notes">
        These three factors compound each other.
      </aside>
    </section>
  );
}
