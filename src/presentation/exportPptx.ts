import PptxGenJS from 'pptxgenjs';

const BG = '0A0F1E';
const TEAL = '00D4FF';
const VIOLET = '7C3AED';
const TEXT = 'E2E8F0';
const MUTED = '94A3B8';
const DANGER = 'DC2626';
const SUCCESS = '16A34A';
const WARNING = 'F59E0B';
const CARD_BG = '0F172A';

type Slide = PptxGenJS.Slide;

function addSlideNumber(slide: Slide, num: number) {
  slide.addText(`${num} / 30`, { x: 8.5, y: 6.8, w: 1.2, h: 0.3, fontSize: 8, color: MUTED, align: 'right', fontFace: 'Courier New' });
}

function addHeading(slide: Slide, text: string, opts?: Partial<PptxGenJS.TextPropsOptions>) {
  slide.addText(text, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, color: TEXT, bold: true, fontFace: 'Arial', ...opts });
}

function addCard(slide: Slide, x: number, y: number, w: number, h: number, borderColor = TEAL) {
  slide.addShape('rect' as any, { x, y, w, h, fill: { color: CARD_BG }, line: { color: borderColor, width: 1 }, rectRadius: 0.1 });
}

export async function exportToPptx() {
  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_WIDE';
  pptx.author = 'Caleb Gunalan';
  pptx.title = 'HelixID — Blockchain-based Quantum-Resistant IAM';

  // Slide 1: Title
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    s.addText('HelixID', { x: 1, y: 1.8, w: 8, h: 1.5, fontSize: 54, color: TEAL, bold: true, align: 'center', fontFace: 'Arial' });
    s.addText('Blockchain-based Quantum-Resistant Identity and\nAccess Management for Healthcare', { x: 1.5, y: 3.3, w: 7, h: 0.8, fontSize: 16, color: MUTED, align: 'center', fontFace: 'Arial' });
    s.addText('Caleb Gunalan · Department of Computer Science\n\nGuided by · Dr. P. Deepalakshmi', { x: 2, y: 4.8, w: 6, h: 0.8, fontSize: 11, color: '64748B', align: 'center', fontFace: 'Arial' });
    s.addText('April 2026', { x: 2, y: 5.6, w: 6, h: 0.4, fontSize: 10, color: '64748B', align: 'center', fontFace: 'Arial' });
    s.addText('Built with CRYSTALS-Dilithium3 · Kyber768 · SHA3-256', { x: 2, y: 6.2, w: 6, h: 0.3, fontSize: 9, color: TEAL, align: 'center', fontFace: 'Arial' });
    addSlideNumber(s, 1);
  }

  // Slide 2: Abstract
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addHeading(s, 'Abstract');
    addCard(s, 0.5, 1.1, 6, 5.2, TEAL);
    s.addText('HelixID is a blockchain-based, quantum-resistant Identity and Access Management (IAM) system designed for multi-institutional healthcare environments. The system addresses two converging threats: the inadequacy of centralized identity infrastructure in high-stakes medical data environments, and the impending vulnerability of classical cryptographic algorithms to quantum computing attacks. HelixID implements NIST-standardized post-quantum cryptographic algorithms — CRYSTALS-Dilithium3 (FIPS 204) for digital signatures and CRYSTALS-Kyber768 (FIPS 203) for key encapsulation — within a permissioned blockchain architecture to deliver tamper-proof identity lifecycle management, smart contract-enforced role-based access control, decentralized identity (DID) anchoring, and a cryptographically immutable audit trail.', {
      x: 0.7, y: 1.3, w: 5.6, h: 4.8, fontSize: 11, color: 'CBD5E1', fontFace: 'Arial', valign: 'top', lineSpacingMultiple: 1.5,
    });
    const keywords = ['Post-Quantum Cryptography', 'Decentralized Identity (W3C DID)', 'Permissioned Blockchain', 'Smart Contract RBAC'];
    keywords.forEach((kw, i) => {
      addCard(s, 6.8, 1.1 + i * 0.55, 2.8, 0.45, TEAL);
      s.addText(kw, { x: 6.9, y: 1.15 + i * 0.55, w: 2.6, h: 0.4, fontSize: 9, color: TEAL, fontFace: 'Arial', align: 'center' });
    });
    addSlideNumber(s, 2);
  }

  // Slide 3: Objectives
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addHeading(s, 'Project Objectives');
    const objs = [
      ['01', 'Quantum-Resistant Authentication'],
      ['02', 'Immutable Identity Audit Trail'],
      ['03', 'Decentralized Identity Anchoring'],
      ['04', 'Smart Contract Policy Enforcement'],
      ['05', 'Privacy-Preserving Credential Verification'],
      ['06', 'Complete IAM Feature Parity'],
    ];
    objs.forEach(([num, title], i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = 0.5 + col * 4.7;
      const y = 1.1 + row * 1.7;
      addCard(s, x, y, 4.4, 1.5);
      s.addText(num, { x: x + 0.15, y: y + 0.15, w: 0.5, h: 0.5, fontSize: 22, color: '1A3A5C', bold: true, fontFace: 'Arial' });
      s.addText(title, { x: x + 0.7, y: y + 0.15, w: 3.5, h: 0.4, fontSize: 13, color: TEAL, bold: true, fontFace: 'Arial' });
    });
    addSlideNumber(s, 3);
  }

  // Slide 4: Stakes
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    s.addText('01', { x: 7, y: 1, w: 2.5, h: 3, fontSize: 120, color: '0D1520', bold: true, fontFace: 'Arial' });
    s.addText('The Threat Landscape', { x: 0.5, y: 0.5, w: 6, h: 0.5, fontSize: 14, color: MUTED, fontFace: 'Arial', italic: true });
    s.addText('"By 2031, RSA-2048 encryption — protecting 90% of today\'s digital infrastructure — will be breakable by quantum computers."', {
      x: 0.5, y: 1.5, w: 7, h: 1.2, fontSize: 20, color: TEAL, bold: true, fontFace: 'Arial', lineSpacingMultiple: 1.3,
    });
    s.addText('— NIST Post-Quantum Cryptography Project, 2024', { x: 0.5, y: 2.8, w: 5, h: 0.3, fontSize: 9, color: MUTED, italic: true, fontFace: 'Arial' });
    addSlideNumber(s, 4);
  }

  // Slide 5: Harvest Now
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addHeading(s, 'The Attack That Is Already Happening');
    s.addShape('rect' as any, { x: 0.5, y: 1.5, w: 9, h: 0.05, fill: { color: TEAL } });
    s.addText('TODAY — 2026', { x: 0.5, y: 1.8, w: 3, h: 0.4, fontSize: 11, color: TEAL, bold: true, fontFace: 'Arial' });
    s.addText('← The "Harvest Now, Decrypt Later" Window →', { x: 3.5, y: 1.8, w: 3.5, h: 0.4, fontSize: 10, color: WARNING, bold: true, align: 'center', fontFace: 'Arial' });
    s.addText('2031+', { x: 7.5, y: 1.8, w: 2, h: 0.4, fontSize: 11, color: DANGER, bold: true, align: 'right', fontFace: 'Arial' });
    addCard(s, 0.5, 3.5, 9, 1.5, DANGER);
    s.addText('Patient medical records are legally retained for 50+ years. A record encrypted with RSA today is readable to a quantum-equipped adversary before that retention period ends. This is not a future problem. It is a present vulnerability.', {
      x: 0.7, y: 3.6, w: 8.6, h: 1.3, fontSize: 12, color: TEXT, fontFace: 'Arial', lineSpacingMultiple: 1.4,
    });
    addSlideNumber(s, 5);
  }

  // Slide 6: Why Healthcare
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addHeading(s, 'Healthcare: The Highest-Stakes Target');
    const cols = [
      ['⏳', 'Longest Data Lifespan', 'Medical records retained 25–50 years.'],
      ['🔒', 'Most Sensitive Data Category', 'Health data is legally the most protected class.'],
      ['🔗', 'Fragmented Identity Infrastructure', 'A patient\'s identity lives in 12 different databases.'],
    ];
    cols.forEach(([icon, title, text], i) => {
      const x = 0.5 + i * 3.1;
      addCard(s, x, 1.2, 2.8, 3.5);
      s.addText(icon, { x, y: 1.4, w: 2.8, h: 0.6, fontSize: 28, align: 'center', fontFace: 'Arial' });
      s.addText(title, { x: x + 0.2, y: 2.1, w: 2.4, h: 0.5, fontSize: 12, color: TEAL, bold: true, align: 'center', fontFace: 'Arial' });
      s.addText(text, { x: x + 0.2, y: 2.7, w: 2.4, h: 1.8, fontSize: 10, color: MUTED, fontFace: 'Arial', lineSpacingMultiple: 1.3 });
    });
    addSlideNumber(s, 6);
  }

  // Slide 7: Traditional Gap
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addHeading(s, 'What Traditional IAM Gets Wrong');
    const rows = [
      ['Centralized identity database', 'Decentralized Identity on blockchain'],
      ['Classical RSA/ECC encryption', 'CRYSTALS-Dilithium3 + Kyber768'],
      ['Database audit logs (mutable)', 'Immutable blockchain ledger'],
      ['Access policies in config files', 'Smart contract policies on-chain'],
      ['Credentials in central directory', 'Credentials as on-chain DID Documents'],
    ];
    s.addText('Traditional IAM', { x: 0.5, y: 1.1, w: 4, h: 0.4, fontSize: 13, color: DANGER, bold: true, fontFace: 'Arial' });
    s.addText('What HelixID Does', { x: 5.5, y: 1.1, w: 4, h: 0.4, fontSize: 13, color: TEAL, bold: true, fontFace: 'Arial' });
    rows.forEach(([old, helix], i) => {
      const y = 1.6 + i * 0.9;
      s.addText(old, { x: 0.5, y, w: 4, h: 0.7, fontSize: 10, color: MUTED, fontFace: 'Arial', valign: 'top' });
      s.addText('→', { x: 4.6, y, w: 0.5, h: 0.7, fontSize: 14, color: TEAL, align: 'center', fontFace: 'Arial' });
      s.addText(helix, { x: 5.3, y, w: 4.2, h: 0.7, fontSize: 10, color: 'CBD5E1', fontFace: 'Arial', valign: 'top' });
    });
    addSlideNumber(s, 7);
  }

  // Slide 8: Intro HelixID
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    s.addText('02', { x: 7, y: 1, w: 2.5, h: 3, fontSize: 120, color: '0D1520', bold: true, fontFace: 'Arial' });
    s.addText('The Solution', { x: 0.5, y: 0.5, w: 6, h: 0.5, fontSize: 14, color: MUTED, fontFace: 'Arial' });
    s.addText('HelixID', { x: 1, y: 2, w: 8, h: 1.2, fontSize: 48, color: TEAL, bold: true, align: 'center', fontFace: 'Arial' });
    s.addText('Post-Quantum Cryptographic Identity Management —\nBuilt on Blockchain. Built for Healthcare. Built for the Future.', {
      x: 1.5, y: 3.3, w: 7, h: 0.8, fontSize: 13, color: MUTED, align: 'center', fontFace: 'Arial', lineSpacingMultiple: 1.3,
    });
    addSlideNumber(s, 8);
  }

  // Slide 9: Literature Survey (section opener only for PPTX)
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addHeading(s, 'Literature Survey — The Research Foundation');
    const refs = [
      ['NIST FIPS 203 — Kyber768 Standard', '2024', 'Key encapsulation for session establishment'],
      ['NIST FIPS 204 — Dilithium3 Standard', '2024', 'Digital signatures for all transaction signing'],
      ['W3C DIDs v1.0', '2022', 'DID document structure and resolution'],
      ['Hyperledger Fabric v2.5', '2023', 'Permissioned blockchain model'],
      ['IEEE Access — Blockchain IAM Survey', '2018', 'Taxonomy of blockchain IAM architectures'],
      ['Journal of Medical Systems — PQC for Healthcare', '2023', 'Lattice-based crypto feasibility in healthcare'],
      ['ENISA — Harvest Now, Decrypt Later', '2023', 'Threat model and timeline analysis'],
    ];
    refs.forEach(([ref, year, contrib], i) => {
      const y = 1.2 + i * 0.72;
      s.addText(ref, { x: 0.5, y, w: 4, h: 0.6, fontSize: 9, color: 'CBD5E1', fontFace: 'Arial', valign: 'top' });
      s.addText(year, { x: 4.6, y, w: 0.6, h: 0.6, fontSize: 9, color: MUTED, fontFace: 'Arial' });
      s.addText(contrib, { x: 5.3, y, w: 4.2, h: 0.6, fontSize: 9, color: MUTED, fontFace: 'Arial', valign: 'top' });
    });
    addSlideNumber(s, 9);
  }

  // Slide 10: Problem Statement
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addHeading(s, 'Problem Statement');
    const paras = [
      '1. Contemporary IAM systems rely on centralized identity directories and classical cryptographic primitives that are vulnerable to quantum attacks. Healthcare records with 25–50 year retention are uniquely exposed.',
      '2. Existing blockchain-based IAM proposals retain classical cryptographic schemes (ECDSA, SHA-256) that are quantum-vulnerable. A quantum-vulnerable blockchain is not a quantum-resistant system.',
      '3. No existing system integrates NIST-standardized post-quantum primitives as the native mechanism within a permissioned blockchain IAM architecture for healthcare.',
    ];
    paras.forEach((p, i) => {
      s.addText(p, { x: 0.5, y: 1.2 + i * 1.6, w: 9, h: 1.4, fontSize: 11, color: 'CBD5E1', fontFace: 'Arial', lineSpacingMultiple: 1.5, valign: 'top' });
    });
    addCard(s, 0.5, 5.8, 9, 0.7, TEAL);
    s.addText('HelixID is designed to solve all three of these problems within a single, unified architectural framework.', {
      x: 0.7, y: 5.9, w: 8.6, h: 0.5, fontSize: 11, color: TEAL, bold: true, fontFace: 'Arial',
    });
    addSlideNumber(s, 10);
  }

  // Slide 11: Tech Stack
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addHeading(s, 'Technology Stack');
    const layers = [
      ['Cryptographic Primitives', VIOLET, 'Dilithium3, Kyber768, SHA3-256, Groth16 zk-SNARKs'],
      ['Blockchain Infrastructure', TEAL, 'Hyperledger Fabric 2.5 / In-Browser Engine, PBFT Consensus'],
      ['Identity and Policy', '3B82F6', 'W3C DID Core, Smart Contract RBAC, Credential Lifecycle'],
      ['Application', '64748B', 'React 18, TypeScript, Tailwind, Zustand, Reveal.js'],
    ];
    layers.forEach(([name, color, items], i) => {
      const y = 1.2 + i * 1.3;
      addCard(s, 0.5, y, 9, 1.1, color);
      s.addShape('rect' as any, { x: 0.5, y, w: 0.08, h: 1.1, fill: { color } });
      s.addText(name, { x: 0.8, y: y + 0.05, w: 3, h: 0.4, fontSize: 12, color, bold: true, fontFace: 'Arial' });
      s.addText(items, { x: 0.8, y: y + 0.45, w: 8.5, h: 0.5, fontSize: 9, color: MUTED, fontFace: 'Arial' });
    });
    addSlideNumber(s, 11);
  }

  // Slide 12: Architecture
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addHeading(s, 'Architecture at a Glance');
    // Identity Layer
    s.addText('IDENTITY LAYER', { x: 3, y: 1.1, w: 4, h: 0.3, fontSize: 10, color: MUTED, align: 'center', fontFace: 'Arial', bold: true });
    ['Patient DID', 'Staff DID', 'Moderator DID', 'Admin DID'].forEach((did, i) => {
      const x = 1 + i * 2.2;
      addCard(s, x, 1.5, 1.8, 0.5, TEAL);
      s.addText(did, { x, y: 1.55, w: 1.8, h: 0.4, fontSize: 9, color: TEXT, align: 'center', fontFace: 'Arial' });
    });
    // Security Layer
    s.addText('SECURITY LAYER', { x: 3, y: 2.5, w: 4, h: 0.3, fontSize: 10, color: TEAL, align: 'center', fontFace: 'Arial', bold: true });
    ['Kyber768 Auth', 'Dilithium Verification', 'Smart Contract RBAC'].forEach((item, i) => {
      const x = 0.8 + i * 3.1;
      addCard(s, x, 2.9, 2.8, 0.7, TEAL);
      s.addText(item, { x, y: 3, w: 2.8, h: 0.5, fontSize: 10, color: TEXT, align: 'center', fontFace: 'Arial', bold: true });
    });
    // Infrastructure Layer
    s.addText('INFRASTRUCTURE LAYER', { x: 3, y: 4.2, w: 4, h: 0.3, fontSize: 10, color: MUTED, align: 'center', fontFace: 'Arial', bold: true });
    addCard(s, 1.5, 4.6, 3.5, 0.7, VIOLET);
    s.addText('Permissioned Blockchain Ledger', { x: 1.5, y: 4.7, w: 3.5, h: 0.5, fontSize: 10, color: TEXT, align: 'center', fontFace: 'Arial' });
    addCard(s, 5.5, 4.6, 2.5, 0.7, VIOLET);
    s.addText('EHR Resources', { x: 5.5, y: 4.7, w: 2.5, h: 0.5, fontSize: 10, color: TEXT, align: 'center', fontFace: 'Arial' });
    s.addText('Every arrow represents a cryptographically signed, blockchain-recorded event.', { x: 1, y: 5.8, w: 8, h: 0.3, fontSize: 9, color: MUTED, italic: true, align: 'center', fontFace: 'Arial' });
    addSlideNumber(s, 12);
  }

  // Slide 13: Post-Quantum
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addHeading(s, 'Why Classical Encryption Fails');
    addCard(s, 0.5, 1.2, 4.2, 3.5, DANGER);
    s.addText('🔓 RSA-2048', { x: 0.7, y: 1.4, w: 3.8, h: 0.5, fontSize: 16, color: DANGER, bold: true, align: 'center', fontFace: 'Arial' });
    s.addText('Security based on integer factorization.\nShor\'s algorithm solves this in polynomial time.', { x: 0.7, y: 2, w: 3.8, h: 1, fontSize: 10, color: MUTED, align: 'center', fontFace: 'Arial', lineSpacingMultiple: 1.3 });
    s.addText('Classical: O(eⁿ) → Quantum: O(n³)', { x: 1, y: 3.5, w: 3.2, h: 0.4, fontSize: 10, color: DANGER, align: 'center', fontFace: 'Courier New' });

    addCard(s, 5.3, 1.2, 4.2, 3.5, SUCCESS);
    s.addText('🔐 CRYSTALS-Dilithium3', { x: 5.5, y: 1.4, w: 3.8, h: 0.5, fontSize: 16, color: SUCCESS, bold: true, align: 'center', fontFace: 'Arial' });
    s.addText('Security based on Module Learning With Errors.\nNo known quantum algorithm provides advantage.', { x: 5.5, y: 2, w: 3.8, h: 1, fontSize: 10, color: MUTED, align: 'center', fontFace: 'Arial', lineSpacingMultiple: 1.3 });
    s.addText('Classical: O(eⁿ) → Quantum: O(eⁿ)', { x: 5.8, y: 3.5, w: 3.2, h: 0.4, fontSize: 10, color: SUCCESS, align: 'center', fontFace: 'Courier New' });
    addSlideNumber(s, 13);
  }

  // Slide 14: DID
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addHeading(s, 'Every Identity Lives on the Blockchain');
    addCard(s, 0.5, 1.2, 4.2, 4, TEAL);
    s.addText('DID Document', { x: 0.7, y: 1.3, w: 3.8, h: 0.3, fontSize: 10, color: MUTED, fontFace: 'Arial' });
    const didLines = [
      'DID: did:helix:0x4a3f9c2d8b1e...',
      'Public Key: [Dilithium3 — 1,952 bytes]',
      'Issued Block: #12,441',
      'Credential Hash: SHA3-256: 0x7c2f9a4d...',
      'Status: ● ACTIVE',
    ];
    didLines.forEach((line, i) => {
      s.addText(line, { x: 0.7, y: 1.7 + i * 0.5, w: 3.8, h: 0.4, fontSize: 9, color: i === 0 ? TEAL : 'CBD5E1', fontFace: 'Courier New' });
    });
    const benefits = ['No central database', 'Self-sovereign', 'Portable'];
    benefits.forEach((b, i) => {
      s.addText(b, { x: 5.3, y: 1.3 + i * 1.2, w: 4, h: 0.4, fontSize: 13, color: TEAL, bold: true, fontFace: 'Arial' });
    });
    addSlideNumber(s, 14);
  }

  // Slide 15: Blockchain
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addHeading(s, 'An Audit Trail That Cannot Lie');
    const blocks = [
      { num: '14,841', hash: '0x9f3a...', prev: '0x7d1b...' },
      { num: '14,842', hash: '0x4c2d...', prev: '0x9f3a...' },
      { num: '14,843', hash: '0x7b1e...', prev: '0x4c2d...' },
    ];
    blocks.forEach((b, i) => {
      const x = 0.5 + i * 3.2;
      addCard(s, x, 1.3, 2.8, 2);
      s.addText(`Block #${b.num}`, { x: x + 0.15, y: 1.4, w: 2.5, h: 0.4, fontSize: 12, color: TEAL, bold: true, fontFace: 'Arial' });
      s.addText(`Hash: ${b.hash}`, { x: x + 0.15, y: 1.85, w: 2.5, h: 0.3, fontSize: 9, color: TEAL, fontFace: 'Courier New' });
      s.addText(`Prev: ${b.prev}`, { x: x + 0.15, y: 2.2, w: 2.5, h: 0.3, fontSize: 9, color: MUTED, fontFace: 'Courier New' });
    });
    s.addText('Changing any transaction invalidates the entire chain — detectable instantly.', {
      x: 0.5, y: 4, w: 9, h: 0.5, fontSize: 11, color: MUTED, fontFace: 'Arial', lineSpacingMultiple: 1.4,
    });
    addSlideNumber(s, 15);
  }

  // Slide 16: Smart Contract
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addHeading(s, 'Access Policies That Enforce Themselves');
    addCard(s, 0.5, 1.2, 6, 3, TEAL);
    s.addText(`POLICY RULE #3 — Contract: 0x8c2f4a7d...\n─────────────────────────────────────\nIF   role        == "hospital_staff"\nAND  department  == "cardiology"\nAND  patient.consent == true\nTHEN ALLOW access TO cardiology_records\nWITH level "read-write"\nFOR  DURATION 72 hours\n─────────────────────────────────────\nDeployed: Block #13,201 | By: DID:0x1c6b...`, {
      x: 0.7, y: 1.4, w: 5.6, h: 2.6, fontSize: 9, color: MUTED, fontFace: 'Courier New', lineSpacingMultiple: 1.3, valign: 'top',
    });
    const points = ['Rules live on-chain', 'Every access decision logs', 'New policies require Dilithium signature'];
    points.forEach((p, i) => {
      s.addText(`● ${p}`, { x: 0.5, y: 4.5 + i * 0.5, w: 9, h: 0.4, fontSize: 11, color: 'CBD5E1', fontFace: 'Arial' });
    });
    addSlideNumber(s, 16);
  }

  // Slide 17: ZKP
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addHeading(s, 'Prove What You Know Without Revealing It');
    const steps = [
      ['👨‍⚕️ Doctor from External Hospital', '"I need to prove I\'m a licensed physician"', '64748B'],
      ['ZKP Engine — Groth16 zk-SNARK', 'Generates proof π WITHOUT transmitting credential', VIOLET],
      ['HelixID Verifier', '"Credential: VALID ✓" — without knowing personal data', SUCCESS],
    ];
    steps.forEach(([title, detail, color], i) => {
      const y = 1.2 + i * 1.6;
      addCard(s, 2, y, 6, 1.2, color);
      s.addText(title, { x: 2.2, y: y + 0.1, w: 5.6, h: 0.4, fontSize: 12, color, bold: true, align: 'center', fontFace: 'Arial' });
      s.addText(detail, { x: 2.2, y: y + 0.55, w: 5.6, h: 0.4, fontSize: 9, color: MUTED, align: 'center', fontFace: 'Arial' });
    });
    addSlideNumber(s, 17);
  }

  // Slide 18: Four Actors
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    s.addText('03', { x: 7, y: 1, w: 2.5, h: 3, fontSize: 120, color: '0D1520', bold: true, fontFace: 'Arial' });
    s.addText('The System in Action', { x: 0.5, y: 0.5, w: 6, h: 0.5, fontSize: 14, color: TEAL, fontFace: 'Arial' });
    const actors = [
      ['🏥', 'Patient', '3B82F6', 'Owns identity. Controls data consent. ZKP credential proofs.'],
      ['👨‍⚕️', 'Hospital Staff', TEAL, 'Requests access via smart contracts. Emergency override.'],
      ['👩‍💼', 'Department Head', WARNING, 'Approves access. Policy governance. Audit visibility.'],
      ['🔐', 'IT Admin', VIOLET, 'Identity lifecycle. Blockchain explorer. Smart contract deployment.'],
    ];
    actors.forEach(([icon, role, color, desc], i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = 0.5 + col * 4.7;
      const y = 1.3 + row * 2.3;
      addCard(s, x, y, 4.4, 2, color);
      s.addText(`${icon} ${role}`, { x: x + 0.2, y: y + 0.15, w: 4, h: 0.5, fontSize: 14, color, bold: true, fontFace: 'Arial' });
      s.addText(desc, { x: x + 0.2, y: y + 0.7, w: 4, h: 1, fontSize: 10, color: MUTED, fontFace: 'Arial', lineSpacingMultiple: 1.3, valign: 'top' });
    });
    addSlideNumber(s, 18);
  }

  // Slide 19: Feature Map
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addHeading(s, 'Complete IAM Feature Coverage');
    const features = [
      ['Authentication', 'All roles', 'LOGIN_SUCCESS / LOGIN_FAILED', 'Kyber768 + Dilithium MFA'],
      ['Identity Issuance', 'Admin', 'IDENTITY_REGISTERED', 'Dilithium key pair + DID'],
      ['Credential Lifecycle', 'Admin/Mod', 'CREDENTIAL_ISSUED / REVOKED', 'Dilithium-signed TX'],
      ['RBAC', 'Contract', 'ACCESS_GRANTED / DENIED', 'Contract address on-chain'],
      ['Access Request', 'Staff→Mod', 'ACCESS_REQUESTED', 'Dilithium-signed approval'],
      ['Delegation', 'Staff', 'CREDENTIAL_DELEGATED', 'Delegator\'s Dilithium sig'],
      ['Break-Glass', 'Staff', 'EMERGENCY_ACCESS', 'Permanent on-chain record'],
      ['ZKP Proof', 'Patient/Staff', 'ZKP_PROOF_GENERATED', 'Groth16 proof structure'],
      ['Session Mgmt', 'All roles', 'SESSION_EXPIRED', 'Kyber-derived session token'],
      ['Consent Mgmt', 'Patient', 'CONSENT_UPDATED', 'Patient\'s Dilithium sig'],
    ];
    const headers = ['Feature', 'Actor', 'Blockchain Event', 'Quantum Protection'];
    headers.forEach((h, i) => {
      const xs = [0.5, 2.6, 4.2, 7];
      const ws = [2, 1.5, 2.7, 2.8];
      s.addText(h, { x: xs[i], y: 1.1, w: ws[i], h: 0.4, fontSize: 9, color: TEAL, bold: true, fontFace: 'Arial' });
    });
    features.forEach((row, i) => {
      const y = 1.55 + i * 0.48;
      const xs = [0.5, 2.6, 4.2, 7];
      const ws = [2, 1.5, 2.7, 2.8];
      row.forEach((cell, j) => {
        s.addText(cell, { x: xs[j], y, w: ws[j], h: 0.4, fontSize: 8, color: j === 0 ? 'CBD5E1' : MUTED, fontFace: j === 2 ? 'Courier New' : 'Arial' });
      });
    });
    addSlideNumber(s, 19);
  }

  // Slide 20: Demo Auth
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addHeading(s, 'Demo: Quantum-Safe Login');
    const steps = [
      ['User Clicks Login', '64748B'],
      ['Kyber768 Key Encapsulation Handshake', VIOLET],
      ['Dilithium MFA Challenge-Response', TEAL],
      ['Session Token Created', SUCCESS],
    ];
    steps.forEach(([step, color], i) => {
      s.addShape('rect' as any, { x: 0.5, y: 1.3 + i * 1.2, w: 0.06, h: 0.9, fill: { color } });
      s.addText(step, { x: 0.8, y: 1.3 + i * 1.2, w: 5, h: 0.4, fontSize: 12, color, bold: true, fontFace: 'Arial' });
    });
    addCard(s, 6, 1.3, 3.5, 3, TEAL);
    s.addText('MFA Verification Modal', { x: 6.2, y: 1.5, w: 3.1, h: 0.3, fontSize: 9, color: MUTED, align: 'center', fontFace: 'Arial' });
    s.addText('Nonce: 0xa7c3f2...\nSigning with Dilithium3...\n✓ Signature Verified', { x: 6.2, y: 2, w: 3.1, h: 1.2, fontSize: 9, color: 'CBD5E1', fontFace: 'Courier New', lineSpacingMultiple: 1.5 });
    s.addText('TX: 0x9f3a... | Block #14,856', { x: 6.2, y: 3.4, w: 3.1, h: 0.3, fontSize: 8, color: MUTED, align: 'center', fontFace: 'Courier New' });
    addSlideNumber(s, 20);
  }

  // Slide 21: Demo Access
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addHeading(s, 'Demo: Smart Contract Access Enforcement');
    const panels = [
      ['1. Dr. Okafor Requests', TEAL, 'Request signed with Dilithium key.\nTransaction broadcast to blockchain.'],
      ['2. Dr. Nair Reviews', WARNING, 'Department Head approves.\nSmart contract called.'],
      ['3. Access Granted On-Chain', SUCCESS, 'Event: ACCESS_GRANTED\nBlock #14,852'],
    ];
    panels.forEach(([title, color, text], i) => {
      const x = 0.5 + i * 3.2;
      addCard(s, x, 1.2, 2.9, 3.5, color);
      s.addText(title, { x: x + 0.15, y: 1.3, w: 2.6, h: 0.4, fontSize: 11, color, bold: true, fontFace: 'Arial' });
      s.addText(text, { x: x + 0.15, y: 2, w: 2.6, h: 2, fontSize: 9, color: MUTED, fontFace: 'Arial', lineSpacingMultiple: 1.3, valign: 'top' });
    });
    addSlideNumber(s, 21);
  }

  // Slide 22: Demo Tamper
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addHeading(s, 'Demo: Why the Audit Trail Cannot Be Falsified');
    addCard(s, 0.5, 1.2, 4.4, 3.5, SUCCESS);
    s.addText('Before Tampering', { x: 0.7, y: 1.3, w: 4, h: 0.4, fontSize: 13, color: SUCCESS, bold: true, fontFace: 'Arial' });
    s.addText('Block #14,841\nHash: 0x9f3a2c8d...\n● VALID', { x: 0.7, y: 1.9, w: 4, h: 1.5, fontSize: 10, color: 'CBD5E1', fontFace: 'Courier New', lineSpacingMultiple: 1.5 });

    addCard(s, 5.3, 1.2, 4.4, 3.5, DANGER);
    s.addText('After Attacker Modifies Record', { x: 5.5, y: 1.3, w: 4, h: 0.4, fontSize: 13, color: DANGER, bold: true, fontFace: 'Arial' });
    s.addText('Block #14,841\nHash: 0xf72b9d1a...\n✗ TAMPERED — DETECTED\n\nBlock #14,842\n✗ CHAIN BROKEN', { x: 5.5, y: 1.9, w: 4, h: 2.5, fontSize: 10, color: DANGER, fontFace: 'Courier New', lineSpacingMultiple: 1.4 });

    s.addText('The SHA3-256 hashing is mathematically real in the demo — not a simulation.', {
      x: 0.5, y: 5.2, w: 9, h: 0.5, fontSize: 11, color: TEAL, bold: true, fontFace: 'Arial',
    });
    addSlideNumber(s, 22);
  }

  // Slide 23: Demo Emergency
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addHeading(s, 'Demo: Break-Glass with Full Accountability');
    s.addText('The Problem', { x: 0.5, y: 1.2, w: 4, h: 0.4, fontSize: 13, color: DANGER, bold: true, fontFace: 'Arial' });
    s.addText('In emergencies, rigid access control can cost lives. Traditional IAM uses admin backdoors that leave no trace.', {
      x: 0.5, y: 1.7, w: 4, h: 1.5, fontSize: 10, color: MUTED, fontFace: 'Arial', lineSpacingMultiple: 1.4, valign: 'top',
    });
    s.addText('How HelixID Handles It', { x: 5.3, y: 1.2, w: 4, h: 0.4, fontSize: 13, color: TEAL, bold: true, fontFace: 'Arial' });
    const steps = ['Emergency occurs', 'Staff invokes Break-Glass override', 'EMERGENCY_ACCESS_INVOKED transaction (permanent)', 'Immediate alert to all Admins', 'Access Granted Immediately'];
    steps.forEach((step, i) => {
      s.addText(`● ${step}`, { x: 5.3, y: 1.7 + i * 0.55, w: 4.2, h: 0.45, fontSize: 9, color: 'CBD5E1', fontFace: 'Arial' });
    });
    addCard(s, 0.5, 5, 9, 0.8, TEAL);
    s.addText('HelixID makes emergency access inevitable, immediate, and permanently accountable.', {
      x: 0.7, y: 5.1, w: 8.6, h: 0.6, fontSize: 11, color: TEAL, bold: true, fontFace: 'Arial',
    });
    addSlideNumber(s, 23);
  }

  // Slide 24: Implementation
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addHeading(s, 'How the System Was Built');
    addCard(s, 0.5, 1.2, 4.5, 4.5);
    s.addText(`src/\n├── lib/\n│   ├── crypto.ts     ← Dilithium + Kyber\n│   ├── blockchain.ts ← SHA3-256 blocks\n│   ├── contracts.ts  ← Smart contract\n│   └── did.ts        ← DID generation\n├── store/\n│   ├── cryptoStore.ts\n│   ├── blockchainStore.ts\n│   └── authStore.ts\n├── pages/\n│   ├── Patient.tsx\n│   ├── Staff.tsx\n│   ├── Moderator.tsx\n│   └── Admin.tsx\n└── presentation/`, {
      x: 0.7, y: 1.4, w: 4.1, h: 4.1, fontSize: 8, color: 'CBD5E1', fontFace: 'Courier New', lineSpacingMultiple: 1.3, valign: 'top',
    });
    const modules = [
      ['crypto.ts', 'Real post-quantum operations using noble-post-quantum.'],
      ['blockchain.ts', 'Genuine SHA3-256 block hashing. Real Merkle tree computation.'],
      ['contracts.ts', 'Policy evaluation engine mirroring Hyperledger Chaincode.'],
    ];
    modules.forEach(([name, desc], i) => {
      const y = 1.3 + i * 1.4;
      addCard(s, 5.3, y, 4.2, 1.2, TEAL);
      s.addText(name, { x: 5.5, y: y + 0.1, w: 3.8, h: 0.3, fontSize: 10, color: TEAL, bold: true, fontFace: 'Courier New' });
      s.addText(desc, { x: 5.5, y: y + 0.45, w: 3.8, h: 0.6, fontSize: 9, color: MUTED, fontFace: 'Arial', lineSpacingMultiple: 1.3 });
    });
    addSlideNumber(s, 24);
  }

  // Slide 25: Real vs Simulated
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addHeading(s, 'Technical Transparency — What Is Real');
    addCard(s, 0.5, 1.2, 4.4, 4.5, TEAL);
    s.addText('🔐 Cryptographically Real', { x: 0.7, y: 1.3, w: 4, h: 0.4, fontSize: 12, color: TEAL, bold: true, fontFace: 'Arial' });
    const realItems = ['SHA3-256 block hashes', 'Dilithium3 key pairs & signing', 'Kyber768 key encapsulation', 'DID computation from public keys', 'Blockchain chain validation', 'Merkle tree construction'];
    realItems.forEach((item, i) => {
      s.addText(`✓ ${item}`, { x: 0.7, y: 1.8 + i * 0.55, w: 4, h: 0.45, fontSize: 9, color: 'CBD5E1', fontFace: 'Arial' });
    });

    addCard(s, 5.3, 1.2, 4.4, 4.5, '64748B');
    s.addText('⚙ Infrastructure Simulated', { x: 5.5, y: 1.3, w: 4, h: 0.4, fontSize: 12, color: MUTED, bold: true, fontFace: 'Arial' });
    const simItems = ['Distributed network (single node)', 'EVM execution (JS policy engine)', 'Groth16 ZKP (structural sim)', 'PBFT consensus (no network)', 'Multi-hospital DID resolution'];
    simItems.forEach((item, i) => {
      s.addText(`○ ${item}`, { x: 5.5, y: 1.8 + i * 0.55, w: 4, h: 0.45, fontSize: 9, color: MUTED, fontFace: 'Arial' });
    });
    addSlideNumber(s, 25);
  }

  // Slide 26: Quantum Timeline
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addHeading(s, 'Why This Had to Be Built Now');
    s.addShape('rect' as any, { x: 0.5, y: 2.5, w: 9, h: 0.06, fill: { color: TEAL } });
    const markers = [
      ['2024', 'NIST finalizes\nFIPS 203/204', TEAL],
      ['2026', 'HelixID deployed\n📍 YOU ARE HERE', SUCCESS],
      ['2027', 'IBM: 100K+ qubits', WARNING],
      ['2030', 'Fault-tolerant QC', WARNING],
      ['2031', 'RSA-2048 vulnerable', DANGER],
      ['2033', 'ECC-256 vulnerable', DANGER],
    ];
    markers.forEach(([year, label, color], i) => {
      const x = 0.5 + i * 1.6;
      s.addText(year, { x, y: 2.7, w: 1.4, h: 0.4, fontSize: 11, color, bold: true, align: 'center', fontFace: 'Arial' });
      s.addText(label, { x, y: 3.1, w: 1.4, h: 0.8, fontSize: 8, color: MUTED, align: 'center', fontFace: 'Arial', lineSpacingMultiple: 1.2 });
    });
    s.addText('Building quantum-resistant IAM in 2031 means 10+ years of records are already compromised.\nBuilding it in 2026 means none are.', {
      x: 1, y: 4.8, w: 8, h: 0.8, fontSize: 13, color: TEAL, bold: true, align: 'center', fontFace: 'Arial', lineSpacingMultiple: 1.3,
    });
    addSlideNumber(s, 26);
  }

  // Slide 27: Achievements
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addHeading(s, 'What This Project Delivers');
    const achievements = [
      ['⚛', 'First Post-Quantum IAM for Healthcare'],
      ['⛓', 'Genuinely Functional Blockchain'],
      ['🪪', 'W3C-Compliant Decentralized Identity'],
      ['📋', 'On-Chain Smart Contract RBAC'],
      ['🔬', 'Interactive Tamper Demonstration'],
      ['🔑', 'Complete IAM Feature Coverage'],
    ];
    achievements.forEach(([icon, title], i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = 0.5 + col * 4.7;
      const y = 1.2 + row * 1.6;
      addCard(s, x, y, 4.4, 1.3);
      s.addText(`${icon}  ${title}`, { x: x + 0.2, y: y + 0.2, w: 4, h: 0.5, fontSize: 12, color: TEAL, bold: true, fontFace: 'Arial' });
    });
    addSlideNumber(s, 27);
  }

  // Slide 28: Architecture Decisions
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addHeading(s, 'Why These Specific Technology Choices');
    const qas = [
      ['Why Hyperledger Fabric (permissioned)?', 'Healthcare requires HIPAA-compliant access control over node participation. Permissioned blockchain restricts membership to authorized entities.'],
      ['Why Dilithium specifically?', 'Selected by NIST after 8-year evaluation as primary standard for digital signatures (FIPS 204). Best balance of signature size, key size, and performance.'],
      ['Why blockchain for audit?', 'A database log can be modified by an admin. A blockchain log requires compromising 67% of validators simultaneously — fundamentally different security.'],
    ];
    qas.forEach(([q, a], i) => {
      const y = 1.2 + i * 1.7;
      s.addText(q, { x: 0.5, y, w: 3.5, h: 1.2, fontSize: 11, color: TEAL, bold: true, fontFace: 'Arial', lineSpacingMultiple: 1.3, valign: 'top' });
      s.addShape('rect' as any, { x: 4.2, y, w: 0.04, h: 1.2, fill: { color: '1E3A5A' } });
      s.addText(a, { x: 4.5, y, w: 5, h: 1.4, fontSize: 10, color: MUTED, fontFace: 'Arial', lineSpacingMultiple: 1.3, valign: 'top' });
    });
    addSlideNumber(s, 28);
  }

  // Slide 29: Roadmap
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addHeading(s, 'Production Path Forward');
    const phases = [
      ['Phase 1', 'Infrastructure', 'Months 1–3', TEAL, 'Deploy Hyperledger Fabric\nReal zk-SNARK circuits\nHSM integration'],
      ['Phase 2', 'Integration', 'Months 4–8', VIOLET, 'EHR system connectors\nCross-hospital DID resolution\nMobile patient wallet'],
      ['Phase 3', 'Scale', 'Months 9–12', SUCCESS, 'Multi-hospital onboarding\nRegulatory compliance\nAnomaly detection'],
    ];
    phases.forEach(([phase, title, timeline, color, items], i) => {
      const x = 0.5 + i * 3.2;
      addCard(s, x, 1.2, 2.9, 4, color);
      s.addText(phase, { x: x + 0.15, y: 1.3, w: 2.6, h: 0.3, fontSize: 9, color, bold: true, fontFace: 'Arial' });
      s.addText(title, { x: x + 0.15, y: 1.6, w: 2.6, h: 0.4, fontSize: 14, color: TEXT, bold: true, fontFace: 'Arial' });
      s.addText(timeline, { x: x + 0.15, y: 2, w: 2.6, h: 0.3, fontSize: 9, color: MUTED, fontFace: 'Arial' });
      s.addText(items, { x: x + 0.15, y: 2.5, w: 2.6, h: 2.2, fontSize: 9, color: MUTED, fontFace: 'Arial', lineSpacingMultiple: 1.4, valign: 'top' });
    });
    s.addText('The cryptographic architecture requires zero changes for production. The transition is an infrastructure problem, not a security redesign.', {
      x: 0.5, y: 5.5, w: 9, h: 0.6, fontSize: 10, color: MUTED, italic: true, align: 'center', fontFace: 'Arial',
    });
    addSlideNumber(s, 29);
  }

  // Slide 30: Closing
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    s.addText('The records encrypted today will still exist in 2040.', {
      x: 1, y: 1.5, w: 8, h: 0.8, fontSize: 18, color: TEXT, align: 'center', fontFace: 'Arial', bold: true,
    });
    s.addText('The question is not whether to protect them from quantum attacks.\nThe question is whether you start before or after the breach.', {
      x: 1, y: 2.5, w: 8, h: 0.8, fontSize: 14, color: MUTED, align: 'center', fontFace: 'Arial', lineSpacingMultiple: 1.4,
    });
    s.addText('HelixID answers that question.', {
      x: 1, y: 3.8, w: 8, h: 0.5, fontSize: 14, color: TEAL, bold: true, align: 'center', fontFace: 'Arial',
    });
    s.addText('HelixID', {
      x: 1, y: 4.5, w: 8, h: 1, fontSize: 48, color: TEAL, bold: true, align: 'center', fontFace: 'Arial',
    });
    s.addText('Live Demo: /\nDocumentation: https://github.com/helix-id', {
      x: 2, y: 5.8, w: 6, h: 0.6, fontSize: 10, color: MUTED, align: 'center', fontFace: 'Courier New', lineSpacingMultiple: 1.3,
    });
    addSlideNumber(s, 30);
  }

  await pptx.writeFile({ fileName: 'HelixID-Presentation.pptx' });
}
