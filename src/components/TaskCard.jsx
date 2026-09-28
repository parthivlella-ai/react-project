import React from 'react';
import TaskItem from './TaskItem';

export default function TaskCard({ tasks, onToggleTask, onResetTasks }) {
  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div
      className="ember-card ember-tasks-card"
      style={{
        backgroundColor: 'var(--color-card)',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--color-border)',
        padding: '32px',
        boxShadow: 'var(--shadow-card)',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        position: 'relative',
      }}
    >
      {/* Card Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 'var(--font-bold)',
              color: 'var(--color-text-dark)',
              letterSpacing: '-0.02em',
              marginBottom: '4px',
            }}
          >
            Today's tiny list
          </h2>
          <p
            style={{
              fontSize: '0.9375rem',
              color: 'var(--color-text-muted)',
            }}
          >
            Keep it light. Check things off when they feel done.
          </p>
        </div>

        {/* Status count indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            className="ember-pill peach"
            style={{ fontSize: '0.75rem', padding: '4px 10px' }}
          >
            {completedCount} of {tasks.length} done
          </span>
          {completedCount > 0 && onResetTasks && (
            <button
              onClick={onResetTasks}
              title="Reset today's tasks"
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-text-light)',
                cursor: 'pointer',
                fontSize: '0.75rem',
                fontWeight: 'var(--font-medium)',
                padding: '4px 8px',
                borderRadius: 'var(--radius-sm)',
                transition: 'color var(--transition-fast)',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--color-primary)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--color-text-light)')}
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Task List */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={onToggleTask} />
        ))}
      </div>
    </div>
  );
}
