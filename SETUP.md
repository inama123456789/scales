# Setup guide

This app has three pieces:

- **`index.html`** — the survey your students fill out.
- **`dashboard.html`** — the results view, for you only.
- **Google Sheets + Apps Script** — the free backend that stores responses and
  serves them to the dashboard.

Total setup time: about 10 minutes, once.

## 1. Create the Google Sheet + backend

1. Go to [sheets.google.com](https://sheets.google.com) and create a new,
   blank spreadsheet. Name it something like "Science Literacy Responses".
2. In the sheet, go to **Extensions → Apps Script**. This opens a script
   editor bound to this specific sheet.
3. Delete any placeholder code in `Code.gs`, then paste in the entire
   contents of this repo's `apps-script/Code.gs`.
4. At the top of the script, change this line to a secret only you know
   (any short string, no spaces needed, just avoid quotes):
   ```js
   const SECRET = "change-me";
   ```
   Remember this value — you'll paste the same one into `config.js` in step 3.
5. Click **Deploy → New deployment**.
   - Click the gear icon next to "Select type" and choose **Web app**.
   - Description: anything (e.g. "v1").
   - Execute as: **Me**.
   - Who has access: **Anyone**. (This does *not* mean anyone can read your
     sheet — it means anyone with the exact deployment URL can hit the
     endpoint. See "Security notes" below.)
   - Click **Deploy**. Google will ask you to authorize the script the first
     time — approve it (it's your own script, acting on your own sheet).
6. Copy the **Web app URL** it gives you. It looks like:
   `https://script.google.com/macros/s/AKfycb.../exec`

That's your entire backend. No database to manage — responses land as rows
in the sheet, live, as students submit.

## 2. Point the app at your backend

1. Open `config.js` in this repo.
2. Replace the placeholder with your values:
   ```js
   window.APP_CONFIG = {
     ENDPOINT_URL: "https://script.google.com/macros/s/AKfycb.../exec",
     SHARED_SECRET: "the-same-secret-you-set-in-Code.gs",
   };
   ```
3. Save.

## 3. Host the two HTML pages

Any static host works. The easiest option since this is already a GitHub
repo:

1. Push this repo to GitHub (if not already).
2. In the repo settings, enable **GitHub Pages** for the branch you're using
   (Settings → Pages → Deploy from a branch).
3. Your pages will be available at:
   - Survey: `https://<your-username>.github.io/<repo>/index.html`
   - Dashboard: `https://<your-username>.github.io/<repo>/dashboard.html`

You can also just open the files locally (`file://.../index.html`) for
testing, or host them anywhere else that serves static files (Netlify,
a university web server, etc.) — there's no server-side code in these two
pages, they're plain HTML/JS.

## 4. Test it end-to-end

1. Open the survey URL, answer all 14 items, submit.
2. Check your Google Sheet — a new row should appear in a "Responses" tab.
3. Open the dashboard URL — you should see 1 respondent and the comparison
   chart.

## 5. Run it with your class

- Share the **survey URL** (`index.html`) with your students.
- Keep the **dashboard URL** (`dashboard.html`) to yourself — don't post it
  publicly, since it displays aggregate results and (via "View as table")
  every respondent's item-level answers are reachable through the same data
  endpoint.
- The dashboard has a **Refresh data** button — click it any time to pull in
  new submissions.

## Security notes (read this)

The `SHARED_SECRET` is a deterrent, not real security: it's visible in this
repo's `config.js` source to anyone who opens the page and views source. It
stops casual stumbling-upon of your endpoint, not a determined person. Don't
collect anything sensitive (real names, identifiable data) through this
survey — use anonymous participant codes (e.g. "P07") that you hand out
separately, if you need to match responses to individuals for course credit.

If you want stronger protection later, options include: rotating the secret
between class sessions, restricting the Apps Script deployment further, or
migrating to a proper auth-backed service.

## Customizing

- **Item wording / scoring / US baseline**: all in `items.js` and
  `scoring.js`, both plain-language and commented.
- **Styling**: `style.css`, shared by both pages.
- **Country placeholder**: item 7 ("In your country, many research projects
  are funded by tax money") is deliberately generic. Edit the string in
  `items.js` if you want to name a specific country for your class.
