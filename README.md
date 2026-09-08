# postiqo-website

## Getting started and trial requests

- `/try/` guides visitors through downloading, importing and reviewing inventory for free, then requesting a 7-day publishing trial in the app.
- `/download/` provides the current Windows installer and links back to the setup guide.
- The homepage links to **Try Postiqo** from the navigation, hero, demo section, and footer.

The primary trial request lives in Postiqo Publisher. Customers first sign in to Facebook in the app, which includes the account automatically. The dealership website is required and can be edited after being filled from the inventory source settings. Importing and reviewing vehicles needs neither a license nor Facebook sign-in. Publishing still requires an active license.

The collapsed website trial form is an optional fallback. Demo and website trial forms use the existing Formspree endpoint `https://formspree.io/f/xvgeqgdd` and the shared handler in `assets/js/request-form.js`. Trial emails have the subject **New Postiqo trial request** and include name, dealership, website, email, phone, Facebook account, and optional notes.

With JavaScript enabled, the Facebook field accepts a numeric ID, username, or personal profile URL and sends `facebook_user_id` plus a normalized `facebook_profile_url`. Numeric IDs remain strings. Usernames are preserved as usernames; the site does not look up numeric IDs. The `/me` shortcut itself is rejected because it does not identify an account. Without JavaScript, the required fields still apply and Formspree receives the Facebook value as entered.

Trial activation is manual. After adding the requested account to the license, email the customer to confirm access. Customers then select **Check activation** in the app and start publishing once their license is active. The 7-day publishing trial starts at activation; importing and reviewing inventory remains free.

GitHub Pages publishes the repository root from `master` without a build step. Publish onboarding copy that names new app controls only after the corresponding stable Windows installer is available.

### Setup video

Step 2 of `/try/` includes the 9:54 English setup tutorial, covering instances, settings, login, and logs. Its responsive YouTube player uses the privacy-enhanced `youtube-nocookie.com` host, loads lazily, supports fullscreen, and requests English captions. The setup checklist and a direct YouTube link remain available alongside the video.

The video ID is `RazuBwVoWag`. When replacing the tutorial, update both the iframe and the direct link in `try/index.html`, upload the English captions to YouTube, and update the duration if needed. Keep `referrerpolicy="strict-origin-when-cross-origin"` on the iframe so YouTube receives the website origin needed to identify the embedded player.

### Local preview

Serve the repository root with any static HTTP server, then open `/try/`. No build step is required. Test form submissions with a local mock endpoint to avoid sending test email to the live Formspree inbox.

#### Website template
https://bootstrapmade.com/ilanding-bootstrap-landing-page-template/
