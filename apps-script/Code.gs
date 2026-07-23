/**
 * Google Apps Script backend for the Science Literacy Scale app.
 *
 * Setup: create a Google Sheet, open Extensions > Apps Script, paste this
 * file's contents in, set SECRET below, deploy as a Web App. Full steps
 * in SETUP.md at the repo root.
 *
 * doPost  -> appends one row per survey submission.
 * doGet   -> returns all stored responses as JSON, for dashboard.html.
 *
 * Both endpoints require a "secret" that must match SHARED_SECRET in
 * config.js. This is light protection (deters casual snooping/spamming of
 * the URL), not real security — see SETUP.md for the threat model.
 */

const SECRET = "change-me"; // must match window.APP_CONFIG.SHARED_SECRET in config.js
const SHEET_NAME = "Responses";

// Must match the item ids in items.js (ITEMS[].id), in the same order.
const ITEM_IDS = [
  "q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8",
  "q9", "q10", "q11", "q12", "q13", "q14",
];

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    if (body.secret !== SECRET) {
      return jsonOutput({ ok: false, error: "Invalid secret" });
    }
    const sheet = getSheet();
    ensureHeader(sheet);
    const row = [new Date(), body.respondentId || "anonymous", body.submittedAt || ""];
    ITEM_IDS.forEach((id) => {
      const answers = body.answers || {};
      row.push(answers[id] != null ? answers[id] : "");
    });
    sheet.appendRow(row);
    return jsonOutput({ ok: true });
  } catch (err) {
    return jsonOutput({ ok: false, error: String(err) });
  }
}

function doGet(e) {
  try {
    const secret = e.parameter && e.parameter.secret;
    if (secret !== SECRET) {
      return jsonOutput({ ok: false, error: "Invalid secret" });
    }
    const sheet = getSheet();
    const values = sheet.getDataRange().getValues();
    if (values.length < 2) return jsonOutput({ ok: true, respondents: [] });

    const header = values[0];
    const itemIds = header.slice(3); // columns after Timestamp, RespondentID, SubmittedAt
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
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
