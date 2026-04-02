export default function Slide16SmartContract() {
  return (
    <section data-transition="slide">
      <h2>Access Policies That Enforce Themselves</h2>

      <div className="policy-card fragment" style={{ marginTop: '24px', maxWidth: '600px' }}>
{`POLICY RULE #3 — Contract: 0x8c2f4a7d...
─────────────────────────────────────────
IF   role        == "hospital_staff"
AND  department  == "cardiology"
AND  patient.consent == true
THEN ALLOW access TO cardiology_records
WITH level "read-write"
FOR  DURATION 72 hours
─────────────────────────────────────────
Deployed: Block #13,201 | By: DID:0x1c6b...`}
      </div>

      <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div className="fragment">
          <p style={{ fontSize: '0.76em', color: '#cbd5e1', lineHeight: 1.6 }}>
            <strong style={{ color: '#00d4ff' }}>Rules live on-chain</strong>, not in configuration files. No administrator can secretly change them without a recorded transaction.
          </p>
        </div>
        <div className="fragment">
          <p style={{ fontSize: '0.76em', color: '#cbd5e1', lineHeight: 1.6 }}>
            <strong style={{ color: '#00d4ff' }}>Every access decision logs</strong> which rule was invoked and who invoked it. The accountability is absolute.
          </p>
        </div>
        <div className="fragment">
          <p style={{ fontSize: '0.76em', color: '#cbd5e1', lineHeight: 1.6 }}>
            <strong style={{ color: '#00d4ff' }}>New policies require</strong> an admin's Dilithium-signed transaction to deploy — creating a governance trail for every policy change.
          </p>
        </div>
      </div>

      <aside className="notes">
        Show the policy card first — it's intentionally readable as plain English.
        Then reveal each key point. Emphasize: this is not a config file, it's a deployed smart contract.
      </aside>
    </section>
  );
}
