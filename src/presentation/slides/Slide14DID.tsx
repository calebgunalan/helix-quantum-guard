import ScrambleText from '../components/ScrambleText';

export default function Slide14DID() {
  return (
    <section data-auto-animate data-transition="fade">
      <div className="pres-title-bar"><h2>Every Identity Lives on the Blockchain</h2></div>
      <div style={{ display: 'flex', gap: '36px' }}>
        <div className="did-card pres-card-interactive" data-id="did-identity-card" style={{ flex: '0 0 45%' }}>
          <p style={{ color: '#6B8A6B', marginBottom: '4px', fontFamily: 'Calibri, sans-serif', fontSize: '0.9em' }}>DID Document</p>
          <p><span style={{ color: '#6B8A6B' }}>DID:</span> <ScrambleText text="did:helix:0x4a3f9c2d8b1e..." /></p>
          <p><span style={{ color: '#6B8A6B' }}>Public Key:</span> <span style={{ color: '#1A2E1A' }}>[Dilithium3 — 1,952 bytes]</span></p>
          <p><span style={{ color: '#6B8A6B' }}>Issued Block:</span> <span style={{ color: '#1A2E1A' }}>#12,441</span></p>
          <p><span style={{ color: '#6B8A6B' }}>Credential Hash:</span> <ScrambleText text="SHA3-256: 0x7c2f9a4d..." /></p>
          <p><span style={{ color: '#6B8A6B' }}>Status:</span> <span style={{ color: '#7DB85A' }}>● ACTIVE</span></p>
        </div>
        <div style={{ flex: 1 }}>
          {[
            { title: 'No central database', desc: 'The identity cannot be deleted by a single administrator. It exists on every node of the network.' },
            { title: 'Self-sovereign', desc: 'The credential belongs to the patient/staff member, not to any hospital\'s IT department.' },
            { title: 'Portable', desc: 'The same DID is recognized across every hospital in the network, eliminating fragmented patient records.' },
          ].map((item) => (
            <div key={item.title} className="fragment" style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '0.82em', color: '#2C5F2D', marginBottom: '6px' }}>{item.title}</h4>
              <p style={{ fontSize: '0.72em', color: '#3A5C3A', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <aside className="notes">Show the DID card first, then reveal each benefit.</aside>
    </section>
  );
}
