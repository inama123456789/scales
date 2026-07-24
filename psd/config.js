/*
 * Deployment configuration for the Psychological Distance to Science (PSYDISC) app.
 *
 * SEPARATE app: its OWN Google Sheet and its OWN Apps Script Web App
 * deployment. Do not reuse another survey's endpoint.
 */
window.APP_CONFIG = {
  ENDPOINT_URL: "PASTE_YOUR_PSYDISC_APPS_SCRIPT_WEB_APP_URL_HERE",
  SHARED_SECRET: "change-me",
};
