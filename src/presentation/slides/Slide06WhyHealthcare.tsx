const columns = [
  {
    icon: '⏳',
    title: 'Longest Data Lifespan',
    text: 'Medical records retained 25–50 years. No other industry creates data with a longer vulnerability window.',
  },
  {
    icon: '🔒',
    title: 'Most Sensitive Data Category',
    text: 'Health data is legally the most protected class of personal information globally. A breach carries criminal liability, not just financial penalties.',
  },
  {
    icon: '🔗',
    title: 'Fragmented Identity Infrastructure',
    text: "A patient's identity lives in 12 different hospital databases on average. No single hospital knows if their records have been accessed elsewhere.",
  },
];

export default function Slide06WhyHealthcare() {
  return (
    <section data-transition="slide">
      <h2>Healthcare: The Highest-Stakes Target</h2>
      <div className="grid-3" style={{ marginTop: '32px' }}>
        {columns.map((col) => (
          <div key={col.title} className="fragment pres-card" style={{ textAlign: 'center', padding: '32px 24px' }}>
            <span style={{ fontSize: '2.2em' }}>{col.icon}</span>
            <h4 style={{ fontSize: '0.85em', color: '#00d4ff', margin: '16px 0 10px', fontWeight: 600, textAlign: 'center' }}>{col.title}</h4>
            <p style={{ fontSize: '0.72em', color: '#94a3b8', lineHeight: 1.6, marginBottom: 0 }}>{col.text}</p>
          </div>
        ))}
      </div>
      <p className="fragment" style={{ fontSize: '0.82em', color: '#64748b', marginTop: '36px', textAlign: 'center' }}>
        Traditional IAM was not designed for any of these realities. <strong style={{ color: '#00d4ff' }}>HelixID was.</strong>
      </p>

      <aside className="notes">
        These three factors compound each other. Long data lifespans mean quantum attacks have decades to succeed.
        Sensitivity means the consequences of breach are severe. Fragmentation means no single system has full visibility.
      </aside>
    </section>
  );
}
