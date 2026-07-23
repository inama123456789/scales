/*
 * Scoring for the Information Literacy Test (ILT).
 *
 * Each item is single-correct multiple choice. A respondent's answer for an
 * item is the option key ("a".."d") or empty. Score = 1 if it matches the
 * item's `correct` key, else 0 (wrong OR unanswered). Total = 0..40.
 *
 * Class comparison is against the published validation-sample mean percent
 * correct (ILT_BASELINE.meanPercent), so we work in percent throughout.
 */

function isItemCorrect(item, answer) {
  return answer != null && answer === item.correct;
}

// Score one respondent: number correct, total answered, and percent (of all
// 40 items — unanswered counts as wrong, matching a test-score interpretation).
function scoreRespondent(items, answers) {
  let correct = 0;
  let answered = 0;
  for (const item of items) {
    const a = answers[item.id];
    if (a != null && a !== "") answered++;
    if (isItemCorrect(item, a)) correct++;
  }
  return {
    correct,
    answered,
    total: items.length,
    percent: items.length ? (correct / items.length) * 100 : null,
  };
}

// Aggregate a set of respondents into class-level stats.
function aggregateClass(items, respondents) {
  const percents = [];
  for (const r of respondents) {
    const s = scoreRespondent(items, r.answers || {});
    percents.push(s.percent);
  }
  const itemStats = items.map((item) => {
    const answers = respondents.map((r) => (r.answers || {})[item.id]);
    const nAnswered = answers.filter((a) => a != null && a !== "").length;
    const nCorrect = answers.filter((a) => isItemCorrect(item, a)).length;
    return {
      id: item.id,
      nAnswered,
      nCorrect,
      accuracy: respondents.length ? nCorrect / respondents.length : null,
    };
  });
  return {
    n: respondents.length,
    meanPercent: mean(percents),
    itemStats,
  };
}

function mean(arr) {
  const v = arr.filter((x) => typeof x === "number" && Number.isFinite(x));
  if (!v.length) return null;
  return v.reduce((a, b) => a + b, 0) / v.length;
}

if (typeof window !== "undefined") {
  window.ILT_SCORING = { isItemCorrect, scoreRespondent, aggregateClass, mean };
}
if (typeof module !== "undefined") {
  module.exports = { isItemCorrect, scoreRespondent, aggregateClass, mean };
}
