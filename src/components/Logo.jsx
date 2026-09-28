import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ size = 'medium', clickable = true }) {
  const sizeStyles = {
    small: { fontSize: '1.25rem', gap: '6px' },
    medium: { fontSize: '1.625rem', gap: '8px' },
    large: { fontSize: '2rem', gap: '10px' },
  };

  const selectedSize = sizeStyles[size] || sizeStyles.medium;

  const content = (
    <div 
      className="ember-logo"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: selectedSize.gap,
        fontFamily: 'var(--font-family)',
        fontWeight: 'var(--font-bold)',
        fontSize: selectedSize.fontSize,
        letterSpacing: '-0.03em',
        lineHeight: 1,
        userSelect: 'none',
        textDecoration: 'none',
      }}
    >
      <span style={{ 
        display: 'inline-block',
        width: size === 'small' ? '8px' : '10px',
        height: size === 'small' ? '8px' : '10px',
        borderRadius: '50%',
        backgroundColor: 'var(--color-primary)',
        boxShadow: '0 0 10px rgba(232, 68, 56, 0.45)',
      }} />
      <span>
        <span style={{ color: 'var(--color-primary)' }}>ember</span>
        <span style={{ color: 'var(--color-text-dark)' }}>space</span>
      </span>
    </div>
  );

  if (clickable) {
    return (
      <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex' }}>
        {content}
      </Link>
    );
  }

  return content;
}
