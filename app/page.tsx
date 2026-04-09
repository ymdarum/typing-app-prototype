'use strict';

import React, { useState, useEffect, useRef } from 'react';

const SAMPLE_TEXT = "The quick brown fox jumps over the lazy dog. Practice makes fast typing feel natural and calm.";

export default function Home() {
  const [input, setInput] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [stats, setStats] = useState({ wpm: 0, accuracy: 100, progress: 0 });
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const startTest = () => {
    inputRef.current?.focus();
    if (!startTime) setStartTime(Date.now());
  };

  useEffect(() => {
    if (!startTime || !input) return;

    const elapsedMinutes = Math.max((Date.now() - startTime) / 60000, 1 / 60);
    const wordsTyped = input.trim().length / 5;
    const wpm = Math.max(0, Math.round(wordsTyped / elapsedMinutes));

    let correctChars = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === SAMPLE_TEXT[i]) correctChars += 1;
    }

    const accuracy = input.length ? Math.round((correctChars / input.length) * 100) : 100;
    const progress = Math.min(100, Math.round((input.length / SAMPLE_TEXT.length) * 100));

    setStats({ wpm, accuracy, progress });
  }, [input, startTime]);

  return (
    <>
      <section className="hero card">
        <div>
          <span className="eyebrow">TypeFlow</span>
          <h1>Learn to type faster with real-world practice</h1>
          <p className="subcopy">A simple prototype for adaptive typing drills, progress tracking, and focused speed building.</p>
          <button onClick={startTest} className="primary-btn">Start Typing Test</button>
        </div>
      </section>

      <div className="grid">
        <article className="card" style={{ gridColumn: 'span 2' }}>
          <h2>Typing Test</h2>
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid var(--border)',
            padding: '14px',
            borderRadius: '12px',
            marginBottom: '14px',
            fontSize: '1.1rem',
            lineHeight: '1.6'
          }}>
            {SAMPLE_TEXT}
          </div>
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => {
                if (!startTime) setStartTime(Date.now());
                setInput(e.target.value);
            }}
            placeholder="Start typing here..."
            style={{
              width: '100%',
              minHeight: '140px',
              padding: '14px',
              borderRadius: '12px',
              border: '1px solid var(--border)',
              background: '#0b1220',
              color: 'var(--text)',
              resize: 'vertical',
              fontSize: '1rem'
            }}
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
            marginTop: '16px'
          }}>
            <StatBox label="WPM" value={stats.wpm} />
            <StatBox label="Accuracy" value={`${stats.accuracy}%`} />
            <StatBox label="Progress" value={`${stats.progress}%`} />
          </div>
        </article>

        <article className="card">
          <h2>Progress Snapshot</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0' }}>
            <MetricItem label="Best WPM" value="54" />
            <MetricItem label="Avg Accuracy" value="96%" />
            <MetricItem label="Daily Streak" value="6 days" />
          </ul>
        </article>

        <article className="card">
          <h2>Adaptive Drill Preview</h2>
          <p className="subcopy">Recommended focus today:</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0' }}>
            <DrillItem text="Punctuation speed" />
            <DrillItem text="Common email phrases" />
            <DrillItem text="Number row accuracy" />
          </ul>
        </article>
      </div>
    </>
  );
}

function StatBox({ label, value }: { label: string; value: string | number }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid var(--border)',
      borderRadius: '12px',
      padding: '12px',
      textAlign: 'center'
    }}>
      <div style={{ color: 'var(--muted)', fontSize: '0.8rem', marginBottom: '4px' }}>{label}</div>
      <strong style={{ fontSize: '1.4rem' }}>{value}</strong>
    </div>
  );
}

function MetricItem({ label, value }: { label: string; value: string }) {
  return (
    <li style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid var(--border)',
      borderRadius: '12px',
      padding: '12px',
      marginBottom: '10px'
    }}>
      <span style={{ color: 'var(--muted)' }}>{label}</span>
      <strong>{value}</strong>
    </li>
  );
}

function DrillItem({ text }: { text: string }) {
  return (
    <li style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid var(--border)',
      borderRadius: '12px',
      padding: '12px',
      marginBottom: '10px'
    }}>
      {text}
    </li>
  );
}
