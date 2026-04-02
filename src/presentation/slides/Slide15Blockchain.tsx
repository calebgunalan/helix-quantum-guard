export default function Slide15Blockchain() {
  return (
    <section data-transition="slide">
      <h2>An Audit Trail That Cannot Lie</h2>

      {/* Block chain visualization */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'center', marginTop: '28px' }}>
        {[
          { num: '14,841', hash: '0x9f3a...', prev: '0x7d1b...', txs: ['ACCESS_GRANTED', 'CONSENT_UPDATED'] },
          { num: '14,842', hash: '0x4c2d...', prev: '0x9f3a...', txs: ['LOGIN_SUCCESS', 'KEY_ROTATED'] },
          { num: '14,843', hash: '0x7b1e...', prev: '0x4c2d...', txs: ['POLICY_UPDATED', 'ACCESS_DENIED', 'CREDENTIAL_ISSUED', 'IDENTITY_REGISTERED'] },
        ].map((block, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div className="block-card" style={{ minWidth: '220px' }}>
              <p style={{ color: '#00d4ff', fontWeight: 700, marginBottom: '6px' }}>Block #{block.num}</p>
              <p className="mono" style={{ fontSize: '0.85em' }}>Hash: {block.hash}</p>
              <p className="mono" style={{ fontSize: '0.85em', color: '#64748b' }}>Prev: {block.prev}</p>
              <p style={{ color: '#94a3b8', marginTop: '6px', fontSize: '0.85em' }}>TX: {block.txs.length} events</p>
              {block.txs.map((tx) => (
                <span key={tx} style={{ display: 'inline-block', fontSize: '0.7em', color: '#cbd5e1', background: 'rgba(0,212,255,0.06)', padding: '2px 6px', borderRadius: '3px', margin: '2px 3px 2px 0' }}>
                  {tx}
                </span>
              ))}
            </div>
            {i < 2 && (
              <svg width="40" height="20"><line x1="0" y1="10" x2="32" y2="10" stroke="#00d4ff" strokeWidth="1.5" /><polygon points="32,5 40,10 32,15" fill="#00d4ff" /></svg>
            )}
          </div>
        ))}
      </div>

      {/* Labels */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '100px', marginTop: '8px' }}>
        <span style={{ fontSize: '0.6em', color: '#00d4ff' }}>Cryptographic Link →</span>
        <span style={{ fontSize: '0.6em', color: '#00d4ff' }}>Cryptographic Link →</span>
      </div>

      <div className="fragment" style={{ marginTop: '28px', maxWidth: '780px' }}>
        <p style={{ fontSize: '0.74em', color: '#94a3b8', lineHeight: 1.7 }}>
          Changing any transaction in Block #14,841 changes its hash. That invalidates Block #14,842's "Prev" field.
          Which invalidates Block #14,843. The entire chain after the modified block becomes invalid — detectable instantly by any network node.
        </p>
      </div>

      <div className="fragment pres-card" style={{ marginTop: '16px', padding: '12px 20px', display: 'inline-block' }}>
        <p style={{ fontSize: '0.7em', color: '#00d4ff', marginBottom: 0 }}>This is verified live in the HelixID demo.</p>
      </div>

      <aside className="notes">
        Point out how each block's Prev hash matches the previous block's Hash. This is the fundamental mechanism
        that makes blockchain tamper-evident. The demo includes a live tamper demonstration.
      </aside>
    </section>
  );
}
