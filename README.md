# Rep & Road

A mobile-first, single-user workout tracker. It has no login or backend; workout data is saved instantly in the browser's local storage.

## Run locally

Serve the `dist` folder with any static web server, then open the local URL in a browser. A web server is required for the service worker and offline mode; opening `index.html` directly is not enough.

## Edit the program

The complete weekly program is the `DEFAULT_WEEKLY_SCHEDULE` object at the top of `dist/app.js`. Exercise IDs keep history attached even when the visible program changes.

The current storage schema is `rep-road-data-v2`. On first load, any `rep-road-data-v1` history is copied into the new date + session model; the legacy key is left untouched as an extra safety copy.

## Install on a phone

- iPhone/iPad: open the hosted HTTPS URL in Safari, tap **Share**, then **Add to Home Screen**.
- Android: open the hosted HTTPS URL in Chrome, open the menu, then tap **Install app** or **Add to Home screen**.

Because storage is device-local, use **History → Export JSON** before changing phones or clearing browser data, and **Import JSON** on the new device.
