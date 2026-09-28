import React from 'react';

export default function TinyNote() {
  return (
    <div
      className="ember-card ember-tiny-note"
      style={{
        backgroundColor: 'var(--color-card-dark)',
        borderRadius: 'var(--radius-xl)',
        padding: '30px 28px',
        color: '#FFFFFF',
        boxShadow: 'var(--shadow-dark-card)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '190px',
        border: '1px solid rgba(255, 179, 128, 0.15)',
      }}
    >
      {/* Subtle warm glow orb in top right corner */}
      <div
        style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232, 68, 56, 0.3) 0%, rgba(255, 179, 128, 0.1) 50%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', zIndex: 1 }}>
        <span
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-peach)',
            boxShadow: '0 0 8px var(--color-peach)',
          }}
        />
        <span
          style={{
            fontSize: '0.8125rem',
            fontWeight: 'var(--font-semibold)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--color-peach)',
          }}
        >
          Tiny note
        </span>
      </div>

      {/* Main Quote */}
      <div style={{ margin: '20px 0', zIndex: 1 }}>
        <p
          style={{
            fontSize: '1.35rem',
            fontWeight: 'var(--font-medium)',
            lineHeight: 1.4,
            color: '#FAF6EE',
            letterSpacing: '-0.02em',
          }}
        >
          Progress likes{' '}
          <span style={{ color: 'var(--color-peach)', fontWeight: 'var(--font-bold)' }}>
            small<br />repeated moves.
          </span>
        </p>
      </div>

      {/* Bottom attribution */}
      <div
        style={{
          fontSize: '0.8125rem',
          color: 'rgba(255, 214, 173, 0.7)',
          fontStyle: 'normal',
          letterSpacing: '0.03em',
          zIndex: 1,
        }}
      >
        — EmberSpace
      </div>
    </div>
  );
}
