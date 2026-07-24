/*
 * Scoring for the Conspiracy Mentality Questionnaire (CMQ).
 *
 * Each answer is the 0-10 value chosen on the 11-point likelihood scale.
 * There are no correct answers. A respondent's CMQ score is the mean of the
 * 5 item values (0-10). Class stats are per-item means and the overall mean,
 * directly comparable to the published baselines (also on the 0-10 scale).
 */

function toNum(v) {
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function scoreRespondent(items, answers) {
  const vals = [];
  for (const item of items) {
    const v = toNum(answers[item.id]);
    if (v != null) vals.push(v);
  }
  return { n: vals.length, mean: mean(vals) };
}

function aggregateClass(items, respondents) {
  const overallPerRespondent = [];
  for (const r of respondents) {
    const s = scoreRespondent(items, r.answers || {});
    if (s.mean != null) overallPerRespondent.push(s.mean);
  }
  const itemMeans = {};
  const itemStats = items.map((item) => {
    const vals = respondents.map((r) => toNum((r.answers || {})[item.id])).filter((v) => v != null);
    const m = mean(vals);
    itemMeans[item.id] = m;
    return { id: item.id, n: vals.length, mean: m };
  });
  return {
    n: respondents.length,
    overallMean: mean(overallPerRespondent),
    itemMeans,
    itemStats,
  };
}

function mean(arr) {
  const v = arr.filter((x) => typeof x === "number" && Number.isFinite(x));
  if (!v.length) return null;
  return v.reduce((a, b) => a + b, 0) / v.length;
}

if (typeof window !== "undefined") {
  window.CMQ_SCORING = { scoreRespondent, aggregateClass, mean };
}
if (typeof module !== "undefined") {
  module.exports = { scoreRespondent, aggregateClass, mean };
}
