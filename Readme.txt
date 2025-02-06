# Discord Bot - Joke, Fact, and Reply Bot

This is a simple Discord bot built using Node.js and the `discord.js` library. The bot responds to various text commands in Discord channels such as sending jokes, facts, and custom replies based on specific commands. 

## Features

- **Hello/Hi Command**: Responds with a greeting.
- **India Command**: Special greeting for Indian citizens.
- **!joke Command**: Fetches a random joke from an API and replies with the joke setup and punchline.
- **!fact Command**: Fetches a random fact from an API and replies with the fact.
- **How are you Command**: Responds with a fixed reply about the bot.
- **!help Command**: Provides a list of available commands.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16.x or higher)
- A Discord bot token (from the [Discord Developer Portal](https://discord.com/developers/applications))

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/discord-bot.git
cd discord-bot
```

### 2. Install dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### 3. Create a `.env` file

In the root directory of the project, create a `.env` file and add your Discord bot token. The file should look like this:

```plaintext
CLIENT=your-discord-bot-token
```

Replace `your-discord-bot-token` with your actual bot token, which you can obtain from the [Discord Developer Portal](https://discord.com/developers/applications).

### 4. Run the bot

Once everything is set up, you can run the bot with the following command:

```bash
node index.js
```

If the bot is logged in successfully, you should see the following message in the console:

```
Login Successful as <BotUsername>!
```

### 5. Invite the bot to your server

To invite the bot to your server, go to the [Discord Developer Portal](https://discord.com/developers/applications), select your bot, and navigate to the "OAuth2" page. Under the "OAuth2 URL Generator" section, select the following scopes and permissions:

- Scopes: `bot`, `applications.commands`
- Permissions: `Send Messages`, `Read Message History`, `Read Messages`

Copy the generated URL and use it to invite the bot to your Discord server.

## Commands

### 1. **Hello/Hi Command**
- **Trigger:** `hello` or `hi`
- **Response:** The bot greets the user with `Hello <username>!!`

### 2. **India Command**
- **Trigger:** `india`
- **Response:** The bot sends a special greeting: `Hello dear Indian Citizen!!`

### 3. **!joke Command**
- **Trigger:** `!joke`
- **Response:** The bot fetches a random joke from an API and replies with the joke's setup and punchline.

### 4. **!fact Command**
- **Trigger:** `!fact`
- **Response:** The bot fetches a random fact from an API and replies with the fact.

### 5. **How are you Command**
- **Trigger:** `how are you`
- **Response:** The bot replies with a message: `I'm a chatbot, and I'll always be the same, but what about you?`

### 6. **!help Command**
- **Trigger:** `!help`
- **Response:** The bot provides a list of available commands with descriptions.

### 7. **Default Response**
- **Trigger:** Any unrecognized message
- **Response:** The bot replies with `I don't know how to respond to that query.`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [discord.js](https://discord.js.org/) - The powerful JavaScript library for interacting with the Discord API.
- [axios](https://axios-http.com/) - Promise-based HTTP client for the browser and Node.js used to fetch jokes and facts.
- [catfact.ninja](https://catfact.ninja/) - API for random cat facts.
- [Official Joke API](https://official-joke-api.appspot.com/) - API for random jokes.

---

### Customizing Your Bot

To customize the behavior of your bot, modify the `index.js` file. You can add more commands, change responses, or integrate additional APIs as needed. You may also want to add more intents or permissions for advanced bot functionalities, such as interacting with voice channels, managing server members, etc.

---

