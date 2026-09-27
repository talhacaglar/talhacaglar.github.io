// Preferences still work for this page when browser storage is unavailable.
const preferences = new Map();

export function readPreference(key) {
  if (preferences.has(key)) return preferences.get(key);
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function writePreference(key, value) {
  preferences.set(key, value);
  try {
    localStorage.setItem(key, value);
  } catch {
    // The in-memory selection remains usable without persistent storage.
  }
}
