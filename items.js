/*
 * Shared scale definition for the Science Literacy Scale app.
 *
 * Source: Mede, N. G., Howell, E. L., Schäfer, M. S., Metag, J., Beets, B.,
 * & Brossard, D. (2025). Measuring Science Literacy in a Digital World:
 * Development and Validation of a Multi-Dimensional Survey Scale.
 * Science Communication, 48(1), 93-127. https://doi.org/10.1177/10755470251317379
 *
 * Item wording and veracity keys: Table 1 (final 14 items, marked with a
 * dagger). US baseline means: Supplementary Table S8, Study 2 (US, N ~ 1,000).
 */

// ---- Response option sets -------------------------------------------------

// Used for items 1-11 (civic + cognitive literacy): confidence-weighted true/false.
const TF_OPTIONS = [
  { value: "confident_false", label: "I am confident that this is false" },
  { value: "somewhat_false", label: "I am somewhat confident that this is false" },
  { value: "somewhat_true", label: "I am somewhat confident that this is true" },
  { value: "confident_true", label: "I am confident that this is true" },
  { value: "dont_know", label: "Don't know" },
];

// Used for items 12-14 (media literacy): 1-5 agreement.
const AGREE_OPTIONS = [
  { value: 1, label: "1 - Strongly disagree" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5 - Strongly agree" },
];

// ---- Intro texts shown above each block of items ---------------------------

const TF_INTRO =
  "In the following, you will see some statements that you may know from " +
  "school or the media. Some are false, some are true. Please indicate " +
  "whether you think the statements are true or false and how confident " +
  "you are about your choice.";

const AGREE_INTRO =
  'How much do you agree or disagree with the following statements? For ' +
  'each statement, please select one option on a scale from 1 to 5, where ' +
  '1 means "strongly disagree" and 5 means "strongly agree."';

// ---- The 14 items -----------------------------------------------------------
// type: "tf" (true/false + confidence) or "agree" (1-5 agreement, no correct answer)
// veracity: "true" | "false" | null (null for "agree" items, which have no key)

const ITEMS = [
  // Civic literacy (8 items)
  { id: "q1", dimension: "civic", type: "tf", veracity: "false",
    text: "Antibiotics kill both viruses and bacteria." },
  { id: "q2", dimension: "civic", type: "tf", veracity: "false",
    text: "The genes of the mother decide whether a child becomes a boy or a girl." },
  { id: "q3", dimension: "civic", type: "tf", veracity: "false",
    text: "Scientific theories never change." },
  { id: "q4", dimension: "civic", type: "tf", veracity: "false",
    text: "Two scientists want to know if a drug is effective against diabetes. " +
      "Scientist A gives the drug to 1,000 people with diabetes to see how many " +
      "get cured. Scientist B gives the drug to 500 people but not to another " +
      "500 people to see how many in both groups get cured. Scientist A's " +
      "approach is scientifically correct." },
  { id: "q5", dimension: "civic", type: "tf", veracity: "true",
    text: "Sometimes it is not clear how scientific research will be applied " +
      "in practice at the time it is conducted." },
  { id: "q6", dimension: "civic", type: "tf", veracity: "true",
    text: "An essential part of science is scientists checking the quality of " +
      "each other's work." },
  { id: "q7", dimension: "civic", type: "tf", veracity: "true",
    text: "In your country, many research projects are funded by tax money." },
  { id: "q8", dimension: "civic", type: "tf", veracity: "true",
    text: "Politicians sometimes ask scientists for advice on policy decisions." },

  // Cognitive literacy (3 items)
  { id: "q9", dimension: "cognitive", type: "tf", veracity: "true",
    text: "People tend to pay more attention to details that confirm their beliefs." },
  { id: "q10", dimension: "cognitive", type: "tf", veracity: "true",
    text: "People tend to think that they are less susceptible to false " +
      "information about science than other people." },
  { id: "q11", dimension: "cognitive", type: "tf", veracity: "true",
    text: "People tend to feel more competent answering questions about " +
      "science when they think they can find the answers on the Internet." },

  // Media literacy (3 items) - self-report agreement, no correct answer
  { id: "q12", dimension: "media", type: "agree", veracity: null,
    text: "When I come across scientific information, I think about who " +
      "created the information." },
  { id: "q13", dimension: "media", type: "agree", veracity: null,
    text: "To find information on scientific issues, I use a variety of " +
      "different media (e.g., online search engines, books, or TV)." },
  { id: "q14", dimension: "media", type: "agree", veracity: null,
    text: "I understand most news about scientific issues." },
];

const DIMENSIONS = {
  civic: { label: "Civic Literacy" },
  media: { label: "Media Literacy" },
  cognitive: { label: "Cognitive Literacy" },
};

// ---- US population baseline (Study 2, N ~ 1,000, Jan 2024) -----------------
// Supplementary Table S8. Scores are on a 0-1 scale.
// Full scale = mean of the three subscale means (verified against the table).
const US_BASELINE = {
  full: 0.74,
  civic: 0.76,
  media: 0.66,
  cognitive: 0.79,
};

// Exposed as globals for plain <script> includes (no bundler in this project).
if (typeof window !== "undefined") {
  window.SCALE = { TF_OPTIONS, AGREE_OPTIONS, TF_INTRO, AGREE_INTRO, ITEMS, DIMENSIONS, US_BASELINE };
}
if (typeof module !== "undefined") {
  module.exports = { TF_OPTIONS, AGREE_OPTIONS, TF_INTRO, AGREE_INTRO, ITEMS, DIMENSIONS, US_BASELINE };
}
