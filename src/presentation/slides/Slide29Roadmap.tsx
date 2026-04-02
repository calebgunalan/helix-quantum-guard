const phases = [
  {
    phase: 'Phase 1',
    title: 'Infrastructure',
    timeline: 'Months 1–3',
    items: [
      'Deploy Hyperledger Fabric network across hospital nodes',
      'Implement real zk-SNARK circuits using snarkjs',
      'Hardware Security Module (HSM) integration for private key storage',
    ],
    color: '#00d4ff',
  },
  {
    phase: 'Phase 2',
    title: 'Integration',
    timeline: 'Months 4–8',
    items: [
      'EHR system connectors (HL7 FHIR API integration)',
      'Cross-hospital DID resolution network',
      'Mobile patient identity wallet (W3C Verifiable Credentials)',
    ],
    color: '#7c3aed',
  },
  {
    phase: 'Phase 3',
    title: 'Scale',
    timeline: 'Months 9–12',
    items: [
      'Multi-hospital network onboarding',
      'Regulatory compliance (HIPAA, GDPR, ISO 27001)',
      'Real-time anomaly detection using on-chain behavioral patterns',
    ],
    color: '#16a34a',
  },
];

export default function Slide29Roadmap() {
  return (
    <section data-transition="slide">
      <h2>Production Path Forward</h2>
      <div className="grid-3" style={{ marginTop: '32px', gap: '20px' }}>
        {phases.map((p) => (
          <div key={p.phase} className="fragment pres-card" style={{ padding: '24px', borderTop: `3px solid ${p.color}` }}>
            <p style={{ fontSize: '0.65em', color: p.color, fontWeight: 600, marginBottom: '4px' }}>{p.phase}</p>
            <h4 style={{ fontSize: '0.88em', color: '#e2e8f0', marginBottom: '4px' }}>{p.title}</h4>
            <p style={{ fontSize: '0.6em', color: '#64748b', marginBottom: '16px' }}>{p.timeline}</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {p.items.map((item) => (
                <li key={item} style={{ fontSize: '0.65em', color: '#94a3b8', lineHeight: 1.5, marginBottom: '8px', paddingLeft: '14px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: p.color }}>›</span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="fragment" style={{ fontSize: '0.72em', color: '#64748b', marginTop: '28px', textAlign: 'center' }}>
        The cryptographic architecture demonstrated in this project requires zero changes for production deployment. The transition from demo to production is an infrastructure problem, not a security redesign problem.
      </p>

      <aside className="notes">
        Emphasize the last sentence: the crypto is production-ready. Only the infrastructure layer changes.
      </aside>
    </section>
  );
}
