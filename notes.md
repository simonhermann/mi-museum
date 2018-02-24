

## TODO:

- einteilung MIs zusätzlich in Trigger/Rules/usw
- sollte menu drawer zu Beginn geöffnet sein?
- dynamische Rahmenfarbe
- Footer?
- custom loading animation 
  https://nuxtjs.org/api/configuration-loading/
  https://github.com/nuxt/nuxt.js/tree/dev/lib/app/views/loading
- vuetify a-la-carte components

- [ ] Meta desicription

-----
Done/not now:

- [ ] contentful environments / set env in netlify
      https://www.contentful.com/developers/docs/concepts/multiple-environments/
      https://github.com/stefanjudis/stefan-judis-website/blob/master/plugins/contentful.js
- [ ] https://www.contentful.com/blog/2018/01/23/how-to-write-reusable-sane-api-based-components/
- [ ] netlifycms?
- [x] Image Zoom
    - https://github.com/francoischalifour/medium-zoom
    - https://www.npmjs.com/package/vue-image-zoom
    - https://github.com/sparanoid/lightense-images
    - https://codepen.io/ktsn/pen/GMxwrm








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



## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

