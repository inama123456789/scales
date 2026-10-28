# Information Literacy Test — setup guide

This is a **separate app** from the science-literacy survey in the repo root.
It has its own survey page, dashboard, and — importantly — its **own Google
Sheet and its own Apps Script deployment**. Do not reuse the other survey's
endpoint, or the two sets of responses would mix.

The steps are the same pattern you already did for the first survey; only the
files and the endpoint are different.

## 1. Create a new Google Sheet + backend

1. Create a **new** blank Google Sheet (e.g. "Information Literacy Test
   Responses"). Use a different sheet from the science-literacy one.
2. In it: **Extensions → Apps Script**.
3. Delete the placeholder code and paste in the full contents of
   `ilt/apps-script/Code.gs`.
4. Change `const SECRET = "change-me";` to a private string of your choice.
   Remember it for step 2.
5. **Deploy → New deployment → Web app**. Execute as: **Me**. Who has access:
   **Anyone**. Deploy, authorize when prompted, and copy the Web app URL
   (ends in `/exec`).

## 2. Point the ILT app at your backend

Open `ilt/config.js` and fill in:

```js
window.APP_CONFIG = {
  ENDPOINT_URL: "https://script.google.com/macros/s/AKfycb.../exec",  // the ILT deployment
  SHARED_SECRET: "the-same-secret-you-set-in-ilt/apps-script/Code.gs",
};
```

## 3. Hosting

These files are already served by the same GitHub Pages site as the first
survey (no extra setup). Once pushed, the links are:

- **Test (share with students):** `https://<user>.github.io/<repo>/ilt/index.html`
- **Dashboard (keep private):** `https://<user>.github.io/<repo>/ilt/dashboard.html`

## 4. Test end-to-end

1. Open the test URL, answer all 25 questions, submit.
2. Confirm a new row appears in the ILT Google Sheet's "Responses" tab.
3. Open the dashboard URL — you should see 1 respondent, the class-vs-baseline
   chart, and the per-item table.

## Scoring & baseline

- The app ships a **shortened 25-item version** (subscale A1 — published items
  1–14 and 33 — removed). To restore the full 40-item test, set
  `USE_FULL_TEST = true` in `ilt/items.js` (and restore the full `ITEM_IDS`
  list in `apps-script/Code.gs`, with a fresh Sheet).
- Each question is scored 1 (correct) / 0 (incorrect or unanswered). Total is
  0–25 (0–40 if restored); the dashboard also shows it as a percentage.
- **Benchmark** = the original study's **post-course** result, computed for the
  **same active items** (Boh Podgornik et al., 2016; n = 163 students who had
  completed an information-literacy course). For the shortened 25-item version
  it is **77.6% correct (19.4 / 25)**, derived from the Table 10 post-course
  subscale means A2–A5 (7.3/10 + 4.6/5 + 2.8/3 + 4.7/7 = 19.4/25). For the full
  40-item test it is **78.6% (31.4 / 40)** (Table 9). The value lives in one
  constant (`ILT_BENCHMARK_*` in `items.js`) and follows `USE_FULL_TEST`. A
  short disclaimer explaining it is shown directly under the comparison on the
  dashboard. There is no per-item published benchmark, so item-level accuracy
  is shown for your class alone.

## Notes on specific items

- **Q7–10** share a catalogue record and are part of subscale A1, so they are
  **removed** in the shortened version (their definitions stay in `items.js`
  for restore). **Q19** shows a small search-form table and is kept.
- **Q32** is a diagram question in the original article; here the four schemes
  are described in words (correct answer: b, confirmed against the source). It
  refers to the preceding item (Q31); the on-screen number updates
  automatically (it reads "Question 17" in the 25-item version). If you'd
  prefer the original diagram image, it can be added later.
- To change any wording, answer key, or the baseline, edit `ilt/items.js` —
  it's plain and commented.
