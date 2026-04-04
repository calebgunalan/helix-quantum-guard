const modules = [
  {
    num: 4, name: 'DID Management', file: 'did.ts', color: '#00d4ff',
    desc: 'Creates, registers, and resolves W3C DID-compliant identity documents on-chain.',
    ops: ['DID = sha3Hash(publicKey)[0:24]', 'DID Document with Dilithium + Kyber public keys', 'On-chain IDENTITY_REGISTERED tx', 'Credential status tracking (ACTIVE/REVOKED/EXPIRED)'],
  },
  {
    num: 5, name: 'Auth & Session', file: 'authStore.ts', color: '#7c3aed',
    desc: 'Manages complete quantum-safe authentication lifecycle with MFA and session expiry.',
    ops: ['Kyber key encapsulation handshake on login', 'Dilithium challenge-response MFA', 'Session token = sha3Hash(sharedSecret + timestamp)', '30-min countdown, SESSION_EXPIRED tx on timeout'],
  },
  {
    num: 6, name: 'Patient Portal', file: 'Patient.tsx', color: '#16a34a',
    desc: 'Patient-facing interface for identity, consent, and ZKP credential presentation.',
    ops: ['DID Identity Card with real key display', 'Consent toggles with on-chain recording', 'ZKP proof generation (Groth16 structure)', 'Cross-hospital credential flow'],
  },
  {
    num: 7, name: 'Staff & Moderator', file: 'Staff.tsx / Moderator.tsx', color: '#f59e0b',
    desc: 'Clinical workflow — access requests, approvals, delegations, emergency access.',
    ops: ['Smart contract access requests', 'Dilithium-signed credential delegation', 'Break-glass emergency override', 'Approval queue, audit trail, Merkle proofs'],
  },
  {
    num: 8, name: 'Admin & Governance', file: 'Admin.tsx', color: '#dc2626',
    desc: 'System-wide identity lifecycle, blockchain explorer, and policy governance.',
    ops: ['User onboarding with key generation + DID registration', 'Identity revocation (CREDENTIAL_REVOKED tx)', 'Blockchain explorer + tamper demo', 'Smart contract policy deployment'],
  },
];

export default function Slide23ModulesIdentity() {
  return (
    <section data-transition="slide" className="slide-dense-content">
      <h2 style={{ fontSize: '1em' }}>Modules 4–8: Identity, Session, and Interface</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginTop: '14px' }}>
        {modules.slice(0, 3).map((m) => (
          <ModuleCard key={m.num} m={m} />
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '10px' }}>
        {modules.slice(3).map((m) => (
          <ModuleCard key={m.num} m={m} />
        ))}
      </div>
      <aside className="notes">Five modules covering identity management, authentication, and all four actor dashboards.</aside>
    </section>
  );
}

function ModuleCard({ m }: { m: typeof modules[number] }) {
  return (
    <div className="fragment pres-card" style={{ padding: '12px', borderLeft: `3px solid ${m.color}` }}>
      <span style={{ fontSize: '0.5em', color: m.color, fontWeight: 700 }}>Module {m.num} — {m.name}</span>
      <p className="mono" style={{ fontSize: '0.42em', color: '#64748b', margin: '2px 0 6px' }}>{m.file}</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {m.ops.map((o) => (
          <li key={o} style={{ fontSize: '0.45em', color: '#94a3b8', lineHeight: 1.4, marginBottom: '2px', paddingLeft: '10px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: m.color }}>›</span>{o}
          </li>
        ))}
      </ul>
    </div>
  );
}
