# ThinkOrSwim Refresher

Login fails on the [ThinkOrSwim web platform](https://trade.thinkorswim.com/) if the tab is left open.  This Tampermonkey userscript automatically reloads the page the first time you return to the tab after 5am local time.

## Installation

1. Install the [Tampermonkey](https://www.tampermonkey.net/) browser extension.
2. Click the Tampermonkey icon in your browser toolbar and select **Create a new script**.
3. Replace the default content with the contents of `refresher.js`.
4. Press **Ctrl+S** to save.

## Usage

- Navigate to `https://trade.thinkorswim.com/` and leave the tab open.
- The script runs silently in the background — no configuration needed.
- The first time you switch back to the tab after 3am local time, the page will automatically reload.
- Subsequent tab switches that same day will not trigger another reload.

## How It Works

On each `visibilitychange` event (i.e. when you return to the tab), the script checks:
1. Is the current local time past 3am?
2. Has the page already been refreshed today?

If both conditions are met, it saves today's date to `localStorage` and reloads the page.
