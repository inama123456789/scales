# Classroom survey apps

This repo hosts **two independent survey apps** that share the same setup
recipe but are otherwise completely separate (own items, own answer keys, own
baselines, own Google Sheets, own dashboards):

| App | Folder | What it measures |
|-----|--------|------------------|
| Science Literacy Scale | repo root (`index.html`, `dashboard.html`) | 14-item digital science-literacy scale (Mede et al., 2025), vs. US population |
| Information Literacy Test | [`ilt/`](./ilt/) | 40-item information-literacy test (Boh Podgornik et al., 2016), vs. validation-sample baseline |

Each has its own `SETUP.md`. The section below documents the first app; for the
Information Literacy Test see [`ilt/SETUP.md`](./ilt/SETUP.md).

---

# Science Literacy Scale — classroom app

A small survey app implementing the 14-item science literacy scale from:

> Mede, N. G., Howell, E. L., Schäfer, M. S., Metag, J., Beets, B., &
> Brossard, D. (2025). Measuring Science Literacy in a Digital World:
> Development and Validation of a Multi-Dimensional Survey Scale. *Science
> Communication*, 48(1), 93–127.

Students answer all 14 items (true/false + confidence for 11 items,
1–5 agreement for the 3 media-literacy items). Responses are collected in a
Google Sheet you own, and an instructor dashboard shows your class's mean
scores next to the article's published US population baseline (Study 2),
as bar charts.

## Files

| File | Purpose |
|---|---|
| `index.html` | Participant-facing survey |
| `dashboard.html` | Instructor-facing results dashboard |
| `items.js` | The 14 items, response options, and the US baseline means |
| `scoring.js` | Turns raw answers into item / subscale / full-scale scores |
| `style.css` | Shared styling for both pages |
| `config.js` | Your deployment's endpoint URL + shared secret (edit this) |
| `apps-script/Code.gs` | Google Apps Script backend (paste into a Google Sheet) |
| `SETUP.md` | Step-by-step deployment instructions |

## Quick start

See **[SETUP.md](./SETUP.md)** — about 10 minutes, no coding required beyond
pasting a URL and a secret into `config.js`.

## Scoring, briefly

- Items 1–8 (civic literacy) and 9–11 (cognitive literacy): scored correct
  (1) or incorrect/"don't know" (0); a dimension score is the mean of its
  items.
- Items 12–14 (media literacy): self-report agreement, rescaled from 1–5 to
  0–1; no "correct" answer.
- Full scale score = mean of the three dimension scores. This matches how
  the article's own Study 1/Study 2 summary table is constructed.
