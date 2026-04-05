export default function Slide23DemoEmergency() {
  return (
    <section data-auto-animate data-transition="slide">
      <h2>Demo: Break-Glass with Full Accountability</h2>
      <div style={{ display: 'flex', gap: '32px', marginTop: '24px' }}>
        {/* Problem */}
        <div style={{ flex: '0 0 40%' }}>
          <h4 style={{ fontSize: '0.8em', color: '#dc2626', marginBottom: '12px' }}>The Problem</h4>
          <p style={{ fontSize: '0.72em', color: '#94a3b8', lineHeight: 1.7 }}>
            In a genuine emergency, rigid access control can cost lives. Traditional IAM systems solve this with "admin backdoors" — privileged accounts that can bypass policies, often leaving no trace.
          </p>
        </div>

        {/* HelixID solution flow */}
        <div style={{ flex: 1 }}>
          <h4 style={{ fontSize: '0.8em', color: '#00d4ff', marginBottom: '16px' }}>How HelixID Handles It</h4>
          {[
            { label: 'Emergency occurs', color: '#dc2626', detail: '' },
            { label: 'Staff invokes Break-Glass override', color: '#f59e0b', detail: 'Types CONFIRM EMERGENCY, selects resource' },
            { label: 'EMERGENCY_ACCESS_INVOKED transaction', color: '#00d4ff', detail: "Signed with Staff's Dilithium key — permanent, cannot be deleted" },
            { label: 'Immediate alert to all Admins & Moderators', color: '#dc2626', detail: 'Red banner across all dashboards — impossible to miss' },
            { label: 'Access Granted Immediately', color: '#16a34a', detail: 'No approval required — but everything is recorded' },
          ].map((s, i) => (
            <div key={i} className="fragment" style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'flex-start' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: s.color, flexShrink: 0, marginTop: '6px' }} />
              <div>
                <p style={{ fontSize: '0.72em', color: '#cbd5e1', marginBottom: '2px', fontWeight: 500 }}>{s.label}</p>
                {s.detail && <p style={{ fontSize: '0.6em', color: '#64748b', marginBottom: 0 }}>{s.detail}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fragment pres-card pres-card-teal" style={{ marginTop: '20px', padding: '14px 20px' }}>
        <p style={{ fontSize: '0.74em', color: '#cbd5e1', marginBottom: 0 }}>
          HelixID does not prevent emergency access. It makes emergency access <strong style={{ color: '#00d4ff' }}>inevitable, immediate, and permanently accountable</strong>. This is better than an admin backdoor in every measurable way.
        </p>
      </div>

      <aside className="notes">
        This addresses a common objection: "doesn't strict access control endanger patients?" The answer is no —
        emergency access is instant, but it's also permanently recorded and immediately visible.
      </aside>
    </section>
  );
}
