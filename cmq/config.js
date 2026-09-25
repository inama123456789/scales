/*
 * Deployment configuration for the Conspiracy Mentality Questionnaire (CMQ) app.
 *
 * SEPARATE app: it needs its OWN Google Sheet and its OWN Apps Script Web App
 * deployment. Do not reuse another survey's endpoint.
 *
 * ENDPOINT_URL: the CMQ Apps Script Web App URL (ends in /exec).
 * SHARED_SECRET: must match SECRET in cmq/apps-script/Code.gs.
 */
window.APP_CONFIG = {
  ENDPOINT_URL: "https://script.google.com/macros/s/AKfycbzwNSj5d8p7XCUaX_cNpUmnVWunu8KFzO8pCZTLBnCjlBh3aGjLBLYb8m4vhGZ_J_7a/exec",
  SHARED_SECRET: "BRUDER",
};
