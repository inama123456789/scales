/*
 * Deployment configuration for the Information Literacy Test (ILT) app.
 *
 * This is a SEPARATE app from the science-literacy survey: it needs its OWN
 * Google Sheet and its OWN Apps Script Web App deployment. Do not reuse the
 * other survey's endpoint — responses would mix.
 *
 * ENDPOINT_URL: the ILT Apps Script Web App URL (ends in /exec).
 * SHARED_SECRET: must match SECRET in ilt/apps-script/Code.gs. Light
 * protection only (visible in source) — see ilt/SETUP.md.
 */
window.APP_CONFIG = {
  ENDPOINT_URL: "https://script.google.com/macros/s/AKfycbwjcXIqOcKk-OmGY5JcCnJqFAP4demC0zPukJ9yTnteVveIQOPhQzdHzWPLsfzjBvt6/exec",
  SHARED_SECRET: "information literacy boh podgornik",
};
