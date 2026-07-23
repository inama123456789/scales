/*
 * Information Literacy Test (ILT) — item bank.
 *
 * Source: Boh Podgornik, B., Dolničar, D., Šorgo, A., & Bartol, T. (2016).
 * Development, Testing, and Validation of an Information Literacy Test (ILT)
 * for Higher Education. Journal of the Association for Information Science
 * and Technology, 67(10), 2420-2436. https://doi.org/10.1002/asi.23586
 *
 * The 40 multiple-choice questions are reproduced from the article's
 * Appendix ("Online Information Literacy Test"), where the correct answer
 * of each item is printed in bold. Each item has exactly one correct answer
 * and is scored 1 (correct) / 0 (incorrect or unanswered). Total score 0-40.
 *
 * Baseline for comparison (see baseline.js): the published validation-sample
 * mean of 66.0% correct (N = 536 university students). This is a SEPARATE
 * instrument from the science-literacy scale — nothing is shared between them.
 *
 * Some items refer to a shared stimulus (a catalogue record, a search-form
 * table). Those are stored in the item's `stimulus` field (HTML) and shown
 * above the question.
 */

const ILT_ITEMS = [
  {
    id: "q1",
    text: "The most reliable, verified, concise and comprehensive description of an unknown specialized concept can be found in:",
    options: [
      { key: "a", text: "daily newspaper" },
      { key: "b", text: "bilingual dictionary" },
      { key: "c", text: "lexicon or encyclopedia" },
      { key: "d", text: "research article" },
    ],
    correct: "c",
  },
  {
    id: "q2",
    text: "The most manageable and precise level of search criteria that include an object (keyword 1) and aspect (keyword 2) will be retrieved by the search sequence:",
    options: [
      { key: "a", text: "keyword 1" },
      { key: "b", text: "keyword 1 AND keyword 2" },
      { key: "c", text: "keyword 1 NOT keyword 2" },
      { key: "d", text: "keyword 1 OR keyword 2" },
    ],
    correct: "b",
  },
  {
    id: "q3",
    text: "If I have difficulty selecting the correct specialized English term when searching for information, I use:",
    options: [
      { key: "a", text: "Google translate" },
      { key: "b", text: "only the established native-language terms with which I have become acquainted during lectures" },
      { key: "c", text: "a specialized thematic dictionary" },
      { key: "d", text: "a general bilingual dictionary" },
    ],
    correct: "c",
  },
  {
    id: "q4",
    text: "In my assignment, I wanted to describe the impact of human activities on climate change. My initial search strategy returned an overwhelming number of documents. How do I proceed?",
    options: [
      { key: "a", text: "I abandon the topic and ask for a completely different assignment." },
      { key: "b", text: "I define a more specialized theme within the topic, optimize the search strategy and proceed further." },
      { key: "c", text: "I look up the topic of climate change on Wikipedia and summarize this information in my assignment." },
      { key: "d", text: "In the faculty library, I look for a related article written by a well-known author and rework the content of that article." },
    ],
    correct: "b",
  },
  {
    id: "q5",
    text: "An MSc or PhD thesis requires an original scientific contribution by the student. How do I proceed?",
    options: [
      { key: "a", text: "I collect the most interesting recent publications and use them as the basis for my thesis." },
      { key: "b", text: "I look for experiments in research articles published by other authors and describe these experiments." },
      { key: "c", text: "I formulate new information and conclusions by combining both my own research results and the existing information." },
      { key: "d", text: "I collect and discuss conclusions from any available research article, book, patent and Web document." },
    ],
    correct: "c",
  },
  {
    id: "q6",
    text: "In which list have the information sources been correctly ordered from the least to the most formally established and verified?",
    options: [
      { key: "a", text: "blog, daily newspaper, scholarly journal, standard" },
      { key: "b", text: "blog, standard, daily newspaper, scholarly journal" },
      { key: "c", text: "daily newspaper, blog, standard, scholarly journal" },
      { key: "d", text: "standard, scholarly journal, blog, daily newspaper" },
    ],
    correct: "a",
  },
  {
    id: "q7",
    // Shared stimulus for Q7-10: a bibliographic/catalogue record.
    stimulus:
      '<p><strong>Look at this record from the bibliographic/catalogue database and answer questions 7&ndash;10.</strong></p>' +
      '<table class="stimulus-table"><tbody>' +
      '<tr><th>Title</th><td>Planet of the Future: Ecology, Science Fiction or a Real Possibility?</td></tr>' +
      '<tr><th>Type/Content</th><td>video DVD</td></tr>' +
      '<tr><th>Pub. Date</th><td>2008</td></tr>' +
      '<tr><th>Publishing</th><td>Ljubljana: Umanotera, 2008</td></tr>' +
      '<tr><th>Other Authors</th><td>Zemljic, Barbara, 1978 -, Kajfez-Bogataj, Lucka</td></tr>' +
      '<tr><th>Description</th><td>1 video DVD : colour, sound ; 12 cm</td></tr>' +
      '<tr><th>Notes</th><td>Project Website: www.planet-sprememb.si</td></tr>' +
      '</tbody></table>',
    text: "The record in this database refers to:",
    options: [
      { key: "a", text: "newspaper article" },
      { key: "b", text: "specialized book" },
      { key: "c", text: "video film" },
      { key: "d", text: "scientific journal" },
    ],
    correct: "c",
  },
  {
    id: "q8",
    note: "Refer to the catalogue record shown above (questions 7-10).",
    text: "This information source was issued:",
    options: [
      { key: "a", text: "as a self-published book by the author Barbara Zemljic" },
      { key: "b", text: "in 2008 in Ljubljana by the publisher Umanotera" },
      { key: "c", text: "in 2008 in partnership with www.planet-sprememb.si" },
      { key: "d", text: "in the current year on the Webpage www.planet-sprememb.si" },
    ],
    correct: "b",
  },
  {
    id: "q9",
    note: "Refer to the catalogue record shown above (questions 7-10).",
    text: "Who is the author?",
    options: [
      { key: "a", text: "The author is www.planet-sprememb.si" },
      { key: "b", text: "There are two authors: Barbara Zemljic and Lucka Kajfez-Bogataj." },
      { key: "c", text: "There are three authors: Zemljic, Kajfez and Bogataj." },
      { key: "d", text: "This is a general Webpage with no specific known authors." },
    ],
    correct: "b",
  },
  {
    id: "q10",
    note: "Refer to the catalogue record shown above (questions 7-10).",
    text: "This information source is best defined as:",
    options: [
      { key: "a", text: "documentary movie on ecology and the environmental protection of our planet" },
      { key: "b", text: "science fiction DVD" },
      { key: "c", text: "book with color photographs and an associated soundtrack on human evolution" },
      { key: "d", text: "Slovenian translation of an English TV series on the future of the planet Umanotera" },
    ],
    correct: "a",
  },
  {
    id: "q11",
    text: "I am investigating the impact of diet and nutrition on human health. The most relevant information will be found in information sources for:",
    options: [
      { key: "a", text: "medicine and agriculture" },
      { key: "b", text: "medicine and social sciences" },
      { key: "c", text: "medicine and humanities" },
      { key: "d", text: "medicine and sport" },
    ],
    correct: "a",
  },
  {
    id: "q12",
    text: 'Which of the data listed below are "raw" unprocessed data:',
    options: [
      { key: "a", text: "share prices published at the end of a trading day" },
      { key: "b", text: "weather maps" },
      { key: "c", text: "population growth data presented in tables" },
      { key: "d", text: "population growth data presented diagrammatically (in graphs)" },
    ],
    correct: "a",
  },
  {
    id: "q13",
    text: "Original scientific articles typically describe:",
    options: [
      { key: "a", text: "experience and perspectives acquired during the author's years of professional activity" },
      { key: "b", text: "a summary of other authors' research" },
      { key: "c", text: "an overview of the development of a scientific field" },
      { key: "d", text: "the author's original research results" },
    ],
    correct: "d",
  },
  {
    id: "q14",
    text: 'I am exploring two-dimensional animations. Using the keyword "animation", I have retrieved 33,314 documents in a database. Which of the queries listed below is the most appropriate for the next search?',
    options: [
      { key: "a", text: "animation AND (2D OR 2-dimension* OR two dimension* OR two-dimension*)" },
      { key: "b", text: "animation AND 2D AND 2-dimension* AND two dimension* AND two-dimension*" },
      { key: "c", text: "animation NOT (2D OR 2-dimension* OR two dimension* OR two-dimension*)" },
      { key: "d", text: "animation OR 2D OR 2-dimension* OR two dimension* OR two-dimension*" },
    ],
    correct: "a",
  },
  {
    id: "q15",
    text: "I want to find information on the medicinal plant oregano, which is also known as wild marjoram in traditional herbal medicine. Its scientific name is Oreganum vulgare. What is the most appropriate search query in a database?",
    options: [
      { key: "a", text: '"oregano wild marjoram Oreganum vulgare"' },
      { key: "b", text: "oregano AND wild marjoram AND Oreganum vulgare" },
      { key: "c", text: "oregano OR wild marjoram AND Oreganum vulgare" },
      { key: "d", text: "oregano OR wild marjoram OR Oreganum vulgare" },
    ],
    correct: "d",
  },
  {
    id: "q16",
    text: "I am interested in the topic of sweetening and sweeteners, and I find the appropriate English terms: sweet, sweeten, sweetener, sweeteners, sweetening. What is the most appropriate search strategy?",
    options: [
      { key: "a", text: "right-hand truncation, using the term sweet*" },
      { key: "b", text: 'an exact search, in this case: "sweet sweeten sweetener sweeteners sweetening"' },
      { key: "c", text: "searching with parenthesis: (sweet sweeten sweetener sweeteners sweetening)" },
      { key: "d", text: "using the operator AND, i.e.: sweet AND sweeten AND sweetener AND sweeteners AND sweetening" },
    ],
    correct: "a",
  },
  {
    id: "q17",
    text: 'In Google Scholar, "Find articles with all of the words" is equivalent to the search operator:',
    options: [
      { key: "a", text: "AND" },
      { key: "b", text: "AND NOT" },
      { key: "c", text: "NOT" },
      { key: "d", text: "OR" },
    ],
    correct: "a",
  },
  {
    id: "q18",
    text: 'In Google Scholar, "Find articles with at least one of the words" is equivalent to the search operator:',
    options: [
      { key: "a", text: "AND" },
      { key: "b", text: "AND NOT" },
      { key: "c", text: "NOT" },
      { key: "d", text: "OR" },
    ],
    correct: "d",
  },
  {
    id: "q19",
    stimulus:
      "<p>How would you formulate a standard search query using the Google Scholar search criteria presented as:</p>" +
      '<table class="stimulus-table"><tbody>' +
      "<tr><th>with all of the words</th><td>weather</td></tr>" +
      "<tr><th>with the exact phrase</th><td></td></tr>" +
      "<tr><th>with at least one of the words</th><td>data information</td></tr>" +
      "</tbody></table>",
    text: "Which query matches these criteria?",
    options: [
      { key: "a", text: "(data OR information) AND weather" },
      { key: "b", text: "(weather AND data AND information)" },
      { key: "c", text: "(weather OR data OR information)" },
      { key: "d", text: 'weather AND "data information"' },
    ],
    correct: "a",
  },
  {
    id: "q20",
    text: 'A database search interface employs pull-down menus instead of search operators. Which of the Boolean operators substitutes the concept "optional"?',
    options: [
      { key: "a", text: "AND" },
      { key: "b", text: "NOT" },
      { key: "c", text: "OR" },
      { key: "d", text: "WITH" },
    ],
    correct: "c",
  },
  {
    id: "q21",
    text: "Compared to a search within the title and abstract, a full-text search in a database results in:",
    options: [
      { key: "a", text: "the same number of hits" },
      { key: "b", text: "a smaller number of hits" },
      { key: "c", text: "this has no effect on the number of hits" },
      { key: "d", text: "a larger number of hits" },
    ],
    correct: "d",
  },
  {
    id: "q22",
    text: "In order to obtain original research results regarding the behaviour of users in relation to a new technology, it is best to employ:",
    options: [
      { key: "a", text: "survey questionnaires and interviews" },
      { key: "b", text: "patents" },
      { key: "c", text: "review articles" },
      { key: "d", text: "technical handbooks" },
    ],
    correct: "a",
  },
  {
    id: "q23",
    text: "What is the most appropriate method for organizing information in an electronic format:",
    options: [
      { key: "a", text: "I read the documents in an electronic format, underline the most interesting parts, logically rename the files and assign them to folders according to the subject." },
      { key: "b", text: "I open a new folder and move the files to the folder using the original file names." },
      { key: "c", text: "I print out all of the documents in their entirety, read them, and then copy all of the interesting sections directly into my paper." },
      { key: "d", text: "I open a new file in a word processor and then copy-paste the relevant sections of the document directly into the file. I do not save the complete original documents." },
    ],
    correct: "a",
  },
  {
    id: "q24",
    text: "I am writing a paper and want to cite findings from other articles. Which tab is used for this purpose in MS Word?",
    options: [
      { key: "a", text: "References — Citations & Bibliography" },
      { key: "b", text: "References — Footnotes" },
      { key: "c", text: "Review — Tracking" },
      { key: "d", text: "Review — Comments" },
    ],
    correct: "a",
  },
  {
    id: "q25",
    text: "I need to check the content of a large number of articles in a short time. Which element of an article can I examine quickly?",
    options: [
      { key: "a", text: "abstract" },
      { key: "b", text: "materials and methods" },
      { key: "c", text: "discussion" },
      { key: "d", text: "results" },
    ],
    correct: "a",
  },
  {
    id: "q26",
    text: "Which statement on GMO (Genetically Modified Organisms) is not the author's personal opinion?",
    options: [
      { key: "a", text: "GMO will bring about a global food crisis." },
      { key: "b", text: "According to inventories, 15 new GMOs were registered in the EU in 2013." },
      { key: "c", text: "GMO experimentation should be banned." },
      { key: "d", text: "Most GMO researchers have been paid off by large corporations, such as Monsanto." },
    ],
    correct: "b",
  },
  {
    id: "q27",
    text: "It has been scientifically established that cholesterol is present in animal organisms but not in plants. How would you best describe a TV commercial which claims that the sunflower oil manufactured by a particular producer contains no cholesterol?",
    options: [
      { key: "a", text: "This is a valuable benefit, and it will encourage me to buy this brand of oil." },
      { key: "b", text: "This is manipulative and misleading information, as plant oils do not contain cholesterol." },
      { key: "c", text: "This information has medical significance, and I am therefore willing to pay more for this oil." },
      { key: "d", text: "This is interesting information on the unique composition of this oil." },
    ],
    correct: "b",
  },
  {
    id: "q28",
    text: "On my blog, I would like to publish a picture of a famous person who is seeking to advance humanitarian principles in his/her own country. However, his/her activities are prohibited in that country. How will I proceed?",
    options: [
      { key: "a", text: "I will not publish the picture because pictures of the person are banned in his/her own country." },
      { key: "b", text: "I will not publish the picture because our two countries have friendly relations." },
      { key: "c", text: "I cannot publish the picture of the person without her/his permission." },
      { key: "d", text: "I will publish the picture because the international activities of the person are public and are based on universal ethical principles." },
    ],
    correct: "d",
  },
  {
    id: "q29",
    text: "What is the correct sequence of the elements in a research article?",
    options: [
      { key: "a", text: "Abstract - Bibliography - Introduction - Material and Methods - Results - Discussion - Conclusions" },
      { key: "b", text: "Abstract - Introduction - Material and Methods - Results - Discussion - Conclusions - Bibliography" },
      { key: "c", text: "Abstract - Conclusions - Introduction - Bibliography - Material and Methods - Results - Discussion" },
      { key: "d", text: "Introduction - Results - Discussion - Conclusions - Material and Methods - Bibliography - Abstract" },
    ],
    correct: "b",
  },
  {
    id: "q30",
    text: "Mary Brown needs to create a password in order to access an information system. Which password is the most secure?",
    options: [
      { key: "a", text: "ma@r$y3br7OWN_" },
      { key: "b", text: "MaryBrown" },
      { key: "c", text: "MaryBrown123" },
      { key: "d", text: "marybrown28111991" },
    ],
    correct: "a",
  },
  {
    id: "q31",
    text: "After an extensive information search, I learn that natural dyes are used in the production of jelly, candy, ice cream and yogurt; in the dyeing of cotton, wool and silk; and are added to makeup products and hair dyes. How should I best classify these products?",
    options: [
      { key: "a", text: "pharmacy, biology, food technology" },
      { key: "b", text: "medicine, biology, chemistry" },
      { key: "c", text: "nutrition, textile technology, cosmetics" },
      { key: "d", text: "confectionery, animal husbandry, hairdressing" },
    ],
    correct: "c",
  },
  {
    id: "q32",
    // NOTE: In the article this item is a set of four hierarchy DIAGRAMS.
    // They are rendered here as text descriptions of each scheme. VERIFY the
    // correct answer against the article's diagram before going live.
    needsReview: true,
    note: "This item originally uses diagrams (schemes). The options below describe each scheme in words.",
    text: "Which of these schemes is the most appropriate for presenting the topics from Question 31?",
    options: [
      { key: "a", text: "A single chain: Textiles → Cosmetics → Nutrition → Natural dyes" },
      { key: "b", text: '"Uses of natural dyes" as the top category, branching into: Nutrition, Cosmetics, Textiles' },
      { key: "c", text: '"Nutrition" as the top category, with "Uses of natural dyes" branching into Cosmetics, Textiles' },
      { key: "d", text: '"Textiles" as the top category, branching into: Natural dyes, Cosmetics, Nutrition' },
    ],
    correct: "b",
  },
  {
    id: "q33",
    text: "In which document type are citations and a bibliography not obligatory?",
    options: [
      { key: "a", text: "B.Sc. thesis" },
      { key: "b", text: "scientific paper published in conference proceedings" },
      { key: "c", text: "original scientific article" },
      { key: "d", text: "general interest article" },
    ],
    correct: "d",
  },
  {
    id: "q34",
    text: "What is the typical length of an abstract in scientific articles?",
    options: [
      { key: "a", text: "150 to 250 words" },
      { key: "b", text: "2000 to 3000 words" },
      { key: "c", text: "50 to 100 words" },
      { key: "d", text: "500 to 1000 words" },
    ],
    correct: "a",
  },
  {
    id: "q35",
    text: "Which of these sections is not a standard part in a scientific article?",
    options: [
      { key: "a", text: "Materials and Methods" },
      { key: "b", text: "Discussion" },
      { key: "c", text: "Introduction" },
      { key: "d", text: "Acknowledgments" },
    ],
    correct: "d",
  },
  {
    id: "q36",
    text: "I bought some old documents in a second-hand bookshop. Which of the documents can I scan and publish on my Webpage without authorisation?",
    options: [
      { key: "a", text: "anonymous photo published in a women's magazine" },
      { key: "b", text: "article from a daily newspaper" },
      { key: "c", text: "original manuscript by William Shakespeare" },
      { key: "d", text: "translation of a poem written by a living poet and published by a British publisher" },
    ],
    correct: "c",
  },
  {
    id: "q37",
    text: "In my paper, I want to use some data from an article by another author. How do I proceed according to ethical principles and the protection of author's rights?",
    options: [
      { key: "a", text: "I am allowed to make reasonable use of the data as long as I cite the source article." },
      { key: "b", text: "I can only use the data if I quote the source text word-for-word and cite the source article." },
      { key: "c", text: "I can only use the data if I obtain written permission from the author." },
      { key: "d", text: "Under no circumstances can I use the data." },
    ],
    correct: "a",
  },
  {
    id: "q38",
    text: "Our university subscribes to a journal with a pay-per-license agreement. What am I not allowed to do?",
    options: [
      { key: "a", text: "Cite an article in my B.Sc. thesis." },
      { key: "b", text: "Print out an article on my printer." },
      { key: "c", text: "Download a full article on my computer." },
      { key: "d", text: "Scan a selected page and publish it on my blog." },
    ],
    correct: "d",
  },
  {
    id: "q39",
    text: "What is the appropriate procedure for referencing other works in my written assignment or thesis?",
    options: [
      { key: "a", text: "I only reference the author of a picture from the Web if the picture has been supplied with a copyright sign ©" },
      { key: "b", text: "I do not have to reference information from the Web, as such information is freely available and does not have a © sign." },
      { key: "c", text: "I only need to reference the parts of a document that I quote word-for-word." },
      { key: "d", text: "I have to reference all of the information that is not a result of my own work." },
    ],
    correct: "d",
  },
  {
    id: "q40",
    text: "If I refer to the citations in my text with numbering using the format [1], how do I structure the final list of references?",
    options: [
      { key: "a", text: "in alphabetical order by authors' last names" },
      { key: "b", text: "in chronological order by year of publication" },
      { key: "c", text: "in the order of library accession numbers" },
      { key: "d", text: "in ascending numerical order with regard to the first reference to the source in the paper" },
    ],
    correct: "d",
  },
];

// US? No — this is a Slovenian validation sample. Baseline = overall mean
// percentage correct in the original validation study (Table 5, N = 536).
const ILT_BASELINE = {
  label: "Validation sample (N = 536)",
  meanPercent: 66.0,          // overall pretest mean, % correct
  postTrainingPercent: 78.6,  // optional 2nd reference: after IL course
};

if (typeof window !== "undefined") {
  window.ILT = { ITEMS: ILT_ITEMS, BASELINE: ILT_BASELINE };
}
if (typeof module !== "undefined") {
  module.exports = { ILT_ITEMS, ILT_BASELINE };
}
