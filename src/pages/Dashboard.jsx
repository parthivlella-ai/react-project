import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import TaskCard from '../components/TaskCard';
import TinyNote from '../components/TinyNote';
import SpaceCard from '../components/SpaceCard';
import {
  getSavedUser,
  clearAuthSession,
  getTasks,
  saveTasks,
  DEFAULT_TASKS,
} from '../utils/storage';
import { getTimeGreeting, getFormattedDate } from '../utils/date';
import '../styles/dashboard.css';

export default function Dashboard() {
  const navigate = useNavigate();

  // Load user profile from localStorage
  const [user, setUser] = useState(() => getSavedUser() || { name: 'Friend' });

  // Load tasks from localStorage
  const [tasks, setTasks] = useState(() => getTasks());

  // Greeting & Date values
  const greeting = getTimeGreeting();
  const currentDateFormatted = getFormattedDate();

  // Sync tasks to localStorage whenever tasks change
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  // Toggle task completion
  const handleToggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Reset tasks to uncompleted defaults
  const handleResetTasks = () => {
    const resetList = DEFAULT_TASKS.map((t) => ({ ...t, completed: false }));
    setTasks(resetList);
    saveTasks(resetList);
  };

  // Logout handler
  const handleLogout = () => {
    clearAuthSession();
    navigate('/login');
  };

  const completedTodayCount = tasks.filter((t) => t.completed).length;
  const userInitial = user.name ? user.name.charAt(0).toUpperCase() : 'E';

  return (
    <div className="dashboard-page fade-in">
      {/* Top Header */}
      <header className="dashboard-header">
        <Logo size="medium" />

        <div className="dashboard-user-actions">
          {/* User profile capsule */}
          <div className="dashboard-user-badge">
            <div className="dashboard-avatar">{userInitial}</div>
            <span className="dashboard-username">{user.name}</span>
          </div>

          {/* Logout button */}
          <button
            id="btn-logout"
            onClick={handleLogout}
            className="logout-btn"
            title="Log out of EmberSpace"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            <span>Log out</span>
          </button>
        </div>
      </header>

      {/* Main Dashboard Body */}
      <main className="dashboard-main">
        {/* Hero Greeting Section */}
        <section className="dashboard-hero">
          <div className="dashboard-date-row">
            <div className="ember-pill peach">
              <span className="ember-pill-dot" />
              <span id="dashboard-date-pill">{currentDateFormatted}</span>
            </div>
          </div>

          <h1 className="dashboard-title">
            {greeting}, {user.name}.
          </h1>
          <p className="dashboard-subtitle">
            Three small things are enough for today.
          </p>
        </section>

        {/* 2-Column Responsive Layout */}
        <div className="dashboard-grid">
          {/* Left Column: Today's Tasks */}
          <div className="dashboard-left-col">
            <TaskCard
              tasks={tasks}
              onToggleTask={handleToggleTask}
              onResetTasks={handleResetTasks}
            />
          </div>

          {/* Right Column: Tiny Note + Your Space */}
          <div className="dashboard-right-col">
            <TinyNote />
            <SpaceCard completedTodayCount={completedTodayCount} />
          </div>
        </div>
      </main>
    </div>
  );
}
