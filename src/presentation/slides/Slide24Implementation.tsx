export default function Slide24Implementation() {
  return (
    <section>
      {/* Sub-slide A: Codebase */}
      <section data-transition="fade">
        <h2>How the System Was Built</h2>
        <div style={{ display: 'flex', gap: '28px', marginTop: '20px' }}>
          <div style={{ flex: '0 0 48%' }}>
            <pre style={{ fontSize: '0.58em', lineHeight: 1.9, color: '#cbd5e1', background: 'rgba(15,23,42,0.9)', padding: '20px', borderRadius: '10px', border: '1px solid rgba(0,212,255,0.1)', margin: 0 }}>{`src/
├── lib/
│   ├── crypto.ts          ← Real Dilithium + Kyber
│   ├── blockchain.ts      ← SHA3-256 chained blocks
│   ├── contracts.ts       ← Smart contract evaluator
│   └── did.ts             ← DID document generation
├── store/
│   ├── cryptoStore.ts     ← Key pairs (Zustand)
│   ├── blockchainStore.ts ← Chain state + mining
│   └── authStore.ts       ← Session + role state
├── pages/
│   ├── Landing.tsx        ← Architecture + demo login
│   ├── Patient.tsx        ← DID, consent, ZKP
│   ├── Staff.tsx          ← Access requests, delegation
│   ├── Moderator.tsx      ← Approvals, policy viewer
│   └── Admin.tsx          ← Full system management
├── components/
│   ├── BlockchainExplorer.tsx
│   ├── TamperDemo.tsx
│   ├── MFAModal.tsx
│   └── ArchSidebar.tsx
└── presentation/
    └── slides/            ← This presentation`}</pre>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="fragment pres-card pres-card-teal" style={{ padding: '14px 18px' }}>
              <p style={{ fontSize: '0.65em', color: '#00d4ff', marginBottom: '4px', fontWeight: 600 }}>crypto.ts</p>
              <p style={{ fontSize: '0.6em', color: '#94a3b8', lineHeight: 1.5, marginBottom: 0 }}>
                Real post-quantum operations. Uses noble-post-quantum (ml_dsa65, ml_kem768). No fake hex strings.
              </p>
            </div>
            <div className="fragment pres-card pres-card-teal" style={{ padding: '14px 18px' }}>
              <p style={{ fontSize: '0.65em', color: '#00d4ff', marginBottom: '4px', fontWeight: 600 }}>blockchain.ts</p>
              <p style={{ fontSize: '0.6em', color: '#94a3b8', lineHeight: 1.5, marginBottom: 0 }}>
                Genuine SHA3-256 block hashing. Real Merkle tree computation. Chain validation detects actual tampering.
              </p>
            </div>
            <div className="fragment pres-card pres-card-teal" style={{ padding: '14px 18px' }}>
              <p style={{ fontSize: '0.65em', color: '#00d4ff', marginBottom: '4px', fontWeight: 600 }}>contracts.ts</p>
              <p style={{ fontSize: '0.6em', color: '#94a3b8', lineHeight: 1.5, marginBottom: 0 }}>
                Policy evaluation engine. Every access decision generates a blockchain transaction. Mirrors Hyperledger Chaincode structure.
              </p>
            </div>
          </div>
        </div>
        <aside className="notes">
          Point out the separation of concerns: cryptographic library, blockchain engine, and smart contract evaluator
          are all independent modules. This mirrors how a production Hyperledger deployment is structured.
        </aside>
      </section>

      {/* Sub-slide B: Decisions */}
      <section data-transition="fade">
        <h2>Critical Engineering Decisions</h2>
        <div className="grid-2" style={{ marginTop: '20px', gap: '16px' }}>
          {[
            { decision: 'Generate all key pairs at startup, not on demand.', rationale: 'Dilithium key generation takes 150–400ms per pair. Startup generation eliminates runtime delays.', tradeoff: '2–4 second startup time in exchange for instant crypto operations.' },
            { decision: 'setTimeout-based nonce loop for block mining.', rationale: 'Synchronous mining blocks the JS event loop, freezing the UI. setTimeout yields control between iterations.', tradeoff: '100–200ms overhead in exchange for non-blocking, demonstrable mining.' },
            { decision: 'Label simulated components explicitly in UI.', rationale: 'A reviewer who discovers undisclosed simulation loses trust. Transparent labeling demonstrates intellectual honesty.', tradeoff: 'Reduced visual impressiveness for complete reviewer trust.' },
            { decision: 'JavaScript policy engine mirroring chaincode.', rationale: 'Actual Fabric chaincode requires a running network. The JS engine is structurally identical — logic is the same.', tradeoff: 'No actual EVM execution, but portable and deployable by any reviewer.' },
          ].map((d, i) => (
            <div key={i} className="fragment pres-card" style={{ padding: '18px' }}>
              <p style={{ fontSize: '0.68em', color: '#00d4ff', marginBottom: '8px', fontWeight: 600 }}>{d.decision}</p>
              <p style={{ fontSize: '0.6em', color: '#94a3b8', lineHeight: 1.5, marginBottom: '8px' }}>{d.rationale}</p>
              <p style={{ fontSize: '0.58em', color: '#64748b', marginBottom: 0, fontStyle: 'italic' }}>Trade-off: {d.tradeoff}</p>
            </div>
          ))}
        </div>
        <aside className="notes">
          Each decision card shows the engineering reasoning. These aren't compromises — they're deliberate choices
          that optimize for the demo's primary goal: convincing a technical reviewer.
        </aside>
      </section>
    </section>
  );
}
