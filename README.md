# Clockify Automations

## Features

- Add tags based on the project
- EOL

## Usage

1. Clone Repository
2. Create a Clockify API Key
3. Create a Firestore DB and a service account, then encode service account json as base64
    ![Firestore DB Structure](https://github.com/harshanas/automate-clockify/blob/assets/assets/fsdb.png?raw=true)

4. Rename `.env.example` file as `.env` and add the Clockify API Key and Service Account's base 64 string
5. Run 