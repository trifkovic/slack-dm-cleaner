# Slack DM Cleaner

A script to delete your messages from a specific DM channel in Slack.

**The script is tested on 7/9/2023 within the current Slack tier 3 API limit, Ubuntu 22.04 LTS, and npm -v 9.8.0.**

This script is designed to delete messages from a specific channelId, which represents a direct message (DM) in Slack. It goes beyond deleting just the main messages and includes the deletion of files and thread replies within that specific DM.

**Don't forget to delete/revoke the Slack token if you don't plan to use it after a while, as a security tip.**

After using the script or when you no longer need the Slack token, it is recommended to delete or revoke the token to ensure the security of your Slack account. By deleting or revoking the token, you prevent any unauthorized access to your Slack workspace.

To delete or revoke the Slack token, you can follow the steps provided by Slack in their documentation or access the Slack API token management settings to remove the token associated with the script. Make sure to review and understand the implications before deleting or revoking any tokens to avoid any unintended consequences.

By following this security tip, you help protect your Slack account and prevent potential misuse of your credentials.

## Installation

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/trifkovic/slack-dm-cleaner.git

2. Navigate to the slack-dm-cleaner directory:

   ```shell
   cd slack-dm-cleaner

3. Install the required dependencies 

   ```shell
   npm install @slack/web-api

## Usage

To obtain a Slack token and set User Token Scopes, follow these step-by-step instructions:

1. Go to the Slack API website (https://api.slack.com/) and sign in to your Slack workspace.

2. Navigate to the "Create a Slack app" page.

3. Click on the "Create New App" button and provide a name for your app.

4. Select the Slack workspace where you want to use the app and click on the "Create App" button.

5. On the left sidebar, click on "OAuth & Permissions" to access the app's OAuth settings.

6. Ensure that you are on the "User Token Scopes" section, not the "Bot Token Scopes." The User Token Scopes are what you need to set for this script.

7. Under the "Scopes" section, add the following OAuth scopes to your app:

   - channels:history - View messages and other content in a user's public channels.
   - chat:write - Send messages on a user's behalf.
   - groups:history - View messages and other content in a user's private channels.
   - im:history - View messages and other content in a user's direct messages.
   - mpim:history - View messages and other content in a user's group direct messages.

8. Scroll up and click on the "Install to Workspace" button to install the app to your Slack workspace.

9. After installation, you will receive an OAuth access token for your app. Copy this token.

10. Open the `clean.js` file in a text editor.

11. Replace the placeholder `YOUR_USER_OAUTH_TOKEN` in the script with the OAuth access token you obtained in the previous step.

12. Replace the placeholder `CHANNEL_ID` with the actual DM channel ID you want to clean. You can find the channel ID by opening the DM conversation in your Slack workspace and checking the URL. The channel ID is the last part of the URL.

13. Replace the placeholder `USER_ID` with your user ID. You can find your user ID by opening your Slack workspace in a browser, clicking on your profile, and checking the URL for your user ID.

14. Save the changes to the `clean.js` file.

15. Open your terminal or command prompt.

16. Navigate to the project directory where the `clean.js` file is located.

17. Run the following command to execute the script:

    ```shell
    node clean.js
    ```
