<template>
  <div class="error-wrapper">
    <h1>~(◎_◎)~</h1>
    <div v-if="error.statusCode === 404">
      <p class="error-msg">Seite nicht gefunden. <br>
        <nuxt-link to="/">Hier geht's zurück zur Startseite</nuxt-link>
      </p>
    </div>
    <div v-else>
      <p class="error-msg">Etwas ist schiefgelaufen, vermutlich weil ein Update eingespielt wurde (Yay!).
        Bitte versuche, <br> <a href="javascript:location.reload()">die Seite neu zu laden</a>.
      </p>
    </div>
    <p class="error-output">
      Falls du mich siehst, zeig mir diese Nachricht: <br>
      <code>{{ error }}</code>
    </p>
  </div>
</template>

<script>
export default {
  props: ['error'],
  beforeMount() {
    document.documentElement.style.setProperty('--color-highlight', 'darkred')
  }
}
</script>

<style lang="scss" scoped>
.error-wrapper {
  max-width: 20rem;
  margin: auto;
  text-align: center;
}
.error-msg {
  margin-bottom: 10vh;
  font-size: 1.5rem;
}
.error-output {
  color: #999;
  font-size: .75rem;
  code {
    white-space: normal;
  }
}
</style>
