export default function Slide21DemoAccess() {
  return (
    <section data-transition="slide">
      <h2>Demo: Smart Contract Access Enforcement</h2>
      <div className="grid-3" style={{ marginTop: '24px', gap: '20px' }}>
        <div className="fragment pres-card" style={{ padding: '20px', borderTop: '3px solid #00d4ff' }}>
          <h4 style={{ fontSize: '0.75em', color: '#00d4ff', marginBottom: '12px' }}>1. Dr. Okafor Requests Access</h4>
          <div style={{ background: 'rgba(0,212,255,0.05)', borderRadius: '8px', padding: '12px', marginBottom: '12px' }}>
            <p style={{ fontSize: '0.6em', color: '#94a3b8', marginBottom: '4px' }}>📋 Access Request Form</p>
            <p className="mono" style={{ fontSize: '0.55em', marginBottom: '2px' }}>Patient: did:helix:0x8d1e...</p>
            <p style={{ fontSize: '0.55em', color: '#94a3b8', marginBottom: '2px' }}>Records: Scan Results, Medication</p>
            <p style={{ fontSize: '0.55em', color: '#94a3b8', marginBottom: 0 }}>Duration: 72 hours</p>
          </div>
          <p style={{ fontSize: '0.6em', color: '#94a3b8', lineHeight: 1.5, marginBottom: 0 }}>
            Request signed with Dr. Okafor's Dilithium key. Transaction broadcast to blockchain. Status: Pending Approval.
          </p>
        </div>

        <div className="fragment pres-card" style={{ padding: '20px', borderTop: '3px solid #f59e0b' }}>
          <h4 style={{ fontSize: '0.75em', color: '#f59e0b', marginBottom: '12px' }}>2. Dr. Nair Reviews</h4>
          <div style={{ background: 'rgba(245,158,11,0.05)', borderRadius: '8px', padding: '12px', marginBottom: '12px' }}>
            <p style={{ fontSize: '0.6em', color: '#94a3b8', marginBottom: '4px' }}>⏳ Approval Queue</p>
            <p style={{ fontSize: '0.55em', color: '#94a3b8', marginBottom: '2px' }}>Requestor: Dr. James Okafor</p>
            <p style={{ fontSize: '0.55em', color: '#94a3b8', marginBottom: '2px' }}>Risk Level: Medium</p>
            <p style={{ fontSize: '0.55em', color: '#16a34a', marginBottom: 0 }}>Action: ✓ APPROVED</p>
          </div>
          <p style={{ fontSize: '0.6em', color: '#94a3b8', lineHeight: 1.5, marginBottom: 0 }}>
            Department Head approves. Smart contract updateAccessPolicy() called. Dilithium-signed approval mined.
          </p>
        </div>

        <div className="fragment pres-card" style={{ padding: '20px', borderTop: '3px solid #16a34a' }}>
          <h4 style={{ fontSize: '0.75em', color: '#16a34a', marginBottom: '12px' }}>3. Access Granted On-Chain</h4>
          <div style={{ background: 'rgba(22,163,74,0.05)', borderRadius: '8px', padding: '12px', marginBottom: '12px' }}>
            <p style={{ fontSize: '0.6em', color: '#94a3b8', marginBottom: '4px' }}>⛓ Blockchain Explorer</p>
            <p className="mono" style={{ fontSize: '0.55em', marginBottom: '2px' }}>Event: ACCESS_GRANTED</p>
            <p className="mono" style={{ fontSize: '0.55em', marginBottom: '2px' }}>TX: 0x7b3d...e9f2</p>
            <p className="mono" style={{ fontSize: '0.55em', marginBottom: 0 }}>Block #14,852</p>
          </div>
          <p style={{ fontSize: '0.6em', color: '#94a3b8', lineHeight: 1.5, marginBottom: 0 }}>
            Policy enforced by contract 0x8c2f... Every step is permanently recorded.
          </p>
        </div>
      </div>

      <p className="fragment" style={{ fontSize: '0.68em', color: '#64748b', textAlign: 'center', marginTop: '24px' }}>
        This entire workflow — from request to access — takes approximately 8 seconds end-to-end. In production on Hyperledger Fabric, this reduces to under 1 second.
      </p>

      <aside className="notes">
        Three-panel storyboard: request → approval → on-chain record. Emphasize the accountability at every step.
      </aside>
    </section>
  );
}
