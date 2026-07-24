/*
 * Conspiracy Mentality Questionnaire (CMQ) — item bank.
 *
 * Source: Bruder, M., Haffke, P., Neave, N., Nouripanah, N., & Imhoff, R.
 * (2013). Measuring individual differences in generic beliefs in conspiracy
 * theories across cultures: Conspiracy Mentality Questionnaire. Frontiers in
 * Psychology, 4, 225. https://doi.org/10.3389/fpsyg.2013.00225
 *
 * 5 items. Each is rated on an 11-point likelihood scale from 0% ("certainly
 * not") through 50% ("undecided") to 100% ("certainly"). There are no correct
 * answers — a higher mean = stronger conspiracy mentality. Responses are coded
 * 0-10 (0% = 0, 100% = 10) to match the published item means (Table 1).
 *
 * This is a SEPARATE app from the other surveys in the repo; nothing is shared.
 */

const CMQ_ITEMS = [
  { id: "q1", text: "I think that many very important things happen in the world, which the public is never informed about." },
  { id: "q2", text: "I think that politicians usually do not tell us the true motives for their decisions." },
  { id: "q3", text: "I think that government agencies closely monitor all citizens." },
  { id: "q4", text: "I think that events which superficially seem to lack a connection are often the result of secret activities." },
  { id: "q5", text: "I think that there are secret organizations that greatly influence political decisions." },
];

// 11-point likelihood scale. `value` is the 0-10 coding used for scoring and
// comparison to the published means; `percent` is what participants see; the
// verbal `anchor` is shown at the ends and middle (and as a tooltip on each).
const CMQ_SCALE = [
  { value: 0, percent: 0, anchor: "certainly not" },
  { value: 1, percent: 10, anchor: "extremely unlikely" },
  { value: 2, percent: 20, anchor: "very unlikely" },
  { value: 3, percent: 30, anchor: "unlikely" },
  { value: 4, percent: 40, anchor: "somewhat unlikely" },
  { value: 5, percent: 50, anchor: "undecided" },
  { value: 6, percent: 60, anchor: "somewhat likely" },
  { value: 7, percent: 70, anchor: "likely" },
  { value: 8, percent: 80, anchor: "very likely" },
  { value: 9, percent: 90, anchor: "extremely likely" },
  { value: 10, percent: 100, anchor: "certainly" },
];

const CMQ_SCALE_INTRO =
  "For each of the following statements, please indicate how likely you think " +
  "it is to be true, from 0% (certainly not) to 100% (certainly).";

// Published baselines (Study 1a, Table 1). Per-item means on the 0-10 scale.
// Overall = mean of the 5 item means.
const CMQ_BASELINES = {
  german:  { label: "German (n = 5,026)",  items: { q1: 8.04, q2: 7.48, q3: 3.35, q4: 4.59, q5: 6.22 } },
  english: { label: "English (n = 1,640)", items: { q1: 8.00, q2: 8.12, q3: 3.90, q4: 4.69, q5: 6.54 } },
  turkish: { label: "Turkish (n = 1,007)", items: { q1: 8.84, q2: 8.68, q3: 3.72, q4: 6.97, q5: 8.23 } },
};

// Precompute each sample's overall mean (mean of the 5 item means).
Object.keys(CMQ_BASELINES).forEach((k) => {
  const it = CMQ_BASELINES[k].items;
  const vals = CMQ_ITEMS.map((i) => it[i.id]);
  CMQ_BASELINES[k].overall = vals.reduce((a, b) => a + b, 0) / vals.length;
});

if (typeof window !== "undefined") {
  window.CMQ = { ITEMS: CMQ_ITEMS, SCALE: CMQ_SCALE, SCALE_INTRO: CMQ_SCALE_INTRO, BASELINES: CMQ_BASELINES };
}
if (typeof module !== "undefined") {
  module.exports = { CMQ_ITEMS, CMQ_SCALE, CMQ_SCALE_INTRO, CMQ_BASELINES };
}
