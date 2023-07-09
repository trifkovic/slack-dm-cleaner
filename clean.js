const { WebClient } = require('@slack/web-api');

const token = 'YOUR_USER_OAUTH_TOKEN'; // Replace with your user OAuth token (USER! not bot!)
const channelId = 'CHANNEL_ID'; // Replace  with the actual DM Channel ID (Slack browser, open a DM with somebody, last part of the URL https://app.slack.com/client/WORKSPACE_ID/YOUR_DM_ID)
const userId = 'USER_ID'; // Replace * with your user ID (Slack browser, click on yourself, last part of the URL https://app.slack.com/client/WORKSPACE_ID/YOUR_USER_ID)

async function deleteDMMessages() {
  const client = new WebClient(token);
  const messagesToDelete = [];

  try {
    let cursor = null;

    // Retrieve conversation history
    do {
      const response = await client.conversations.history({
        channel: channelId,
        cursor,
      });

      if (response.ok) {
        const messages = response.messages;

        // Find user's messages and collect their timestamps
        for (const message of messages) {
          if (message.user === userId) {
            messagesToDelete.push(message.ts);
          }
        }

        cursor = response.response_metadata.next_cursor;
      } else {
        console.error(response.error);
        return;
      }
    } while (cursor);

    console.log(`Found ${messagesToDelete.length} messages to delete.`);

    // Delete each message by timestamp
    for (let i = 0; i < messagesToDelete.length; i++) {
      const timestamp = messagesToDelete[i];

      const result = await client.chat.delete({
        channel: channelId,
        ts: timestamp,
      });

      console.log(`Deleted message with timestamp: ${timestamp}`);
      console.log(result);

      // Add a delay between each message deletion to adhere to rate limits
      if (i < messagesToDelete.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 1200)); // Wait for 1.2 seconds
      }
    }
  } catch (error) {
    console.error(error);
  }
}

deleteDMMessages();
