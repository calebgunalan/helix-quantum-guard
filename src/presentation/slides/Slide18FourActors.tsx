const actors = [
  { icon: '🏥', role: 'Patient', color: '#3b82f6', desc: 'Owns their identity. Controls data consent. Can prove credentials to external parties via ZKP.' },
  { icon: '👨‍⚕️', role: 'Hospital Staff', color: '#00d4ff', desc: 'Requests access through smart contracts. Every record access is blockchain-logged. Can delegate credentials and invoke emergency override.' },
  { icon: '👩‍💼', role: 'Department Head', color: '#f59e0b', desc: 'Approves access within their department scope. Policy governance authority. Full department audit visibility.' },
  { icon: '🔐', role: 'IT Admin', color: '#7c3aed', desc: 'System-wide identity lifecycle management. Blockchain explorer. Quantum security configuration. Smart contract deployment.' },
];

export default function Slide18FourActors() {
  return (
    <section data-transition="slide">
      <div className="section-number">03</div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h3 style={{ fontSize: '0.85em', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '32px', color: '#00d4ff' }}>
          The System in Action
        </h3>
        <div className="grid-2" style={{ gap: '20px' }}>
          {actors.map((a) => (
            <div key={a.role} className="fragment pres-card" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start', borderLeft: `3px solid ${a.color}` }}>
              <span style={{ fontSize: '2em', flexShrink: 0 }}>{a.icon}</span>
              <div>
                <h4 style={{ fontSize: '0.88em', color: a.color, marginBottom: '8px', fontWeight: 600 }}>{a.role}</h4>
                <p style={{ fontSize: '0.7em', color: '#94a3b8', lineHeight: 1.6, marginBottom: 0 }}>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <aside className="notes">
        Each role has a dedicated dashboard in the demo. Walk through each actor's capabilities and what parts of the system they interact with.
      </aside>
    </section>
  );
}
