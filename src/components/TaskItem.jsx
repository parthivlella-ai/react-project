import React from 'react';

export default function TaskItem({ task, onToggle }) {
  const { id, number, title, description, completed } = task;

  return (
    <div
      id={`task-item-${id}`}
      onClick={() => onToggle(id)}
      role="checkbox"
      aria-checked={completed}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle(id);
        }
      }}
      className={`ember-task-item ${completed ? 'completed' : ''}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 20px',
        backgroundColor: completed ? 'rgba(255, 253, 247, 0.6)' : '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid',
        borderColor: completed ? 'var(--color-border-light)' : 'var(--color-border)',
        cursor: 'pointer',
        transition: 'all var(--transition-normal)',
        userSelect: 'none',
        gap: '16px',
        boxShadow: completed ? 'none' : '0 2px 6px rgba(31, 26, 23, 0.02)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, minWidth: 0 }}>
        {/* Number Badge */}
        <span
          style={{
            fontFamily: 'var(--font-family)',
            fontSize: '0.8125rem',
            fontWeight: 'var(--font-bold)',
            color: completed ? 'var(--color-text-light)' : 'var(--color-primary)',
            backgroundColor: completed ? 'rgba(224, 212, 197, 0.3)' : 'var(--color-primary-subtle)',
            padding: '4px 8px',
            borderRadius: 'var(--radius-sm)',
            letterSpacing: '0.04em',
            flexShrink: 0,
            transition: 'all var(--transition-fast)',
          }}
        >
          {number || `0${id}`}
        </span>

        {/* Text Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
          <h4
            style={{
              fontSize: '1rem',
              fontWeight: 'var(--font-semibold)',
              color: completed ? 'var(--color-text-light)' : 'var(--color-text-dark)',
              textDecoration: completed ? 'line-through' : 'none',
              transition: 'color var(--transition-fast)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {title}
          </h4>
          <p
            style={{
              fontSize: '0.875rem',
              color: completed ? 'var(--color-text-light)' : 'var(--color-text-muted)',
              lineHeight: 1.35,
              transition: 'color var(--transition-fast)',
            }}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Completion Indicator */}
      <div
        className="ember-checkbox"
        style={{
          width: '26px',
          height: '26px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: completed ? 'var(--color-primary)' : '#FFFFFF',
          border: completed ? '2px solid var(--color-primary)' : '2px solid var(--color-border)',
          flexShrink: 0,
          transition: 'all var(--transition-normal)',
          boxShadow: completed ? '0 2px 8px rgba(232, 68, 56, 0.3)' : 'none',
        }}
      >
        {completed && (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
    </div>
  );
}
