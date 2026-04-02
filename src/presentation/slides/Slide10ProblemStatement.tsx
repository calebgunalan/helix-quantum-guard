const paragraphs = [
  '1. Contemporary Identity and Access Management systems deployed in healthcare environments rely on centralized identity directories (LDAP, Active Directory) and classical cryptographic primitives (RSA-2048, ECC-256) for authentication and access control. These architectures present a singular point of failure: a compromised identity directory exposes all credentials, and an emerging quantum adversary can retroactively decrypt all data protected by classical algorithms. Healthcare records, with a regulatory retention requirement of 25–50 years, represent the longest-lived sensitive data class in any industry, making them uniquely vulnerable to harvest-now-decrypt-later attacks.',
  '2. Existing blockchain-based IAM proposals address the auditability and decentralization concerns of classical IAM, but universally retain classical cryptographic schemes — ECDSA signatures, SHA-256 hashing — that are known to be vulnerable to Shor\'s algorithm on sufficiently powerful quantum hardware. The security guarantee of a blockchain audit trail is only as strong as the cryptography protecting each transaction. A quantum-vulnerable blockchain is not a quantum-resistant system.',
  '3. No existing deployed or proposed system integrates NIST-standardized post-quantum cryptographic primitives as the native transaction signing and key establishment mechanism within a permissioned blockchain IAM architecture for healthcare, while simultaneously supporting the complete IAM feature set required by clinical environments: smart contract-enforced role separation, patient-controlled consent, privacy-preserving cross-institutional verification, and emergency access with guaranteed accountability.',
];

export default function Slide10ProblemStatement() {
  return (
    <section data-transition="slide">
      <h2>Problem Statement</h2>
      <div style={{ marginTop: '24px', maxWidth: '820px' }}>
        {paragraphs.map((p, i) => (
          <p key={i} className="fragment" style={{ fontSize: '0.76em', color: '#cbd5e1', lineHeight: 1.85, marginBottom: '24px' }}>
            {p}
          </p>
        ))}
      </div>

      <div className="fragment pres-card pres-card-teal" style={{ marginTop: '12px', padding: '16px 24px' }}>
        <p style={{ fontSize: '0.78em', color: '#00d4ff', marginBottom: 0, fontWeight: 500 }}>
          HelixID is designed to solve all three of these problems within a single, unified architectural framework.
        </p>
      </div>

      <aside className="notes">
        Advance through the three paragraphs one at a time. Each paragraph narrows the problem space:
        paragraph 1 identifies the classical IAM failure, paragraph 2 shows blockchain alone isn't enough,
        and paragraph 3 identifies the specific gap HelixID fills.
      </aside>
    </section>
  );
}
