const theoryPages = [
  { title: 'Vorwort', to: '/preface', desc: '' },
  {
    title: 'Was & warum?',
    to: '/what-are-microinteractions',
    desc:
      'Die Grundlagen von Microinteractions und warum sie für jeden Designer wichtig sein sollten',
  },
  {
    title: 'Auslöser',
    to: '/triggers',
    desc: 'Auf welche Weise kommt die Interaktion zu Stande?',
  },
  {
    title: 'Regeln',
    to: '/rules',
    desc: 'Welche Funktion hat die Interaktion und wie läuft sie im Detail ab?',
  },
  {
    title: 'Skeuomorphismus',
    to: '/skeuomorphism',
    desc: 'Vom Einfluss der physischen Welt auf digitale Produkte',
  },
  {
    title: 'Rückmeldung',
    to: '/feedback',
    desc: 'Woher wissen Nutzer, wie die Interaktion funktioniert?',
  },
  {
    title: 'Animation & Geschwindigkeit',
    to: '/animation-and-pace',
    desc:
      'Wie Bewegung die Wahrnehmung beeinflussen kann und dabei hilft, zu begreifen',
  },
  {
    title: 'Schleifen & Modi',
    to: '/loops-and-modes',
    desc: 'Welche Meta-Regeln beeinflussen die Interaktion?',
  },
  {
    title: 'Signature Moments',
    to: '/signature-moments',
    desc: 'Wie die kleinen Momente in Erinnerung bleiben',
  },
  {
    title: 'Historie',
    to: '/history',
    desc: 'Eine kurze Geschichte der Mensch-Maschine-Interaktion',
  },
  {
    title: 'Fazit',
    to: '/conclusion',
    desc: 'Details machen den Unterschied',
  },
]

/* const practicePages = [
  { title: 'buttons', to: '/mi/buttons' },
  { title: "Pull-to-refresh", to: "/mi/" },
  { title: "Fenster", to: "/mi/" },
  { title: "Copy & Paste", to: "/mi/" },
  { title: "Drag & Drop", to: "/mi/" },
  { title: "Rückgängig (undo) & Wiederholen (redo)", to: "/mi/" },
  { title: "Switch (Kipp-Schalter)", to: "/mi/" },
  { title: "Radiobutton", to: "/mi/" },
  { title: "Checkbox", to: "/mi/" },
  { title: "Hover", to: "/mi/" },
  { title: "Zoom", to: "/mi/" },
  { title: "Handlebars", to: "/mi/" },
  { title: "xyz", to: "/mi/" }
] */

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
const colors = colorHues.map((i) => 'hsla(' + i + ', 47%, 43%, 1)')
const colorsTrans = colorHues.map((i) => 'hsla(' + i + ', 47%, 43%, .13)')

// function to set css property --color-hightlight on :root element
const setDocumentHighlightcolor = (color) => {
  document.documentElement.style.setProperty('--the-color', color)
  console.log('🎨 ' + color + ' 🖌')
}

const setHightlightColors = (pageIndex) => {
  document.documentElement.style.setProperty('--the-color', colors[pageIndex])
  document.documentElement.style.setProperty('--next-color', colors[pageIndex + 1])
  document.documentElement.style.setProperty(
    '--the-color-trans',
    colorsTrans[pageIndex]
  )
}

const setColorsForPage = () => {
  // TODO: refactor this, to grab index from page object
  switch ($nuxt.$route.path) {
    case '/':
      setHightlightColors(0)
      break
    case '/preface':
      setHightlightColors(1)
      break
    case '/what-are-microinteractions':
      setHightlightColors(2)
      break
    case '/triggers':
      setHightlightColors(3)
      break
    case '/rules':
      setHightlightColors(4)
      break
    case '/skeuomorphism':
      setHightlightColors(5)
      break
    case '/feedback':
      setHightlightColors(6)
      break
    case '/animation-and-pace':
      setHightlightColors(7)
      break
    case '/loops-and-modes':
      setHightlightColors(8)
      break
    case '/signature-moments':
      setHightlightColors(9)
      break
    case '/history':
      setHightlightColors(10)
      break
    case '/conclusion':
      setHightlightColors(11)
      break
    case '/about':
      setHightlightColors(12)
      break
    default:
      break
  }
}

export { theoryPages, practicePages, colors, setColorsForPage }
