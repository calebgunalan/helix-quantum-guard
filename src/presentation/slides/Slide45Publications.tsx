export default function Slide45Publications() {
  return (
    <section data-transition="slide">
      <h2 style={{ fontSize: '1.05em' }}>Publications</h2>

      {/* Primary publication */}
      <div className="pres-card pres-card-teal" style={{ marginTop: '16px', padding: '18px 20px', borderLeft: '4px solid rgba(0,212,255,0.5)' }}>
        <span className="pres-badge" style={{ fontSize: '0.55em', background: 'rgba(245,158,11,0.15)', color: '#f59e0b', borderColor: 'rgba(245,158,11,0.3)', marginBottom: '10px', display: 'inline-block' }}>
          📄 Journal Article — Under Minor Revision
        </span>
        <h3 style={{ fontSize: '0.75em', color: '#e2e8f0', lineHeight: 1.4, marginTop: '8px', marginBottom: '8px', fontWeight: 600 }}>
          An Information Theory of Persistent Homology: Entropy, the Data Processing Inequality, and Rate-Distortion Bounds for Topological Features
        </h3>
        <p style={{ fontSize: '0.58em', color: '#94a3b8', marginBottom: '6px' }}>
          Deepalakshmi Perumalsamy<sup>1</sup> · Caleb Gunalan<sup>1</sup> · Rajermani Thinakaran<sup>2</sup>
        </p>
        <p style={{ fontSize: '0.48em', color: '#64748b', marginBottom: '4px' }}>
          <sup>1</sup> Dept. of CSE, Kalasalingam Academy of Research and Education, Krishnankoil, Tamil Nadu, India
        </p>
        <p style={{ fontSize: '0.48em', color: '#64748b', marginBottom: '8px' }}>
          <sup>2</sup> Faculty of Data Science and IT, INTI International University, Nilai, Malaysia
        </p>
        <p style={{ fontSize: '0.55em', color: '#94a3b8', marginBottom: '8px', fontWeight: 500 }}>
          Journal: <span style={{ color: '#00d4ff' }}>Mathematics — MDPI</span>
        </p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '10px' }}>
          {['Received: 16 March 2026', 'Revised: 04 April 2026', 'Status: Minor Revision — Forthcoming'].map((t) => (
            <span key={t} className="pres-badge" style={{ fontSize: '0.48em' }}>{t}</span>
          ))}
        </div>
        <p style={{ fontSize: '0.5em', color: '#94a3b8', fontStyle: 'italic', lineHeight: 1.5, marginBottom: '6px' }}>
          "This paper constructs a rigorous measure-theoretic information-theoretic foundation for persistent homology, defining topological entropy, topological mutual information, and a topological rate-distortion function over the space of persistence diagrams."
        </p>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {['Persistent Homology', 'Information Theory', 'Topological Entropy', 'Rate-Distortion', 'Wasserstein Distance'].map((k) => (
            <span key={k} style={{ fontSize: '0.42em', padding: '2px 8px', borderRadius: '10px', background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', color: '#7c3aed' }}>{k}</span>
          ))}
        </div>
      </div>

      {/* Secondary card */}
      <div className="fragment pres-card" style={{ marginTop: '12px', padding: '14px 18px', borderLeft: '3px solid rgba(124,58,237,0.4)' }}>
        <h4 style={{ fontSize: '0.65em', color: '#7c3aed', marginBottom: '6px' }}>Relationship to HelixID Project</h4>
        <p style={{ fontSize: '0.52em', color: '#94a3b8', lineHeight: 1.6, marginBottom: '8px' }}>
          This publication represents concurrent research in foundational mathematical theory. While addressing information-theoretic properties of topological data structures — a domain adjacent to blockchain integrity — it is a distinct contribution positioning the team for future work formalizing blockchain-based IAM audit structures.
        </p>
        <div className="pres-card pres-card-teal" style={{ padding: '8px 12px' }}>
          <p style={{ fontSize: '0.48em', color: '#cbd5e1', marginBottom: 0, lineHeight: 1.5 }}>
            <strong>Future direction:</strong> Applying the Topological Data Processing Inequality to prove HelixID's blockchain audit trail is informationally irreducible.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="fragment" style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '12px', fontSize: '0.5em' }}>
        <span style={{ color: '#00d4ff' }}>● Mar 16 — Submitted</span>
        <span style={{ color: '#f59e0b' }}>● Apr 4 — Revised</span>
        <span style={{ color: '#16a34a', animation: 'pulse 2s infinite' }}>● Forthcoming — Publication</span>
      </div>
      <p style={{ fontSize: '0.42em', color: '#f59e0b', fontStyle: 'italic', textAlign: 'center', marginTop: '6px' }}>
        Correspondence: deepa.kumar@klu.ac.in (D.P.) · calebgunalan2005@gmail.com (C.G.)
      </p>
      <aside className="notes">Primary publication in Mathematics MDPI — information theory of persistent homology. Secondary card links it to HelixID research direction.</aside>
    </section>
  );
}
