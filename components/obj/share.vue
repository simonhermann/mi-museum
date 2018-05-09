<template>
  <div class="shareWrapper">
    <a href="" aria-label="share" title="Seite teilen...">
      <svg xmlns="http://www.w3.org/2000/svg" style="enable-background:new 0 0 57.884 57.884" viewBox="0 0 57.884 57.884">
        <path d="M45.975 37.031c-3.049 0-5.783 1.314-7.69 3.4l-16.566-7.968c.396-1.103.622-2.282.622-3.521 0-1.237-.227-2.418-.622-3.521l16.566-7.966c1.907 2.085 4.644 3.402 7.69 3.402 5.759 0 10.429-4.669 10.429-10.428C56.404 4.669 51.734 0 45.975 0c-5.76 0-10.429 4.669-10.429 10.429 0 .552.056 1.09.139 1.619L18.05 20.527c-1.724-1.26-3.842-2.012-6.141-2.012-5.759 0-10.428 4.668-10.428 10.425 0 5.762 4.669 10.43 10.428 10.43 2.299 0 4.417-.752 6.14-2.014l17.634 8.481c-.082.529-.139 1.067-.139 1.619 0 5.76 4.67 10.428 10.43 10.428 5.759 0 10.428-4.668 10.428-10.428 0-5.759-4.668-10.425-10.427-10.425z" />
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  mounted() {
    const shareUrl = window.location.href
    const shareBtn = document.querySelector('div.shareWrapper a')

    // detect if native sharing is supported
    if (navigator.share !== undefined) {
      // native share (currently Chrome Android only)
      //console.log('native share supported')

      shareBtn.addEventListener('click', (clickEvent) => {
        clickEvent.preventDefault()
        navigator
          .share({
            title: document.title,
            text: shareUrl,
            url: shareUrl,
          })
          .then(
            () => console.log('Successful share'),
            (error) => console.log('Error sharing:', error)
          )
      })
    } else {
      // copy url to clipboard
      //console.log('fallback to clipboard')
      shareBtn.addEventListener('click', (clickEvent) => {
        clickEvent.preventDefault()
        const el = document.createElement('textarea')
        el.value = shareUrl
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
        alert('Adresse wurde in die Zwischenablage kopiert:\n' + shareUrl)
      })
    }
  },
}
</script>

<style scoped lang="scss">
.shareWrapper {
  a {
    svg {
      fill: var(--grey-light);
      width: 1rem;
      height: 1rem;
    }
    &:hover {
      svg {
        fill: var(--the-color);
      }
    }
  }
}
</style>