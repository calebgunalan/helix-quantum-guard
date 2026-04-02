import { useEffect, useRef, useState, useCallback } from 'react';
import Reveal from 'reveal.js';
import '../presentation/theme.css';
import { TOTAL_SLIDES, HELIX_ID_DEMO_URL } from '../presentation/constants';

import Slide01Title from '../presentation/slides/Slide01Title';
import Slide02Abstract from '../presentation/slides/Slide02Abstract';
import Slide03Objectives from '../presentation/slides/Slide03Objectives';
import Slide04Stakes from '../presentation/slides/Slide04Stakes';
import Slide05HarvestNow from '../presentation/slides/Slide05HarvestNow';
import Slide06WhyHealthcare from '../presentation/slides/Slide06WhyHealthcare';
import Slide07TraditionalGap from '../presentation/slides/Slide07TraditionalGap';
import Slide08IntroHelixID from '../presentation/slides/Slide08IntroHelixID';
import Slide09LitSurvey from '../presentation/slides/Slide09LitSurvey';
import Slide10ProblemStatement from '../presentation/slides/Slide10ProblemStatement';
import Slide11TechStack from '../presentation/slides/Slide11TechStack';
import Slide12Architecture from '../presentation/slides/Slide12Architecture';
import Slide13PostQuantum from '../presentation/slides/Slide13PostQuantum';
import Slide14DID from '../presentation/slides/Slide14DID';
import Slide15Blockchain from '../presentation/slides/Slide15Blockchain';
import Slide16SmartContract from '../presentation/slides/Slide16SmartContract';
import Slide17ZKP from '../presentation/slides/Slide17ZKP';
import Slide18FourActors from '../presentation/slides/Slide18FourActors';
import Slide19FeatureMap from '../presentation/slides/Slide19FeatureMap';
import Slide20DemoAuth from '../presentation/slides/Slide20DemoAuth';
import Slide21DemoAccess from '../presentation/slides/Slide21DemoAccess';
import Slide22DemoTamper from '../presentation/slides/Slide22DemoTamper';
import Slide23DemoEmergency from '../presentation/slides/Slide23DemoEmergency';
import Slide24Implementation from '../presentation/slides/Slide24Implementation';
import Slide25RealVsSimulated from '../presentation/slides/Slide25RealVsSimulated';
import Slide26QuantumTimeline from '../presentation/slides/Slide26QuantumTimeline';
import Slide27Achievements from '../presentation/slides/Slide27Achievements';
import Slide28ArchDecisions from '../presentation/slides/Slide28ArchDecisions';
import Slide29Roadmap from '../presentation/slides/Slide29Roadmap';
import Slide30Closing from '../presentation/slides/Slide30Closing';

export default function Presentation() {
  const deckRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<any>(null);
  const [slideNum, setSlideNum] = useState(1);
  const [showDemoBtn, setShowDemoBtn] = useState(false);

  useEffect(() => {
    if (!deckRef.current || revealRef.current) return;

    const deck = new (Reveal as any)(deckRef.current, {
      hash: true,
      controls: true,
      progress: true,
      center: true,
      transition: 'slide',
      transitionSpeed: 'default',
      keyboard: true,
      touch: true,
      width: '100%',
      height: '100%',
      margin: 0.04,
      minScale: 0.2,
      maxScale: 2.0,
      disableLayout: false,
      embedded: false,
      fragments: true,
      overview: true,
    });

    deck.initialize().then(() => {
      revealRef.current = deck;
      deck.on('slidechanged', (e: any) => {
        const idx = e.indexh + 1;
        setSlideNum(idx);
        setShowDemoBtn(idx >= 13 && idx <= 23);
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
    <div style={{ width: '100vw', height: '100vh', background: '#0a0f1e' }}>
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
      <div className="helix-wordmark">HelixID</div>

      {/* Jump to Demo button */}
      {showDemoBtn && (
        <a
          href={HELIX_ID_DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'fixed', bottom: '50px', right: '24px', zIndex: 40,
            background: 'rgba(0,212,255,0.15)', border: '1px solid rgba(0,212,255,0.3)',
            color: '#00d4ff', padding: '8px 16px', borderRadius: '8px', fontSize: '13px',
            textDecoration: 'none', cursor: 'pointer', backdropFilter: 'blur(8px)',
          }}
        >
          🚀 Jump to Demo
        </a>
      )}

      {/* Reveal.js deck */}
      <div className="reveal" ref={deckRef}>
        <div className="slides">
          <Slide01Title />
          <Slide02Abstract />
          <Slide03Objectives />
          <Slide04Stakes />
          <Slide05HarvestNow />
          <Slide06WhyHealthcare />
          <Slide07TraditionalGap />
          <Slide08IntroHelixID />
          <Slide09LitSurvey />
          <Slide10ProblemStatement />
          <Slide11TechStack />
          <Slide12Architecture />
          <Slide13PostQuantum />
          <Slide14DID />
          <Slide15Blockchain />
          <Slide16SmartContract />
          <Slide17ZKP />
          <Slide18FourActors />
          <Slide19FeatureMap />
          <Slide20DemoAuth />
          <Slide21DemoAccess />
          <Slide22DemoTamper />
          <Slide23DemoEmergency />
          <Slide24Implementation />
          <Slide25RealVsSimulated />
          <Slide26QuantumTimeline />
          <Slide27Achievements />
          <Slide28ArchDecisions />
          <Slide29Roadmap />
          <Slide30Closing />
        </div>
      </div>
    </div>
  );
}
