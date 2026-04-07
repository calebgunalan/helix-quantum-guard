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
const TOTAL = 45;

type S = PptxGenJS.Slide;

function sn(s: S, n: number) {
  s.addText(`${n} / ${TOTAL}`, { x: 8.5, y: 6.8, w: 1.2, h: 0.3, fontSize: 8, color: MUTED, align: 'right', fontFace: 'Courier New' });
}

function h(s: S, text: string) {
  s.addText(text, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, color: TEXT, bold: true, fontFace: 'Arial' });
}

function card(s: S, x: number, y: number, w: number, ht: number, bc = TEAL) {
  s.addShape('rect' as any, { x, y, w, h: ht, fill: { color: CARD_BG }, line: { color: bc, width: 1 }, rectRadius: 0.1 });
}

function divider(s: S, num: string, title: string, sub: string) {
  s.background = { color: BG };
  s.addText(num, { x: 5, y: 1.5, w: 4, h: 3.5, fontSize: 140, color: '0D1520', bold: true, fontFace: 'Arial', align: 'right' });
  s.addText(title, { x: 0.8, y: 2.5, w: 7, h: 1, fontSize: 32, color: TEAL, bold: true, fontFace: 'Arial' });
  s.addText(sub, { x: 0.8, y: 3.6, w: 7, h: 0.5, fontSize: 13, color: MUTED, fontFace: 'Arial' });
}

export async function exportToPptx() {
  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_WIDE';
  pptx.author = 'Caleb Gunalan';
  pptx.title = 'HelixID — Blockchain-based Quantum-Resistant IAM';

  let n = 0;
  const add = () => { n++; const s = pptx.addSlide(); s.background = { color: BG }; return s; };

  // 1 — Section Divider: Opening
  { const s = add(); divider(s, '01', 'Opening', 'Project introduction and research context'); sn(s, n); }

  // 2 — Title
  { const s = add(); s.addText('HelixID', { x: 1, y: 1.8, w: 8, h: 1.5, fontSize: 54, color: TEAL, bold: true, align: 'center', fontFace: 'Arial' }); s.addText('Blockchain-based Quantum-Resistant Identity and\nAccess Management for Healthcare', { x: 1.5, y: 3.3, w: 7, h: 0.8, fontSize: 16, color: MUTED, align: 'center', fontFace: 'Arial' }); s.addText('Caleb Gunalan · Department of Computer Science\n\nGuided by · Dr. P. Deepalakshmi', { x: 2, y: 4.8, w: 6, h: 0.8, fontSize: 11, color: '64748B', align: 'center', fontFace: 'Arial' }); s.addText('April 2026', { x: 2, y: 5.6, w: 6, h: 0.4, fontSize: 10, color: '64748B', align: 'center', fontFace: 'Arial' }); sn(s, n); }

  // 3 — Abstract
  { const s = add(); h(s, 'Abstract'); card(s, 0.5, 1.1, 6, 5.2, TEAL); s.addText('HelixID is a blockchain-based, quantum-resistant Identity and Access Management (IAM) system designed for multi-institutional healthcare environments. The system addresses two converging threats: the inadequacy of centralized identity infrastructure in high-stakes medical data environments, and the impending vulnerability of classical cryptographic algorithms to quantum computing attacks. HelixID implements NIST-standardized post-quantum cryptographic algorithms — CRYSTALS-Dilithium3 (FIPS 204) for digital signatures and CRYSTALS-Kyber768 (FIPS 203) for key encapsulation — within a permissioned blockchain architecture.', { x: 0.7, y: 1.3, w: 5.6, h: 4.8, fontSize: 11, color: 'CBD5E1', fontFace: 'Arial', valign: 'top', lineSpacingMultiple: 1.5 }); ['Post-Quantum Cryptography', 'Decentralized Identity (W3C DID)', 'Permissioned Blockchain', 'Smart Contract RBAC'].forEach((kw, i) => { card(s, 6.8, 1.1 + i * 0.55, 2.8, 0.45, TEAL); s.addText(kw, { x: 6.9, y: 1.15 + i * 0.55, w: 2.6, h: 0.4, fontSize: 9, color: TEAL, fontFace: 'Arial', align: 'center' }); }); sn(s, n); }

  // 4 — Section Divider: Problem Statement
  { const s = add(); divider(s, '02', 'Problem Statement', 'The dual threat facing healthcare identity systems'); sn(s, n); }

  // 5 — Problem Statement
  { const s = add(); h(s, 'Problem Statement'); const paras = ['1. Contemporary IAM systems rely on centralized identity directories and classical cryptographic primitives that are vulnerable to quantum attacks.', '2. Existing blockchain-based IAM proposals retain classical cryptographic schemes (ECDSA, SHA-256) that are quantum-vulnerable.', '3. No existing system integrates NIST-standardized post-quantum primitives within a permissioned blockchain IAM architecture for healthcare.']; paras.forEach((p, i) => { s.addText(p, { x: 0.5, y: 1.2 + i * 1.5, w: 9, h: 1.3, fontSize: 11, color: 'CBD5E1', fontFace: 'Arial', lineSpacingMultiple: 1.5, valign: 'top' }); }); card(s, 0.5, 5.8, 9, 0.7, TEAL); s.addText('HelixID solves all three problems within a single, unified framework.', { x: 0.7, y: 5.9, w: 8.6, h: 0.5, fontSize: 11, color: TEAL, bold: true, fontFace: 'Arial' }); sn(s, n); }

  // 6 — Section Divider: Literature Review
  { const s = add(); divider(s, '03', 'Literature Review', 'Research foundation across four intersecting domains'); sn(s, n); }

  // 7 — Literature Survey
  { const s = add(); h(s, 'Literature Survey'); const refs = [['NIST FIPS 203 — Kyber768', '2024', 'Key encapsulation'], ['NIST FIPS 204 — Dilithium3', '2024', 'Digital signatures'], ['W3C DIDs v1.0', '2022', 'DID documents'], ['Hyperledger Fabric v2.5', '2023', 'Permissioned blockchain'], ['IEEE Access — Blockchain IAM Survey', '2018', 'IAM taxonomy'], ['Journal of Medical Systems — PQC', '2023', 'Healthcare crypto feasibility'], ['ENISA — HNDL Report', '2023', 'Threat model']]; refs.forEach(([ref, yr, c], i) => { const y = 1.2 + i * 0.72; s.addText(ref, { x: 0.5, y, w: 4, h: 0.6, fontSize: 9, color: 'CBD5E1', fontFace: 'Arial', valign: 'top' }); s.addText(yr, { x: 4.6, y, w: 0.6, h: 0.6, fontSize: 9, color: MUTED, fontFace: 'Arial' }); s.addText(c, { x: 5.3, y, w: 4.2, h: 0.6, fontSize: 9, color: MUTED, fontFace: 'Arial', valign: 'top' }); }); sn(s, n); }

  // 8 — Objectives
  { const s = add(); h(s, 'Project Objectives'); const objs = [['01', 'Quantum-Resistant Authentication'], ['02', 'Immutable Identity Audit Trail'], ['03', 'Decentralized Identity Anchoring'], ['04', 'Smart Contract Policy Enforcement'], ['05', 'Privacy-Preserving Credential Verification'], ['06', 'Complete IAM Feature Parity']]; objs.forEach(([num, title], i) => { const col = i % 2; const row = Math.floor(i / 2); const x = 0.5 + col * 4.7; const y = 1.1 + row * 1.7; card(s, x, y, 4.4, 1.5); s.addText(num, { x: x + 0.15, y: y + 0.15, w: 0.5, h: 0.5, fontSize: 22, color: '1A3A5C', bold: true, fontFace: 'Arial' }); s.addText(title, { x: x + 0.7, y: y + 0.15, w: 3.5, h: 0.4, fontSize: 13, color: TEAL, bold: true, fontFace: 'Arial' }); }); sn(s, n); }

  // 9 — Section Divider: Existing System
  { const s = add(); divider(s, '04', 'Existing System Overview', 'How healthcare IAM works today and where it fails'); sn(s, n); }

  // 10 — Existing System
  { const s = add(); h(s, 'Current Healthcare IAM Architecture'); const items = [['Active Directory / LDAP', 'Centralized identity store — single point of failure and compromise'], ['RSA-2048 / ECC Encryption', 'Quantum-vulnerable within 5–10 years (Shor\'s algorithm)'], ['Database Audit Logs', 'Mutable by administrators — can be silently altered or deleted'], ['Config-file Access Policies', 'No governance trail — policy changes are invisible']]; items.forEach(([t, d], i) => { const y = 1.2 + i * 1.3; card(s, 0.5, y, 9, 1.1, DANGER); s.addText(t, { x: 0.7, y: y + 0.1, w: 3, h: 0.4, fontSize: 12, color: DANGER, bold: true, fontFace: 'Arial' }); s.addText(d, { x: 3.8, y: y + 0.1, w: 5.5, h: 0.8, fontSize: 10, color: MUTED, fontFace: 'Arial', lineSpacingMultiple: 1.3 }); }); sn(s, n); }

  // 11 — Traditional Gap
  { const s = add(); h(s, 'What Traditional IAM Gets Wrong'); const rows = [['Centralized identity database', 'Decentralized Identity on blockchain'], ['Classical RSA/ECC encryption', 'CRYSTALS-Dilithium3 + Kyber768'], ['Database audit logs (mutable)', 'Immutable blockchain ledger'], ['Access policies in config files', 'Smart contract policies on-chain'], ['Credentials in central directory', 'Credentials as on-chain DID Documents']]; s.addText('Traditional IAM', { x: 0.5, y: 1.1, w: 4, h: 0.4, fontSize: 13, color: DANGER, bold: true, fontFace: 'Arial' }); s.addText('What HelixID Does', { x: 5.5, y: 1.1, w: 4, h: 0.4, fontSize: 13, color: TEAL, bold: true, fontFace: 'Arial' }); rows.forEach(([old, hx], i) => { const y = 1.6 + i * 0.9; s.addText(old, { x: 0.5, y, w: 4, h: 0.7, fontSize: 10, color: MUTED, fontFace: 'Arial' }); s.addText('→', { x: 4.6, y, w: 0.5, h: 0.7, fontSize: 14, color: TEAL, align: 'center', fontFace: 'Arial' }); s.addText(hx, { x: 5.3, y, w: 4.2, h: 0.7, fontSize: 10, color: 'CBD5E1', fontFace: 'Arial' }); }); sn(s, n); }

  // 12 — Section Divider: Proposed System
  { const s = add(); divider(s, '05', 'Proposed System', 'HelixID — a quantum-resistant blockchain IAM architecture'); sn(s, n); }

  // 13 — Intro HelixID
  { const s = add(); s.addText('HelixID', { x: 1, y: 2, w: 8, h: 1.2, fontSize: 48, color: TEAL, bold: true, align: 'center', fontFace: 'Arial' }); s.addText('Post-Quantum Cryptographic Identity Management —\nBuilt on Blockchain. Built for Healthcare. Built for the Future.', { x: 1.5, y: 3.3, w: 7, h: 0.8, fontSize: 13, color: MUTED, align: 'center', fontFace: 'Arial', lineSpacingMultiple: 1.3 }); sn(s, n); }

  // 14 — Why Quantum
  { const s = add(); h(s, 'The Quantum Threat Timeline'); s.addText('"By 2031, RSA-2048 encryption — protecting 90% of today\'s digital infrastructure — will be breakable by quantum computers."', { x: 0.5, y: 1.5, w: 7, h: 1.2, fontSize: 20, color: TEAL, bold: true, fontFace: 'Arial', lineSpacingMultiple: 1.3 }); s.addText('— NIST Post-Quantum Cryptography Project, 2024', { x: 0.5, y: 2.8, w: 5, h: 0.3, fontSize: 9, color: MUTED, italic: true, fontFace: 'Arial' }); card(s, 0.5, 3.5, 9, 1.5, DANGER); s.addText('Patient medical records are legally retained for 50+ years. A record encrypted with RSA today is readable to a quantum-equipped adversary before that retention period ends.', { x: 0.7, y: 3.6, w: 8.6, h: 1.3, fontSize: 12, color: TEXT, fontFace: 'Arial', lineSpacingMultiple: 1.4 }); sn(s, n); }

  // 15 — Post-Quantum Algorithms
  { const s = add(); h(s, 'Why Classical Encryption Fails'); card(s, 0.5, 1.2, 4.2, 3, DANGER); s.addText('🔓 RSA-2048', { x: 0.7, y: 1.4, w: 3.8, h: 0.5, fontSize: 16, color: DANGER, bold: true, align: 'center', fontFace: 'Arial' }); s.addText('Shor\'s algorithm: O(n³)', { x: 1, y: 2.2, w: 3.2, h: 0.4, fontSize: 10, color: DANGER, align: 'center', fontFace: 'Courier New' }); card(s, 5.3, 1.2, 4.2, 3, SUCCESS); s.addText('🔐 CRYSTALS-Dilithium3', { x: 5.5, y: 1.4, w: 3.8, h: 0.5, fontSize: 16, color: SUCCESS, bold: true, align: 'center', fontFace: 'Arial' }); s.addText('MLWE: Quantum = Classical O(eⁿ)', { x: 5.8, y: 2.2, w: 3.2, h: 0.4, fontSize: 10, color: SUCCESS, align: 'center', fontFace: 'Courier New' }); sn(s, n); }

  // 16 — DID
  { const s = add(); h(s, 'Every Identity Lives on the Blockchain'); card(s, 0.5, 1.2, 4.2, 4, TEAL); s.addText('DID Document', { x: 0.7, y: 1.3, w: 3.8, h: 0.3, fontSize: 10, color: MUTED, fontFace: 'Arial' }); ['DID: did:helix:0x4a3f9c2d8b1e...', 'Public Key: [Dilithium3 — 1,952 bytes]', 'Issued Block: #12,441', 'Credential Hash: SHA3-256: 0x7c2f9a4d...', 'Status: ● ACTIVE'].forEach((line, i) => { s.addText(line, { x: 0.7, y: 1.7 + i * 0.5, w: 3.8, h: 0.4, fontSize: 9, color: i === 0 ? TEAL : 'CBD5E1', fontFace: 'Courier New' }); }); ['No central database', 'Self-sovereign', 'Portable'].forEach((b, i) => { s.addText(b, { x: 5.3, y: 1.3 + i * 1.2, w: 4, h: 0.4, fontSize: 13, color: TEAL, bold: true, fontFace: 'Arial' }); }); sn(s, n); }

  // 17 — Blockchain
  { const s = add(); h(s, 'An Audit Trail That Cannot Lie'); [{ num: '14,841', hash: '0x9f3a...' }, { num: '14,842', hash: '0x4c2d...' }, { num: '14,843', hash: '0x7b1e...' }].forEach((b, i) => { const x = 0.5 + i * 3.2; card(s, x, 1.3, 2.8, 1.8); s.addText(`Block #${b.num}`, { x: x + 0.15, y: 1.4, w: 2.5, h: 0.4, fontSize: 12, color: TEAL, bold: true, fontFace: 'Arial' }); s.addText(`Hash: ${b.hash}`, { x: x + 0.15, y: 1.85, w: 2.5, h: 0.3, fontSize: 9, color: TEAL, fontFace: 'Courier New' }); }); s.addText('Changing any transaction invalidates the entire chain — detectable instantly.', { x: 0.5, y: 3.8, w: 9, h: 0.5, fontSize: 11, color: MUTED, fontFace: 'Arial' }); sn(s, n); }

  // 18 — Smart Contract
  { const s = add(); h(s, 'Access Policies That Enforce Themselves'); card(s, 0.5, 1.2, 6, 3, TEAL); s.addText(`POLICY RULE #3\n─────────────────────────\nIF role == "hospital_staff"\nAND department == "cardiology"\nTHEN ALLOW access\nFOR DURATION 72 hours`, { x: 0.7, y: 1.4, w: 5.6, h: 2.6, fontSize: 9, color: MUTED, fontFace: 'Courier New', lineSpacingMultiple: 1.3, valign: 'top' }); sn(s, n); }

  // 19 — ZKP
  { const s = add(); h(s, 'Prove What You Know Without Revealing It'); [['👨‍⚕️ Doctor from External Hospital', '"I need to prove I\'m a licensed physician"', '64748B'], ['ZKP Engine — Groth16 zk-SNARK', 'Generates proof π WITHOUT transmitting credential', VIOLET], ['HelixID Verifier', '"Credential: VALID ✓" — without knowing personal data', SUCCESS]].forEach(([t, d, c], i) => { const y = 1.2 + i * 1.6; card(s, 2, y, 6, 1.2, c); s.addText(t, { x: 2.2, y: y + 0.1, w: 5.6, h: 0.4, fontSize: 12, color: c, bold: true, align: 'center', fontFace: 'Arial' }); s.addText(d, { x: 2.2, y: y + 0.55, w: 5.6, h: 0.4, fontSize: 9, color: MUTED, align: 'center', fontFace: 'Arial' }); }); sn(s, n); }

  // 20 — Four Actors
  { const s = add(); h(s, 'Four-Actor Architecture'); [['🏥 Patient', '3B82F6'], ['👨‍⚕️ Hospital Staff', TEAL], ['👩‍💼 Department Head', WARNING], ['🔐 IT Admin', VIOLET]].forEach(([role, c], i) => { const col = i % 2; const row = Math.floor(i / 2); const x = 0.5 + col * 4.7; const y = 1.3 + row * 2.3; card(s, x, y, 4.4, 2, c as string); s.addText(role, { x: x + 0.2, y: y + 0.2, w: 4, h: 0.5, fontSize: 14, color: c as string, bold: true, fontFace: 'Arial' }); }); sn(s, n); }

  // 21 — Feature Map
  { const s = add(); h(s, 'Complete IAM Feature Coverage'); const feats = [['Authentication', 'All roles', 'Kyber768 + Dilithium MFA'], ['Identity Issuance', 'Admin', 'Dilithium key pair + DID'], ['Credential Lifecycle', 'Admin/Mod', 'Dilithium-signed TX'], ['RBAC', 'Contract', 'Contract address on-chain'], ['Delegation', 'Staff', 'Delegator\'s Dilithium sig'], ['Break-Glass', 'Staff', 'Permanent on-chain record'], ['ZKP Proof', 'Patient/Staff', 'Groth16 proof'], ['Session Mgmt', 'All roles', 'Kyber-derived token'], ['Consent Mgmt', 'Patient', 'Patient\'s Dilithium sig']]; ['Feature', 'Actor', 'Quantum Protection'].forEach((ht, i) => { s.addText(ht, { x: [0.5, 3, 5.5][i], y: 1.1, w: [2.4, 2.4, 4][i], h: 0.4, fontSize: 9, color: TEAL, bold: true, fontFace: 'Arial' }); }); feats.forEach((row, i) => { const y = 1.55 + i * 0.52; row.forEach((cell, j) => { s.addText(cell, { x: [0.5, 3, 5.5][j], y, w: [2.4, 2.4, 4][j], h: 0.4, fontSize: 8, color: j === 0 ? 'CBD5E1' : MUTED, fontFace: 'Arial' }); }); }); sn(s, n); }

  // 22 — Section Divider: HW/SW Requirements
  { const s = add(); divider(s, '06', 'Hardware & Software Requirements', 'Infrastructure specifications for demo and production'); sn(s, n); }

  // 23 — Hardware Requirements
  { const s = add(); h(s, 'Hardware Requirements'); s.addText('Demo Environment', { x: 0.5, y: 1.1, w: 4, h: 0.4, fontSize: 13, color: TEAL, bold: true, fontFace: 'Arial' }); s.addText('• Modern browser, 4GB RAM minimum\n• No server required — all crypto runs in-browser\n• 2–4s initialization for 6 key pairs', { x: 0.5, y: 1.6, w: 4.5, h: 2, fontSize: 10, color: MUTED, fontFace: 'Arial', lineSpacingMultiple: 1.4 }); s.addText('Production Environment', { x: 5.3, y: 1.1, w: 4, h: 0.4, fontSize: 13, color: VIOLET, bold: true, fontFace: 'Arial' }); s.addText('• 4–7 Validator Nodes (8-core, 32GB)\n• 1–3 Ordering Service Nodes\n• HSM (Thales Luna 7 FIPS 140-2 L3)\n• CA Server + Load Balancer', { x: 5.3, y: 1.6, w: 4.2, h: 2.5, fontSize: 10, color: MUTED, fontFace: 'Arial', lineSpacingMultiple: 1.4 }); sn(s, n); }

  // 24 — Software Requirements
  { const s = add(); h(s, 'Software Requirements'); const quads = [['🔐 Crypto', VIOLET, 'noble-post-quantum, @noble/hashes, snarkjs'], ['⚛ Frontend', TEAL, 'React 18, TypeScript 5, Tailwind, Zustand'], ['⛓ Blockchain', SUCCESS, 'Hyperledger Fabric 2.5, Docker, CouchDB, Go'], ['🛠 Dev Tools', WARNING, 'Node.js 20, Vite 5, ESLint, Git']]; quads.forEach(([t, c, items], i) => { const col = i % 2; const row = Math.floor(i / 2); const x = 0.5 + col * 4.7; const y = 1.1 + row * 2.5; card(s, x, y, 4.4, 2.2, c); s.addText(t, { x: x + 0.2, y: y + 0.1, w: 4, h: 0.4, fontSize: 12, color: c, bold: true, fontFace: 'Arial' }); s.addText(items, { x: x + 0.2, y: y + 0.6, w: 4, h: 1.4, fontSize: 9, color: MUTED, fontFace: 'Arial', lineSpacingMultiple: 1.4 }); }); sn(s, n); }

  // 25 — Section Divider: Modules
  { const s = add(); divider(s, '07', 'List of Modules', 'Eight system modules across three architectural layers'); sn(s, n); }

  // 26 — Modules Overview
  { const s = add(); h(s, 'Module Architecture Overview'); [['Layer 1: Crypto Foundation', VIOLET, 'M1: Cryptographic Engine, M2: Blockchain Engine, M3: Smart Contract Engine'], ['Layer 2: Identity & Session', TEAL, 'M4: DID Management, M5: Auth & Session Manager'], ['Layer 3: Application Interface', WARNING, 'M6: Patient Portal, M7: Staff & Moderator, M8: Admin Governance']].forEach(([t, c, m], i) => { const y = 1.2 + i * 1.7; card(s, 0.5, y, 9, 1.4, c); s.addText(t, { x: 0.7, y: y + 0.1, w: 4, h: 0.4, fontSize: 12, color: c, bold: true, fontFace: 'Arial' }); s.addText(m, { x: 0.7, y: y + 0.55, w: 8.5, h: 0.7, fontSize: 10, color: MUTED, fontFace: 'Arial', lineSpacingMultiple: 1.3 }); }); sn(s, n); }

  // 27 — Modules 1–3 (Foundation)
  { const s = add(); h(s, 'Modules 1–3: Cryptographic & Blockchain Foundation'); [['M1: Crypto Engine', VIOLET, 'crypto.ts — Dilithium3 + Kyber768 + SHA3-256'], ['M2: Blockchain Engine', TEAL, 'blockchain.ts — SHA3-256 chaining, Merkle trees, validation'], ['M3: Smart Contract Engine', SUCCESS, 'contracts.ts — RBAC evaluation, policy deployment']].forEach(([t, c, d], i) => { const x = 0.5 + i * 3.2; card(s, x, 1.2, 2.9, 3.5, c); s.addText(t, { x: x + 0.15, y: 1.3, w: 2.6, h: 0.4, fontSize: 10, color: c, bold: true, fontFace: 'Arial' }); s.addText(d, { x: x + 0.15, y: 1.8, w: 2.6, h: 2.5, fontSize: 9, color: MUTED, fontFace: 'Arial', lineSpacingMultiple: 1.4 }); }); sn(s, n); }

  // 28 — Modules 4–8 (Identity)
  { const s = add(); h(s, 'Modules 4–8: Identity, Session, and Interface'); [['M4: DID Management', TEAL], ['M5: Auth & Session', VIOLET], ['M6: Patient Portal', SUCCESS], ['M7: Staff & Moderator', WARNING], ['M8: Admin Governance', DANGER]].forEach(([t, c], i) => { const col = i < 3 ? i : i - 3; const row = i < 3 ? 0 : 1; const x = 0.5 + col * 3.2; const y = 1.2 + row * 2.5; card(s, x, y, 2.9, 2.2, c); s.addText(t, { x: x + 0.15, y: y + 0.15, w: 2.6, h: 0.4, fontSize: 10, color: c, bold: true, fontFace: 'Arial' }); }); sn(s, n); }

  // 29 — Section Divider: Architecture & Diagrams
  { const s = add(); divider(s, '08', 'Architecture & Diagrams', 'System architecture, data flow, and UML specifications'); sn(s, n); }

  // 30 — Architecture
  { const s = add(); h(s, 'Architecture at a Glance'); s.addText('IDENTITY LAYER', { x: 3, y: 1.1, w: 4, h: 0.3, fontSize: 10, color: MUTED, align: 'center', fontFace: 'Arial', bold: true }); ['Patient DID', 'Staff DID', 'Moderator DID', 'Admin DID'].forEach((did, i) => { const x = 1 + i * 2.2; card(s, x, 1.5, 1.8, 0.5, TEAL); s.addText(did, { x, y: 1.55, w: 1.8, h: 0.4, fontSize: 9, color: TEXT, align: 'center', fontFace: 'Arial' }); }); s.addText('SECURITY LAYER', { x: 3, y: 2.5, w: 4, h: 0.3, fontSize: 10, color: TEAL, align: 'center', fontFace: 'Arial', bold: true }); ['Kyber768 Auth', 'Dilithium Verification', 'Smart Contract RBAC'].forEach((item, i) => { const x = 0.8 + i * 3.1; card(s, x, 2.9, 2.8, 0.7, TEAL); s.addText(item, { x, y: 3, w: 2.8, h: 0.5, fontSize: 10, color: TEXT, align: 'center', fontFace: 'Arial', bold: true }); }); s.addText('INFRASTRUCTURE LAYER', { x: 3, y: 4.2, w: 4, h: 0.3, fontSize: 10, color: MUTED, align: 'center', fontFace: 'Arial', bold: true }); card(s, 1.5, 4.6, 3.5, 0.7, VIOLET); s.addText('Permissioned Blockchain Ledger', { x: 1.5, y: 4.7, w: 3.5, h: 0.5, fontSize: 10, color: TEXT, align: 'center', fontFace: 'Arial' }); sn(s, n); }

  // 31 — Flow Diagram
  { const s = add(); h(s, 'End-to-End IAM Workflow'); s.addText('START → Authentication → DID Resolution → Smart Contract Evaluation → Access Decision → Blockchain Record → END', { x: 0.5, y: 2, w: 9, h: 2, fontSize: 14, color: TEXT, fontFace: 'Arial', lineSpacingMultiple: 1.6, align: 'center' }); s.addText('Every step is cryptographically signed and blockchain-recorded', { x: 1, y: 5, w: 8, h: 0.4, fontSize: 10, color: MUTED, italic: true, align: 'center', fontFace: 'Arial' }); sn(s, n); }

  // 32 — ER Diagram
  { const s = add(); h(s, 'Entity-Relationship Diagram'); ['User (DID, publicKey, role, status)', 'Credential (hash, issuerDID, subjectDID, type)', 'Block (index, hash, previousHash, merkleRoot)', 'Transaction (txHash, type, signerDID, timestamp)', 'Policy (contractAddress, ruleSet, deployerDID)'].forEach((e, i) => { const y = 1.2 + i * 1; card(s, 1.5, y, 7, 0.8, TEAL); s.addText(e, { x: 1.7, y: y + 0.1, w: 6.6, h: 0.6, fontSize: 11, color: TEXT, fontFace: 'Courier New' }); }); sn(s, n); }

  // 33 — Use Case Diagram
  { const s = add(); h(s, 'UML Use Case Diagram'); const actors = [['Patient', '3B82F6', ['Login', 'View DID', 'Manage Consent', 'ZKP Proof']], ['Staff', TEAL, ['Request Access', 'Delegate', 'Emergency Override']], ['Moderator', WARNING, ['Approve Requests', 'Review Audit']], ['Admin', VIOLET, ['Onboard Users', 'Deploy Policies', 'Blockchain Explorer']]]; actors.forEach(([name, c, cases], i) => { const y = 1.1 + i * 1.3; s.addText(name as string, { x: 0.5, y, w: 1.8, h: 0.4, fontSize: 11, color: c as string, bold: true, fontFace: 'Arial' }); (cases as string[]).forEach((uc, j) => { s.addText(`○ ${uc}`, { x: 2.5 + j * 2.2, y, w: 2, h: 0.4, fontSize: 9, color: MUTED, fontFace: 'Arial' }); }); }); sn(s, n); }

  // 34 — Class Diagram
  { const s = add(); h(s, 'UML Class Diagram'); ['CryptoEngine: generateDilithiumKeyPair(), signData(), sha3Hash()', 'BlockchainStore: addTransaction(), mineBlock(), validateChain()', 'SmartContractEngine: evaluate(), deployPolicy()', 'DIDManager: createDID(), resolveDID(), registerOnChain()', 'AuthManager: login(), verifyMFA(), createSession()'].forEach((cls, i) => { const y = 1.2 + i * 1; card(s, 0.5, y, 9, 0.85, TEAL); s.addText(cls, { x: 0.7, y: y + 0.1, w: 8.6, h: 0.65, fontSize: 10, color: 'CBD5E1', fontFace: 'Courier New' }); }); sn(s, n); }

  // 35 — Sequence Diagram
  { const s = add(); h(s, 'UML Sequence Diagram — Quantum-Safe Auth'); s.addText('User → Browser → CryptoEngine → AuthManager → BlockchainStore', { x: 0.5, y: 1.2, w: 9, h: 0.4, fontSize: 11, color: TEAL, fontFace: 'Courier New', align: 'center' }); const steps = ['1. generateKyberKeyPair()', '2. initiateHandshake(clientPubKey)', '3. kyberEncapsulate → sharedSecret', '4. MFA challenge nonce', '5. signData(privKey, nonce) → Dilithium signature', '6. verifySignature() → true ✓', '7. addTransaction(LOGIN_SUCCESS)', '8. sessionToken = sha3Hash(secret+ts)']; steps.forEach((st, i) => { s.addText(st, { x: 0.8, y: 1.8 + i * 0.58, w: 8.4, h: 0.5, fontSize: 9, color: i === 5 ? SUCCESS : 'CBD5E1', fontFace: 'Courier New' }); }); sn(s, n); }

  // 36 — Activity Diagram
  { const s = add(); h(s, 'UML Activity Diagram — Access Request Workflow'); s.addText('Hospital Staff | Smart Contract Engine | Department Head | Blockchain Ledger', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 10, color: TEAL, fontFace: 'Arial', align: 'center', bold: true }); const flow = ['● Fill Access Request Form', '→ Sign with Dilithium Key', '→ Verify Dilithium Signature', '◇ Signature Valid?', '→ Evaluate RBAC Rules', '◇ In Scope?', '→ Forward to Department Head', '◇ Approve?', '→ Sign Approval (Dilithium)', '→ ACCESS_GRANTED tx → Mine Block']; flow.forEach((st, i) => { s.addText(st, { x: 1, y: 1.7 + i * 0.48, w: 8, h: 0.4, fontSize: 9, color: st.startsWith('◇') ? WARNING : 'CBD5E1', fontFace: st.startsWith('◇') ? 'Arial' : 'Courier New' }); }); sn(s, n); }

  // 37 — Tech Stack
  { const s = add(); h(s, 'Technology Stack'); [['Cryptographic Primitives', VIOLET, 'Dilithium3, Kyber768, SHA3-256, Groth16'], ['Blockchain Infrastructure', TEAL, 'Hyperledger Fabric 2.5 / In-Browser Engine'], ['Identity and Policy', '3B82F6', 'W3C DID Core, Smart Contract RBAC'], ['Application', '64748B', 'React 18, TypeScript, Tailwind, Zustand']].forEach(([name, c, items], i) => { const y = 1.2 + i * 1.3; card(s, 0.5, y, 9, 1.1, c); s.addText(name, { x: 0.8, y: y + 0.05, w: 3, h: 0.4, fontSize: 12, color: c, bold: true, fontFace: 'Arial' }); s.addText(items, { x: 0.8, y: y + 0.45, w: 8.5, h: 0.5, fontSize: 9, color: MUTED, fontFace: 'Arial' }); }); sn(s, n); }

  // 38 — Section Divider: Results & Discussions
  { const s = add(); divider(s, '09', 'Results & Discussions', 'Implementation evidence, demo results, and analysis'); sn(s, n); }

  // 39 — Implementation
  { const s = add(); h(s, 'How the System Was Built'); card(s, 0.5, 1.2, 4.5, 4.5); s.addText(`src/\n├── lib/\n│   ├── crypto.ts\n│   ├── blockchain.ts\n│   ├── contracts.ts\n│   └── did.ts\n├── store/\n│   ├── cryptoStore.ts\n│   ├── blockchainStore.ts\n│   └── authStore.ts\n├── pages/\n│   ├── Patient.tsx\n│   ├── Staff.tsx\n│   ├── Moderator.tsx\n│   └── Admin.tsx`, { x: 0.7, y: 1.4, w: 4.1, h: 4.1, fontSize: 8, color: 'CBD5E1', fontFace: 'Courier New', lineSpacingMultiple: 1.3, valign: 'top' }); [['crypto.ts', 'Real post-quantum operations using noble-post-quantum.'], ['blockchain.ts', 'Genuine SHA3-256 block hashing. Real Merkle tree computation.'], ['contracts.ts', 'Policy evaluation engine mirroring Hyperledger Chaincode.']].forEach(([name, desc], i) => { const y = 1.3 + i * 1.4; card(s, 5.3, y, 4.2, 1.2, TEAL); s.addText(name, { x: 5.5, y: y + 0.1, w: 3.8, h: 0.3, fontSize: 10, color: TEAL, bold: true, fontFace: 'Courier New' }); s.addText(desc, { x: 5.5, y: y + 0.45, w: 3.8, h: 0.6, fontSize: 9, color: MUTED, fontFace: 'Arial' }); }); sn(s, n); }

  // 40 — Performance Metrics
  { const s = add(); h(s, 'Cryptographic Operation Performance'); const benchmarks = [['Dilithium3 KeyGen', '180ms'], ['Block Mining', '85ms'], ['Kyber768 KeyGen', '45ms'], ['Dilithium Sign', '12ms'], ['Dilithium Verify', '8ms'], ['Kyber Encapsulate', '6ms'], ['SHA3-256 Hash', '0.3ms']]; benchmarks.forEach(([op, ms], i) => { const y = 1.2 + i * 0.7; s.addText(op, { x: 0.5, y, w: 3.5, h: 0.5, fontSize: 10, color: 'CBD5E1', fontFace: 'Arial' }); s.addText(ms, { x: 4.2, y, w: 1.5, h: 0.5, fontSize: 10, color: TEAL, bold: true, fontFace: 'Courier New' }); }); card(s, 0.5, 6, 9, 0.6, TEAL); s.addText('RSA-2048 sign: ~3ms — Dilithium carries ~4x overhead, acceptable for IAM frequency.', { x: 0.7, y: 6.1, w: 8.6, h: 0.4, fontSize: 9, color: MUTED, fontFace: 'Arial' }); sn(s, n); }

  // 41 — Comparative Analysis
  { const s = add(); h(s, 'Comparative Analysis'); const hdr = ['Property', 'Active Directory', 'Prior Blockchain', 'HelixID']; hdr.forEach((ht, i) => { s.addText(ht, { x: 0.5 + i * 2.3, y: 1.1, w: 2.2, h: 0.4, fontSize: 9, color: i === 3 ? TEAL : MUTED, bold: true, fontFace: 'Arial' }); }); [['Quantum-Resistant Auth', '✗', '✗', '✓'], ['Immutable Audit', '✗', '✓', '✓'], ['Decentralized ID', '✗', '△', '✓'], ['Smart Contract RBAC', '✗', '△', '✓'], ['Patient Consent On-Chain', '✗', '✗', '✓'], ['ZKP Credential Proof', '✗', '✗', '△'], ['Break-Glass + Accountability', '△', '✗', '✓'], ['HNDL Safe', '✗', '✗', '✓']].forEach(([p, a, b, c], i) => { const y = 1.6 + i * 0.6; [p, a, b, c].forEach((v, j) => { const color = v === '✓' ? SUCCESS : v === '✗' ? DANGER : v === '△' ? WARNING : 'CBD5E1'; s.addText(v, { x: 0.5 + j * 2.3, y, w: 2.2, h: 0.5, fontSize: 9, color, fontFace: 'Arial' }); }); }); sn(s, n); }

  // 42 — Real vs Simulated
  { const s = add(); h(s, 'Technical Transparency — What Is Real'); card(s, 0.5, 1.2, 4.4, 4, TEAL); s.addText('🔐 Cryptographically Real', { x: 0.7, y: 1.3, w: 4, h: 0.4, fontSize: 12, color: TEAL, bold: true, fontFace: 'Arial' }); ['SHA3-256 block hashes', 'Dilithium3 key pairs & signing', 'Kyber768 key encapsulation', 'DID computation', 'Chain validation', 'Merkle trees'].forEach((item, i) => { s.addText(`✓ ${item}`, { x: 0.7, y: 1.8 + i * 0.5, w: 4, h: 0.4, fontSize: 9, color: 'CBD5E1', fontFace: 'Arial' }); }); card(s, 5.3, 1.2, 4.4, 4, '64748B'); s.addText('⚙ Infrastructure Simulated', { x: 5.5, y: 1.3, w: 4, h: 0.4, fontSize: 12, color: MUTED, bold: true, fontFace: 'Arial' }); ['Distributed network (single node)', 'EVM execution (JS engine)', 'Groth16 ZKP (structural sim)', 'PBFT consensus', 'Multi-hospital DID resolution'].forEach((item, i) => { s.addText(`○ ${item}`, { x: 5.5, y: 1.8 + i * 0.5, w: 4, h: 0.4, fontSize: 9, color: MUTED, fontFace: 'Arial' }); }); sn(s, n); }

  // 43 — Quantum Timeline
  { const s = add(); h(s, 'Why This Had to Be Built Now'); s.addShape('rect' as any, { x: 0.5, y: 2.5, w: 9, h: 0.06, fill: { color: TEAL } }); [['2024', 'NIST FIPS', TEAL], ['2026', 'HelixID\n📍 HERE', SUCCESS], ['2027', 'IBM 100K+\nqubits', WARNING], ['2030', 'Fault-tolerant\nQC', WARNING], ['2031', 'RSA-2048\nvulnerable', DANGER], ['2033', 'ECC-256\nvulnerable', DANGER]].forEach(([yr, lbl, c], i) => { const x = 0.5 + i * 1.6; s.addText(yr, { x, y: 2.7, w: 1.4, h: 0.4, fontSize: 11, color: c, bold: true, align: 'center', fontFace: 'Arial' }); s.addText(lbl, { x, y: 3.1, w: 1.4, h: 0.8, fontSize: 8, color: MUTED, align: 'center', fontFace: 'Arial' }); }); sn(s, n); }

  // 44 — Section Divider: Conclusion
  { const s = add(); divider(s, '10', 'Conclusion & Future Enhancements', 'Summary of contributions and production roadmap'); sn(s, n); }

  // 45 — Conclusion
  { const s = add(); h(s, 'Conclusion'); card(s, 0.5, 1.1, 9, 3.5, TEAL); s.addText('HelixID presents a blockchain-based quantum-resistant IAM system for multi-institutional healthcare. By adopting NIST FIPS 203/204 as the native cryptographic foundation, the system achieves quantum resistance as the ground floor — not an add-on. Every transaction is Dilithium-signed. Every session is Kyber-established. Every block hash is SHA3-256.', { x: 0.7, y: 1.2, w: 8.6, h: 3.2, fontSize: 11, color: 'CBD5E1', fontFace: 'Arial', lineSpacingMultiple: 1.5, valign: 'top' }); ['🔐 NIST PQC Implemented', '⛓ Real Blockchain SHA3-256', '🪪 W3C DID Compliant', '📋 Complete IAM Coverage'].forEach((a, i) => { s.addText(a, { x: 0.5 + i * 2.3, y: 5, w: 2.2, h: 0.5, fontSize: 9, color: TEAL, fontFace: 'Arial', align: 'center' }); }); sn(s, n); }

  // 46 — Roadmap
  { const s = add(); h(s, 'Production Path Forward'); [['Phase 1: Infrastructure', TEAL, 'Months 1–3\nDeploy Hyperledger Fabric\nReal zk-SNARK circuits\nHSM integration'], ['Phase 2: Integration', VIOLET, 'Months 4–8\nEHR system connectors\nCross-hospital DID\nMobile patient wallet'], ['Phase 3: Scale', SUCCESS, 'Months 9–12\nMulti-hospital onboarding\nRegulatory compliance\nAnomaly detection']].forEach(([t, c, items], i) => { const x = 0.5 + i * 3.2; card(s, x, 1.2, 2.9, 4, c); s.addText(t, { x: x + 0.15, y: 1.3, w: 2.6, h: 0.4, fontSize: 11, color: c, bold: true, fontFace: 'Arial' }); s.addText(items, { x: x + 0.15, y: 1.8, w: 2.6, h: 3, fontSize: 9, color: MUTED, fontFace: 'Arial', lineSpacingMultiple: 1.4 }); }); sn(s, n); }

  // 47 — Section Divider: References
  { const s = add(); divider(s, '11', 'References', 'Standards, literature, and technical documentation'); sn(s, n); }

  // 48 — References
  { const s = add(); h(s, 'References'); const refs = ['[1] NIST FIPS 203 — Module-Lattice-Based Key-Encapsulation Mechanism Standard, 2024', '[2] NIST FIPS 204 — Module-Lattice-Based Digital Signature Standard, 2024', '[3] W3C, Decentralized Identifiers (DIDs) v1.0, 2022', '[4] Hyperledger Fabric v2.5 Documentation, Linux Foundation, 2023', '[5] IEEE Access — A Survey on Blockchain-Based IAM, 2018', '[6] ENISA — Post-Quantum Cryptography: Current State and Quantum Mitigation, 2023', '[7] Journal of Medical Systems — PQC Feasibility for Healthcare, 2023', '[8] noble-post-quantum — P. Miller, MIT License, audited implementations', '[9] snarkjs — iden3, Groth16 zk-SNARK implementation, GPL-3.0']; refs.forEach((r, i) => { s.addText(r, { x: 0.5, y: 1.1 + i * 0.58, w: 9, h: 0.5, fontSize: 9, color: 'CBD5E1', fontFace: 'Arial' }); }); sn(s, n); }

  // 49 — Section Divider: Publications
  { const s = add(); divider(s, '12', 'Publications', 'Research publications and academic output'); sn(s, n); }

  // 50 — Publications
  { const s = add(); h(s, 'Publications & Research Contributions'); s.addText('5 Research Papers · 1 Book Chapter · 3 Venues', { x: 0.5, y: 1, w: 9, h: 0.3, fontSize: 10, color: TEAL, fontFace: 'Arial' }); const pubs = [['Post-Quantum Blockchain IAM for Critical Infrastructure', 'IEEE TIFS', 'Pending', VIOLET], ['Continuous Compliance Monitoring', 'ICICV 2025', 'Accepted', SUCCESS], ['Information Theory of Persistent Homology', 'MDPI Mathematics', 'Minor Rev.', WARNING], ['Hybrid QKD + PQC Framework for HNDL', 'NIT Agartala', 'Under Review', '3B82F6'], ['Structured Causal Geometry for ML', 'MDPI MAKE', 'Pending', VIOLET]]; pubs.forEach(([t, v, st, c], i) => { const x = 0.3 + i * 1.9; card(s, x, 1.5, 1.7, 3, c); s.addText('📄', { x: x + 0.1, y: 1.6, w: 1.5, h: 0.4, fontSize: 16, fontFace: 'Arial' }); s.addText(t, { x: x + 0.1, y: 2.1, w: 1.5, h: 1.2, fontSize: 7, color: 'CBD5E1', fontFace: 'Arial', lineSpacingMultiple: 1.3, valign: 'top' }); s.addText(v, { x: x + 0.1, y: 3.4, w: 1.5, h: 0.3, fontSize: 7, color: MUTED, fontFace: 'Arial' }); s.addText(st, { x: x + 0.1, y: 3.8, w: 1.5, h: 0.3, fontSize: 8, color: c, bold: true, fontFace: 'Arial' }); }); card(s, 2.5, 5, 5, 1.2, 'B45309'); s.addText('📖 Book Chapter — Implementation Security & Side-Channel Resistance in PQC', { x: 2.7, y: 5.1, w: 4.6, h: 0.4, fontSize: 9, color: 'FCD34D', bold: true, fontFace: 'Arial' }); s.addText('IGI Global · Accepted', { x: 2.7, y: 5.5, w: 4.6, h: 0.3, fontSize: 8, color: MUTED, fontFace: 'Arial' }); sn(s, n); }

  // 51 — Closing
  { const s = add(); s.addText('The records encrypted today will still exist in 2040.', { x: 1, y: 1.5, w: 8, h: 0.8, fontSize: 18, color: TEXT, align: 'center', fontFace: 'Arial', bold: true }); s.addText('The question is not whether to protect them from quantum attacks.\nThe question is whether you start before or after the breach.', { x: 1, y: 2.5, w: 8, h: 0.8, fontSize: 14, color: MUTED, align: 'center', fontFace: 'Arial', lineSpacingMultiple: 1.4 }); s.addText('HelixID answers that question.', { x: 1, y: 3.8, w: 8, h: 0.5, fontSize: 14, color: TEAL, bold: true, align: 'center', fontFace: 'Arial' }); s.addText('HelixID', { x: 1, y: 4.5, w: 8, h: 1, fontSize: 48, color: TEAL, bold: true, align: 'center', fontFace: 'Arial' }); sn(s, n); }

  await pptx.writeFile({ fileName: 'HelixID-Presentation.pptx' });
}
