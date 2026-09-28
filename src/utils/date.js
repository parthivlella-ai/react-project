/**
 * Returns a friendly greeting based on the current hour of the day.
 * e.g., "Good morning", "Good afternoon", "Good evening"
 */
export function getTimeGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) {
    return 'Good morning';
  } else if (hour < 18) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
}

/**
 * Returns dynamic date formatted like: "Tuesday · 28 Sep"
 */
export function getFormattedDate(date = new Date()) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const dayName = days[date.getDay()];
  const dayNumber = date.getDate();
  const monthName = months[date.getMonth()];

  return `${dayName} · ${dayNumber} ${monthName}`;
}
