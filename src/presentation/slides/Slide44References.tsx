const refs = [
  '[1] NIST, "Module-Lattice-Based Key-Encapsulation Mechanism Standard," FIPS 203, Aug. 2024.',
  '[2] NIST, "Module-Lattice-Based Digital Signature Standard," FIPS 204, Aug. 2024.',
  '[3] NIST, "Secure Hash Standard," FIPS 202, Aug. 2015.',
  '[4] A. Mühle et al., "A Survey on Essential Components of a Self-Sovereign Identity," Computer Science Review, vol. 30, pp. 80–86, 2018.',
  '[5] W3C, "Decentralized Identifiers (DIDs) v1.0," W3C Recommendation, Jul. 2022.',
  '[6] Hyperledger Foundation, "Hyperledger Fabric 2.5 Architecture Documentation," 2023.',
  '[7] S. Nakamoto, "Bitcoin: A Peer-to-Peer Electronic Cash System," 2008.',
  '[8] E. Azaria et al., "MedRec: Using Blockchain for Medical Data Access and Permission Management," OBD 2016, pp. 25–30.',
  '[9] D. J. Bernstein and T. Lange, "Post-Quantum Cryptography," Nature, vol. 549, pp. 188–194, 2017.',
  '[10] ENISA, "Post-Quantum Cryptography: Current State and Quantum Mitigation," 2021.',
  '[11] J. Groth, "On the Size of Pairing-Based Non-Interactive Arguments," EUROCRYPT 2016, pp. 305–326.',
  '[12] P. Miller, "noble-post-quantum: CRYSTALS-Kyber and Dilithium JavaScript Implementation," GitHub, 2024.',
  '[13] L. Chen et al., "Report on Post-Quantum Cryptography," NIST IR 8105, 2016.',
  '[14] M. A. Khan and K. Salah, "IoT Security: Review, Blockchain Solutions, and Open Challenges," FGCS, vol. 82, pp. 395–411, 2018.',
  '[15] HIPAA, U.S. DHHS, Technical Safeguards, 45 C.F.R. § 164.312, 1996.',
  '[16] D. Perumalsamy, C. Gunalan, R. Thinakaran, "An Information Theory of Persistent Homology…," Mathematics (MDPI), under minor revision, 2026.',
];

export default function Slide44References() {
  return (
    <section data-auto-animate data-transition="slide" className="slide-dense-content">
      <h2 style={{ fontSize: '1em' }}>References</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 20px', marginTop: '14px' }}>
        {refs.map((r, i) => (
          <p key={i} style={{ fontSize: 'clamp(0.45rem, 0.9vw, 0.65rem)', color: i < 3 ? '#cbd5e1' : '#94a3b8', lineHeight: 1.5, marginBottom: '2px' }}>
            {r}
          </p>
        ))}
      </div>
      <aside className="notes">16 references in IEEE citation style. Top 3 are the NIST FIPS standards directly used.</aside>
    </section>
  );
}
