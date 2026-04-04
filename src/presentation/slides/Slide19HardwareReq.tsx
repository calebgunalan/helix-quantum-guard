export default function Slide19HardwareReq() {
  return (
    <section>
      {/* Sub-slide A: Demo Environment */}
      <section data-transition="slide" className="slide-dense-content">
        <h2 style={{ fontSize: '1.05em' }}>Hardware Requirements — Demo Environment</h2>
        <div className="slide-scroll-container" style={{ marginTop: '16px' }}>
          <table className="comparison-table" style={{ fontSize: '0.6em' }}>
            <thead>
              <tr><th>Component</th><th>Specification</th><th>Purpose</th></tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ color: '#cbd5e1' }}>Client Device</td>
                <td style={{ color: '#94a3b8' }}>Modern browser (Chrome/Firefox/Edge), 4GB RAM minimum</td>
                <td style={{ color: '#94a3b8' }}>Running HelixID React app, in-browser Dilithium/Kyber key generation</td>
              </tr>
              <tr>
                <td style={{ color: '#cbd5e1' }}>Processing</td>
                <td style={{ color: '#94a3b8' }}>2020+ processor, ~150–400ms per Dilithium3 key pair</td>
                <td style={{ color: '#94a3b8' }}>Six key pairs at startup — 2–4s total initialization</td>
              </tr>
              <tr>
                <td style={{ color: '#cbd5e1' }}>Server</td>
                <td style={{ color: '#16a34a', fontWeight: 600 }}>None required</td>
                <td style={{ color: '#94a3b8' }}>All blockchain state and crypto runs entirely in-browser via WebAssembly-compatible JS libraries</td>
              </tr>
            </tbody>
          </table>
        </div>
        <aside className="notes">Demo runs entirely client-side. No server infrastructure needed.</aside>
      </section>

      {/* Sub-slide B: Production Environment */}
      <section data-transition="slide" className="slide-dense-content">
        <h2 style={{ fontSize: '1.05em' }}>Hardware Requirements — Production (Hyperledger Fabric)</h2>
        <div className="slide-scroll-container" style={{ marginTop: '12px' }}>
          <table className="comparison-table" style={{ fontSize: '0.55em' }}>
            <thead>
              <tr><th>Component</th><th>Minimum</th><th>Recommended</th><th>Purpose</th></tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ color: '#cbd5e1' }}>Validator Nodes (4–7)</td>
                <td style={{ color: '#94a3b8' }}>4-core, 8GB RAM, 100GB SSD, 1Gbps</td>
                <td style={{ color: '#94a3b8' }}>8-core, 32GB RAM, 500GB NVMe, 10Gbps</td>
                <td style={{ color: '#94a3b8' }}>Fabric peers, chaincode, PBFT consensus</td>
              </tr>
              <tr>
                <td style={{ color: '#cbd5e1' }}>Ordering Service (1–3)</td>
                <td style={{ color: '#94a3b8' }}>4-core, 8GB RAM, 50GB SSD</td>
                <td style={{ color: '#94a3b8' }}>8-core, 16GB RAM, 200GB NVMe</td>
                <td style={{ color: '#94a3b8' }}>Transaction ordering, block creation</td>
              </tr>
              <tr>
                <td style={{ color: '#cbd5e1' }}>HSM</td>
                <td style={{ color: '#f59e0b' }}>—</td>
                <td style={{ color: '#94a3b8' }}>Thales Luna 7 (FIPS 140-2 Level 3)</td>
                <td style={{ color: '#94a3b8' }}>Dilithium private key storage — never in software</td>
              </tr>
              <tr>
                <td style={{ color: '#cbd5e1' }}>CA Server</td>
                <td style={{ color: '#94a3b8' }}>2-core, 4GB RAM, 50GB SSD</td>
                <td style={{ color: '#94a3b8' }}>—</td>
                <td style={{ color: '#94a3b8' }}>TLS certificates, Fabric enrollment</td>
              </tr>
              <tr>
                <td style={{ color: '#cbd5e1' }}>Load Balancer</td>
                <td style={{ color: '#94a3b8' }}>4-core, 8GB RAM</td>
                <td style={{ color: '#94a3b8' }}>—</td>
                <td style={{ color: '#94a3b8' }}>Client routing, rate limiting, TLS termination</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '0.55em', color: '#64748b', marginTop: '12px', fontStyle: 'italic' }}>
          Specs align with Hyperledger Fabric 2.5 production guidelines and HIPAA technical safeguard requirements.
        </p>
        <aside className="notes">Production hardware for a multi-hospital Hyperledger Fabric deployment.</aside>
      </section>
    </section>
  );
}
