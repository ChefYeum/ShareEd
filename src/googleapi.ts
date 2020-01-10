'use strict';

import { google } from 'googleapis';

import path from 'path';

/**
 * The JWT authorization is ideal for performing server-to-server
 * communication without asking for user consent.
 *
 * Suggested reading for Admin SDK users using service accounts:
 * https://developers.google.com/admin-sdk/directory/v1/guides/delegation
 *
 * See the defaultauth.js sample for an alternate way of fetching compute credentials.
 */
async function getDriveItems() {
  // Create a new JWT client using the key file downloaded from the Google Developer Console
  const auth = new google.auth.GoogleAuth({
    keyFile: path.join(__dirname, '..','credentials.json'),
    scopes: 'https://www.googleapis.com/auth/drive',
  });
  const client = await auth.getClient();

  // Obtain a new drive client, making sure you pass along the auth client
  const drive = google.drive({
    version: 'v2',
    auth: client,
  });

  // Make an authorized request to list Drive files.
  const SHAREED_DRIVE_ID = "0AEE5HGZxGrOTUk9PVA";
  const res = await drive.files.list({
                corpora: 'drive',
                includeTeamDriveItems: true,
                supportsTeamDrives: true,
                teamDriveId: SHAREED_DRIVE_ID
            });

  return res.data.items;
}

if (module === require.main) {
  getDriveItems()
    .then(console.log)
    .catch(console.error);
}

export default getDriveItems;
