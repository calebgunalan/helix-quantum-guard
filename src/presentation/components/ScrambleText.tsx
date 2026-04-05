import { useState, useCallback, useRef } from 'react';

const HEX_CHARS = '0123456789abcdef';

interface ScrambleTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  copyable?: boolean;
}

export default function ScrambleText({ text, className = '', style, copyable = true }: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const [copied, setCopied] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scramble = useCallback(() => {
    if (intervalRef.current) return;
    let iteration = 0;
    const maxIterations = 12;
    intervalRef.current = setInterval(() => {
      iteration++;
      setDisplay(
        text.split('').map((ch, i) => {
          if (ch === ' ' || ch === ':' || ch === '.' || ch === '#' || ch === ',') return ch;
          if (iteration > maxIterations * (i / text.length)) return ch;
          return HEX_CHARS[Math.floor(Math.random() * HEX_CHARS.length)];
        }).join('')
      );
      if (iteration >= maxIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = null;
        setDisplay(text);
      }
    }, 50);
  }, [text]);

  const stopScramble = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setDisplay(text);
  }, [text]);

  const handleClick = useCallback(() => {
    if (!copyable) return;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      timeoutRef.current = setTimeout(() => setCopied(false), 1500);
    });
  }, [text, copyable]);

  return (
    <span
      className={`mono ${className}`}
      style={{ cursor: copyable ? 'pointer' : 'default', position: 'relative', ...style }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      onClick={handleClick}
      title={copyable ? (copied ? 'Copied!' : 'Click to copy') : undefined}
    >
      {display}
      {copied && (
        <span style={{
          position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)',
          fontSize: '0.7em', color: '#16a34a', background: 'rgba(15,23,42,0.9)',
          padding: '2px 8px', borderRadius: '4px', whiteSpace: 'nowrap',
        }}>
          Copied ✓
        </span>
      )}
    </span>
  );
}
