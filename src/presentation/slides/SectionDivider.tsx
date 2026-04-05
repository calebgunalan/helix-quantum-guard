interface Props {
  number: string;
  title: string;
  subtitle: string;
}

export default function SectionDivider({ number, title, subtitle }: Props) {
  return (
    <section data-auto-animate data-transition="fade">
      <div
        data-id={`section-num-${number}`}
        className="section-num-breathe"
        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-55%)', fontSize: '14em', fontWeight: 900, color: 'rgba(0,212,255,0.03)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}
      >
        {number}
      </div>
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <h3 style={{ fontSize: '0.75em', letterSpacing: '4px', textTransform: 'uppercase', color: '#00d4ff', marginBottom: '24px' }}>
          Section {number}
        </h3>
        <h2 data-id={`section-title-${number}`} style={{ fontSize: '1.8em', fontWeight: 700, marginBottom: '20px', textAlign: 'center' }}>{title}</h2>
        <p style={{ fontSize: '0.85em', color: '#94a3b8', maxWidth: '600px', textAlign: 'center', lineHeight: 1.6 }}>{subtitle}</p>
      </div>
    </section>
  );
}
