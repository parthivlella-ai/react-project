import React from 'react';

export default function Input({
  id,
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  error,
  helperText,
  required = false,
  autoComplete,
  rightElement = null,
}) {
  return (
    <div className="ember-input-group" style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {label && (
          <label
            htmlFor={id}
            style={{
              fontSize: '0.875rem',
              fontWeight: 'var(--font-medium)',
              color: 'var(--color-text-dark)',
            }}
          >
            {label}
            {required && <span style={{ color: 'var(--color-primary)', marginLeft: '3px' }}>*</span>}
          </label>
        )}
        {rightElement}
      </div>

      <div style={{ position: 'relative' }}>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          style={{
            width: '100%',
            padding: '12px 16px',
            fontSize: '0.9375rem',
            fontFamily: 'var(--font-family)',
            color: 'var(--color-text-dark)',
            backgroundColor: '#FFFFFF',
            border: error ? '1.5px solid var(--color-error)' : '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            outline: 'none',
            transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
            boxShadow: 'inset 0 1px 2px rgba(31, 26, 23, 0.02)',
          }}
          className="ember-text-input"
        />
      </div>

      {helperText && !error && (
        <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginTop: '2px' }}>
          {helperText}
        </span>
      )}

      {error && (
        <div 
          className="ember-input-error"
          role="alert"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            fontSize: '0.8125rem',
            color: 'var(--color-error)',
            marginTop: '2px',
            fontWeight: 'var(--font-medium)',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
