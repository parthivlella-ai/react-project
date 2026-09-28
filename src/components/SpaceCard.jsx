import React from 'react';

export default function SpaceCard({ completedTodayCount = 0 }) {
  // Baseline completed count + today's completed tasks
  const baseCompleted = 12;
  const totalCompleted = baseCompleted + completedTodayCount;
  const streakDays = 4;
  
  // Progress calculation: e.g., 78% or dynamic
  const target = 16;
  const progressPercent = Math.min(Math.round((totalCompleted / target) * 100), 100);

  return (
    <div
      className="ember-card ember-space-card"
      style={{
        backgroundColor: 'var(--color-card)',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--color-border)',
        padding: '28px',
        boxShadow: 'var(--shadow-card)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 'var(--font-bold)',
            color: 'var(--color-text-dark)',
            letterSpacing: '-0.02em',
          }}
        >
          Your space
        </h3>
        <span
          className="ember-pill sage"
          style={{ fontSize: '0.75rem', padding: '3px 10px' }}
        >
          Active
        </span>
      </div>

      {/* Metrics Row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
          alignItems: 'center',
        }}
      >
        {/* Metric 1 */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: '14px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
          }}
        >
          <span
            style={{
              fontSize: '1.25rem',
              fontWeight: 'var(--font-bold)',
              color: 'var(--color-text-dark)',
            }}
          >
            {totalCompleted}
          </span>
          <span
            style={{
              fontSize: '0.8125rem',
              color: 'var(--color-text-muted)',
              fontWeight: 'var(--font-medium)',
            }}
          >
            tasks completed
          </span>
        </div>

        {/* Metric 2 */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: '14px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span
              style={{
                fontSize: '1.25rem',
                fontWeight: 'var(--font-bold)',
                color: 'var(--color-text-dark)',
              }}
            >
              {streakDays} day
            </span>
            <span style={{ fontSize: '1rem', lineHeight: 1 }} role="img" aria-label="streak flame">
              🔥
            </span>
          </div>
          <span
            style={{
              fontSize: '0.8125rem',
              color: 'var(--color-text-muted)',
              fontWeight: 'var(--font-medium)',
            }}
          >
            streak
          </span>
        </div>
      </div>

      {/* Progress Bar Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', fontWeight: 'var(--font-medium)' }}>
            Weekly momentum
          </span>
          <span style={{ fontSize: '0.8125rem', color: 'var(--color-primary)', fontWeight: 'var(--font-semibold)' }}>
            {progressPercent}%
          </span>
        </div>

        {/* Track and Fill */}
        <div
          style={{
            width: '100%',
            height: '10px',
            backgroundColor: 'var(--color-track)',
            borderRadius: 'var(--radius-pill)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: `${progressPercent}%`,
              height: '100%',
              backgroundColor: 'var(--color-primary)',
              borderRadius: 'var(--radius-pill)',
              transition: 'width 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        </div>
      </div>

      {/* Subtext */}
      <p
        style={{
          fontSize: '0.875rem',
          color: 'var(--color-text-muted)',
          margin: 0,
          fontStyle: 'normal',
        }}
      >
        A little consistency goes a long way.
      </p>
    </div>
  );
}
