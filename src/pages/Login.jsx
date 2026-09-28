import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';
import { getSavedUser, setAuthSession, saveUser } from '../utils/storage';
import '../styles/auth.css';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error upon typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (generalError) {
      setGeneralError('');
    }
  };

  const handleDemoLogin = (e) => {
    e.preventDefault();
    // Pre-populate with demo user if no user exists, or log in directly
    let user = getSavedUser();
    if (!user) {
      user = {
        name: 'Alex Rivera',
        email: 'alex@emberspace.app',
        password: 'password123',
      };
      saveUser(user);
    }
    setFormData({
      email: user.email,
      password: user.password,
    });
    setGeneralError('');
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setGeneralError('');

    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.password) {
      newErrors.password = 'Please enter your password.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // Check credentials against localStorage
    const savedUser = getSavedUser();

    if (
      savedUser &&
      savedUser.email.toLowerCase() === formData.email.trim().toLowerCase() &&
      savedUser.password === formData.password
    ) {
      // Success: set login state and redirect to /dashboard
      setAuthSession(true);
      navigate('/dashboard');
    } else {
      // Friendly inline error message per specification
      setGeneralError('Email or password is incorrect.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-wrapper fade-in">
      <div className="auth-bg-blob-1" />
      <div className="auth-bg-blob-2" />

      <div className="auth-container">
        {/* Left Side: Brand & Hero */}
        <section className="auth-hero">
          <div className="auth-hero-branding">
            <Logo size="medium" />

            <div className="ember-pill peach">
              <span className="ember-pill-dot" />
              <span>calm productivity</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h1 className="auth-hero-title">
              Welcome back.
            </h1>
            <p className="auth-hero-desc">
              Pick up where you left off — your little corner is waiting.
            </p>
          </div>

          <div className="auth-hero-quote">
            <span style={{ fontSize: '1.25rem' }}>✨</span>
            <span>Small rituals, steady progress, mindful days.</span>
          </div>
        </section>

        {/* Right Side: Sign In Card */}
        <section className="auth-card" aria-label="Sign in form">
          <div className="auth-card-header">
            <h2 className="auth-card-title">Sign in</h2>
            <p className="auth-card-subtitle">Use your account to continue.</p>
          </div>

          {generalError && (
            <div className="auth-alert-error" role="alert">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>{generalError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form" noValidate>
            <Input
              id="login-email"
              name="email"
              type="email"
              label="Email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              autoComplete="email"
              required
            />

            <Input
              id="login-password"
              name="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              autoComplete="current-password"
              required
              rightElement={
                <a
                  href="#forgot"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Password reset instructions would be sent in production. For now, you can create a new account via Sign up!');
                  }}
                  className="auth-link"
                >
                  Forgot password?
                </a>
              }
            />

            <Button
              id="btn-login-submit"
              type="submit"
              variant="primary"
              fullWidth
              disabled={isSubmitting}
              style={{ marginTop: '8px' }}
            >
              Enter EmberSpace →
            </Button>
          </form>

          {/* Social Continue Divider */}
          <div className="auth-divider">
            <span>or continue with</span>
          </div>

          {/* Google & Apple Secondary Buttons */}
          <div className="auth-social-row">
            <button
              type="button"
              className="social-btn"
              onClick={() => {
                let user = getSavedUser();
                if (!user) {
                  user = { name: 'Google Traveler', email: 'traveler@gmail.com', password: 'password123' };
                  saveUser(user);
                }
                setAuthSession(true);
                navigate('/dashboard');
              }}
            >
              {/* Google SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
                />
                <path
                  fill="#4285F4"
                  d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.6 14.8c-.3-.8-.4-1.8-.4-2.8 0-1 .2-1.9.4-2.8L1.9 6.3C.7 8.7 0 10.3 0 12s.7 3.3 1.9 5.7l3.7-2.9z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 16C3.7 19.7 7.5 23 12 23z"
                />
              </svg>
              <span>Google</span>
            </button>

            <button
              type="button"
              className="social-btn"
              onClick={() => {
                let user = getSavedUser();
                if (!user) {
                  user = { name: 'Apple Member', email: 'member@apple.com', password: 'password123' };
                  saveUser(user);
                }
                setAuthSession(true);
                navigate('/dashboard');
              }}
            >
              {/* Apple SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.85.94-2.93-.91.04-2.02.6-2.67 1.37-.58.67-1.09 1.76-.95 2.81 1.02.08 2.05-.48 2.68-1.25z" />
              </svg>
              <span>Apple</span>
            </button>
          </div>

          <p className="auth-footer">
            Don't have an account?{' '}
            <Link to="/signup" id="link-to-signup">
              Sign up
            </Link>
          </p>

          {/* Quick Demo Helper Hint */}
          <div style={{ marginTop: '16px', textAlign: 'center' }}>
            <button
              type="button"
              onClick={handleDemoLogin}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-text-light)',
                fontSize: '0.75rem',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              Fill with demo account credentials
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
