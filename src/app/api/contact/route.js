import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req, res) {
  try {
    const secrets = require('../../../../secrets.json')
    const data = await req.json();
    const auth = new google.auth.GoogleAuth({
      
      credentials: {...secrets, private_key : process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')},
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:D1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[data.name, data.phone, data.email, data.message]],
      },
    });

    return NextResponse.json({
      data: response.data,
    }).status(200); 
  } catch (err) {
    return NextResponse.json({ error:err || "something went wrong" });
  }
}
