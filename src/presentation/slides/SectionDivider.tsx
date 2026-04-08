interface Props {
  number: string;
  title: string;
  subtitle: string;
}

/* SVG leaf path */
const LeafSVG = ({ fill, opacity, style }: { fill: string; opacity: number; style: React.CSSProperties }) => (
  <svg viewBox="0 0 300 300" style={{ position: 'absolute', pointerEvents: 'none', ...style }}>
    <path d="M150,22 C200,52 250,105 238,168 C226,224 187,258 150,272 C113,258 74,224 62,168 C50,105 100,52 150,22Z" fill={fill} opacity={opacity} />
    <line x1="150" y1="40" x2="150" y2="260" stroke="white" strokeWidth="2" opacity="0.4" fill="none" />
    <path d="M150,100 C120,85 100,90 90,100" stroke="white" strokeWidth="1.5" opacity="0.3" fill="none" />
    <path d="M150,100 C180,85 200,90 210,100" stroke="white" strokeWidth="1.5" opacity="0.3" fill="none" />
    <path d="M150,150 C115,135 95,142 82,155" stroke="white" strokeWidth="1.5" opacity="0.3" fill="none" />
    <path d="M150,150 C185,135 205,142 218,155" stroke="white" strokeWidth="1.5" opacity="0.3" fill="none" />
    <path d="M150,200 C125,188 105,195 90,205" stroke="white" strokeWidth="1.5" opacity="0.3" fill="none" />
    <path d="M150,200 C175,188 195,195 210,205" stroke="white" strokeWidth="1.5" opacity="0.3" fill="none" />
  </svg>
);

/* Botanical sprig SVG for section dividers */
const SprigSVG = () => (
  <svg viewBox="0 0 40 80" style={{ position: 'absolute', right: 30, bottom: 40, width: 80, opacity: 0.18, pointerEvents: 'none' }}>
    <line x1="20" y1="0" x2="20" y2="80" stroke="#B8DDA0" strokeWidth="1.5" />
    {[15, 30, 45, 60].map((y, i) => (
      <g key={y}>
        <ellipse cx={i % 2 === 0 ? 10 : 30} cy={y} rx="8" ry="4" fill="#92D660" opacity="0.6" transform={`rotate(${i % 2 === 0 ? -20 : 20} ${i % 2 === 0 ? 10 : 30} ${y})`} />
      </g>
    ))}
  </svg>
);

export default function SectionDivider({ number, title, subtitle }: Props) {
  return (
    <section data-auto-animate data-transition="fade" style={{ background: '#163A21' }}>
      {/* Botanical watermarks for dark slide */}
      <div className="botanical-layer">
        <LeafSVG fill="#92D660" opacity={0.22} style={{ top: '-10%', right: '-10%', width: '38%', transform: 'rotate(35deg)' }} />
        <LeafSVG fill="#B8DDA0" opacity={0.14} style={{ bottom: '-10%', left: '-8%', width: '28%', transform: 'rotate(215deg)' }} />
      </div>

      <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', padding: '0 8%' }}>
        {/* Large ghosted number */}
        <div
          data-id={`section-num-${number}`}
          className="section-num-breathe"
          style={{ fontSize: '96px', fontWeight: 900, color: '#1D4D2A', lineHeight: 1, marginBottom: '8px' }}
        >
          {number}
        </div>

        {/* Accent bar */}
        <div style={{ width: 100, height: 5, background: '#7DB85A', borderRadius: 2, marginBottom: 24 }} />

        {/* Title */}
        <h2 data-id={`section-title-${number}`} style={{ fontSize: '44px', fontWeight: 700, color: '#FFFFFF', marginBottom: '16px' }}>
          {title}
        </h2>

        {/* Subtitle */}
        <p style={{ fontSize: '17px', fontStyle: 'italic', color: '#B8DDA0', maxWidth: '600px', lineHeight: 1.6 }}>
          {subtitle}
        </p>
      </div>

      <SprigSVG />
    </section>
  );
}
