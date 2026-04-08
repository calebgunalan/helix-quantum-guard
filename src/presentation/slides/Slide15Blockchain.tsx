import ScrambleText from '../components/ScrambleText';

export default function Slide15Blockchain() {
  return (
    <section data-auto-animate data-transition="fade">
      <div className="pres-title-bar"><h2>An Audit Trail That Cannot Lie</h2></div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'center' }}>
        {[
          { num: '14,841', hash: '0x9f3a...', prev: '0x7d1b...', txs: ['ACCESS_GRANTED', 'CONSENT_UPDATED'] },
          { num: '14,842', hash: '0x4c2d...', prev: '0x9f3a...', txs: ['LOGIN_SUCCESS', 'KEY_ROTATED'] },
          { num: '14,843', hash: '0x7b1e...', prev: '0x4c2d...', txs: ['POLICY_UPDATED', 'ACCESS_DENIED', 'CREDENTIAL_ISSUED', 'IDENTITY_REGISTERED'] },
        ].map((block, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div className="block-card pres-card-interactive" data-id={`block-${block.num.replace(/,/g, '')}`}>
              <p style={{ color: '#2C5F2D', fontWeight: 700, marginBottom: '6px' }}>Block #{block.num}</p>
              <p style={{ fontSize: '0.85em', color: '#1A2E1A' }}>Hash: <ScrambleText text={block.hash} /></p>
              <p style={{ fontSize: '0.85em', color: '#1A2E1A' }}>Prev: <ScrambleText text={block.prev} style={{ color: '#6B8A6B' }} /></p>
              <p style={{ color: '#6B8A6B', marginTop: '6px', fontSize: '0.85em' }}>TX: {block.txs.length} events</p>
              {block.txs.map((tx) => (
                <span key={tx} style={{ display: 'inline-block', fontSize: '0.7em', color: '#2C5F2D', background: 'rgba(125,184,90,0.1)', padding: '2px 6px', borderRadius: '3px', margin: '2px 3px 2px 0', border: '0.5px solid #E0EBD8' }}>
                  {tx}
                </span>
              ))}
            </div>
            {i < 2 && (
              <svg width="40" height="20">
                <line x1="0" y1="10" x2="32" y2="10" stroke="#7DB85A" strokeWidth="1.5" strokeDasharray="4,2">
                  <animate attributeName="stroke-dashoffset" values="6;0" dur="1s" repeatCount="indefinite" />
                </line>
                <polygon points="32,5 40,10 32,15" fill="#7DB85A" />
              </svg>
            )}
          </div>
        ))}
      </div>
      <div className="fragment callout" style={{ marginTop: '20px' }}>
        <p style={{ fontSize: '0.74em', color: '#3A5C3A', lineHeight: 1.7, marginBottom: 0 }}>
          Changing any transaction in Block #14,841 changes its hash. That invalidates Block #14,842's "Prev" field, which invalidates Block #14,843. The entire chain after the modified block becomes invalid.
        </p>
      </div>
      <aside className="notes">Point out how each block's Prev hash matches the previous block's Hash.</aside>
    </section>
  );
}
