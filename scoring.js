/*
 * Shared scoring logic for the Science Literacy Scale app.
 * Used by dashboard.html to turn raw per-respondent answers into
 * item / subscale / full-scale scores comparable to the published
 * US baseline in items.js (US_BASELINE).
 *
 * Scoring rules:
 *  - "tf" items (civic + cognitive literacy): scored 1 if the respondent
 *    landed on the correct side of true/false, 0 if wrong OR "don't know".
 *    A subscale score is the mean of its items' 0/1 scores.
 *  - "agree" items (media literacy): no correct answer; rescaled from the
 *    1-5 agreement scale to 0-1 via (value - 1) / 4.
 *  - Full scale score = mean of the three subscale scores (matches the
 *    published US Study 2 table: (0.76+0.66+0.79)/3 = 0.737 rounds to 0.74).
 *
 * Confidence (tf items only, separate from correctness):
 *  - "confident_*"  -> 1.0
 *  - "somewhat_*"   -> 0.5
 *  - "dont_know"    -> 0.0
 */

function isTfCorrect(item, rawValue) {
  if (rawValue === "dont_know" || rawValue == null) return false;
  const saysTrue = rawValue === "somewhat_true" || rawValue === "confident_true";
  return item.veracity === "true" ? saysTrue : !saysTrue;
}

function tfConfidence(rawValue) {
  if (rawValue === "confident_true" || rawValue === "confident_false") return 1;
  if (rawValue === "somewhat_true" || rawValue === "somewhat_false") return 0.5;
  return 0; // dont_know or missing
}

function agreeScore01(rawValue) {
  const v = Number(rawValue);
  if (!Number.isFinite(v)) return null;
  return (v - 1) / 4;
}

// itemScore: 0-1 score for a single item's response, using the item's own scale.
function itemScore(item, rawValue) {
  if (item.type === "tf") return isTfCorrect(item, rawValue) ? 1 : 0;
  return agreeScore01(rawValue);
}

// Score a single respondent's raw answers (object keyed by item id) into
// subscale means and a full-scale mean. Skips items with no answer.
function scoreRespondent(items, answers) {
  const byDim = {};
  for (const item of items) {
    const raw = answers[item.id];
    if (raw == null || raw === "") continue;
    const score = itemScore(item, raw);
    if (score == null) continue;
    (byDim[item.dimension] = byDim[item.dimension] || []).push(score);
  }
  const dimMeans = {};
  for (const dim of Object.keys(byDim)) {
    dimMeans[dim] = mean(byDim[dim]);
  }
  const availableDims = Object.keys(dimMeans);
  const full = availableDims.length ? mean(availableDims.map((d) => dimMeans[d])) : null;
  return { dimMeans, full };
}

// Aggregate a set of respondents (array of {answers}) into class-level stats:
// per-dimension mean, full-scale mean, and per-item stats (accuracy or mean
// agreement, plus mean confidence for tf items and a don't-know rate).
function aggregateClass(items, respondents) {
  const perRespondentFull = [];
  const perRespondentDim = { civic: [], media: [], cognitive: [] };

  for (const r of respondents) {
    const { dimMeans, full } = scoreRespondent(items, r.answers || {});
    if (full != null) perRespondentFull.push(full);
    for (const dim of Object.keys(perRespondentDim)) {
      if (dimMeans[dim] != null) perRespondentDim[dim].push(dimMeans[dim]);
    }
  }

  const dimensionScores = {
    full: mean(perRespondentFull),
    civic: mean(perRespondentDim.civic),
    media: mean(perRespondentDim.media),
    cognitive: mean(perRespondentDim.cognitive),
  };

  const itemStats = items.map((item) => {
    const raws = respondents
      .map((r) => (r.answers || {})[item.id])
      .filter((v) => v != null && v !== "");
    if (item.type === "tf") {
      const n = raws.length;
      const correctCount = raws.filter((v) => isTfCorrect(item, v)).length;
      const dontKnowCount = raws.filter((v) => v === "dont_know").length;
      const meanConfidence = mean(raws.map(tfConfidence));
      return {
        id: item.id,
        n,
        accuracy: n ? correctCount / n : null,
        dontKnowRate: n ? dontKnowCount / n : null,
        meanConfidence,
      };
    }
    const scores = raws.map(agreeScore01).filter((v) => v != null);
    return {
      id: item.id,
      n: raws.length,
      meanAgreement01: mean(scores),
      meanAgreement15: mean(raws.map(Number)),
    };
  });

  return { n: respondents.length, dimensionScores, itemStats };
}

function mean(arr) {
  const vals = arr.filter((v) => typeof v === "number" && Number.isFinite(v));
  if (!vals.length) return null;
  return vals.reduce((a, b) => a + b, 0) / vals.length;
}

if (typeof window !== "undefined") {
  window.SCORING = { isTfCorrect, tfConfidence, agreeScore01, itemScore, scoreRespondent, aggregateClass, mean };
}
if (typeof module !== "undefined") {
  module.exports = { isTfCorrect, tfConfidence, agreeScore01, itemScore, scoreRespondent, aggregateClass, mean };
}
