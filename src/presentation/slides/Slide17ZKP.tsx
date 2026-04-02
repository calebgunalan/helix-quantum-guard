export default function Slide17ZKP() {
  return (
    <section data-transition="slide">
      <h2>Prove What You Know Without Revealing It</h2>

      {/* ZKP flow diagram */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', marginTop: '28px' }}>
        <div className="pres-card" style={{ padding: '14px 28px', textAlign: 'center', width: 'auto' }}>
          <p style={{ fontSize: '0.78em', color: '#cbd5e1', marginBottom: 0 }}>👨‍⚕️ Doctor from External Hospital</p>
          <p style={{ fontSize: '0.65em', color: '#64748b', marginBottom: 0 }}>"I need to prove I'm a licensed physician"</p>
        </div>
        <svg width="20" height="30"><line x1="10" y1="0" x2="10" y2="22" stroke="#00d4ff" strokeWidth="1.5" /><polygon points="5,22 10,30 15,22" fill="#00d4ff" /></svg>

        <div className="pres-card pres-card-violet fragment" style={{ padding: '14px 28px', textAlign: 'center', width: 'auto' }}>
          <p style={{ fontSize: '0.78em', color: '#7c3aed', marginBottom: '4px', fontWeight: 600 }}>ZKP Engine — Groth16 zk-SNARK</p>
          <p style={{ fontSize: '0.65em', color: '#94a3b8', marginBottom: 0 }}>
            Generates proof π from credential<br />WITHOUT transmitting the credential itself
          </p>
        </div>
        <svg width="20" height="30"><line x1="10" y1="0" x2="10" y2="22" stroke="#7c3aed" strokeWidth="1.5" /><polygon points="5,22 10,30 15,22" fill="#7c3aed" /></svg>

        <div className="pres-card fragment" style={{ padding: '14px 28px', textAlign: 'center', width: 'auto', borderTop: '2px solid #16a34a' }}>
          <p style={{ fontSize: '0.78em', color: '#16a34a', marginBottom: '4px', fontWeight: 600 }}>HelixID Verifier</p>
          <p style={{ fontSize: '0.65em', color: '#94a3b8', marginBottom: 0 }}>
            "Credential: VALID ✓" — without knowing the doctor's name, hospital, or DID.
          </p>
        </div>
      </div>

      <p className="fragment" style={{ fontSize: '0.78em', color: '#94a3b8', textAlign: 'center', marginTop: '24px', maxWidth: '600px', margin: '24px auto 0' }}>
        Think of it like proving you know a password without saying the password. The mathematical proof is convincing without being revealing.
      </p>

      <div className="fragment pres-card" style={{ marginTop: '20px', padding: '12px 20px', fontSize: '0.65em', color: '#64748b' }}>
        <strong>Technical note:</strong> HelixID implements Groth16 zk-SNARK proof structure. Full cryptographic proof computation requires a custom circuit compiled with snarkjs — the demo simulates the proof structure to illustrate the workflow accurately.
      </div>

      <aside className="notes">
        Use the password analogy to make ZKPs accessible. The key insight: the verifier is convinced without receiving any private data.
        This enables cross-hospital credential verification without data sharing.
      </aside>
    </section>
  );
}
