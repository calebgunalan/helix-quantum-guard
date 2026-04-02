const references = [
  { ref: 'NIST FIPS 203 — Module-Lattice-Based Key-Encapsulation Mechanism Standard', year: '2024', contribution: 'Defines CRYSTALS-Kyber768 as the standardized algorithm for post-quantum key encapsulation. HelixID uses this standard directly for session establishment.', recent: 'Very Recent — Aug 2024', color: '#16a34a' },
  { ref: 'NIST FIPS 204 — Module-Lattice-Based Digital Signature Standard', year: '2024', contribution: 'Defines CRYSTALS-Dilithium3 as the standardized algorithm for post-quantum digital signatures. HelixID uses this for all transaction signing and MFA.', recent: 'Very Recent — Aug 2024', color: '#16a34a' },
  { ref: 'W3C Decentralized Identifiers (DIDs) v1.0 — W3C Recommendation', year: '2022', contribution: 'Defines the DID document structure and resolution model that HelixID implements for on-chain identity anchoring.', recent: 'Recent — Active Standard', color: '#16a34a' },
  { ref: 'Hyperledger Fabric v2.5 Architecture Documentation', year: '2023', contribution: 'Defines the permissioned blockchain model, chaincode execution, and PBFT-derived consensus that HelixID targets for production.', recent: 'Recent — Current Release', color: '#16a34a' },
  { ref: '"A Survey on Blockchain-Based Identity Management Systems" — IEEE Access, Mühle et al.', year: '2018', contribution: 'Established the taxonomy of blockchain IAM architectures. Identified centralization and audit mutability as primary failure modes.', recent: 'Foundational', color: '#64748b' },
  { ref: '"Post-Quantum Cryptography for Healthcare IoT" — Journal of Medical Systems', year: '2023', contribution: 'Demonstrated feasibility of lattice-based cryptography in healthcare environments and established performance benchmarks.', recent: 'Recent', color: '#16a34a' },
  { ref: '"Harvest Now, Decrypt Later Attacks: Threat Analysis" — ENISA', year: '2023', contribution: 'Provided the threat model and timeline analysis motivating HelixID\'s deployment urgency.', recent: 'Recent', color: '#16a34a' },
];

export default function Slide09LitSurvey() {
  return (
    <section>
      {/* Sub-slide A: Section opener */}
      <section data-transition="fade">
        <div className="section-number" style={{ fontSize: '12em', color: 'rgba(0,212,255,0.03)' }}>LS</div>
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '80%' }}>
          <h3 style={{ fontSize: '0.85em', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '40px', color: '#00d4ff' }}>
            Literature Survey
          </h3>
          <h2 style={{ fontSize: '1.4em', maxWidth: '700px' }}>The Research Foundation</h2>
          <p style={{ fontSize: '0.82em', color: '#94a3b8', maxWidth: '650px', lineHeight: 1.7, marginTop: '20px' }}>
            The design of HelixID is grounded in four intersecting research domains: post-quantum cryptography
            standardization, blockchain-based identity systems, healthcare data privacy regulation, and
            zero-knowledge proof applications in IAM.
          </p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '32px', flexWrap: 'wrap' }}>
            {['PQC Standardization', 'Blockchain IAM', 'Healthcare Privacy', 'ZKP in Identity'].map((t) => (
              <span key={t} className="pres-badge" style={{ fontSize: '0.65em' }}>{t}</span>
            ))}
          </div>
        </div>
        <aside className="notes">
          This section opener frames the four research domains. Each subsequent sub-slide dives into specific references.
        </aside>
      </section>

      {/* Sub-slide B: Reference table */}
      <section data-transition="fade">
        <h2 style={{ fontSize: '1.2em' }}>Key Literature and Standards Referenced</h2>
        <div style={{ marginTop: '16px', overflowY: 'auto', maxHeight: '500px' }}>
          <table className="comparison-table" style={{ fontSize: '0.62em' }}>
            <thead>
              <tr>
                <th style={{ width: '35%' }}>Reference</th>
                <th style={{ width: '6%' }}>Year</th>
                <th style={{ width: '45%' }}>Contribution to This Project</th>
                <th style={{ width: '14%' }}>Recentness</th>
              </tr>
            </thead>
            <tbody>
              {references.map((r, i) => (
                <tr key={i}>
                  <td style={{ color: '#cbd5e1' }}>{r.ref}</td>
                  <td style={{ color: '#94a3b8' }}>{r.year}</td>
                  <td style={{ color: '#94a3b8' }}>{r.contribution}</td>
                  <td><span style={{ color: r.color }}>● {r.recent}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <aside className="notes">
          Highlight that 5 out of 7 references are from 2022 or later. This demonstrates the project uses cutting-edge standards.
        </aside>
      </section>

      {/* Sub-slide C: Critical analysis */}
      <section data-transition="fade">
        <h2 style={{ fontSize: '1.2em' }}>Critical Analysis — Gaps in Prior Work</h2>
        <div className="grid-3" style={{ marginTop: '24px', gap: '20px' }}>
          <div className="pres-card" style={{ padding: '20px' }}>
            <h4 style={{ fontSize: '0.75em', color: '#16a34a', marginBottom: '12px' }}>What Prior Work Established</h4>
            <p style={{ fontSize: '0.65em', color: '#94a3b8', lineHeight: 1.7, marginBottom: 0 }}>
              Blockchain can provide tamper-evident audit trails for IAM (Mühle et al., 2018).
              Post-quantum algorithms are computationally feasible in software (NIST PQC Project, 2016–2024).
              Zero-knowledge proofs enable privacy-preserving credential verification (Camenisch & Lysyanskaya, 2001).
            </p>
          </div>
          <div className="pres-card pres-card-danger" style={{ padding: '20px' }}>
            <h4 style={{ fontSize: '0.75em', color: '#dc2626', marginBottom: '12px' }}>Gaps Left Unaddressed</h4>
            <p style={{ fontSize: '0.65em', color: '#94a3b8', lineHeight: 1.7, marginBottom: 0 }}>
              No prior work integrates post-quantum cryptography directly into a blockchain IAM system — they remain separate research streams.
              Existing blockchain IAM proposals use classical cryptographic primitives (ECDSA, SHA-256) that are quantum-vulnerable.
              Healthcare-specific requirements — break-glass access, patient consent on-chain, cross-institutional ZKP — have not been addressed in a unified system.
            </p>
          </div>
          <div className="pres-card pres-card-teal" style={{ padding: '20px' }}>
            <h4 style={{ fontSize: '0.75em', color: '#00d4ff', marginBottom: '12px' }}>How HelixID Addresses These Gaps</h4>
            <p style={{ fontSize: '0.65em', color: '#94a3b8', lineHeight: 1.7, marginBottom: 0 }}>
              HelixID is the first demonstration of a complete IAM system where NIST-standardized post-quantum algorithms
              are the <em>foundation</em> of the blockchain layer, not an addition to it. Every blockchain transaction uses Dilithium signatures.
              Every session uses Kyber key establishment. The quantum resistance is architectural, not superficial.
            </p>
          </div>
        </div>

        <p style={{ fontSize: '1em', color: '#00d4ff', fontWeight: 700, textAlign: 'center', marginTop: '36px' }}>
          HelixID does not combine existing systems. It redesigns the foundation they were built on.
        </p>
        <aside className="notes">
          This is the key slide for academic reviewers. The gap analysis shows that no prior work exists at this intersection.
          HelixID's contribution is the integration, not any single component.
        </aside>
      </section>
    </section>
  );
}
