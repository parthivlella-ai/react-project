// Storage keys
export const STORAGE_KEYS = {
  USER: 'emberUser',
  LOGGED_IN: 'emberLoggedIn',
  TASKS: 'emberTasks',
};

// Default tasks matching Figma specification
export const DEFAULT_TASKS = [
  {
    id: 1,
    number: '01',
    title: 'Finish React auth UI',
    description: 'Build the login and signup flow',
    completed: false,
  },
  {
    id: 2,
    number: '02',
    title: 'Practice presentation',
    description: 'Speak for 10 minutes without notes',
    completed: false,
  },
  {
    id: 3,
    number: '03',
    title: 'Take a real break',
    description: 'Walk, stretch, or make tea',
    completed: false,
  },
];

/**
 * Get the saved user profile from localStorage
 */
export function getSavedUser() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.USER);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error('Error reading emberUser from localStorage:', e);
    return null;
  }
}

/**
 * Save user profile in localStorage
 */
export function saveUser(user) {
  try {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  } catch (e) {
    console.error('Error saving emberUser to localStorage:', e);
  }
}

/**
 * Check if user is currently logged in
 */
export function isAuthenticated() {
  return localStorage.getItem(STORAGE_KEYS.LOGGED_IN) === 'true';
}

/**
 * Set login state in localStorage
 */
export function setAuthSession(isLoggedIn) {
  if (isLoggedIn) {
    localStorage.setItem(STORAGE_KEYS.LOGGED_IN, 'true');
  } else {
    localStorage.removeItem(STORAGE_KEYS.LOGGED_IN);
  }
}

/**
 * Log out user by removing auth token
 */
export function clearAuthSession() {
  localStorage.removeItem(STORAGE_KEYS.LOGGED_IN);
}

/**
 * Load tasks from localStorage, or initialize with defaults if empty
 */
export function getTasks() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.TASKS);
    if (!data) {
      // Initialize with default tasks
      localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(DEFAULT_TASKS));
      return DEFAULT_TASKS;
    }
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_TASKS;
  } catch (e) {
    console.error('Error reading emberTasks from localStorage:', e);
    return DEFAULT_TASKS;
  }
}

/**
 * Save tasks list to localStorage
 */
export function saveTasks(tasks) {
  try {
    localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
  } catch (e) {
    console.error('Error saving emberTasks to localStorage:', e);
  }
}
