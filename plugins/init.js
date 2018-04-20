/**
 * (re-)initialize DOM-dependent plugins after page change
 */
const initAfterMount = () => {
  mediumZoom('.page img:not(.medium-zoom-image)')
  initSmoothScroll(scrollLinkHandler)
}
export { initAfterMount }
