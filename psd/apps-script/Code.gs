/**
 * Google Apps Script backend for the Psychological Distance to Science (PSYDISC) app.
 *
 * SEPARATE from the other surveys: use a NEW Google Sheet and a NEW Web App
 * deployment. See psd/SETUP.md.
 */

const SECRET = "change-me"; // must match window.APP_CONFIG.SHARED_SECRET in psd/config.js
const SHEET_NAME = "Responses";

// 16 item ids, in order — must match psd/items.js (PSD_ITEMS[].id).
const ITEM_IDS = [
  "q1","q2","q3","q4","q5","q6","q7","q8",
  "q9","q10","q11","q12","q13","q14","q15","q16",
];

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    if (body.secret !== SECRET) return jsonOutput({ ok: false, error: "Invalid secret" });
    const sheet = getSheet();
    ensureHeader(sheet);
    const row = [new Date(), body.respondentId || "anonymous", body.submittedAt || ""];
    const answers = body.answers || {};
    ITEM_IDS.forEach((id) => row.push(answers[id] != null ? answers[id] : ""));
    sheet.appendRow(row);
    return jsonOutput({ ok: true });
  } catch (err) {
    return jsonOutput({ ok: false, error: String(err) });
  }
}

function doGet(e) {
  try {
    const secret = e.parameter && e.parameter.secret;
    if (secret !== SECRET) return jsonOutput({ ok: false, error: "Invalid secret" });
    const sheet = getSheet();
    const values = sheet.getDataRange().getValues();
    if (values.length < 2) return jsonOutput({ ok: true, respondents: [] });
    const header = values[0];
    const itemIds = header.slice(3);
    const respondents = values.slice(1).map((row) => {
      const answers = {};
      itemIds.forEach((id, i) => {
        const v = row[3 + i];
        if (v !== "" && v != null) answers[id] = v;
      });
      return {
        timestamp: row[0] instanceof Date ? row[0].toISOString() : String(row[0]),
        respondentId: row[1],
        submittedAt: row[2],
        answers: answers,
      };
    });
    return jsonOutput({ ok: true, respondents: respondents });
  } catch (err) {
    return jsonOutput({ ok: false, error: String(err) });
  }
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  return sheet;
}

function ensureHeader(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Timestamp", "RespondentID", "SubmittedAt"].concat(ITEM_IDS));
  }
}

function jsonOutput(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
