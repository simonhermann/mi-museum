# To Do:

## Content

* [ ] aus Pocket
* [ ] Icons für Trigger/Rules/usw
* [ ] Konzept f. Darstellung MIs
* [ ] Timeline?
* [ ] Meta desicription
* [ ] einheitlicher meta title
* [ ] Impressum+About

## Featues

* [ ] Kapitel-Fortschrittsbalken?
* [ ] oben: vorheriges Kapitel?
* [ ] dynamische Rahmenfarbe
* [ ] Footer?
* [ ] foldable footnotes?

## Bugs

* [ ] Bug: Bilderquellen in figcaption

## Technical

* [ ] prevent keybeard access (tabindex) in navdrawer if drawer is open
* [ ] upgrade to nuxt 2 https://medium.com/nuxt/nuxt-2-is-coming-oh-yeah-212c1a9e1a67
* [ ] update vuetify to enable deactivation of theme
* [ ] vue-lazyload images (maybe convert via htmlparser?)
* [ ] obtimize images https://github.com/Klathmon/imagemin-webpack-plugin
* [ ] add purgeCSS to strip unused styles https://github.com/FullHuman/purgecss/tree/master/examples/with-nuxt
* [ ] add noreferrer noopener \_blank to external links
* [ ] (https://github.com/Va1/string-replace-loader ?)
* [ ] replace all gifs with videos (cloudinary: https://cloudinary.com/blog/reduce_size_of_animated_gifs_automatically_convert_to_webm_and_mp4)

## Ideas

* Vue Stagger https://codepen.io/dizzyluo/pen/yJLwWm
* 3D Parallax https://codepen.io/futekov/pen/JLGDr
* Footnotes as Tooltip?

## Misc

* [ ] Anmeldung VGWort https://tom.vgwort.de/portal/index
* [ ] remove scrapyard page
* [ ] svg stroke animation (Vivus.js)
* [ ] Vue Design System: Patterns/DevStyleguide/etc www.vueds.com

---

## Done/not now:

* [ ] Layout für Bilder in Text
* [x] target blank für externe Links
* [x]custom loading animation
* [x] Image Zoom
  * https://github.com/francoischalifour/medium-zoom
  * https://www.npmjs.com/package/vue-image-zoom
  * https://github.com/sparanoid/lightense-images
  * https://codepen.io/ktsn/pen/GMxwrm

- [ ] contentful environments / set env in netlify
      https://www.contentful.com/developers/docs/concepts/multiple-environments/
      https://github.com/stefanjudis/stefan-judis-website/blob/master/plugins/contentful.js
- [ ] https://www.contentful.com/blog/2018/01/23/how-to-write-reusable-sane-api-based-components/
- [ ] netlifycms?

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
