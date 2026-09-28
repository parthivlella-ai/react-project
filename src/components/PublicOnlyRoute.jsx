import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/storage';

/**
 * Route wrapper that prevents authenticated users from visiting /login or /signup.
 * Redirects to /dashboard if user is already logged in.
 */
export default function PublicOnlyRoute({ children }) {
  if (isAuthenticated()) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
