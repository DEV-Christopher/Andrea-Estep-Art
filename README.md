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

Drop photos into `images/` and swap each placeholder `<svg>` inside a
`.work-media` / `.frame` element for an `<img>` — each swap point is marked
with an HTML comment in `index.html` (e.g. `images/ethereal-sunset.jpg`,
`images/garden.jpg`, `images/bungalow.jpg`, `images/andrea.jpg`).

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
