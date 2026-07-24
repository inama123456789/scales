# Conspiracy Mentality Questionnaire — setup guide

A **separate app** from the other surveys in this repo. It needs its **own**
Google Sheet and its **own** Apps Script deployment. Same recipe as the others.

## 1. New Google Sheet + backend

1. Create a **new** blank Google Sheet (e.g. "CMQ Responses"). A different
   spreadsheet from the other surveys.
2. In it: **Extensions → Apps Script**.
3. Delete the placeholder code and paste in the full contents of
   `cmq/apps-script/Code.gs`.
4. Change `const SECRET = "change-me";` to a private string. Remember it.
5. **Deploy → New deployment → Web app** → Execute as **Me**, Access **Anyone**
   → **Deploy** → authorize → copy the `/exec` URL.

> Tip: don't paste this into an existing project that already has another
> survey's script — two web-app scripts can't share one Apps Script project
> (they'd both define `doPost`/`doGet`). Always use a fresh Sheet.

## 2. Point the app at your backend

Edit `cmq/config.js`:

```js
window.APP_CONFIG = {
  ENDPOINT_URL: "https://script.google.com/macros/s/AKfycb.../exec",  // the CMQ deployment
  SHARED_SECRET: "the-same-secret-you-set-in-cmq/apps-script/Code.gs",
};
```

## 3. Hosting

Already served by the same GitHub Pages site. Links:

- **Survey:** `https://<user>.github.io/<repo>/cmq/index.html`
- **Dashboard:** `https://<user>.github.io/<repo>/cmq/dashboard.html`

## 4. Test end-to-end

1. Open the survey, answer all 5 statements, submit.
2. Confirm a new row in the CMQ Google Sheet's "Responses" tab.
3. Open the dashboard — 1 respondent, plus the comparison charts.

## The scale, scoring & baseline

- **5 items**, each rated on an **11-point likelihood scale** from 0%
  ("certainly not") through 50% ("undecided") to 100% ("certainly"). Coded
  **0–10** (0% = 0 … 100% = 10) to match the published item means.
- **No correct answers.** A respondent's CMQ score is the **mean of the 5
  items** (0–10); higher = stronger conspiracy mentality.
- **Baselines** (Bruder et al., 2013, Study 1a, Table 1) are shown for all
  three validation samples — German (n=5,026), English (n=1,640), Turkish
  (n=1,007) — per item and as overall means (German 5.94, English 6.25,
  Turkish 7.29). Your class is plotted alongside all three.

## Customizing

- Items, scale anchors, and the baseline means are all in `cmq/items.js`,
  plainly commented. The response-scale verbal anchors (certainly not …
  certainly) can be adjusted there if you want different wording.
