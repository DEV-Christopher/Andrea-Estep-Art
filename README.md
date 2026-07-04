# Andrea Estep — Venice Beach Painter

The portfolio site for Andrea Estep: original paintings made in the garden of a
1920s Venice Beach bungalow and dried in the California sun. Originals only —
no prints, no editions, ever.

## Design

Sun-bleached editorial aesthetic: warm paper background, terracotta / ochre /
olive palette, Fraunces display serif, hand-written annotations, painterly SVG
placeholders until artwork photography arrives.

Pages: `index.html` (Works · The Garden Studio · The Bungalow Gallery ·
About · Contact) and `collection.html` (the full collection, including
collected/sold works). Shared styles in `styles.css`, shared behavior in
`site.js` (blinking clock + live Venice temperature via open-meteo,
scroll reveals, lightbox with cross-page inquiry prefill).

## Adding artwork photos

Real photos live in `images/` (bungalow, Andrea's portrait, French Surfer
Girl in Venice, Venice Bungalow, the commission delivery photo). The only
remaining placeholder is the garden photo in the Studio section. To add a
new work, copy an existing `.work` card in both `index.html` and
`collection.html`. Before adding new photos, resize to ~1600px max and
strip EXIF (iPhone photos embed GPS coordinates).

## Tech Stack

- Static HTML (no build step)
- Vanilla CSS + JS — scroll reveals, marquee, lightbox, Venice local time & temp
- Google Fonts: Fraunces, Karla, Caveat
- Contact form via Formspree
- Hosted on Vercel

## Deployment

Automatically deployed to Vercel via GitHub integration.

Live site: https://andreaestep.art

## License

© 2026 Andrea Estep. All rights reserved.
