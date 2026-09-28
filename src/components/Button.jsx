import React from 'react';

export default function Button({
  children,
  type = 'button',
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
  fullWidth = false,
  onClick,
  disabled = false,
  icon = null,
  className = '',
  id,
  style = {},
}) {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '12px 22px',
    borderRadius: 'var(--radius-md)',
    fontFamily: 'var(--font-family)',
    fontSize: '0.9375rem',
    fontWeight: 'var(--font-semibold)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '1px solid transparent',
    transition: 'all var(--transition-fast)',
    textDecoration: 'none',
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.6 : 1,
    boxShadow: 'none',
    ...style,
  };

  const variantStyles = {
    primary: {
      backgroundColor: 'var(--color-primary)',
      color: '#FFFFFF',
      boxShadow: '0 4px 14px rgba(232, 68, 56, 0.22)',
    },
    secondary: {
      backgroundColor: '#FFFFFF',
      color: 'var(--color-text-dark)',
      border: '1px solid var(--color-border)',
      boxShadow: '0 2px 6px rgba(31, 26, 23, 0.04)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-text-dark)',
      border: '1px solid var(--color-border)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-text-muted)',
      padding: '8px 14px',
    },
  };

  const currentVariant = variantStyles[variant] || variantStyles.primary;

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`ember-btn ember-btn-${variant} ${className}`}
      style={{ ...baseStyle, ...currentVariant }}
    >
      {icon && <span className="ember-btn-icon">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
