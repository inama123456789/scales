# Psychological Distance to Science (PSYDISC) — setup guide

A **separate app** from the others in this repo. It needs its **own** Google
Sheet and its **own** Apps Script deployment. Same recipe as the rest.

## 1. New Google Sheet + backend

1. Create a **new** blank Google Sheet (e.g. "PSYDISC Responses"). A different
   spreadsheet from the other surveys.
2. **Extensions → Apps Script**. Delete the placeholder code, paste in the full
   contents of `psd/apps-script/Code.gs`.
3. Change `const SECRET = "change-me";` to a private string. Remember it.
4. **Deploy → New deployment → Web app** → Execute as **Me**, Access **Anyone**
   → **Deploy** → authorize → copy the `/exec` URL.

> Use a fresh Sheet — don't paste this into a project that already has another
> survey's script (two web-app scripts can't share one project).

## 2. Point the app at your backend

Edit `psd/config.js` with your `/exec` URL and the same secret.

## 3. Hosting

Already served by the same GitHub Pages site. Links:

- **Survey:** `https://<user>.github.io/<repo>/psd/index.html`
- **Dashboard:** `https://<user>.github.io/<repo>/psd/dashboard.html`

## 4. Test end-to-end

Open the survey, answer all 16 statements, submit; check for a new row in the
PSYDISC Google Sheet; open the dashboard.

## The scale, scoring & baseline

- **16 items**, four per dimension (temporal, social, hypothetical, spatial),
  on a **1 (strongly disagree) – 7 (strongly agree)** scale. Items are shown
  interleaved, without dimension labels.
- **Reverse-coded items** (all four hypothetical items, plus two spatial items)
  are automatically flipped (8 − response) before scoring. **Higher = greater
  psychological distance to science.**
- A subscale score is the mean of its four items; the **total** is the mean of
  all 16 (= mean of the four subscales).
- **Baseline** ⚠️ **approximate.** The comparison values were read off the
  article's **Figure 2** (Study 5, US sample), split by COVID-19 vaccination
  status ("Not fully vaccinated" vs "Fully vaccinated"). They are eyeballed
  from a bar chart, not exact table values, and are labeled as approximate in
  the dashboard. If you later obtain exact means (e.g. from a descriptives
  table or the OSF data at https://osf.io/nz5va/), update the numbers in
  `psd/items.js` (`PSD_BASELINES`).

## Customizing

Items, reverse-coding flags, scale anchors, and baseline values are all in
`psd/items.js`, plainly commented.
