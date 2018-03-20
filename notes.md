

## TODO:

- [ ] Konzept f. Darstellung MIs
- [ ] Timeline?
- [ ] text content
- [ ] einteilung MIs zusätzlich in Trigger/Rules/usw

- [ ] sollte menu drawer zu Beginn geöffnet sein?
- [ ] prev + next links
- [ ] dynamische Rahmenfarbe
- [ ] Layout für Bilder in Text
- [ ] Impressum
- [ ] Footer? 
- [ ] favicon
- [ ] vuetify a-la-carte components
- [ ] update vuetify to enable deactivation of theme
- [ ] foldable footnotes?
- [ ] Bilderquellen in figcaption bug

- [ ] Meta desicription



- Vue Stagger https://codepen.io/dizzyluo/pen/yJLwWm
- 3D Parallax https://codepen.io/futekov/pen/JLGDr


-----
Done/not now:

- [x]custom loading animation 
- [x] Image Zoom
    - https://github.com/francoischalifour/medium-zoom
    - https://www.npmjs.com/package/vue-image-zoom
    - https://github.com/sparanoid/lightense-images
    - https://codepen.io/ktsn/pen/GMxwrm


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



