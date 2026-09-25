/*
 * Deployment configuration for the Psychological Distance to Science (PSYDISC) app.
 *
 * SEPARATE app: its OWN Google Sheet and its OWN Apps Script Web App
 * deployment. Do not reuse another survey's endpoint.
 */
window.APP_CONFIG = {
  ENDPOINT_URL: "https://script.google.com/macros/s/AKfycbwLEXew_2PRQcpLZYConJGN7m4xAZQkJV3BVMhVx4zAEp7_HxFh_O0FC3m6G8ettZt5/exec",
  SHARED_SECRET: "PSYDISC",
};
