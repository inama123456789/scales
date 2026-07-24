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
  ENDPOINT_URL: "https://script.google.com/macros/s/AKfycbzu12LW3-P2CQWQqSGXfYkfv8IhDLH6t1U0BlICXc5DdoYR3atM6tYGUKoyRGmA6ToR/exec",
  SHARED_SECRET: "cmq bruder",
};
