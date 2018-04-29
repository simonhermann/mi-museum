const theoryPages = [
  { title: 'Vorwort', to: '/preface', desc: '' },
  {
    title: 'Details sind essentiell',
    to: '/what-are-microinteractions',
    // desc: '',
    desc:
      'Was Microinteractions sind und warum sie für jeden Designer wichtig sein sollten',
  },
  {
    title: 'Auslöser',
    to: '/triggers',
    desc: 'Wie kommt die Interaktion zu Stande?',
  },
  { title: 'Regeln', to: '/rules', desc: 'Wie funktioniert die Interaktion?' },
  {
    title: 'Rückmeldung',
    to: '/feedback',
    desc: 'Wie reagiert die Interaktion auf den Nutzer?',
  },
  {
    title: 'Schleifen & Modi',
    to: '/loops-and-modes',
    desc: 'Welche Meta-Regeln beinflussen die Interaktion?',
  },
  {
    title: 'Historie',
    to: '/history',
    desc: 'Eine kurze Geschichte der Mensch-Maschine-Interaktion.',
  },
  {
    title: 'Skeuomorphismus',
    to: '/skeuomorphism',
    desc: 'Vom Einfluss der physischen Welt auf die digitale',
  },
  {
    title: 'Signature Moments',
    to: '/signature-moments',
    desc: 'Wie die kleinen Momente den Unterschied machen können',
  },
  {
    title: 'Animation & Geschwindigkeit',
    to: '/animation-and-pace',
    desc: 'Warum schneller nicht immer besser ist',
  },
  {
    title: 'Anwendung in der Praxis',
    to: '/practical',
    desc: 'So gelingt Design & Umsetzung von Microinteractions im Alltag',
  },
  //{ title: '_article', to: '/article' },
  //{ title: "_scrap", to: "/scrapyard" }
]

const practicePages = [
  { title: 'buttons', to: '/mi/buttons' },
  // { title: "Pull-to-refresh", to: "/mi/" },
  // { title: "Fenster", to: "/mi/" },
  // { title: "Copy & Paste", to: "/mi/" },
  // { title: "Drag & Drop", to: "/mi/" },
  // { title: "Rückgängig (undo) & Wiederholen (redo)", to: "/mi/" },
  // { title: "Switch (Kipp-Schalter)", to: "/mi/" },
  // { title: "Radiobutton", to: "/mi/" },
  // { title: "Checkbox", to: "/mi/" },
  // { title: "Hover", to: "/mi/" },
  // { title: "Zoom", to: "/mi/" },
  // { title: "Handlebars", to: "/mi/" },
  // { title: "xyz", to: "/mi/" }
]

// define hue for each color
var colorHues = []
const hueStart = 133
const hueDistance = 17
const numberOfColors = 15
const defineColors = () => {
  for (var i = 0; i < numberOfColors; i++) {
    colorHues[i] = hueStart + i * hueDistance
  }
}
defineColors()

// function to create HSL color from every hue
const colors = colorHues.map((i) => 'hsl(' + i + ', 47%, 43%)')

// function to set css property --color-hightlight on :root element
const setDocumentHighlightcolor = (color) => {
  document.documentElement.style.setProperty('--the-color', color)
  console.log('🎨 ' + color + ' 🖌')
}

const setDocumentHighlightColorsFromArray = (index) => {
  document.documentElement.style.setProperty('--the-color', colors[index])
  document.documentElement.style.setProperty('--the-color2', colors[index + 1])
}

const setPageHighlightColor = () => {
  // TODO: refactor this, to grab index from page object
  switch ($nuxt.$route.fullPath) {
    case '/':
      setDocumentHighlightColorsFromArray(0)
      break
    case '/preface':
      setDocumentHighlightColorsFromArray(1)
      break
    case '/what-are-microinteractions':
      setDocumentHighlightColorsFromArray(2)
      break
    case '/triggers':
      setDocumentHighlightColorsFromArray(3)
      break
    case '/rules':
      setDocumentHighlightColorsFromArray(4)
      break
    case '/feedback':
      setDocumentHighlightColorsFromArray(5)
      break
    case '/loops-and-modes':
      setDocumentHighlightColorsFromArray(6)
      break
    case '/history':
      setDocumentHighlightColorsFromArray(7)
      break
    case '/skeuomorphism':
      setDocumentHighlightColorsFromArray(8)
      break
    case '/signature-moments':
      setDocumentHighlightColorsFromArray(9)
      break
    case '/animation-and-pace':
      setDocumentHighlightColorsFromArray(10)
      break
    case '/practical':
      setDocumentHighlightColorsFromArray(11)
      break
    case '/about':
      setDocumentHighlightColorsFromArray(12)
      break
    default:
      break
  }
}

export { theoryPages, practicePages, colors, setPageHighlightColor }
