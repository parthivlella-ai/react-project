import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';
import { saveUser, setAuthSession } from '../utils/storage';
import '../styles/auth.css';

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email.';
    }

    // Password validation (minimum 8 characters)
    if (!formData.password) {
      newErrors.password = 'Please enter a password.';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must contain at least 8 characters.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    // Create user object
    const newUser = {
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      password: formData.password,
    };

    // Store user profile in localStorage: emberUser
    saveUser(newUser);

    // Automatically log user in: emberLoggedIn = "true"
    setAuthSession(true);

    // Redirect to /dashboard
    navigate('/dashboard');
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

            <div className="ember-pill sage">
              <span className="ember-pill-dot" />
              <span>one step at a time</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h1 className="auth-hero-title">
              Make a little room.
            </h1>
            <p className="auth-hero-desc">
              Create your EmberSpace account and start with one simple ritual.
            </p>
          </div>

          <div className="auth-hero-quote">
            <span style={{ fontSize: '1.25rem' }}>🌱</span>
            <span>Focus on what matters, gently check off what is done.</span>
          </div>
        </section>

        {/* Right Side: Create Account Card */}
        <section className="auth-card" aria-label="Create account form">
          <div className="auth-card-header">
            <h2 className="auth-card-title">Create account</h2>
            <p className="auth-card-subtitle">It takes less than a minute.</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form" noValidate>
            <Input
              id="signup-name"
              name="name"
              type="text"
              label="Name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              autoComplete="name"
              required
            />

            <Input
              id="signup-email"
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
              id="signup-password"
              name="password"
              type="password"
              label="Password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              helperText="8+ characters recommended"
              autoComplete="new-password"
              required
            />

            <Button
              id="btn-signup-submit"
              type="submit"
              variant="primary"
              fullWidth
              disabled={isSubmitting}
              style={{ marginTop: '12px' }}
            >
              Create my space →
            </Button>

            <p
              style={{
                fontSize: '0.75rem',
                color: 'var(--color-text-light)',
                textAlign: 'center',
                marginTop: '12px',
                marginBottom: '18px',
              }}
            >
              By continuing, you agree to the simple terms.
            </p>
          </form>

          <p className="auth-footer">
            Already have an account?{' '}
            <Link to="/login" id="link-to-login">
              Sign in
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
