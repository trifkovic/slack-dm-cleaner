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

1. Open the `clean.js` file in a text editor.

Replace the following placeholders with the appropriate values:

- `YOUR_USER_OAUTH_TOKEN`: Replace with your user OAuth token obtained from Slack.
- `CHANNEL_ID`: Replace with the actual DM channel ID you want to clean.
- `USER_ID`: Replace with your user ID.

Make sure to save the changes to the `clean.js` file.

2. In your terminal run the script:

   ```shell
   node clean.js 


## License

This project is licensed under the MIT License.
