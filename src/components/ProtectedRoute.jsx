import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/storage';

/**
 * Route wrapper that only allows authenticated users.
 * Redirects to /login if user is not authenticated.
 */
export default function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
