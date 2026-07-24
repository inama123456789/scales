/*
 * Scoring for Psychological Distance to Science (PSYDISC).
 *
 * Each answer is 1-7. Reverse-coded items become (8 - response). A subscale
 * score is the mean of its (reverse-adjusted) items; the total PSYDISC score
 * is the mean of all 16 (reverse-adjusted) items — equal to the mean of the
 * four subscale means, matching the article's Figure 2. Higher = more distance.
 */

function adjusted(item, raw) {
  const v = Number(raw);
  if (!Number.isFinite(v)) return null;
  return item.reverse ? 8 - v : v;
}

function scoreRespondent(items, answers) {
  const all = [];
  const byDim = {};
  for (const item of items) {
    const v = adjusted(item, answers[item.id]);
    if (v == null) continue;
    all.push(v);
    (byDim[item.dimension] = byDim[item.dimension] || []).push(v);
  }
  const dims = {};
  Object.keys(byDim).forEach((d) => (dims[d] = mean(byDim[d])));
  return { total: mean(all), dims };
}

function aggregateClass(items, respondents) {
  const totals = [];
  const dimLists = {};
  const scored = respondents.map((r) => scoreRespondent(items, r.answers || {}));
  scored.forEach((s) => {
    if (s.total != null) totals.push(s.total);
    Object.keys(s.dims).forEach((d) => {
      if (s.dims[d] != null) (dimLists[d] = dimLists[d] || []).push(s.dims[d]);
    });
  });
  const dimMeans = {};
  Object.keys(dimLists).forEach((d) => (dimMeans[d] = mean(dimLists[d])));

  // Per-item means (reverse-adjusted), for the detail table.
  const itemStats = items.map((item) => {
    const vals = respondents.map((r) => adjusted(item, (r.answers || {})[item.id])).filter((v) => v != null);
    return { id: item.id, n: vals.length, mean: mean(vals) };
  });

  return { n: respondents.length, total: mean(totals), dimMeans, itemStats };
}

function mean(arr) {
  const v = arr.filter((x) => typeof x === "number" && Number.isFinite(x));
  if (!v.length) return null;
  return v.reduce((a, b) => a + b, 0) / v.length;
}

if (typeof window !== "undefined") {
  window.PSD_SCORING = { adjusted, scoreRespondent, aggregateClass, mean };
}
if (typeof module !== "undefined") {
  module.exports = { adjusted, scoreRespondent, aggregateClass, mean };
}
