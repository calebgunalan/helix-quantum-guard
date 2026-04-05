import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CryptoOp {
  id: number;
  type: string;
  algo: string;
  input: string;
  output: string;
  time: string;
  status: 'success' | 'pending';
}

interface Block {
  number: number;
  hash: string;
  txCount: number;
  timestamp: string;
  miner: string;
}

const ALGO_COLORS: Record<string, string> = {
  'Dilithium3': '#00d4ff',
  'Kyber768': '#7c3aed',
  'SHA3-256': '#f59e0b',
  'AES-256': '#16a34a',
};

function generateCryptoOp(id: number): CryptoOp {
  const ops = [
    { type: 'SIGN', algo: 'Dilithium3', input: '0x' + Math.random().toString(16).slice(2, 10), output: '0x' + Math.random().toString(16).slice(2, 18) },
    { type: 'VERIFY', algo: 'Dilithium3', input: '0x' + Math.random().toString(16).slice(2, 10), output: 'true ✓' },
    { type: 'ENCAPSULATE', algo: 'Kyber768', input: 'pubKey_0x' + Math.random().toString(16).slice(2, 8), output: 'ct_0x' + Math.random().toString(16).slice(2, 14) },
    { type: 'HASH', algo: 'SHA3-256', input: 'tx_data_' + Math.floor(Math.random() * 9999), output: '0x' + Math.random().toString(16).slice(2, 18) },
    { type: 'ENCRYPT', algo: 'AES-256', input: 'session_' + Math.floor(Math.random() * 999), output: '[encrypted]' },
  ];
  const op = ops[Math.floor(Math.random() * ops.length)];
  return { id, ...op, time: new Date().toISOString().slice(11, 23), status: 'success' };
}

function generateBlock(num: number): Block {
  return {
    number: num,
    hash: '0x' + Math.random().toString(16).slice(2, 18),
    txCount: Math.floor(Math.random() * 5) + 1,
    timestamp: new Date().toISOString().slice(11, 19),
    miner: 'node-' + Math.floor(Math.random() * 4),
  };
}

export default function SystemInternalsMonitor() {
  const [isOpen, setIsOpen] = useState(false);
  const [ops, setOps] = useState<CryptoOp[]>([]);
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [networkStats, setNetworkStats] = useState({ peers: 4, latency: 12, tps: 0, uptime: '99.97%' });
  const [deepDive, setDeepDive] = useState<CryptoOp | Block | null>(null);
  const opIdRef = useRef(0);
  const blockNumRef = useRef(14841);

  useEffect(() => {
    if (!isOpen) return;
    // Seed initial data
    const initialOps = Array.from({ length: 8 }, () => generateCryptoOp(opIdRef.current++));
    const initialBlocks = Array.from({ length: 5 }, () => generateBlock(blockNumRef.current++));
    setOps(initialOps);
    setBlocks(initialBlocks);

    const opInterval = setInterval(() => {
      setOps(prev => [generateCryptoOp(opIdRef.current++), ...prev].slice(0, 30));
      setNetworkStats(prev => ({ ...prev, tps: Math.floor(Math.random() * 12) + 3, latency: Math.floor(Math.random() * 20) + 5 }));
    }, 2000);

    const blockInterval = setInterval(() => {
      setBlocks(prev => [generateBlock(blockNumRef.current++), ...prev].slice(0, 10));
    }, 8000);

    return () => { clearInterval(opInterval); clearInterval(blockInterval); };
  }, [isOpen]);

  return (
    <>
      {/* Floating trigger */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed', bottom: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 50,
          background: 'rgba(15,23,42,0.9)', border: '1px solid rgba(0,212,255,0.3)',
          color: '#00d4ff', padding: '8px 20px', borderRadius: '999px', fontSize: '12px',
          cursor: 'pointer', backdropFilter: 'blur(8px)', fontFamily: "'JetBrains Mono', monospace",
          display: 'flex', alignItems: 'center', gap: 8,
        }}
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,212,255,0.3)' }}
        whileTap={{ scale: 0.95 }}
      >
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#16a34a', display: 'inline-block' }} />
        {isOpen ? '✕ Close Internals' : '⚙ System Internals'}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 45,
              background: 'rgba(5,10,20,0.95)', backdropFilter: 'blur(12px)',
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, padding: '60px 24px 60px',
              fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#e2e8f0',
              overflow: 'hidden',
            }}
          >
            {/* Column 1: Crypto Operations Feed */}
            <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <h3 style={{ color: '#00d4ff', fontSize: '13px', marginBottom: 12, fontWeight: 700, letterSpacing: 2 }}>
                🔐 CRYPTO OPERATIONS
              </h3>
              <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 4 }}>
                {ops.map(op => (
                  <motion.div
                    key={op.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => setDeepDive(op)}
                    style={{
                      background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(0,212,255,0.1)',
                      borderLeft: `3px solid ${ALGO_COLORS[op.algo] || '#00d4ff'}`,
                      borderRadius: 6, padding: '8px 10px', cursor: 'pointer',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                      <span style={{ color: ALGO_COLORS[op.algo], fontWeight: 700 }}>{op.type}</span>
                      <span style={{ color: '#64748b', fontSize: '9px' }}>{op.time}</span>
                    </div>
                    <div style={{ color: '#94a3b8', fontSize: '9px' }}>
                      {op.algo} → {op.output.slice(0, 20)}...
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Column 2: Blockchain Engine */}
            <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <h3 style={{ color: '#7c3aed', fontSize: '13px', marginBottom: 12, fontWeight: 700, letterSpacing: 2 }}>
                ⛓ BLOCKCHAIN ENGINE
              </h3>
              <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {blocks.map(block => (
                  <motion.div
                    key={block.number}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={() => setDeepDive(block)}
                    style={{
                      background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)',
                      borderRadius: 8, padding: 12, cursor: 'pointer',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#7c3aed', fontWeight: 700 }}>Block #{block.number.toLocaleString()}</span>
                      <span style={{ color: '#64748b', fontSize: '9px' }}>{block.timestamp}</span>
                    </div>
                    <div style={{ color: '#94a3b8', fontSize: '9px', marginTop: 4 }}>
                      Hash: {block.hash} | TXs: {block.txCount} | Miner: {block.miner}
                    </div>
                    {/* Mini chain connector */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 6 }}>
                      {Array.from({ length: block.txCount }, (_, i) => (
                        <div key={i} style={{ width: 4, height: 4, borderRadius: '50%', background: '#7c3aed', opacity: 0.6 }} />
                      ))}
                      <span style={{ fontSize: '8px', color: '#64748b' }}>transactions</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Column 3: Network Monitor */}
            <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <h3 style={{ color: '#16a34a', fontSize: '13px', marginBottom: 12, fontWeight: 700, letterSpacing: 2 }}>
                🌐 NETWORK STATUS
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[
                  { label: 'PEERS', value: networkStats.peers, color: '#16a34a' },
                  { label: 'LATENCY', value: `${networkStats.latency}ms`, color: networkStats.latency < 15 ? '#16a34a' : '#f59e0b' },
                  { label: 'TPS', value: networkStats.tps, color: '#00d4ff' },
                  { label: 'UPTIME', value: networkStats.uptime, color: '#16a34a' },
                ].map(stat => (
                  <div key={stat.label} style={{
                    background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: 8, padding: 16, textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '9px', color: '#64748b', letterSpacing: 2, marginBottom: 8 }}>{stat.label}</div>
                    <div style={{ fontSize: '22px', fontWeight: 700, color: stat.color }}>{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Node map */}
              <div style={{ marginTop: 16, flex: 1, background: 'rgba(15,23,42,0.5)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 8, padding: 16, position: 'relative' }}>
                <div style={{ fontSize: '9px', color: '#64748b', letterSpacing: 2, marginBottom: 12 }}>NODE TOPOLOGY</div>
                <svg viewBox="0 0 200 140" style={{ width: '100%' }}>
                  {/* Nodes */}
                  {[
                    { x: 100, y: 30, label: 'Admin' },
                    { x: 40, y: 80, label: 'Node-1' },
                    { x: 160, y: 80, label: 'Node-2' },
                    { x: 70, y: 120, label: 'Node-3' },
                    { x: 130, y: 120, label: 'Node-4' },
                  ].map((n, i) => (
                    <g key={i}>
                      <circle cx={n.x} cy={n.y} r="8" fill="rgba(22,163,74,0.2)" stroke="#16a34a" strokeWidth="1">
                        <animate attributeName="r" values="8;10;8" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                      </circle>
                      <circle cx={n.x} cy={n.y} r="3" fill="#16a34a" />
                      <text x={n.x} y={n.y + 18} textAnchor="middle" fill="#64748b" fontSize="6">{n.label}</text>
                    </g>
                  ))}
                  {/* Connections */}
                  {[[0,1],[0,2],[1,3],[2,4],[3,4],[1,2]].map(([a,b], i) => {
                    const nodes = [{x:100,y:30},{x:40,y:80},{x:160,y:80},{x:70,y:120},{x:130,y:120}];
                    return <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} stroke="#16a34a" strokeWidth="0.5" opacity="0.3" />;
                  })}
                </svg>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Deep-dive modal */}
      <AnimatePresence>
        {deepDive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDeepDive(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 55,
              background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'rgba(15,23,42,0.98)', border: '1px solid rgba(0,212,255,0.2)',
                borderRadius: 12, padding: 32, maxWidth: 500, width: '90%',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {'algo' in deepDive ? (
                <>
                  <h3 style={{ color: '#00d4ff', marginBottom: 16 }}>{(deepDive as CryptoOp).type} Operation</h3>
                  <div style={{ display: 'grid', gap: 8, fontSize: '11px' }}>
                    <div><span style={{ color: '#64748b' }}>Algorithm:</span> <span style={{ color: ALGO_COLORS[(deepDive as CryptoOp).algo] }}>{(deepDive as CryptoOp).algo}</span></div>
                    <div><span style={{ color: '#64748b' }}>Input:</span> <span style={{ color: '#cbd5e1' }}>{(deepDive as CryptoOp).input}</span></div>
                    <div><span style={{ color: '#64748b' }}>Output:</span> <span style={{ color: '#cbd5e1' }}>{(deepDive as CryptoOp).output}</span></div>
                    <div><span style={{ color: '#64748b' }}>Timestamp:</span> <span style={{ color: '#cbd5e1' }}>{(deepDive as CryptoOp).time}</span></div>
                    <div><span style={{ color: '#64748b' }}>Status:</span> <span style={{ color: '#16a34a' }}>✓ {(deepDive as CryptoOp).status}</span></div>
                  </div>
                </>
              ) : (
                <>
                  <h3 style={{ color: '#7c3aed', marginBottom: 16 }}>Block #{(deepDive as Block).number.toLocaleString()}</h3>
                  <div style={{ display: 'grid', gap: 8, fontSize: '11px' }}>
                    <div><span style={{ color: '#64748b' }}>Hash:</span> <span style={{ color: '#cbd5e1' }}>{(deepDive as Block).hash}</span></div>
                    <div><span style={{ color: '#64748b' }}>Transactions:</span> <span style={{ color: '#cbd5e1' }}>{(deepDive as Block).txCount}</span></div>
                    <div><span style={{ color: '#64748b' }}>Miner:</span> <span style={{ color: '#cbd5e1' }}>{(deepDive as Block).miner}</span></div>
                    <div><span style={{ color: '#64748b' }}>Timestamp:</span> <span style={{ color: '#cbd5e1' }}>{(deepDive as Block).timestamp}</span></div>
                  </div>
                </>
              )}
              <button
                onClick={() => setDeepDive(null)}
                style={{
                  marginTop: 20, background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.3)',
                  color: '#00d4ff', padding: '6px 16px', borderRadius: 6, cursor: 'pointer', fontSize: '11px',
                }}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
