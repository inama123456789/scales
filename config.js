/*
 * Deployment configuration.
 *
 * ENDPOINT_URL: the Google Apps Script Web App URL (ends in /exec). Deploy
 * apps-script/Code.gs as a Web App first — see SETUP.md — then paste the
 * URL below.
 *
 * SHARED_SECRET: a short string only you and this app know. It is sent
 * with every request as light protection against strangers finding the
 * survey/dashboard URLs and submitting or reading data. It is NOT strong
 * security (it is visible in this file's source) — see SETUP.md for the
 * threat model.
 */
window.APP_CONFIG = {
  ENDPOINT_URL: "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE",
  SHARED_SECRET: "change-me",
};
