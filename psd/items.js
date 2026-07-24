/*
 * Psychological Distance to Science (PSYDISC) — item bank.
 *
 * Source: Većkalov, B., Zarzeczna, N., ... van Harreveld, F., & Rutjens, B. T.
 * (2024). Psychological Distance to Science as a Predictor of Science
 * Skepticism Across Domains. Personality and Social Psychology Bulletin,
 * 50(1), 18-37. https://doi.org/10.1177/01461672221118184
 *
 * 16 items, 4 per dimension (temporal, social, hypothetical, spatial), rated
 * on a 1 (strongly disagree) to 7 (strongly agree) scale. Items flagged
 * reverse:true are reverse-coded (8 - response) before scoring. A HIGHER
 * score = GREATER psychological distance to science.
 *
 * Items are presented interleaved across dimensions (so consecutive items
 * aren't from the same factor); the dimension is used only for scoring and is
 * not shown to participants.
 *
 * Separate app; nothing shared with the other surveys.
 */

const PSD_ITEMS = [
  { id: "q1",  dimension: "temporal",     reverse: false, text: "Most of today's science is concerned with solving problems of the distant future." },
  { id: "q2",  dimension: "social",       reverse: false, text: "The prospect of working as a scientist seems beyond my reach." },
  { id: "q3",  dimension: "hypothetical", reverse: true,  text: "Scientific knowledge is a reliable way to solve important issues." },
  { id: "q4",  dimension: "spatial",      reverse: true,  text: "Science and scientific research play a big role in my local area." },
  { id: "q5",  dimension: "temporal",     reverse: false, text: "Science is mainly focused on the distant future." },
  { id: "q6",  dimension: "social",       reverse: false, text: "I rarely interact with scientists in real life." },
  { id: "q7",  dimension: "hypothetical", reverse: true,  text: "Science provides accurate information about the world we live in." },
  { id: "q8",  dimension: "spatial",      reverse: true,  text: "Scientific research really contributes to my local area." },
  { id: "q9",  dimension: "temporal",     reverse: false, text: "Scientists spend most of their time working on issues of the distant future." },
  { id: "q10", dimension: "social",       reverse: false, text: "Scientists are very different from me." },
  { id: "q11", dimension: "hypothetical", reverse: true,  text: "We can rely on science to deliver results that can be implemented in real life." },
  { id: "q12", dimension: "spatial",      reverse: false, text: "People from my local area don't become scientists." },
  { id: "q13", dimension: "temporal",     reverse: false, text: "We will see the impact of science more in the distant future than we do in the present." },
  { id: "q14", dimension: "social",       reverse: false, text: "It would be difficult for me to meet with a scientist." },
  { id: "q15", dimension: "hypothetical", reverse: true,  text: "I can see the effects of science, whether positive or negative, on the world." },
  { id: "q16", dimension: "spatial",      reverse: false, text: "Very few scientists live or work in my town." },
];

const PSD_DIMENSIONS = {
  temporal:     { label: "Temporal distance" },
  social:       { label: "Social distance" },
  hypothetical: { label: "Hypothetical distance" },
  spatial:      { label: "Spatial distance" },
};

// 7-point agree/disagree scale.
const PSD_SCALE = [
  { value: 1, label: "1", anchor: "strongly disagree" },
  { value: 2, label: "2", anchor: "disagree" },
  { value: 3, label: "3", anchor: "somewhat disagree" },
  { value: 4, label: "4", anchor: "neither agree nor disagree" },
  { value: 5, label: "5", anchor: "somewhat agree" },
  { value: 6, label: "6", anchor: "agree" },
  { value: 7, label: "7", anchor: "strongly agree" },
];

const PSD_SCALE_INTRO =
  "Please indicate how much you agree or disagree with each statement, from " +
  "1 (strongly disagree) to 7 (strongly agree).";

/*
 * Baseline reference values, APPROXIMATE, read from Figure 2 of the article
 * (Study 5, US sample), split by COVID-19 vaccination status. Higher = greater
 * distance. These are eyeballed off a bar chart, not exact table values, and
 * are labeled as approximate in the dashboard.
 */
const PSD_BASELINES = {
  notFullyVaccinated: {
    label: "Not fully vaccinated (approx.)",
    dims: { temporal: 3.90, social: 4.85, hypothetical: 2.40, spatial: 4.10 },
    total: 3.80,
  },
  fullyVaccinated: {
    label: "Fully vaccinated (approx.)",
    dims: { temporal: 3.45, social: 4.15, hypothetical: 1.90, spatial: 3.55 },
    total: 3.25,
  },
};

if (typeof window !== "undefined") {
  window.PSD = { ITEMS: PSD_ITEMS, DIMENSIONS: PSD_DIMENSIONS, SCALE: PSD_SCALE, SCALE_INTRO: PSD_SCALE_INTRO, BASELINES: PSD_BASELINES };
}
if (typeof module !== "undefined") {
  module.exports = { PSD_ITEMS, PSD_DIMENSIONS, PSD_SCALE, PSD_SCALE_INTRO, PSD_BASELINES };
}
