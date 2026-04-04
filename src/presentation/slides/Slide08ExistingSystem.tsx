export default function Slide08ExistingSystem() {
  const columns = [
    {
      icon: '🔒',
      title: 'Active Directory / LDAP-Based IAM',
      desc: 'A central directory server stores all user credentials, roles, and group memberships. Authentication is password or certificate-based using Kerberos or LDAP bind operations.',
      deployed: 'Microsoft Active Directory (90%+ of enterprise healthcare)',
      crypto: 'RSA-2048 certificates, SHA-256, ECDSA',
    },
    {
      icon: '🔗',
      title: 'SAML / OAuth2 Federated Identity',
      desc: 'Federated identity allows single sign-on via a central Identity Provider (IdP) that issues signed tokens validated by resource servers.',
      deployed: 'Okta, Azure AD, Ping Identity',
      crypto: 'RSA or ECDSA-signed SAML assertions, JWT tokens',
    },
    {
      icon: '⛓',
      title: 'Blockchain IAM (Prior Academic)',
      desc: 'Academic proposals (Mühle et al., Azaria et al.) demonstrated blockchain could provide decentralized identity anchoring and tamper-evident audit trails.',
      deployed: 'Research prototypes only — no clinical deployment as of 2024',
      crypto: 'ECDSA (Ethereum), SHA-256 — both quantum-vulnerable',
    },
  ];

  return (
    <section data-transition="slide">
      <h2 style={{ fontSize: '1.1em' }}>Existing Systems — How Healthcare IAM Works Today</h2>
      <div className="grid-3" style={{ marginTop: '20px', gap: '16px' }}>
        {columns.map((c) => (
          <div key={c.title} className="fragment pres-card" style={{ padding: '18px' }}>
            <div style={{ fontSize: '1.8em', marginBottom: '8px' }}>{c.icon}</div>
            <h4 style={{ fontSize: '0.72em', color: '#00d4ff', marginBottom: '10px', fontWeight: 600 }}>{c.title}</h4>
            <p style={{ fontSize: '0.58em', color: '#94a3b8', lineHeight: 1.6, marginBottom: '10px' }}>{c.desc}</p>
            <p style={{ fontSize: '0.55em', color: '#cbd5e1', marginBottom: '4px' }}><strong>Deployed by:</strong> {c.deployed}</p>
            <p style={{ fontSize: '0.55em', color: '#f59e0b', marginBottom: 0 }}><strong>Crypto:</strong> {c.crypto}</p>
          </div>
        ))}
      </div>
      <div className="fragment pres-card pres-card-danger" style={{ marginTop: '16px', padding: '12px 18px' }}>
        <p style={{ fontSize: '0.68em', color: '#e2e8f0', marginBottom: 0, lineHeight: 1.5 }}>
          All three existing approaches share a critical common flaw: they rely on classical cryptographic primitives that are
          mathematically <strong style={{ color: '#dc2626' }}>vulnerable to quantum computing attacks</strong>.
          None address the harvest-now-decrypt-later threat.
        </p>
      </div>
      <aside className="notes">Three dominant IAM paradigms in healthcare, all sharing the same quantum vulnerability.</aside>
    </section>
  );
}
