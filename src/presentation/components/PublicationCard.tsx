import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

export interface Publication {
  title: string;
  venue: string;
  type: 'Journal' | 'Conference' | 'Book Chapter';
  status: string;
  statusColor: string;
  auraColors: [string, string];
  authors?: string;
  received?: string;
  revised?: string;
  abstract: string;
  keywords: string[];
  series?: string;
}

function AuraCard({ pub, onClick }: { pub: Publication; onClick: () => void }) {
  return (
    <div className="pub-aura-wrap" style={{ '--aura-c1': pub.auraColors[0], '--aura-c2': pub.auraColors[1] } as any} onClick={onClick}>
      <div className="pub-card-inner">
        <span style={{ fontSize: '1.4em' }}>{pub.type === 'Book Chapter' ? '📖' : '📄'}</span>
        {pub.type === 'Book Chapter' && (
          <span className="pres-badge" style={{ fontSize: '0.4em', background: 'rgba(180,83,9,0.15)', color: '#fcd34d', borderColor: 'rgba(180,83,9,0.3)', marginTop: '4px' }}>📖 Book Chapter</span>
        )}
        <h4 style={{ fontSize: '0.48em', color: '#e2e8f0', lineHeight: 1.4, marginTop: '6px', marginBottom: '4px', fontWeight: 600, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{pub.title}</h4>
        <p style={{ fontSize: '0.38em', color: '#94a3b8', marginBottom: '4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{pub.venue}</p>
        <span className="pres-badge badge-pulse" style={{ fontSize: '0.36em', background: `${pub.statusColor}18`, color: pub.statusColor, borderColor: `${pub.statusColor}40` }}>{pub.status}</span>
        <p style={{ fontSize: '0.32em', color: '#475569', marginTop: 'auto', marginBottom: 0, opacity: 0, transition: 'opacity 0.2s' }} className="pub-click-hint">Click to read abstract</p>
      </div>
    </div>
  );
}

function PubModal({ pub, onClose }: { pub: Publication; onClose: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    // Disable Reveal keyboard
    try { (window as any).Reveal?.configure?.({ keyboard: false }); } catch {}
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
      try { (window as any).Reveal?.configure?.({ keyboard: true }); } catch {}
    };
  }, []);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 250);
  }, [onClose]);

  return createPortal(
    <div
      onClick={handleClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 10000,
        background: visible ? 'rgba(5,10,18,0.95)' : 'rgba(5,10,18,0)',
        backdropFilter: 'blur(12px)',
        transition: 'background 0.2s, backdrop-filter 0.2s',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="pub-modal-panel"
        style={{
          '--aura-c1': pub.auraColors[0], '--aura-c2': pub.auraColors[1],
          transform: visible ? 'scale(1)' : 'scale(0.92)',
          opacity: visible ? 1 : 0,
          transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease',
        } as any}
      >
        {/* Top bar */}
        <div style={{ borderBottom: `3px solid ${pub.auraColors[0]}`, padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3 style={{ fontSize: '0.9em', color: '#e2e8f0', margin: 0, fontWeight: 700 }}>{pub.title}</h3>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '6px' }}>
              <span style={{ fontSize: '0.65em', color: '#94a3b8' }}>{pub.venue}</span>
              <span className="pres-badge" style={{ fontSize: '0.55em', background: `${pub.statusColor}18`, color: pub.statusColor, borderColor: `${pub.statusColor}40` }}>{pub.status}</span>
            </div>
          </div>
          <button onClick={handleClose} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', fontSize: '16px', cursor: 'pointer', borderRadius: '6px', padding: '6px 12px' }}>✕</button>
        </div>

        {/* Content */}
        <div style={{ padding: '24px', overflowY: 'auto', flex: 1, scrollbarWidth: 'thin', scrollbarColor: `${pub.auraColors[0]} transparent` }}>
          {pub.authors && (
            <p style={{ fontSize: '0.75em', color: '#94a3b8', marginBottom: '16px' }}>{pub.authors}</p>
          )}
          <h4 style={{ fontSize: '0.7em', color: pub.auraColors[0], marginBottom: '8px', fontWeight: 600 }}>Abstract</h4>
          <p style={{ fontSize: '0.72em', color: '#cbd5e1', lineHeight: 1.8, marginBottom: '20px', textAlign: 'justify' }}>{pub.abstract}</p>
          
          {pub.received && (
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
              <span className="pres-badge" style={{ fontSize: '0.55em' }}>Received: {pub.received}</span>
              {pub.revised && <span className="pres-badge" style={{ fontSize: '0.55em' }}>Revised: {pub.revised}</span>}
            </div>
          )}

          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {pub.keywords.map((k) => (
              <span key={k} style={{ fontSize: '0.55em', padding: '3px 10px', borderRadius: '12px', background: `${pub.auraColors[0]}15`, border: `1px solid ${pub.auraColors[0]}30`, color: pub.auraColors[0] }}>{k}</span>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function PublicationsSlide() {
  const [modalPub, setModalPub] = useState<Publication | null>(null);

  const papers: Publication[] = [
    {
      title: 'A Post-Quantum Secure Blockchain Architecture for Identity and Access Management in Critical Infrastructures',
      venue: 'IEEE Transactions on Information Forensics and Security',
      type: 'Journal', status: 'Submission Pending', statusColor: '#7c3aed',
      auraColors: ['#7c3aed', '#a855f7'],
      abstract: 'This paper proposes a novel blockchain-based identity and access management (IAM) architecture specifically hardened against quantum computing threats for deployment in critical infrastructure environments. The framework integrates NIST FIPS 203 (CRYSTALS-Kyber768) for quantum-safe key encapsulation and NIST FIPS 204 (CRYSTALS-Dilithium3) for post-quantum digital signatures as the native transaction signing layer of a permissioned blockchain, replacing classical ECDSA-based schemes that are vulnerable to Shor\'s algorithm. The proposed system provides cryptographically immutable audit trails, smart contract-enforced role-based access control, and decentralized identity anchoring via W3C DID-compliant documents registered on-chain. A complete threat model addressing harvest-now-decrypt-later attacks is presented, along with performance benchmarks demonstrating feasibility for high-frequency IAM operations in industrial and healthcare critical infrastructure environments.',
      keywords: ['Post-Quantum Cryptography', 'Blockchain IAM', 'CRYSTALS-Dilithium3', 'CRYSTALS-Kyber768', 'Critical Infrastructure', 'Decentralized Identity', 'NIST FIPS 203/204'],
    },
    {
      title: 'Continuous Compliance Monitoring with Real-Time Risk Quantification',
      venue: '7th International Conference on ICICV 2025',
      type: 'Conference', status: 'Accepted', statusColor: '#16a34a',
      auraColors: ['#16a34a', '#4ade80'],
      abstract: 'This paper presents a continuous compliance monitoring framework that integrates real-time risk quantification for enterprise and critical infrastructure environments. Traditional compliance monitoring approaches rely on periodic audits and static rule evaluation, creating windows of vulnerability between assessment cycles. The proposed system employs streaming analytics over event-driven compliance telemetry, computing composite risk scores in real time using a weighted multi-factor model that accounts for asset criticality, threat intelligence feeds, and behavioral baseline deviations. The framework is evaluated on simulated enterprise environments demonstrating detection latency reductions of up to 73% compared to periodic audit baselines, with sub-second risk score updates enabling proactive compliance posture management.',
      keywords: ['Compliance Monitoring', 'Risk Quantification', 'Real-Time Analytics', 'Security Telemetry', 'Enterprise Security'],
    },
    {
      title: 'An Information Theory of Persistent Homology: Entropy, the Data Processing Inequality, and Rate-Distortion Bounds for Topological Features',
      venue: 'MDPI Mathematics',
      type: 'Journal', status: 'Minor Revision', statusColor: '#d97706',
      auraColors: ['#d97706', '#fbbf24'],
      authors: 'Deepalakshmi Perumalsamy, Caleb Gunalan, Rajermani Thinakaran',
      received: '16 March 2026', revised: '04 April 2026',
      abstract: 'Topological Data Analysis (TDA) captures multi-scale geometric features of data as persistence diagrams, yet no principled information-theoretic framework quantifies how much information those features carry, how efficiently they compress, or when they are informationally irreducible. We construct a measure-theoretic probability space over persistence diagram space using a Poisson-process reference measure, and define topological entropy (H-T), topological mutual information (I-T), and a topological rate-distortion function as the core objects of a new theory. Four theorems with full proofs establish finite stability, axiomatic uniqueness, a Topological Data Processing Inequality, and a Rate-Distortion Theorem with explicit Poisson-model closed-form formula.',
      keywords: ['Persistent Homology', 'Information Theory', 'Topological Entropy', 'Rate-Distortion Theory', 'Data Processing Inequality', 'Wasserstein Distance'],
    },
    {
      title: 'Defending the Present Against the Future: A Hybrid QKD and PQC Framework for Critical Infrastructure Against HNDL Threats',
      venue: '4th Intl. Conf. on Data Science and Network Engineering (NIT Agartala)',
      type: 'Conference', status: 'Under Review', statusColor: '#2563eb',
      auraColors: ['#2563eb', '#60a5fa'],
      abstract: 'The harvest-now-decrypt-later (HNDL) attack paradigm represents an existential threat to long-lived sensitive data: adversaries exfiltrate ciphertext today with the intent to decrypt it once cryptographically-relevant quantum computers become available. This paper proposes a hybrid defensive framework that combines quantum key distribution (QKD) for forward-secret key establishment on fiber-connected infrastructure segments with NIST-standardized post-quantum cryptographic algorithms for software-based endpoints where QKD deployment is infeasible. The framework includes a threat model specifically calibrated to critical infrastructure timelines, a key lifecycle management protocol that transitions from hybrid to fully post-quantum as QKD coverage expands, and a formal analysis of the security reduction from HNDL resistance to the hardness of the Module Learning With Errors problem.',
      keywords: ['Harvest-Now-Decrypt-Later', 'Post-Quantum Cryptography', 'Quantum Key Distribution', 'Critical Infrastructure', 'MLWE', 'Hybrid Cryptography'],
    },
    {
      title: 'Structured Causal Geometry for Invariant Knowledge Extraction',
      venue: 'MDPI Machine Learning and Knowledge Extraction',
      type: 'Journal', status: 'Submission Pending', statusColor: '#7c3aed',
      auraColors: ['#7c3aed', '#a855f7'],
      abstract: 'Distribution shift — the divergence between training and deployment data distributions — remains a fundamental obstacle to reliable machine learning in real-world settings. This paper develops a principled geometric framework for invariant representation learning that integrates three complementary mathematical tools: a causal geometric bottleneck that constrains learned representations to causally sufficient features using information-geometric projection onto the causal submanifold; geodesic natural gradient optimization that follows the Riemannian geometry of the statistical manifold; and a Wasserstein barycenter characterisation that provides a principled definition of the invariant feature distribution.',
      keywords: ['Distribution Shift', 'Causal Inference', 'Information Geometry', 'Wasserstein Distance', 'Natural Gradient', 'Invariant Learning'],
    },
  ];

  const bookChapter: Publication = {
    title: 'Implementation Security and Side-Channel Resistance in Post-Quantum Cryptography',
    venue: 'IGI Global Scientific Publishing',
    series: 'Quantum Computing Innovations for Secure Communications and Digital Trust',
    type: 'Book Chapter', status: 'Accepted', statusColor: '#16a34a',
    auraColors: ['#b45309', '#fcd34d'],
    abstract: 'The transition to post-quantum cryptographic standards introduces not only new mathematical hardness assumptions but also new implementation attack surfaces. This chapter examines the practical security challenges arising in the deployment of NIST-standardized post-quantum algorithms — specifically CRYSTALS-Kyber (ML-KEM) and CRYSTALS-Dilithium (ML-DSA) — with a focus on side-channel resistance. We survey known timing, power analysis, and fault injection attacks against lattice-based implementations, analyze the countermeasures recommended by the NIST standardization documentation and subsequent research, and provide implementation guidance for developers deploying these algorithms in hardware-constrained and security-critical environments.',
    keywords: ['Post-Quantum Cryptography', 'Side-Channel Attacks', 'Implementation Security', 'CRYSTALS-Dilithium', 'CRYSTALS-Kyber', 'Lattice Cryptography', 'Hardware Security'],
  };

  return (
    <section data-auto-animate data-transition="slide" className="slide-dense-content">
      <h2 style={{ fontSize: '1em' }}>Publications &amp; Research Contributions</h2>

      {/* Stat badges */}
      <div className="fragment" style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '6px', marginBottom: '10px' }}>
        {['5 Research Papers', '1 Book Chapter', '3 Venues', 'PQC', 'Blockchain IAM', 'Information Theory', 'Causal ML'].map((s) => (
          <span key={s} className="pres-badge" style={{ fontSize: '0.38em' }}>{s}</span>
        ))}
      </div>

      {/* Paper cards row */}
      <div className="fragment" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
        {papers.map((p) => (
          <AuraCard key={p.title} pub={p} onClick={() => setModalPub(p)} />
        ))}
      </div>

      {/* Book chapter */}
      <div className="fragment" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <div style={{ width: '50%' }}>
          <AuraCard pub={bookChapter} onClick={() => setModalPub(bookChapter)} />
        </div>
      </div>

      {/* Hint */}
      <p className="fragment" style={{ fontSize: '0.4em', color: '#475569', textAlign: 'center', marginTop: '8px', fontStyle: 'italic' }}>
        ↑ Click any publication to read the full abstract
      </p>

      {modalPub && <PubModal pub={modalPub} onClose={() => setModalPub(null)} />}
      <aside className="notes">Six publications: 5 papers + 1 book chapter. Click any to view full abstract in a modal overlay.</aside>
    </section>
  );
}
