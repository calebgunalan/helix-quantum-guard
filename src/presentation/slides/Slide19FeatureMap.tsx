const features = [
  { feature: 'Authentication', actor: 'All roles', event: 'LOGIN_SUCCESS / LOGIN_FAILED', protection: 'Kyber768 handshake + Dilithium MFA' },
  { feature: 'Identity Issuance', actor: 'Admin', event: 'IDENTITY_REGISTERED', protection: 'Dilithium key pair + DID on-chain' },
  { feature: 'Credential Lifecycle', actor: 'Admin / Moderator', event: 'CREDENTIAL_ISSUED / RENEWED / REVOKED', protection: 'Dilithium-signed transaction' },
  { feature: 'Role-Based Access Control', actor: 'Smart Contract', event: 'ACCESS_GRANTED / DENIED', protection: 'Contract address on-chain' },
  { feature: 'Access Request Workflow', actor: 'Staff → Moderator', event: 'ACCESS_REQUESTED / GRANTED', protection: 'Dilithium-signed approval' },
  { feature: 'Credential Delegation', actor: 'Staff', event: 'CREDENTIAL_DELEGATED', protection: "Delegator's Dilithium signature" },
  { feature: 'Break-Glass Emergency', actor: 'Staff', event: 'EMERGENCY_ACCESS_INVOKED', protection: 'Permanent on-chain record' },
  { feature: 'ZKP Credential Proof', actor: 'Patient / Staff', event: 'ZKP_PROOF_GENERATED', protection: 'Groth16 proof structure' },
  { feature: 'Session Management', actor: 'All roles', event: 'SESSION_EXPIRED', protection: 'Kyber-derived session token' },
  { feature: 'Consent Management', actor: 'Patient', event: 'CONSENT_UPDATED', protection: "Patient's Dilithium signature" },
];

export default function Slide19FeatureMap() {
  return (
    <section data-transition="slide" className="slide-dense-content">
      <h2>Complete IAM Feature Coverage</h2>
      <div className="slide-scroll-container" style={{ marginTop: '16px' }}>
        <table className="comparison-table">
          <thead>
            <tr>
              <th style={{ width: '22%' }}>Feature</th>
              <th style={{ width: '15%' }}>Actor</th>
              <th style={{ width: '30%' }}>Blockchain Event</th>
              <th style={{ width: '33%' }}>Quantum-Protected By</th>
            </tr>
          </thead>
          <tbody>
            {features.map((f, i) => (
              <tr key={i} className="fragment">
                <td style={{ fontSize: '0.72em', color: '#cbd5e1', fontWeight: 500 }}>{f.feature}</td>
                <td style={{ fontSize: '0.68em', color: '#94a3b8' }}>{f.actor}</td>
                <td className="mono" style={{ fontSize: '0.62em' }}>{f.event}</td>
                <td style={{ fontSize: '0.68em', color: '#94a3b8' }}>{f.protection}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <aside className="notes">
        The visual density of this table communicates system completeness at a glance. Every row is a feature
        that has both a blockchain event and quantum-resistant protection. Advance one row at a time.
      </aside>
    </section>
  );
}
