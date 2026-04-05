import ScrambleText from '../components/ScrambleText';

export default function Slide14DID() {
  return (
    <section data-auto-animate data-transition="slide">
      <h2>Every Identity Lives on the Blockchain</h2>
      <div style={{ display: 'flex', gap: '36px', marginTop: '24px' }}>
        {/* DID Card */}
        <div className="did-card pres-card-interactive" data-id="did-identity-card" style={{ flex: '0 0 45%' }}>
          <p style={{ color: '#64748b', marginBottom: '4px', fontFamily: 'Inter, sans-serif', fontSize: '0.9em' }}>DID Document</p>
          <p><span style={{ color: '#64748b' }}>DID:</span> <ScrambleText text="did:helix:0x4a3f9c2d8b1e..." /></p>
          <p><span style={{ color: '#64748b' }}>Public Key:</span> <span style={{ color: '#cbd5e1' }}>[Dilithium3 — 1,952 bytes]</span></p>
          <p><span style={{ color: '#64748b' }}>Issued Block:</span> <span style={{ color: '#cbd5e1' }}>#12,441</span></p>
          <p><span style={{ color: '#64748b' }}>Credential Hash:</span> <ScrambleText text="SHA3-256: 0x7c2f9a4d..." /></p>
          <p><span style={{ color: '#64748b' }}>Status:</span> <span style={{ color: '#16a34a' }}>● ACTIVE</span></p>
        </div>

        {/* Explanation */}
        <div style={{ flex: 1 }}>
          <div className="fragment" style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '0.82em', color: '#00d4ff', marginBottom: '6px' }}>No central database</h4>
            <p style={{ fontSize: '0.72em', color: '#94a3b8', lineHeight: 1.6 }}>
              The identity cannot be deleted by a single administrator. It exists on every node of the network.
            </p>
          </div>
          <div className="fragment" style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '0.82em', color: '#00d4ff', marginBottom: '6px' }}>Self-sovereign</h4>
            <p style={{ fontSize: '0.72em', color: '#94a3b8', lineHeight: 1.6 }}>
              The credential belongs to the patient/staff member, not to any hospital's IT department.
            </p>
          </div>
          <div className="fragment" style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '0.82em', color: '#00d4ff', marginBottom: '6px' }}>Portable</h4>
            <p style={{ fontSize: '0.72em', color: '#94a3b8', lineHeight: 1.6 }}>
              The same DID is recognized across every hospital in the network, eliminating fragmented patient records.
            </p>
          </div>
        </div>
      </div>

      <p className="fragment" style={{ fontSize: '0.72em', color: '#64748b', marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}>
        In traditional IAM, revoking access means updating a database row. In HelixID, it means publishing a signed transaction to an immutable ledger — creating an accountable, verifiable record of the decision.
      </p>

      <aside className="notes">
        Show the DID card first, then reveal each benefit. The key differentiator from Active Directory:
        no single admin can silently delete or modify an identity.
      </aside>
    </section>
  );
}
