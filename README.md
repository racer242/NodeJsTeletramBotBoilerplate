# NodeJS Telegram Bot Boilerplate

Ready-to-use app includes the main features of the telegram bot. Just add your functionality.<br/>
The application also runs an Express server to manage the application externally.

## Scripts

<code>npm run start:dev</code><br/>
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

<code>npm start</code><br/>
Runs the app in the production mode.

<code>npm test</code><br/>
Launches the test runner with Jest.

<code>npm run build</code><br/>
Builds the app for production to the build folder.

<code>npm run lint</code><br/>
Lints the app code with ESLint.

<code>npm run lint:fix</code><br/>
Fixes the app code with ESLint.

## Environment vars

<code>PORT</code><br/>
Set the port you need for the web server and telegram web-hooks. (3000)

<code>SERVER_URL</code><br/>
Set the server url for the telegram web-hooks.

<code>DEBUG</code><br/>
Log debug information (telegramBot:\*)

<code>TELEGRAM_LOG</code><br/>
Log telegram responses (true|false)

<code>BOT_TOKEN</code><br/>
Set your telegram bot's token

<code>MODE</code><br/>
Set telegram bot working mode (poll|http|nttps)

<code>SECRET_PATH</code><br/>
Set secret patch of your bot for web-hooks
