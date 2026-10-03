# Samira Kian — Portfolio

Personal portfolio of Samira Kian, Frontend Developer (React · Next.js · Maps).
A single-page site themed as a railway map: animated train routes in the background, and each section is a "station" on the line.

## Features

- **Six sections as stations:** About, Experience, Skills, Certificates, Projects, Contact
- **Scroll or swipe to travel the line:** scrolling past the edge of a panel moves to the next or previous tab; arrow keys work on the tab bar
- **Detail modals:** every experience entry and project opens a full description (Esc, the × button or a click outside closes it)
- **English / German:** a DE/EN button in the header switches the whole page, including modals; the choice is remembered in the browser
- **Animated background:** GSAP-driven trains along SVG routes, with reduced-motion support
- **Responsive** down to phone width; keyboard and screen-reader friendly (tab roles, focus states, ARIA labels)

## Tech

Plain HTML, CSS and vanilla JavaScript, with no build step. [GSAP](https://gsap.com/) (loaded from a CDN) handles animation, and fonts come from Google Fonts (Overpass, Overpass Mono).

## Project structure

```
index.html            page markup (all content, with data-i18n keys)
styles.css            styling
script.js             entry point: loads the files in context/ in order
context/
  motion.js           background trains and entrance animations
  navigation.js       station tabs, arrow keys, scroll/swipe between tabs
  details-en.js       English modal content
  details-de.js       German modal content
  translations-de.js  German text for the page
  modal.js            open / close / render modals
  i18n.js             language switching and the DE/EN button
img/                  profile photo
```

The scripts in `context/` are plain (non-module) scripts that share one global scope, so their load order in `script.js` matters and the site also works when opened directly from disk.

## Run locally

No install needed. Open `index.html` in a browser, or serve the folder:

```
npx serve .
```

## Editing content

- **English text:** edit `index.html` (and the modal text in `context/details-en.js`).
- **German text:** edit `context/translations-de.js` and `context/details-de.js`. Each translated element in the HTML has a `data-i18n="key"` that matches a key in `translations-de.js`.
- **New modal:** add `data-modal="some-id"` to a card in `index.html` and an entry with the same id in `DETAILS` (and `DETAILS_DE`).

## Deploy

Hosted with GitHub Pages: Settings → Pages → "Deploy from a branch" → `main` and `/ (root)`.

## Contact

- Email: samira.kian01@gmail.com
- LinkedIn: [linkedin.com/in/samira--kian](https://www.linkedin.com/in/samira--kian/)
- GitHub: [github.com/samikia](https://github.com/samikia)
