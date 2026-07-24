/*
 * Deployment configuration for the Psychological Distance to Science (PSYDISC) app.
 *
 * SEPARATE app: its OWN Google Sheet and its OWN Apps Script Web App
 * deployment. Do not reuse another survey's endpoint.
 */
window.APP_CONFIG = {
  ENDPOINT_URL: "https://script.google.com/macros/s/AKfycbw4-WHRHlc2WOKBFzWJSkRxi-fw5bekxfVQxFBYcXEzS3efSM2zbKHnVhMnyemdbBcEOw/exec",
  SHARED_SECRET: "psydisc v",
};
