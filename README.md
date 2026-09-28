# EmberSpace — Personal Mini Workspace

EmberSpace is a personal productivity and workspace web application built with React and Vite. Designed with a calm, warm aesthetic, EmberSpace focuses on mindful task tracking, daily consistency, and lightweight personal productivity.

---

## 🎨 Visual Identity & Design System

The application strictly follows a bespoke warm-toned design system:
- **Primary Color:** Coral / Warm Orange (`#E84438`)
- **Background:** Warm Cream (`#FCF2E3`)
- **Cards & Surfaces:** Off-White Paper (`#FFFDF7`)
- **Accent Tones:** Peach (`#FFB380`), Light Peach (`#FFD6AD`), Sage Green (`#B8C7A1`)
- **Typography:** DM Sans (Bold headings, SemiBold buttons/labels, Regular descriptions)
- **Aesthetic Elements:** Large rounded cards, soft borders, subtle micro-interactions, and responsive layout.

---

## ✨ Features

- **Authentication Flows:**
  - Dedicated **Sign In** and **Sign Up** screens with matching two-column layouts.
  - Inline input validation (email format, minimum 8-character password, required fields).
  - Friendly inline error banners (no disruptive `alert()` dialogs).
  - Social login shortcuts (Google & Apple simulation).
  - One-click demo credentials filling for quick evaluation.

- **Protected Routing:**
  - Route guarding prevents unauthenticated visitors from accessing `/dashboard`.
  - Automatically redirects authenticated users away from `/login` and `/signup` to `/dashboard`.
  - Seamless logout clearing session state.

- **Personal Dashboard:**
  - **Dynamic Time-Aware Greeting:** Personalized greeting (`Good morning`, `Good afternoon`, `Good evening, [User Name]`).
  - **Dynamic Date Pill:** Real-time date display (e.g. `Tuesday · 28 Sep`) formatted dynamically from JavaScript.
  - **Today's Tiny List:** 3 curated daily focus tasks with smooth completion toggles, strike-through styling, and status counter.
  - **Task State Persistence:** All task completions persist across browser refreshes and tab reloads.
  - **Reset Option:** Easily restore the list back to uncompleted state.
  - **Tiny Note Card:** Dark card (`#1F1A17`) featuring the mantra: *"Progress likes small repeated moves."* with warm peach accents.
  - **Your Space Card:** Momentum tracking displaying completed tasks count, 4-day streak, and horizontal coral progress bar.

---

## 🛠️ Technologies Used

- **React.js (v19)** — Component-based user interface
- **Vite** — High-performance build tool and development server
- **React Router (v7)** — Client-side declarative routing and route guarding
- **Vanilla CSS** — Custom design tokens, transitions, and responsive grid layouts
- **localStorage API** — Client-side persistent data and session management

---

## 🔐 How Authentication Works

Authentication in EmberSpace is handled entirely on the client side using the Web Storage API:

1. **Sign Up:**
   - Validates user input (`name`, valid `email`, `password >= 8 chars`).
   - Serializes and stores user data in `localStorage` under `emberUser`.
   - Automatically creates an authenticated session by setting `emberLoggedIn` to `"true"`.
   - Redirects immediately to `/dashboard`.

2. **Login:**
   - Compares the entered email and password against the stored user credentials in `emberUser`.
   - On match: sets `emberLoggedIn = "true"` and navigates to `/dashboard`.
   - On mismatch: renders an inline error banner (*"Email or password is incorrect."*).

3. **Logout:**
   - Removes `emberLoggedIn` from `localStorage`.
   - Immediately redirects the user back to `/login`.

4. **Route Protection (`ProtectedRoute` & `PublicOnlyRoute`):**
   - Inspects `localStorage.getItem("emberLoggedIn") === 'true'`.
   - Guarded pages automatically redirect to `/login` when unauthorized.

> *Note: This implementation is intended for client-side portfolio demonstrations and student projects.*

---

## 💾 How localStorage is Used

The application stores 3 keys in `localStorage`:

- **`emberUser`**: JSON object containing user registration details:
  ```json
  {
    "name": "Parthiv",
    "email": "parthiv@example.com",
    "password": "********"
  }
  ```
- **`emberLoggedIn`**: String flag `"true"` indicating an active authenticated session.
- **`emberTasks`**: JSON array of tasks with IDs, titles, descriptions, and boolean `completed` states:
  ```json
  [
    {
      "id": 1,
      "number": "01",
      "title": "Finish React auth UI",
      "description": "Build the login and signup flow",
      "completed": true
    },
    {
      "id": 2,
      "number": "02",
      "title": "Practice presentation",
      "description": "Speak for 10 minutes without notes",
      "completed": false
    },
    {
      "id": 3,
      "number": "03",
      "title": "Take a real break",
      "description": "Walk, stretch, or make tea",
      "completed": false
    }
  ]
  ```

---

## 📁 Project Structure

```
ember-space/
├── public/
│   └── favicon.svg           # Ember flame SVG favicon
├── src/
│   ├── components/
│   │   ├── Button.jsx         # Custom button with primary/secondary variants
│   │   ├── Input.jsx          # Custom rounded input with inline error handling
│   │   ├── Logo.jsx           # EmberSpace coral + dark text logo
│   │   ├── ProtectedRoute.jsx # Guard for authenticated routes
│   │   ├── PublicOnlyRoute.jsx# Guard redirecting logged-in users from auth
│   │   ├── SpaceCard.jsx      # Progress, metrics, and streak summary card
│   │   ├── TaskCard.jsx       # Today's Tiny List card container
│   │   ├── TaskItem.jsx       # Interactive task item with checkmark animation
│   │   └── TinyNote.jsx       # Elegant dark mantra card
│   ├── pages/
│   │   ├── Dashboard.jsx      # Protected dashboard page
│   │   ├── Login.jsx          # Login page with demo credentials
│   │   └── Signup.jsx         # Sign up page with validation
│   ├── styles/
│   │   ├── auth.css           # 2-column layout and styling for auth pages
│   │   ├── dashboard.css      # Dashboard header, greeting, and grid styling
│   │   └── global.css         # Design system CSS variables, resets, pills
│   ├── utils/
│   │   ├── date.js            # Time greeting and dynamic date formatter
│   │   └── storage.js         # LocalStorage helper functions
│   ├── App.jsx                # Router configuration and route structure
│   ├── index.css              # Global styles entrypoint
│   └── main.jsx               # React DOM root entrypoint
├── index.html                 # HTML template with Google Fonts (DM Sans)
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### Running Locally

Start the local development server:

```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:5173
```

### Production Build

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```
