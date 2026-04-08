import { useEffect, useRef, useState, useCallback } from 'react';
import Reveal from 'reveal.js';
import '../presentation/theme.css';
import '../presentation/animations.css';
import { TOTAL_SLIDES, HELIX_ID_DEMO_URL } from '../presentation/constants';

// System Internals Monitor
import SystemInternalsMonitor from '../presentation/components/SystemInternalsMonitor';

// Section Divider
import SectionDivider from '../presentation/slides/SectionDivider';

// SECTION 1 — OPENING
import Slide01Title from '../presentation/slides/Slide01Title';
import Slide02Abstract from '../presentation/slides/Slide02Abstract';

// SECTION 2 — PROBLEM STATEMENT
import Slide10ProblemStatement from '../presentation/slides/Slide10ProblemStatement';

// SECTION 3 — LITERATURE REVIEW
import Slide09LitSurvey from '../presentation/slides/Slide09LitSurvey';
import Slide03Objectives from '../presentation/slides/Slide03Objectives';

// SECTION 4 — EXISTING SYSTEM
import Slide08ExistingSystem from '../presentation/slides/Slide08ExistingSystem';
import Slide07TraditionalGap from '../presentation/slides/Slide07TraditionalGap';

// SECTION 5 — PROPOSED SYSTEM
import Slide08IntroHelixID from '../presentation/slides/Slide08IntroHelixID';
import Slide11WhyQuantum from '../presentation/slides/Slide11WhyQuantum';
import Slide13PostQuantum from '../presentation/slides/Slide13PostQuantum';
import Slide14DID from '../presentation/slides/Slide14DID';
import Slide15Blockchain from '../presentation/slides/Slide15Blockchain';
import Slide16SmartContract from '../presentation/slides/Slide16SmartContract';
import Slide17ZKP from '../presentation/slides/Slide17ZKP';
import Slide18FourActors from '../presentation/slides/Slide18FourActors';
import Slide19FeatureMap from '../presentation/slides/Slide19FeatureMap';

// SECTION 6 — HW/SW REQUIREMENTS
import Slide19HardwareReq from '../presentation/slides/Slide19HardwareReq';
import Slide20SoftwareReq from '../presentation/slides/Slide20SoftwareReq';

// SECTION 7 — MODULES
import Slide21ModulesOverview from '../presentation/slides/Slide21ModulesOverview';
import Slide22ModulesFoundation from '../presentation/slides/Slide22ModulesFoundation';
import Slide23ModulesIdentity from '../presentation/slides/Slide23ModulesIdentity';

// SECTION 8 — ARCHITECTURE & DIAGRAMS
import Slide12Architecture from '../presentation/slides/Slide12Architecture';
import Slide25FlowDiagram from '../presentation/slides/Slide25FlowDiagram';
import Slide26ERDiagram from '../presentation/slides/Slide26ERDiagram';
import Slide27UseCaseDiagram from '../presentation/slides/Slide27UseCaseDiagram';
import Slide28ClassDiagram from '../presentation/slides/Slide28ClassDiagram';
import Slide29SequenceDiagram from '../presentation/slides/Slide29SequenceDiagram';
import Slide30ActivityDiagram from '../presentation/slides/Slide30ActivityDiagram';
import Slide11TechStack from '../presentation/slides/Slide11TechStack';

// SECTION 9 — RESULTS & DISCUSSIONS
import Slide24Implementation from '../presentation/slides/Slide24Implementation';
import Slide20DemoAuth from '../presentation/slides/Slide20DemoAuth';
import Slide21DemoAccess from '../presentation/slides/Slide21DemoAccess';
import Slide22DemoTamper from '../presentation/slides/Slide22DemoTamper';
import Slide23DemoEmergency from '../presentation/slides/Slide23DemoEmergency';
import Slide38PerformanceMetrics from '../presentation/slides/Slide38PerformanceMetrics';
import Slide39ComparativeAnalysis from '../presentation/slides/Slide39ComparativeAnalysis';
import Slide25RealVsSimulated from '../presentation/slides/Slide25RealVsSimulated';
import Slide26QuantumTimeline from '../presentation/slides/Slide26QuantumTimeline';

// SECTION 10 — CONCLUSION & FUTURE
import Slide42Conclusion from '../presentation/slides/Slide42Conclusion';
import Slide29Roadmap from '../presentation/slides/Slide29Roadmap';

// SECTION 11 — REFERENCES
import Slide44References from '../presentation/slides/Slide44References';

// SECTION 12 — PUBLICATIONS
import Slide45Publications from '../presentation/slides/Slide45Publications';

// CLOSING
import Slide30Closing from '../presentation/slides/Slide30Closing';

export default function Presentation() {
  const deckRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<any>(null);
  const [slideNum, setSlideNum] = useState(1);
  const [showDemoBtn, setShowDemoBtn] = useState(false);

  useEffect(() => {
    // Cursor spotlight tracker
    const handleMouse = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--cursor-x', e.clientX + 'px');
      document.documentElement.style.setProperty('--cursor-y', e.clientY + 'px');
    };
    document.addEventListener('mousemove', handleMouse);
    return () => document.removeEventListener('mousemove', handleMouse);
  }, []);

  useEffect(() => {
    if (!deckRef.current || revealRef.current) return;

    const deck = new (Reveal as any)(deckRef.current, {
      hash: true,
      controls: true,
      progress: false,
      center: false,
      transition: 'fade',
      transitionSpeed: 'slow',
      backgroundTransition: 'fade',
      keyboard: true,
      touch: true,
      width: 1280,
      height: 720,
      slideNumber: false,
      fragments: true,
      overview: true,
      autoAnimate: true,
      autoAnimateDuration: 0.9,
      autoAnimateEasing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      autoAnimateUnmatched: true,
      autoAnimateStyles: [
        'opacity', 'color', 'background-color',
        'padding', 'font-size', 'line-height',
        'letter-spacing', 'border-width', 'border-color',
        'border-radius', 'outline', 'outline-offset',
      ],
    });

    deck.initialize().then(() => {
      revealRef.current = deck;
      deck.on('slidechanged', (e: any) => {
        const idx = e.indexh + 1;
        setSlideNum(idx);
        setShowDemoBtn(idx >= 30 && idx <= 42);
      });
    });

    return () => {
      try { deck.destroy(); } catch {}
      revealRef.current = null;
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const toggleOverview = () => {
    revealRef.current?.toggleOverview();
  };

  const handleExportPptx = useCallback(async () => {
    const { exportToPptx } = await import('./exportPptx');
    await exportToPptx();
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#FAFDF6' }}>
      {/* Floating toolbar */}
      <div className="pres-toolbar">
        <button onClick={toggleFullscreen} title="Fullscreen">⛶ Fullscreen</button>
        <button onClick={toggleOverview} title="Overview Grid">🏠 Overview</button>
        <button onClick={handleExportPptx} title="Download PPTX">📥 Download PPTX</button>
      </div>

      {/* Slide counter */}
      <div className="slide-counter">
        Slide {slideNum} / {TOTAL_SLIDES}
      </div>

      {/* HelixID wordmark */}
      <div className="helix-wordmark" data-id="helix-wordmark">HelixID</div>

      {/* System Internals Monitor */}
      <SystemInternalsMonitor />

      {/* Jump to Demo button */}
      {showDemoBtn && (
        <a
          href={HELIX_ID_DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'fixed', bottom: '50px', right: '24px', zIndex: 40,
            background: 'rgba(125,184,90,0.15)', border: '1px solid rgba(125,184,90,0.3)',
            color: '#2C5F2D', padding: '8px 16px', borderRadius: '4px', fontSize: '13px',
            textDecoration: 'none', cursor: 'pointer',
          }}
        >
          🚀 Jump to Demo
        </a>
      )}

      {/* Reveal.js deck */}
      <div className="reveal" ref={deckRef}>
        <div className="slides">
          {/* SECTION 1 — OPENING */}
          <SectionDivider number="01" title="Opening" subtitle="Project introduction and research context" />
          <Slide01Title />
          <Slide02Abstract />

          {/* SECTION 2 — PROBLEM STATEMENT */}
          <SectionDivider number="02" title="Problem Statement" subtitle="The dual threat facing healthcare identity systems" />
          <Slide10ProblemStatement />

          {/* SECTION 3 — LITERATURE REVIEW */}
          <SectionDivider number="03" title="Literature Review" subtitle="Research foundation across four intersecting domains" />
          <Slide09LitSurvey />
          <Slide03Objectives />

          {/* SECTION 4 — EXISTING SYSTEM OVERVIEW */}
          <SectionDivider number="04" title="Existing System Overview" subtitle="How healthcare IAM works today and where it fails" />
          <Slide08ExistingSystem />
          <Slide07TraditionalGap />

          {/* SECTION 5 — PROPOSED SYSTEM */}
          <SectionDivider number="05" title="Proposed System" subtitle="HelixID — a quantum-resistant blockchain IAM architecture" />
          <Slide08IntroHelixID />
          <Slide11WhyQuantum />
          <Slide13PostQuantum />
          <Slide14DID />
          <Slide15Blockchain />
          <Slide16SmartContract />
          <Slide17ZKP />
          <Slide18FourActors />
          <Slide19FeatureMap />

          {/* SECTION 6 — HW/SW REQUIREMENTS */}
          <SectionDivider number="06" title="Hardware & Software Requirements" subtitle="Infrastructure specifications for demo and production" />
          <Slide19HardwareReq />
          <Slide20SoftwareReq />

          {/* SECTION 7 — LIST OF MODULES */}
          <SectionDivider number="07" title="List of Modules" subtitle="Eight system modules across three architectural layers" />
          <Slide21ModulesOverview />
          <Slide22ModulesFoundation />
          <Slide23ModulesIdentity />

          {/* SECTION 8 — ARCHITECTURE & DIAGRAMS */}
          <SectionDivider number="08" title="Architecture & Diagrams" subtitle="System architecture, data flow, and UML specifications" />
          <Slide12Architecture />
          <Slide25FlowDiagram />
          <Slide26ERDiagram />
          <Slide27UseCaseDiagram />
          <Slide28ClassDiagram />
          <Slide29SequenceDiagram />
          <Slide30ActivityDiagram />
          <Slide11TechStack />

          {/* SECTION 9 — RESULTS & DISCUSSIONS */}
          <SectionDivider number="09" title="Results & Discussions" subtitle="Implementation evidence, demo results, and analysis" />
          <Slide24Implementation />
          <Slide20DemoAuth />
          <Slide21DemoAccess />
          <Slide22DemoTamper />
          <Slide23DemoEmergency />
          <Slide38PerformanceMetrics />
          <Slide39ComparativeAnalysis />
          <Slide25RealVsSimulated />
          <Slide26QuantumTimeline />

          {/* SECTION 10 — CONCLUSION & FUTURE */}
          <SectionDivider number="10" title="Conclusion & Future Enhancements" subtitle="Summary of contributions and production roadmap" />
          <Slide42Conclusion />
          <Slide29Roadmap />

          {/* SECTION 11 — REFERENCES */}
          <SectionDivider number="11" title="References" subtitle="Standards, literature, and technical documentation" />
          <Slide44References />

          {/* SECTION 12 — PUBLICATIONS */}
          <SectionDivider number="12" title="Publications" subtitle="Research publications and academic output" />
          <Slide45Publications />

          {/* CLOSING */}
          <Slide30Closing />
        </div>
      </div>
    </div>
  );
}
