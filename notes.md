# To Do:

- Amazon Menu bsp besser erklären
- Post 
- remove WIP message on homepage
- check all nextpage links
- feedback Ute
- Verteidigung Termin
- anderes Beispiel statt mailchimp login
- animated gifs annoy
  - animated only fullscreen
  - https://jsfiddle.net/jkovzels/75kg0tz1/

## Content

* [ ] refine grid layout, respond to importance of chapters
* [ ] update favicon with new color
* [ ] einheitlicher meta title
* [ ] figure numbers?
* [ ] aus Pocket
* [ ] Seiten in Buchquellen
* [ ] replace md standout by mark?
* [ ] Animation: Zumbrunnen Smart Transitions
* [ ] Historie: Mehr zu Phase 4
* [ ] Icons für Trigger/Rules/usw
* [ ] Konzept f. Darstellung MIs
* [ ] Timeline?
* [ ] https://uxdesign.cc/the-worst-volume-control-ui-in-the-world-60713dc86950
* [ ] Enabling mobile interactions paper: https://pdfs.semanticscholar.org/22ca/79765a0d024ce125f6ee0edf13856928c6ca.pdf

## Featues

* [ ] foldable footnotes?
* [ ] oben: vorheriges Kapitel?
* [ ] Kontaktfomular
* [ ] Kapitel-Fortschrittsbalken?
* [ ] pull up/down to prev/next page (https://github.com/stackjie/vue-pull-to?)
* [ ] besseres System für Quellen, wie https://mprove.de/diplom/text/references.html
* [ ] add noise to color bgs?
* [ ] Layout für Bilder in Text
* [ ] bigger base font size (18px)


## Bugs

* [ ] footnote highlighting

## Technical

* [ ] prevent keybeard access (tabindex) in navdrawer if drawer is open
* [ ] img alt tags
* [ ] upgrade to nuxt 2 https://medium.com/nuxt/nuxt-2-is-coming-oh-yeah-212c1a9e1a67
* [ ] update vuetify to enable deactivation of theme
* [ ] add purgeCSS to strip unused styles https://github.com/FullHuman/purgecss/tree/master/examples/with-nuxt
* [ ] add noreferrer noopener _blank to external links
* [ ] (https://github.com/Va1/string-replace-loader ?)
* [ ] replace all gifs with videos 
  * https://justmarkup.com/log/2018/02/gifhancement/ or <picture>+webp?
  * https://cloudinary.com/blog/reduce_size_of_animated_gifs_automatically_convert_to_webm_and_mp4
  * https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/replace-animated-gifs-with-video/
* [ ] refactor setColorsForPage to grab corresponding color for page automatically from page object
* [ ] refactor nexpage, to grab content from pages object
* [ ] svg path traced image placeholders https://jmperezperez.com/svg-placeholders/ https://github.com/EmilTholin/image-trace-loader
* [ ] better img lazyloader, also for video! (https://github.com/aFarkas/lazysizes ?)
* [ ] better no-js handling

## Misc


---

## Ideas

* Vue Stagger https://codepen.io/dizzyluo/pen/yJLwWm
* 3D Parallax https://codepen.io/futekov/pen/JLGDr
* Footnotes as Tooltip?
* [ ] svg stroke animation (Vivus.js) https://daverupert.com/2018/03/animated-svg-radial-progress-bars/
* [ ] Menu when scrolling to top (instead of drawer)

---

## Not now

* [ ] Velocityjs for animations https://github.com/julianshapiro/velocity
* [ ] loading placehoder images (blurry, svg, ..) [cloudinary]
* [ ] Anmeldung VGWort https://tom.vgwort.de/portal/index
* [ ] Vue Design System: Patterns/DevStyleguide/etc www.vueds.com

## Done but keep

* [x] target blank für externe Links
* [x]custom loading animation
* [x] Image Zoom
  * https://github.com/francoischalifour/medium-zoom
  * https://www.npmjs.com/package/vue-image-zoom
  * https://github.com/sparanoid/lightense-images
  * https://codepen.io/ktsn/pen/GMxwrm

---

## Obsolete
- [ ] contentful environments / set env in netlify
      https://www.contentful.com/developers/docs/concepts/multiple-environments/
      https://github.com/stefanjudis/stefan-judis-website/blob/master/plugins/contentful.js
- [ ] https://www.contentful.com/blog/2018/01/23/how-to-write-reusable-sane-api-based-components/
- [ ] netlifycms?
- [ ] optimize images https://github.com/Klathmon/imagemin-webpack-plugin


---
---
---

used special chars / arrows:
⇵ ↩︎ ⤴ ⤒
»«›‹
⏎
* †

---
---
---

# Konsultation
- CD-Version ist nicht per Doppelklick ausführbar

# Präsentation

- Reveal.js [http://lab.hakim.se/reveal-js/](http://lab.hakim.se/reveal-js/)
- = gitpitch
- Ludus
- http://blog.invisionapp.com/improve-your-design-presentations/



---
---
---

#RANDOM

## Nerdwriter: Arrival 

https://www.youtube.com/watch?v=z18LY6NME1s

* Communication is limited by perspective.
* The mind is a process. Is language happening in time.
* Stephen Fry: "A true thing, poorly expressed, is a lie."
* There is no thought without expression, no content without form. An idea does not really exist, until you write it down.
* Limits of our communication, by our culture, our body, our personality.
* communication as a screen, a mediator that blurs intention. Screens can connect us, they can also devide us.
* Communication is a link between two partys, but it's a link that often facilitates a split

## St Judis Meeting notes:

```js
// fancy module
// caching layer
// contentful-abstraction-and-caching-with-promise.js
const projects = {};

// I promise to return a promsie
getProjects(query = {}) {
  const key = JSON.stringify(query);

  // if cached return data
  if (projects[key]) {
    // make sure it's a promise
    return Promise.resolve(
      projects[key]
    )
  }

  return client.getEntries(Object.assign({
    content_type: '...'
  }, query))
  .then(items => {
    project[key] = items;

    return items;
  })
}

var getProjects(); // Promise
  .then(items => console.log)
  .catch(error => console.error)

// API for `getProjects`
getProject().then() // getProject
getProject({order: '-sys.createdAt'})

// ----------------------------------------------

Promise.all([
  getProjects,
  getPerson
])

FLUX (redux, vuex, ...)

// ----------------------------------------------

// check out Promises
// easier error handling
// better than stuff below
func
  .then(doSth)
  .then(doShtelse)
  .then(thidHting)
  .catch(err => consle.error)

func( (err, res) => {
  if (err !== null) {
    // do something with error
  }
} )


//

async({ env: {...}, schnitzel: {...} })

function async({env}) {
  // env
}

function async(params) {
  // params
}



// for many
Promise.all([
  getProjects()  // .then
]) // Promise
.then([projecs] => {

})

// all of these return a promise
Promise.all      // combination of other promises
Promise.resolve  // succeed promise
Promise.reject   // failed promise
```

// --------------------------------------------------
