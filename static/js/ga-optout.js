// script to diable analytics
// sizrce: https://www.powergap.de/Abmahngefahr-Verwendung-von-Google-Analytics-ohne-Opt-Out-Cookie.html

// Set to the same value as the web property used on the site
var gaProperty = 'UA-116314873-1'

// Disable tracking if the opt-out cookie exists.
var disableStr = 'ga-disable-' + gaProperty
if (document.cookie.indexOf(disableStr + '=true') > -1) {
  window[disableStr] = true
}

// Opt-out function
// available to user in imprint
function gaOptout() {
  document.cookie =
    disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/'
  window[disableStr] = true
  console.log('ga-disable cookie was set');
  alert("Google Analytics wurde deaktiviert")
}