<template>
  <div class="error-wrapper">
    <div v-if="error.statusCode === 404">
      <script>
      document.documentElement.style.setProperty('--the-color', 'darkred')
      </script>
      <h1>~(◎_◎)~</h1>
      <p class="error-msg">Seite nicht gefunden. <br>
        <nuxt-link to="/">Hier geht's zurück zur Startseite</nuxt-link>
      </p>
      <p class="error-output">
        Falls du etwas Zeit hast, schick mir bitte diese Nachricht an mail[ät]simonhermann.de: <br>
        <code>{{ error }}</code>
      </p>
    </div>
    <div v-else-if="error.statusCode === 500">
      <!-- <script>location.reload();</script> -->
      <h1>Yay!</h1>
      <p class="error-msg">Es gibt Updates, bitte lade die Seite neu:<br>
        <a href="javascript:location.reload()">hier klicken</a> <br> <br>
        <small>oder auf Touchscreens auch per pull-to-refresh Microinteraction</small>
      </p>
    </div>
    <div v-else>
      <script>
      document.documentElement.style.setProperty('--the-color', 'darkred')
      </script>
      <h1>-.-</h1>
      <p class="error-msg">
        Oha, da ist was schiefgelaufen. Bitte versuche, die<br>
        <a href="javascript:location.reload()">Seite neu zu laden</a> <br> oder kehre <br>
        <nuxt-link to="/">zurück zur Startseite</nuxt-link>
      </p>
      <p class="error-output">
        Falls du etwas Zeit hast, schick mir bitte diese Nachricht an mail[ät]simonhermann.de: <br>
        <code>{{ error }}</code>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style lang="scss" scoped>
.error-wrapper {
  max-width: 28rem;
  margin: auto;
  text-align: center;
}
.error-msg {
  margin-bottom: 10vh;
  font-size: 1.5rem;
}
.error-output {
  color: #999;
  font-size: 0.75rem;
  code {
    white-space: normal;
  }
}
</style>
