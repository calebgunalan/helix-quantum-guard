export default function Slide08ExistingSystem() {
  const columns = [
    { icon: '🔒', title: 'Active Directory / LDAP-Based IAM', desc: 'A central directory server stores all user credentials, roles, and group memberships. Authentication is password or certificate-based using Kerberos or LDAP bind operations.', deployed: 'Microsoft Active Directory (90%+ of enterprise healthcare)', crypto: 'RSA-2048 certificates, SHA-256, ECDSA', color: '#C0392B' },
    { icon: '🔗', title: 'SAML / OAuth2 Federated Identity', desc: 'Federated identity allows single sign-on via a central Identity Provider (IdP) that issues signed tokens validated by resource servers.', deployed: 'Okta, Azure AD, Ping Identity', crypto: 'RSA or ECDSA-signed SAML assertions, JWT tokens', color: '#C99010' },
    { icon: '⛓', title: 'Blockchain IAM (Prior Academic)', desc: 'Academic proposals demonstrated blockchain could provide decentralized identity anchoring and tamper-evident audit trails.', deployed: 'Research prototypes only — no clinical deployment as of 2024', crypto: 'ECDSA (Ethereum), SHA-256 — both quantum-vulnerable', color: '#1E7070' },
  ];

  return (
    <section data-auto-animate data-transition="fade">
      <div className="pres-title-bar"><h2>Existing Systems — How Healthcare IAM Works Today</h2></div>
      <div className="grid-3" style={{ gap: '16px' }}>
        {columns.map((c) => (
          <div key={c.title} className="fragment pres-card" style={{ padding: '18px', borderTop: `3px solid ${c.color}` }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: `${c.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
              <span style={{ fontSize: '1.4em' }}>{c.icon}</span>
            </div>
            <h4 style={{ fontSize: '0.72em', color: '#2C5F2D', marginBottom: '10px', fontWeight: 600 }}>{c.title}</h4>
            <p style={{ fontSize: '0.58em', color: '#3A5C3A', lineHeight: 1.6, marginBottom: '10px' }}>{c.desc}</p>
            <p style={{ fontSize: '0.55em', color: '#1A2E1A', marginBottom: '4px' }}><strong>Deployed by:</strong> {c.deployed}</p>
            <p style={{ fontSize: '0.55em', color: '#C99010', marginBottom: 0 }}><strong>Crypto:</strong> {c.crypto}</p>
          </div>
        ))}
      </div>
      <div className="fragment callout danger" style={{ marginTop: '16px' }}>
        <p style={{ fontSize: '0.68em', color: '#1A2E1A', marginBottom: 0, lineHeight: 1.5 }}>
          All three existing approaches share a critical common flaw: they rely on classical cryptographic primitives that are
          mathematically <strong style={{ color: '#C0392B' }}>vulnerable to quantum computing attacks</strong>.
        </p>
      </div>
      <aside className="notes">Three dominant IAM paradigms, all sharing the same quantum vulnerability.</aside>
    </section>
  );
}
